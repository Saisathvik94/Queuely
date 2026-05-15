"use client"
import { useState } from "react"
import { Topbar } from "@/components/dashboard/Topbar"
import { ApiKeyTable } from "@/components/dashboard/api-keys/ApiKeyTable"
import { CreateKeyModal } from "@/components/dashboard/api-keys/CreateKeyModal"
import { KeyRevealModal } from "@/components/dashboard/api-keys/KeyRevealModal"
import { Button } from "@/components/ui/Button"
import { Plus } from "lucide-react"

export default function ApiKeysPageClient({ apiKeys }: { apiKeys: any[] }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [revealedKey, setRevealedKey] = useState<string | null>(null)

  return (
    <>
      <Topbar title="API Keys" />
      <main className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Your API Keys</h2>
            <p className="text-muted-foreground">Manage your API keys for authenticating Queuely API requests.</p>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Create Key
          </Button>
        </div>

        <ApiKeyTable apiKeys={apiKeys} />

        <CreateKeyModal 
          isOpen={isCreateModalOpen} 
          onClose={() => setIsCreateModalOpen(false)} 
          onCreated={(key) => setRevealedKey(key)}
        />
        
        <KeyRevealModal 
          isOpen={!!revealedKey} 
          onClose={() => setRevealedKey(null)} 
          rawKey={revealedKey} 
        />
      </main>
    </>
  )
}
