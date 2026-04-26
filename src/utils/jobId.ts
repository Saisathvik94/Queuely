import crypto from "crypto";
import type { EmailPayload } from "../types/types.js";

// Only for Email Currently
export function generateJobId(payload: EmailPayload): string {
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(payload))
    .digest("hex");

  return `email-${hash}`;
}