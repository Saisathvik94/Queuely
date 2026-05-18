import type { ApiResponse, EmailPayload, JobSubmitResponse, QueuelyConfig } from "./types.js";


export class QueuelyClient {
    private apiKey: string;
    private baseUrl?: string;
    constructor(config: QueuelyConfig) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl ?? "http://localhost:3001";
    }

    private async request<T>(endpoint: string , options: RequestInit = {}) :Promise<T> {
        const url = `${this.baseUrl}${endpoint}`

        const headers = new Headers(options.headers);

        if(this.apiKey) {
            headers.set('Authorization', `Bearer ${this.apiKey}`);
        }
        headers.set('Content-Type', 'application/json');

        const response = await fetch(url, { ...options, headers });

        if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
        }

        // Return parsed JSON data
        return response.json() as Promise<T>;
    }

    public email = {
        send: (payload: EmailPayload): Promise<ApiResponse<JobSubmitResponse>> => {
            return this.request("/jobs", {
                method: "POST",
                body: JSON.stringify({ ...payload, type: "email" })
            })
        }
    }

    
}