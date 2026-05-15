"use client"

import { SectionHeader } from "./section-header"
import { Mail, MessageSquare, Bell, Webhook, ArrowRight } from "lucide-react"

const steps = [
  { icon: Mail, label: "Trigger", desc: "API / event / schedule" },
  { icon: MessageSquare, label: "Route", desc: "Channel selection" },
  { icon: Bell, label: "Deliver", desc: "Email · SMS · Push" },
  { icon: Webhook, label: "Observe", desc: "Webhooks & analytics" },
]

export default function Workflow() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeader
          label="Workflow"
          title="One pipeline for every notification channel"
          description="Design multi-step delivery flows with retries, fallbacks, and observability built in."
        />
        <div className="mt-16 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="flex items-center gap-4">
                <article className="w-48 rounded-lg border border-border bg-card p-5 transition-colors hover:border-border hover:bg-muted/30">
                  <Icon className="mb-3 size-5 text-cyan-500" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold">{step.label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{step.desc}</p>
                </article>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden size-4 text-muted-foreground md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
