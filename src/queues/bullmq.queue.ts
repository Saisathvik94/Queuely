import { Queue } from "bullmq";
import { defaultJobOptions } from "../config/bull.config.js";
import type { EmailPayload } from "../types/types.js";
import { redisConnection } from "../config/redis.config.js";


export const emailQueue = new Queue<EmailPayload>("email-queue", {
    connection: redisConnection,
    defaultJobOptions,
})

export const addEmailJob =  async (jobId: string , payload: EmailPayload) => {
    await emailQueue.add("send-email", payload , { jobId })
    console.log("BullMQ job added:", jobId);
}