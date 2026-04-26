import { ReceiveMessageCommand, DeleteMessageCommand, } from "@aws-sdk/client-sqs";
import { sqsClient } from "../config/sqs.config.js";
import { addEmailJob } from "../queues/bullmq.queue.js";
import { env } from "../config/env.config.js";
import type { EmailPayload } from "../types/types.js";

const QUEUE_URL = env.SQS_QUEUE_URL;

if (!QUEUE_URL) {
    throw new Error ("QUEUE URL is undefined")
}

export const startConsumer = async () => {
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
            await new Promise((res) => setTimeout(res, 1000));
            continue;
        }

        for (const msg of response.Messages) {
            try {
            const body = JSON.parse(msg.Body!);

            const { jobId, payload } = body;

            await addEmailJob(jobId, payload);

            await sqsClient.send(
                new DeleteMessageCommand({
                QueueUrl: QUEUE_URL,
                ReceiptHandle: msg.ReceiptHandle!,
                })
            );

            console.log("Processed message:", msg.MessageId);
            } catch (err) {
            console.error("Error processing message:", {
                error: err,
                messageId: msg.MessageId,
            });
            }
        }
        } catch (err) {
        console.error("SQS polling error:", err);
        await new Promise((res) => setTimeout(res, 2000));
        }
    }
};