import { ApiExampleTabs } from "@/components/docs/api-example-tabs"
import { CodeBlock } from "@/components/docs/code-block"

export const metadata = {
  title: "Documentation | Queuely",
  description: "API reference and guides for Queuely notification infrastructure.",
}

const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "quickstart", label: "Quickstart" },
  { id: "authentication", label: "Authentication" },
  { id: "send-notification", label: "Send notification" },
]

export default function DocsPage() {
  return (
    <article className="flex gap-12 px-4 py-10 lg:px-10">
      <div className="min-w-0 flex-1 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-500">
          Documentation
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Queuely API
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Queuely is notification infrastructure for modern applications. Send
          email, SMS, push, and in-app messages through a unified API with
          delivery observability built in.
        </p>

        <section id="introduction" className="mt-16 scroll-mt-24">
          <h2 className="text-xl font-semibold tracking-tight">Introduction</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The REST API is available at{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              https://api.queuely.dev/v1
            </code>
            . All requests require a bearer token from your dashboard.
          </p>
        </section>

        <section id="quickstart" className="mt-16 scroll-mt-24">
          <h2 className="text-xl font-semibold tracking-tight">Quickstart</h2>
          <p className="mt-4 text-muted-foreground">
            Install the SDK and send your first notification in under five
            minutes.
          </p>
          <div className="mt-6 space-y-4">
            <CodeBlock
              code="npm install @queuely/sdk"
              language="bash"
              title="Terminal"
            />
            <CodeBlock
              code={`import { Queuely } from "@queuely/sdk"

const queuely = new Queuely(process.env.QUEUELY_API_KEY!)`}
            />
          </div>
        </section>

        <section id="authentication" className="mt-16 scroll-mt-24">
          <h2 className="text-xl font-semibold tracking-tight">
            Authentication
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Pass your secret API key in the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
              Authorization
            </code>{" "}
            header. Never expose secret keys in client-side code.
          </p>
          <div className="mt-6">
            <CodeBlock
              code={`Authorization: Bearer qly_live_xxxxxxxx`}
              language="http"
              title="Headers"
            />
          </div>
        </section>

        <section id="send-notification" className="mt-16 scroll-mt-24">
          <h2 className="text-xl font-semibold tracking-tight">
            Send notification
          </h2>
          <p className="mt-4 text-muted-foreground">
            POST{" "}
            <code className="font-mono text-sm">/v1/notifications</code> creates
            a delivery job. Use idempotency keys for safe retries.
          </p>
          <div className="mt-6">
            <ApiExampleTabs />
          </div>
        </section>
      </div>

      <aside className="hidden w-48 shrink-0 xl:block">
        <nav className="sticky top-20 space-y-2 text-sm">
          <p className="font-medium text-foreground">On this page</p>
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </article>
  )
}
