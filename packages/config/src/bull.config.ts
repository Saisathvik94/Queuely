import type { DefaultJobOptions } from "bullmq"

export const defaultJobOptions : DefaultJobOptions = {
    attempts: 3,
    backoff : {
        type: "exponential",
        delay: 2000 // 2s of delay for every retry
    },
    removeOnComplete: { count: 100 }, // keep last 100 for logs
    removeOnFail: { count: 500 },     // keep failed jobs longer for debugging
}