import { z } from "zod"
import dotenv from "dotenv"


dotenv.config()

const envSchema = z.object({
    REDIS_URL: z.string(),
    SMTP_HOST: z.string(),
    SMTP_PORT: z.string().transform(Number),
    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
    SMTP_FROM: z.string().email(),
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY:z.string(),
    AWS_REGION:z.string(),
    SQS_QUEUE_URL:z.string(),
    SQS_DLQ_URL:z.string(),
})

export const env = envSchema.parse(process.env)
