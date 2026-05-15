import { Topbar } from "@/components/dashboard/Topbar"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { UsageChart } from "@/components/dashboard/UsageChart"
import { RecentJobs } from "@/components/dashboard/RecentJobs"
import { getCurrentUser } from "@/lib/auth"
import prisma from "@/lib/db"
import { Activity, AlertCircle, CheckCircle, Send } from "lucide-react"

export const metadata = {
  title: "Dashboard | Queuely",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  const [totalJobs, failedJobs, activeJobs, recentJobs] = await Promise.all([
    prisma.job.count({ where: { userId: user.id } }),
    prisma.job.count({ where: { userId: user.id, status: "failed" } }),
    prisma.job.count({ where: { userId: user.id, status: "active" } }),
    prisma.job.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ])

  return (
    <>
      <Topbar title="Overview" />
      <main className="flex-1 space-y-6 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Sent"
            value={totalJobs.toLocaleString()}
            icon={Send}
            description="All time jobs processed"
          />
          <StatsCard
            title="Active Jobs"
            value={activeJobs.toLocaleString()}
            icon={Activity}
            description="Currently processing"
          />
          <StatsCard
            title="Failed Jobs"
            value={failedJobs.toLocaleString()}
            icon={AlertCircle}
            description="Failed delivery attempts"
          />
          <StatsCard
            title="Success Rate"
            value={totalJobs === 0 ? "0%" : `${Math.round(((totalJobs - failedJobs) / totalJobs) * 100)}%`}
            icon={CheckCircle}
            description="Successful deliveries"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <UsageChart />
          <RecentJobs jobs={recentJobs} />
        </div>
      </main>
    </>
  )
}
