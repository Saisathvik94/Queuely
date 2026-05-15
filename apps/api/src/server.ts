import express  from "express"
import { serverAdapter } from "./dashboard/bullboard.js";
import  EmailRouter from "./api/api.js";

const app = express();

app.use(express.json());


app.use("/dashboard", serverAdapter.getRouter())
app.use("/", EmailRouter)



app.listen(3000, async()=>{
    console.log("Queuely running at http://localhost:3000")
    console.log("Bull Board at http://localhost:3000/dashboard")
})