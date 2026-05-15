"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserButton } from "@clerk/nextjs"
import {
  LayoutDashboard,
  Key,
  ListOrdered,
  Settings,
  Menu,
  FileText,
} from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const mainNav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/jobs", label: "Deliveries", icon: ListOrdered },
  { href: "/api-keys", label: "API Keys", icon: Key },
]

const secondaryNav = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/docs", label: "Documentation", icon: FileText },
]

function NavGroup({
  items,
  onNavigate,
}: {
  items: typeof mainNav
  onNavigate?: () => void
}) {
  const pathname = usePathname()

  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const Icon = item.icon
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`)
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                active
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              <Icon className="size-4 shrink-0 opacity-70" strokeWidth={1.75} />
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function Sidebar() {
  const [open, setOpen] = React.useState(false)

  const sidebarContent = (onNavigate?: () => void) => (
    <>
      <p className="px-2.5 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Platform
      </p>
      <NavGroup items={mainNav} onNavigate={onNavigate} />
      <Separator className="my-4" />
      <p className="px-2.5 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Workspace
      </p>
      <NavGroup items={secondaryNav} onNavigate={onNavigate} />
    </>
  )

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col border-r border-border bg-background md:flex">
        <div className="flex h-14 items-center border-b border-border px-4">
          <Logo />
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {sidebarContent()}
        </nav>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background px-4 md:hidden">
        <Logo showWordmark={false} />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <UserButton />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="border-b border-border px-4 py-4">
                <Logo />
              </div>
              <nav className="px-3 py-4">{sidebarContent(() => setOpen(false))}</nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
