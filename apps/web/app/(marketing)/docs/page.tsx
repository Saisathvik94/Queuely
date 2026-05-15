export const metadata = {
  title: "Documentation | Queuely",
  description: "Learn how to use Queuely to send notifications.",
}

export default function DocsPage() {
  return (
    <section className="container py-24 max-w-4xl mx-auto px-4">
      <div className="space-y-6">
        <h1 className="font-bold text-4xl">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the Queuely API documentation.
        </p>
        <div className="prose dark:prose-invert max-w-none mt-8">
          <h3>Getting Started</h3>
          <p>Install the SDK via npm:</p>
          <pre><code>npm install @queuely/sdk</code></pre>
          <h3>Initialize</h3>
          <p>Get your API key from the dashboard and initialize the client.</p>
          <pre><code>{`import { Queuely } from '@queuely/sdk';

const queuely = new Queuely('qly_...');`}</code></pre>
        </div>
      </div>
    </section>
  )
}
