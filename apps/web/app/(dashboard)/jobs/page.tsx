import { getCurrentUser } from "@/lib/auth"
import prisma from "@/lib/db"
import JobsPageClient from "./client-page"

export const metadata = {
  title: "Jobs | Queuely",
}

export default async function JobsPage() {
  const user = await getCurrentUser()

  const jobs = await prisma.job.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 100, // Show last 100 jobs
  })

  return <JobsPageClient jobs={jobs} />
}
