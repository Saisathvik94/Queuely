import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { sqsClient } from "@queuely/config";
import { apiEnv as env } from "@queuely/config";
import type { EmailPayload } from "@queuely/types";


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