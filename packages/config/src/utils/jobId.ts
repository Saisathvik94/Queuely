import crypto from "crypto";
import type { EmailPayload } from "@queuely/types";

// Only for Email Currently
export function generateJobId(payload: EmailPayload): string {
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(payload))
    .digest("hex");

  return `email-${hash}`;
}