import type { Request, Response, NextFunction } from "express";
import { db } from "@queuely/db";
import crypto from "crypto"

export async function apiKeyMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const header = req.headers.authorization
        if(!header) {
            return res.end('Unauthorized: Missing Authorization Header');
        }

        const rawKey = header.split("Bearer ")[1]?.trim();
        if (!rawKey) {
            return res.status(401).json({ success: false, error: "Invalid API key format" })
        }

        const keyHash = crypto.createHash("sha256").update(rawKey).digest("hex")

        // DB Query
        const dbKey = await db.apiKey.findUnique({ where : { keyHash } })

        if(!dbKey) {
            return res.status(401).json({ success: false, error: "Invalid API key" })
        }

        if(dbKey.revokedAt) {
            return res.status(401).json({ success: false, error: "API key has been revoked" })
        }

        req.userId = dbKey.userId
        req.apiKeyId = dbKey.id 
        next();
    } catch (error: any) {
        console.error("Middleware error:", error)
        return res.status(500).json({ success: false, error: error.message })
    }
}