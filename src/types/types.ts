
export type JobStatus = "pending" | "active" | "completed" | "failed" ;

// Email Worker payload
export interface EmailPayload {
    type: "email";
    to: string;
    subject: string;
    body: string;
}

// PDF Worker payload
export interface PdfPayload {
    type: "pdf";
    fileName: string;
    template: string;
    data: string;
}

//Image resize Payload
export interface ImagePayload {
    type: "image";
    ImageUrl: string;
    resize: { width: number; height: number }[];
    format: "jpeg" | "png" | "webp" ;
}

// JobType 
export type JobType = "image" | "email" | "pdf" ;

//Job payload
export type JobPayload = ImagePayload | EmailPayload | PdfPayload;


// Image Result
export interface ImageResult {
    type: "image";
    s3Urls: string[];              
}
// Emailresult
export interface EmailResult {
    type: "email";
    jobId: string;
    messageId: string;
    deliveredAt: Date;
}
// PDF result
export interface PdfResult {
    type: "pdf";
    s3Url: string;
    fileName: string;
}
// Job result
export type JobResult = ImageResult | EmailResult | PdfResult;


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

// API response
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