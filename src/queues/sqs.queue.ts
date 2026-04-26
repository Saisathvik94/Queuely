import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "../config/sqs.config.js";
import { env } from "../config/env.config.js";
import type { EmailPayload } from "../types/types.js";


const SQS_QUEUE_URL = env.SQS_QUEUE_URL;

if(!SQS_QUEUE_URL) {
    throw new Error ("SQS QUEUE URL is undefined");
}

export const sendToQueue = async (data : {
    jobId: string,
    payload: EmailPayload
    }) => {
  try {
    const command = new SendMessageCommand({
      QueueUrl: SQS_QUEUE_URL,
      MessageBody: JSON.stringify(data),
    });

    await sqsClient.send(command);
    
  } catch (error) {
    console.error("SQS send failed:", error);
    throw error; 
  }
};