import { Queue } from "bullmq";
import { defaultJobOptions } from "@queuely/config";
import type { EmailPayload } from "@queuely/types";
import { redisConnection } from "@queuely/config";


export const emailQueue = new Queue<EmailPayload>("email-queue", {
    connection: redisConnection,
    defaultJobOptions,
})

export const addEmailJob =  async (jobId: string , payload: EmailPayload) => {
    await emailQueue.add("send-email", payload , { jobId })
    console.log("BullMQ job added:", jobId);
}