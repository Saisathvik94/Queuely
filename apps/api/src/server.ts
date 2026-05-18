import express  from "express"
import { serverAdapter } from "./dashboard/bullboard.js";
import  EmailRouter from "./api/api.js";

const app = express();

app.use(express.json());


app.use("/dashboard", serverAdapter.getRouter())
app.use("/", EmailRouter)


app.get('/health', (req, res) => {
    const data = {
        message: "Hello from Queuely",
        timestamp: new Date().toISOString()
    }
    res.json(data)
})



app.listen(3001, async()=>{
    console.log("Queuely running at http://localhost:3001")
    console.log("Bull Board at http://localhost:3001/dashboard")
})