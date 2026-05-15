"use client"

import Link from "next/link"
import { useState } from "react"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { Button } from "@/components/ui/Button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
const links = [
  { href: "/#features", label: "Features" },
  { href: "/docs", label: "Docs" },
  { href: "/#pricing", label: "Pricing" },
]

export default function Navbar() {
  const { isSignedIn } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          {isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Start building</Button>
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-border sm:max-w-xs">
              <nav className="mt-8 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6">
                {isSignedIn ? (
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    <Button className="w-full" variant="outline">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/sign-in" onClick={() => setOpen(false)}>
                      <Button variant="ghost" className="w-full">
                        Sign in
                      </Button>
                    </Link>
                    <Link href="/sign-up" onClick={() => setOpen(false)}>
                      <Button className="w-full">Start building</Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
