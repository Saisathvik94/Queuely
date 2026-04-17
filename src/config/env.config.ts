import { z } from "zod"
import dotenv from "dotenv"


dotenv.config()

const envSchema = z.object({
    REDIS_HOST: z.string(),
    REDIS_PORT: z.string().transform(Number),
    SMTP_HOST: z.string(),
    SMTP_PORT: z.string().transform(Number),
    SMTP_USER: z.string(),
    SMTP_PASS: z.string(),
    SMTP_FROM: z.string().email(),
})

export const env = envSchema.parse(process.env)
