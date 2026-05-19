import { getCurrentUser } from "@/lib/auth"
import prisma from "@queuely/db"
import ApiKeysPageClient from "./client-page"

export const metadata = {
  title: "API Keys | Queuely",
}

export default async function ApiKeysPage() {
  const user = await getCurrentUser()

  const apiKeys = await prisma.apiKey.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  })

  return <ApiKeysPageClient apiKeys={apiKeys} />
}
