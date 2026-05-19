import nodemailer from "nodemailer";
import { env } from "@queuely/config";
import { Job, Worker } from "bullmq";
import type { EmailPayload, EmailResult } from "@queuely/types";
import { redisConnection } from "@queuely/config";
import prisma from "@queuely/db";


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

export const emailWorker = new Worker<EmailPayload, EmailResult>("email-queue", async(job: Job<EmailPayload>) => {
    console.log("Job has Started........");
    await job.updateProgress(0)

    // update Job Status 
    await prisma.job.update({
        where: { jobId: job.opts.jobId ?? job.id! },
        data: { status: "active" }
    })

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

    await prisma.job.update({
        where: { jobId: job.opts.jobId ?? job.id! },
        data: {
            status: "completed",
            result: result as any,
        }
    })

     console.log("Email Sent")

    return result 

}, {
    connection: redisConnection,
    concurrency: 5,
})


emailWorker.on("completed", (job)=>{
    console.log({ result: job.returnvalue }, "Email Job Completed")
})

emailWorker.on("failed", async(job, error) => {
    console.error({ jobId: job?.id, error: error.message }, "Email job failed");
    if (job) {
        await prisma.job.update({
            where: { jobId: job.opts.jobId ?? job.id! },
            data: {
                status: "failed",
                error: error.message
            }
        })
    }
});