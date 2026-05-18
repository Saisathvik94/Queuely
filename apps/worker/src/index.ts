import { startConsumer } from "./consumer/sqs.consumer.js";
import { emailWorker } from "./workers/email.worker.js"

startConsumer();
