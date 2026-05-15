import crypto from "crypto"

export function generateApiKey() {
  const rawKey = "qly_" + crypto.randomBytes(32).toString("hex")
  const prefix = rawKey.substring(0, 12) // "qly_" + 8 chars
  const keyHash = crypto.createHash("sha256").update(rawKey).digest("hex")
  return { rawKey, prefix, keyHash }
}

export function hashApiKey(rawKey: string) {
  return crypto.createHash("sha256").update(rawKey).digest("hex")
}
