"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { revokeApiKey } from "@/app/(dashboard)/api-keys/actions"
import { useTransition } from "react"

export function ApiKeyTable({ apiKeys }: { apiKeys: any[] }) {
  const [isPending, startTransition] = useTransition()

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Key Prefix</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiKeys.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                No API keys found.
              </TableCell>
            </TableRow>
          ) : (
            apiKeys.map((key) => (
              <TableRow key={key.id}>
                <TableCell className="font-medium">{key.name}</TableCell>
                <TableCell className="font-mono text-muted-foreground">{key.prefix}••••••••••••••••</TableCell>
                <TableCell>{new Date(key.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  {key.revokedAt ? (
                    <Badge variant="failed">Revoked</Badge>
                  ) : (
                    <Badge variant="active">Active</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {!key.revokedAt && (
                    <Button 
                      variant="destructive" 
                      size="sm"
                      disabled={isPending}
                      onClick={() => {
                        if (confirm("Are you sure you want to revoke this key? This action cannot be undone.")) {
                          startTransition(() => {
                            revokeApiKey(key.id)
                          })
                        }
                      }}
                    >
                      Revoke
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
