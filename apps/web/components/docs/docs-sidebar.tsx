"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/Input"

const sections = [
  {
    title: "Getting started",
    links: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs#quickstart", label: "Quickstart" },
      { href: "/docs#authentication", label: "Authentication" },
    ],
  },
  {
    title: "Core concepts",
    links: [
      { href: "/docs#notifications", label: "Notifications" },
      { href: "/docs#workflows", label: "Workflows" },
      { href: "/docs#webhooks", label: "Webhooks" },
    ],
  },
  {
    title: "API reference",
    links: [
      { href: "/docs#send-notification", label: "Send notification" },
      { href: "/docs#list-deliveries", label: "List deliveries" },
      { href: "/docs#retry-policy", label: "Retry policy" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border py-8 pl-6 pr-4 lg:block">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search docs..."
          className="h-9 bg-muted/30 pl-9 text-sm"
        />
      </div>
      <nav className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      pathname === link.href.split("#")[0] &&
                        link.href === "/docs" &&
                        "bg-muted text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
