"use client"

import {
  Layers,
  BarChart3,
  Webhook,
  RefreshCw,
  GitBranch,
  Code2,
  Clock,
  Eye,
} from "lucide-react"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Layers,
    title: "Multi-channel delivery",
    description: "Email, SMS, push, and in-app from a single API surface.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description: "Delivery rates, latency percentiles, and channel breakdowns.",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Signed events for delivered, bounced, failed, and retried.",
  },
  {
    icon: RefreshCw,
    title: "Retry engine",
    description: "Exponential backoff with jitter and dead-letter handling.",
  },
  {
    icon: GitBranch,
    title: "Notification workflows",
    description: "Branching logic, delays, and channel fallbacks.",
  },
  {
    icon: Code2,
    title: "API-first architecture",
    description: "Typed SDKs, idempotency keys, and versioned REST endpoints.",
  },
  {
    icon: Clock,
    title: "Scheduling",
    description: "Cron and one-off scheduled sends with timezone support.",
  },
  {
    icon: Eye,
    title: "Delivery observability",
    description: "Trace every attempt with structured logs and filters.",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeader
          label="Platform"
          title="Infrastructure primitives for notification teams"
          description="Everything you need to ship reliable messaging without building queues, workers, or delivery pipelines."
        />
        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <li
                key={f.title}
                className={cn(
                  "group rounded-lg border border-border bg-card p-6 transition-all duration-200",
                  "hover:-translate-y-0.5 hover:border-border hover:shadow-sm"
                )}
              >
                <Icon
                  className="mb-4 size-5 text-muted-foreground transition-colors group-hover:text-cyan-500"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
