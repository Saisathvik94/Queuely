"use client"

import { SectionHeader } from "./section-header"

const metrics = [
  { label: "Delivered (24h)", value: "2.4M", change: "+12.4%" },
  { label: "P95 latency", value: "184ms", change: "-8ms" },
  { label: "Success rate", value: "99.97%", change: "+0.02%" },
  { label: "Active workflows", value: "128", change: "+6" },
]

export default function AnalyticsPreview() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeader
          label="Observability"
          title="Live delivery analytics"
          description="Monitor throughput, failures, and channel performance from a single control plane."
        />
        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
          <div className="grid grid-cols-2 border-b border-border md:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border-border p-5 md:border-r md:last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <p className="text-xs text-muted-foreground">{m.label}</p>
                <p className="mt-1 text-2xl font-semibold tabular-nums">{m.value}</p>
                <p className="mt-1 font-mono text-xs text-emerald-500">{m.change}</p>
              </div>
            ))}
          </div>
          <div className="h-48 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_oklab,var(--muted)_40%,transparent)_100%)] p-6">
            <div className="flex h-full items-end gap-1">
              {[40, 55, 48, 72, 65, 80, 74, 88, 82, 95, 90, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-cyan-500/20"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
