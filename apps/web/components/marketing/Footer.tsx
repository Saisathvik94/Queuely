import Link from "next/link"
import { Logo } from "@/components/brand/logo"

const groups = {
  Product: [
    { href: "/#features", label: "Features" },
    { href: "/docs", label: "Docs" },
    { href: "/#pricing", label: "Pricing" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Notification infrastructure for modern applications. Built for
              developers who care about delivery reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(groups).map(([title, links]) => (
              <div key={title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {title}
                </p>
                <ul className="mt-4 space-y-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Queuely. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
