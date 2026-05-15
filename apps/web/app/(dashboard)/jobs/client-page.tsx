"use client"
import { useState } from "react"
import { Topbar } from "@/components/dashboard/Topbar"
import { JobsTable } from "@/components/dashboard/jobs/JobsTable"
import { JobDetailModal } from "@/components/dashboard/jobs/JobDetailModal"

export default function JobsPageClient({ jobs }: { jobs: any[] }) {
  const [selectedJob, setSelectedJob] = useState<any | null>(null)

  return (
    <>
      <Topbar title="Jobs" />
      <main className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Job History</h2>
            <p className="text-muted-foreground">View and trace the status of your recent notifications.</p>
          </div>
        </div>

        <JobsTable jobs={jobs} onViewDetails={setSelectedJob} />

        <JobDetailModal 
          isOpen={!!selectedJob} 
          onClose={() => setSelectedJob(null)} 
          job={selectedJob} 
        />
      </main>
    </>
  )
}
