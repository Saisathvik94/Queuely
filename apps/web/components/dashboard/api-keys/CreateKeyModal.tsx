"use client"
import { useState, useTransition } from "react"
import { Modal } from "@/components/ui/Modal"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { createApiKey } from "@/app/(dashboard)/api-keys/actions"

export function CreateKeyModal({ isOpen, onClose, onCreated }: { isOpen: boolean, onClose: () => void, onCreated: (rawKey: string) => void }) {
  const [name, setName] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleCreate = () => {
    if (!name.trim()) return
    startTransition(async () => {
      const { rawKey } = await createApiKey(name)
      onCreated(rawKey)
      setName("")
      onClose()
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create new API Key"
      description="Enter a memorable name for your API key to identify it later."
    >
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Key Name</label>
          <Input 
            id="name" 
            placeholder="e.g. Production Web App" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-full sm:justify-end gap-2">
        <Button variant="outline" onClick={onClose} disabled={isPending}>Cancel</Button>
        <Button onClick={handleCreate} disabled={!name.trim() || isPending}>
          {isPending ? "Creating..." : "Create Key"}
        </Button>
      </div>
    </Modal>
  )
}
