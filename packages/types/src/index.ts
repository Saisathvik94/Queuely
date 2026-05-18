// Zod schema for runtime validation
import { z } from "zod";

export const emailPayloadSchema = z.object({
  type: z.literal("email"),
  to: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  body: z.string().min(1, "Body is required"),
});

export const sqsMessageSchema = z.object({
  jobId: z.string().min(1, "jobId is required"),
  payload: emailPayloadSchema,
});


export type JobStatus = "pending" | "active" | "completed" | "failed";
export type JobType = "email";

// Payloads
export interface EmailPayload {
  type: "email";
  to: string;
  subject: string;
  body: string;
}

export type JobPayload = EmailPayload;

// Results
export interface EmailResult {
  type: "email";
  jobId: string;
  messageId: string;
  deliveredAt: Date;
}

export type JobResult = EmailResult;

// Job Record
export interface JobRecord {
  jobId: string;
  type: JobType;
  status: JobStatus;
  progress: number;
  payload: JobPayload;
  result?: JobResult;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface JobSubmitResponse {
  jobId: string;
  type: JobType;
  status: "pending";
  message: string;
}

export interface JobStatusResponse {
  jobId: string;
  type: JobType;
  status: JobStatus;
  progress: number;
  result?: JobResult;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
}

