import type { DefaultJobOptions } from "bullmq"

export const defaultJobOptions : DefaultJobOptions = {
    attempts: 3,
    backoff : {
        type: "exponential",
        delay: 2000 // 2s of delay for every retry
    }
}