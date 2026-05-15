import Link from "next/link"
import { Zap, LayoutDashboard, Key, ListOrdered, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <div className="fixed hidden md:flex flex-col top-0 left-0 h-screen w-60 border-r bg-background px-4 py-6">
      <Link href="/" className="flex items-center space-x-2 mb-8 px-2">
        <Zap className="h-6 w-6 text-violet-600" />
        <span className="font-bold text-lg">Queuely</span>
      </Link>
      <nav className="flex-1 space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors text-sm font-medium">
          <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
          <span>Overview</span>
        </Link>
        <Link href="/api-keys" className="flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors text-sm font-medium">
          <Key className="h-4 w-4 text-muted-foreground" />
          <span>API Keys</span>
        </Link>
        <Link href="/jobs" className="flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors text-sm font-medium">
          <ListOrdered className="h-4 w-4 text-muted-foreground" />
          <span>Jobs</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors text-sm font-medium">
          <Settings className="h-4 w-4 text-muted-foreground" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}
