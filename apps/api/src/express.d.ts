declare global {
  namespace Express {
    interface Request {
      userId?: string
      apiKeyId?: string
    }
  }
}

export {}