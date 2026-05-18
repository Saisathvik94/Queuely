import { getCurrentUser } from "@/lib/auth"
import { db } from "@queuely/db"
import JobsPageClient from "./client-page"

export const metadata = {
  title: "Jobs | Queuely",
}

export default async function JobsPage() {
  const user = await getCurrentUser()

  const jobs = await db.job.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 100, // Show last 100 jobs
  })

  return <JobsPageClient jobs={jobs} />
}
