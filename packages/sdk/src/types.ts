
export interface QueuelyConfig {
    apiKey: string,
    baseUrl?: string
}

// Email Payload
export interface EmailPayload {
  type: "email";
  to: string;
  subject: string;
  body: string;
}

// Results
export interface EmailResult {
  type: "email";
  jobId: string;
  messageId: string;
  deliveredAt: Date;
}


export type JobStatus = "pending" | "active" | "completed" | "failed";
export type JobType = "email";
export type JobResult = EmailResult;

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