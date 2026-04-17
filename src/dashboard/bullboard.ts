import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { emailQueue } from "../queues/email.queue.js";

export const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/dashboard");

createBullBoard({
    queues: [new BullMQAdapter(emailQueue)],
    serverAdapter,
});