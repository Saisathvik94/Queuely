"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { CodeBlock } from "@/components/docs/code-block"

const snippet = `await queuely.notifications.send({
  channel: "email",
  to: "user@acme.com",
  template: "invoice_paid",
  data: { amount: 249.00 },
})`

const activity = [
  { id: "del_8f2a", status: "Delivered", channel: "email", time: "2s ago" },
  { id: "del_8f1c", status: "Delivered", channel: "sms", time: "8s ago" },
  { id: "del_8f09", status: "Retrying", channel: "push", time: "12s ago" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-28 md:pt-24 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
              Developer infrastructure
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
              Notification Infrastructure for Modern Applications
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Build reliable multi-channel notification workflows across email,
              SMS, push, and in-app messaging with real-time delivery analytics
              and developer-first APIs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/sign-up">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start building
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Read docs
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free tier · No credit card · 5 minute integration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  Delivery activity
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-500">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>
              <ul className="space-y-2">
                {activity.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-md border border-border/60 bg-background px-3 py-2 text-xs"
                  >
                    <span className="font-mono text-muted-foreground">
                      {item.id}
                    </span>
                    <span className="text-muted-foreground">{item.channel}</span>
                    <span
                      className={
                        item.status === "Retrying"
                          ? "text-amber-500"
                          : "text-emerald-500"
                      }
                    >
                      {item.status}
                    </span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CodeBlock code={snippet} title="send-notification.ts" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
