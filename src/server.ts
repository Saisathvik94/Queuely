import express  from "express"
import { serverAdapter } from "./dashboard/bullboard.js";
import  EmailRouter from "./api/api.js";
import { startConsumer } from "./consumer/sqs.consumer.js";
import { env } from "./config/env.config.js";

const app = express();

app.use(express.json());


app.use("/dashboard", serverAdapter.getRouter())
app.use("/", EmailRouter)

const redisHost = env.REDIS_HOST

const redisPort = env.REDIS_PORT


app.listen(3000, async()=>{
    startConsumer();
    console.log(`http://${redisHost}:${redisPort}`);
    console.log("Queuely running at http://localhost:3000")
    console.log("Bull Board at http://localhost:3000/dashboard")
})