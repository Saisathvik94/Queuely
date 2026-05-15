"use client"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/Button"
import { Copy, AlertTriangle } from "lucide-react"

export function KeyRevealModal({ isOpen, onClose, rawKey }: { isOpen: boolean, onClose: () => void, rawKey: string | null }) {
  
  const handleCopy = () => {
    if (rawKey) {
      navigator.clipboard.writeText(rawKey)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Save your API Key"
    >
      <div className="space-y-4 py-4">
        <div className="rounded-md bg-yellow-100 dark:bg-yellow-900/30 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-800 dark:text-yellow-500" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-500">Important: Save this key</h3>
              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-600">
                <p>This is the only time we will show you this API key. Please copy it and store it somewhere safe.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <code className="flex-1 rounded border bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm break-all">
            {rawKey}
          </code>
          <Button size="icon" variant="outline" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex w-full sm:justify-end">
        <Button onClick={onClose}>I have saved it</Button>
      </div>
    </Modal>
  )
}
