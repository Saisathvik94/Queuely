import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { redisConnection } from "@queuely/config";
import type { EmailPayload } from "@queuely/types";
import { Queue } from "bullmq";

const emailQueue = new Queue<EmailPayload>("email-queue", {
    connection: redisConnection,
})

export const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/dashboard");

createBullBoard({
    queues: [new BullMQAdapter(emailQueue)],
    serverAdapter,
});