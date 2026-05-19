import { Router } from "express";
import { sendToQueue } from "../queues/sqs.queue.js";
import type {
  ApiResponse,
  EmailPayload,
  JobSubmitResponse,
} from "@queuely/types";
import { generateJobId } from "@queuely/config";
import { apiKeyMiddleware } from "../middleware/apiKey.js";
import prisma from "@queuely/db";

const router : Router = Router();

router.post("/jobs", apiKeyMiddleware,async (req, res) => {
  try {
    const payload = req.body as EmailPayload

    const jobId = generateJobId(payload);

    await sendToQueue({
      jobId,
      payload,
    });

    await prisma.job.create({
      data: {
        jobId,
        userId: req.userId!,
        apiKeyId: req.apiKeyId!,
        type: payload.type,
        status: "pending",
        payload: payload as any,
      }
    })

    const response: ApiResponse<JobSubmitResponse> = {
      success: true,
      data: {
        jobId,
        type: payload.type,
        status: "pending",
        message: "Job submitted successfully",
      },
    };

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;