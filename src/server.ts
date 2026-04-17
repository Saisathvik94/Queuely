import express  from "express"
import { serverAdapter } from "./dashboard/bullboard.js";
import { generateJobId } from "./utils/jobId.js";
import { addEmailJob } from "./queues/email.queue.js";


const app = express();

app.use("/dashboard", serverAdapter.getRouter())


app.listen(3000, async()=>{
    console.log("Queuely running at http://localhost:3000")
    console.log("Bull Board at http://localhost:3000/dashboard")

    const jobId = generateJobId("email");
    await addEmailJob(jobId, {
        type: "email",
        to: "saisathwik63@gmail.com",
        subject: "Hello from Queuely",
        body: "<h1>Queuely works!</h1><p>Your first background email job.</p>",
    });

    console.log({jobId}, "Test email job added to queue")

})