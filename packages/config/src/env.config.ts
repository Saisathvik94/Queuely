import { z } from "zod"
import dotenv from "dotenv"

dotenv.config()

const baseSchema = z.object({
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY: z.string(),
    AWS_REGION: z.string(),
    SQS_QUEUE_URL: z.string(),
    SQS_DLQ_URL: z.string(),
    REDIS_URL: z.string(),
    DATABASE_URL: z.string(),
})

const apiSchema = baseSchema.extend({
    PORT: z.string().default("3001"),
})

const workerSchema = baseSchema.extend({
    SMTP_HOST: z.string(),
    SMTP_PORT: z.string().transform(Number),
    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
    SMTP_FROM: z.string().email(),
})

export const apiEnv = apiSchema.parse(process.env)
export const workerEnv = workerSchema.parse(process.env)
export const env = baseSchema.parse(process.env)