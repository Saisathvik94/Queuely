import { Topbar } from "@/components/dashboard/Topbar"
import { getCurrentUser } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export const metadata = {
  title: "Settings | Queuely",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  return (
    <>
      <Topbar title="Settings" />
      <main className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Account Settings</h2>
            <p className="text-muted-foreground">Manage your account and subscription preferences.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your personal information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <div className="mt-1 p-2 bg-muted rounded-md text-sm">{user.name || "N/A"}</div>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <div className="mt-1 p-2 bg-muted rounded-md text-sm">{user.email}</div>
              </div>
              <div>
                <label className="text-sm font-medium">User ID</label>
                <div className="mt-1 p-2 bg-muted rounded-md text-sm font-mono">{user.id}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your current plan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Current Plan</label>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-800 dark:bg-violet-900/30 dark:text-violet-500">Free Tier</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">You are currently on the free plan which includes 1,000 jobs per month.</p>
              <Button>Upgrade Plan</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
