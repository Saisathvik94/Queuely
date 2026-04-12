
export type JobStatus = "pending" | "active" | "completed" | "failed" ;

// Email Worker payload
export interface Email {
    type: "email";
    to: string;
    subject: string;
    body: string;
}

// PDF Worker payload
export interface Pdf {
    type: "pdf";
    fileName: string;
    template: string;
    data: string;
    S3_Url: string;
}

//Image resize Payload
export interface Image {
    type: "image";
    ImageUrl: string;
    resize: { width: number; height: number }[];
    format: "jpeg" | "png" | "webp" ;
}

// JobType 
export type JobType = "image" | "email" | "pdf" ;

//Job payload
export type JobPayload = Image | Email | Pdf;


// Job Record
export interface JobRecord {
    jobId: string;
    type: JobType;
    status: JobStatus;
    createdAt: string;
    updatedAt: string;
    payload: JobPayload;
}

// API response
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}