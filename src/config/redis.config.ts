import {Redis} from "ioredis"
import dotenv from "dotenv"
import { env } from "./env.config.js";


dotenv.config();

const redisHost = env.REDIS_HOST

const redisPort = env.REDIS_PORT

if (!redisHost) {
  throw new Error("REDIS_URL is undefined")
}
if (!redisPort) {
  throw new Error("REDIS_PORT is undefined")
}


export const redisConnection = new Redis({
  host: redisHost,
  port: redisPort,
  maxRetriesPerRequest: null,
})

