"use client"
import { Modal } from "@/components/ui/Modal"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

interface JobDetailModalProps {
  isOpen: boolean
  onClose: () => void
  job: any | null
}

export function JobDetailModal({ isOpen, onClose, job }: JobDetailModalProps) {
  if (!job) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Job Details"
      description={`ID: \${job.jobId}`}
    >
      <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <Badge variant={job.status as any}>{job.status}</Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Type</p>
            <span className="capitalize font-medium">{job.type}</span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Created</p>
            <span className="text-sm">{new Date(job.createdAt).toLocaleString()}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Payload</h4>
          <pre className="bg-muted rounded-md p-4 text-xs font-mono overflow-x-auto">
            {JSON.stringify(job.payload, null, 2)}
          </pre>
        </div>

        {job.result && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Result</h4>
            <pre className="bg-muted rounded-md p-4 text-xs font-mono overflow-x-auto">
              {JSON.stringify(job.result, null, 2)}
            </pre>
          </div>
        )}

        {job.error && (
          <div>
            <h4 className="text-sm font-semibold mb-2 text-destructive">Error</h4>
            <pre className="bg-destructive/10 text-destructive rounded-md p-4 text-xs font-mono overflow-x-auto border border-destructive/20">
              {job.error}
            </pre>
          </div>
        )}
      </div>
      <div className="flex w-full sm:justify-end">
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  )
}
