import { Redis } from "ioredis"
import { env } from "./env.config.js";


const redisUrl = env.REDIS_URL


if (!redisUrl) {
  throw new Error("REDIS_URL is undefined")
}



export const redisConnection = new Redis(redisUrl, {
  maxRetriesPerRequest: null,
})

