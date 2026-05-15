"use client"

import { UserButton } from "@clerk/nextjs"
import { Bell, ChevronDown, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 hidden h-14 items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur-xl md:flex">
      <h1 className="min-w-[140px] text-sm font-semibold">{title}</h1>

      <div className="relative max-w-md flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search jobs, keys, deliveries..."
          className="h-9 border-border/60 bg-muted/30 pl-9 text-sm"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 border-border/60">
              Acme Inc
              <ChevronDown className="size-3.5 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Acme Inc</DropdownMenuItem>
            <DropdownMenuItem>Personal</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UserButton />
      </div>
    </header>
  )
}
