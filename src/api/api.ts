import { Router } from "express";
import { sendToQueue } from "../queues/sqs.queue.js";
import type {
  ApiResponse,
  EmailPayload,
  JobSubmitResponse,
} from "../types/types.js";
import { generateJobId } from "../utils/jobId.js";

const router = Router();

router.post("/jobs", async (req, res) => {
  try {
    const payload = req.body as EmailPayload

    const jobId = generateJobId(payload);

    await sendToQueue({
      jobId,
      payload,
    });

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