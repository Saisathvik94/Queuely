import { Queue } from "bullmq";
import { defaultJobOptions } from "../config/bull.config.js";
import type { EmailPayload } from "../types/types.js";
import { redisConnection } from "../config/redis.config.js";
import { generateJobId } from "../utils/jobId.js";

export const emailQueue = new Queue<EmailPayload>("email-queue", {
    connection: redisConnection,
    defaultJobOptions,
})

export const addEmailJob =  async (jobId: string , payload: EmailPayload) => {
    await emailQueue.add("Send-Email", payload , { jobId })
}