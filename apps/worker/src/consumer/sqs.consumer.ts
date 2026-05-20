import { ReceiveMessageCommand, DeleteMessageCommand, type Message, } from "@aws-sdk/client-sqs";
import { sqsClient } from "@queuely/config";
import { addEmailJob } from "../queues/bullmq.queue.js";
import { workerEnv as env } from "@queuely/config";
import { sqsMessageSchema } from "@queuely/types" ;

const QUEUE_URL = env.SQS_QUEUE_URL;

if (!QUEUE_URL) {
    throw new Error ("QUEUE URL is undefined")
}

const processMessage = async (msg: Message): Promise<void> => {
    const messageId = msg.MessageId ?? "unknown";

    let raw: "unknown"

    try {
        raw = JSON.parse(msg.Body!)
    } catch {
        console.error(`[${messageId}] Invalid JSON — deleting to avoid DLQ loop`);
        // Invalid JSON so deleting from Queue
        await sqsClient.send(
            new DeleteMessageCommand({
                QueueUrl: QUEUE_URL,
                ReceiptHandle: msg.ReceiptHandle!,
            })
        );
        return;
    }
    const parsed = sqsMessageSchema.safeParse(raw);
    if (!parsed.success) {
        console.error(
        `[${messageId}] Invalid payload shape deleting to avoid DLQ loop`,
        parsed.error.flatten()
        );

        await sqsClient.send(
        new DeleteMessageCommand({
            QueueUrl: QUEUE_URL,
            ReceiptHandle: msg.ReceiptHandle!,
        })
        );
        return;
    }

    const { jobId, payload } = parsed.data;

    try {
        await addEmailJob(jobId, payload)
    } catch (err) {
        console.error(`[${messageId}] Failed to enqueue job ${jobId} will retry`, err);
        return;
    }

    await sqsClient.send(
    new DeleteMessageCommand({
        QueueUrl: QUEUE_URL,
        ReceiptHandle: msg.ReceiptHandle!,
        })
    );

    console.log(`[${messageId}] Processed → BullMQ job: ${jobId}`);
}

export const startConsumer = async (): Promise<void> => {
    console.log("🚀 SQS Consumer started...");
    while (true) {
        try {
        const response = await sqsClient.send(
            new ReceiveMessageCommand({
            QueueUrl: QUEUE_URL,
            MaxNumberOfMessages: 5,
            WaitTimeSeconds: 20,
            VisibilityTimeout: 30,
            })
        );

        if (!response.Messages || response.Messages.length === 0) {
            continue;
        }

        await Promise.allSettled(
            response.Messages.map((msg) => processMessage(msg))
        );

        } catch (err) {
        console.error("SQS polling error:", err);
        await new Promise((res) => setTimeout(res, 2000));
        }
    }
};