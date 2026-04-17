import nodemailer from "nodemailer";
import { env } from "../config/env.config.js";
import { Job, Worker } from "bullmq";
import type { EmailPayload, EmailResult } from "../types/types.js";
import { redisConnection } from "../config/redis.config.js";


const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,

    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
    },
})

// verify connection
try {
    await transporter.verify()
    console.log("SMTP ready")
} catch (err) {
    console.error("SMTP failed", err)
    process.exit(1)
}

export const emailWorker = new Worker<EmailPayload>("email-queue", async(job: Job<EmailPayload>) => {
    console.log("Job has Started........");
    await job.updateProgress(0)

    // send mail
    const mail = await transporter.sendMail({
        from: env.SMTP_FROM,
        to: job.data.to,
        subject: job.data.subject,
        html: job.data.body
    })

    await job.updateProgress(75)

    const result: EmailResult = {
        type: "email",
        jobId: job.id || "unknown",
        messageId: mail.messageId,
        deliveredAt: new Date()
    }


    await job.updateProgress(100);

     console.log("Email Sent")

    return result 

}, {
    connection: redisConnection,
    concurrency: 5,
})


emailWorker.on("completed", (job)=>{
    console.log({ result: job.returnvalue }, "Email Job Completed")
})

emailWorker.on("failed", (job, error) => {
    console.error({ jobId: job?.id, error: error.message }, "Email job failed");
});