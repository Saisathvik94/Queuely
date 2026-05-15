import { SectionHeader } from "./section-header"

const pipeline = [
  {
    step: "01",
    title: "Ingest",
    body: "Accept events via REST API, SDK, or webhooks with idempotency guarantees.",
  },
  {
    step: "02",
    title: "Queue",
    body: "Durable queues with priority lanes and per-tenant rate limits.",
  },
  {
    step: "03",
    title: "Process",
    body: "Workers render templates, resolve recipients, and select channels.",
  },
  {
    step: "04",
    title: "Deliver & retry",
    body: "Provider routing with automatic retries and exponential backoff.",
  },
  {
    step: "05",
    title: "Report",
    body: "Emit delivery events, metrics, and audit logs to your stack.",
  },
]

export default function DeliveryPipeline() {
  return (
    <section className="border-b border-border bg-muted/20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeader
          label="Architecture"
          title="How delivery works under the hood"
          description="A production-grade pipeline designed for reliability at scale."
        />
        <ol className="mt-16 space-y-0">
          {pipeline.map((item, i) => (
            <li
              key={item.step}
              className="relative flex gap-6 border-l border-border pb-12 pl-8 last:pb-0"
            >
              <span className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] text-muted-foreground">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
