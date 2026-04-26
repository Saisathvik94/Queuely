import { SQSClient } from "@aws-sdk/client-sqs";
import { env } from "./env.config.js";


const AWS_REGION = env.AWS_REGION 
const AWS_ACCESS_KEY_ID = env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = env.AWS_SECRET_ACCESS_KEY

if(!AWS_REGION) {
    throw new Error("AWS_REGION is Undefined")
}
if(!AWS_ACCESS_KEY_ID) {
    throw new Error("AWS_ACCESS_KEY_ID is Undefined")
}
if(!AWS_SECRET_ACCESS_KEY) {
    throw new Error("AWS_SECRET_ACCESS_KEY is Undefined")
}

export const sqsClient = new SQSClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID!,
    secretAccessKey: AWS_SECRET_ACCESS_KEY!,
  },
});