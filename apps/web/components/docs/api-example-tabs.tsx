"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "./code-block"

const examples = {
  curl: `curl -X POST https://api.queuely.dev/v1/notifications \\
  -H "Authorization: Bearer qly_live_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "email",
    "to": "user@example.com",
    "template": "welcome"
  }'`,
  typescript: `import { Queuely } from "@queuely/sdk"

const queuely = new Queuely(process.env.QUEUELY_API_KEY!)

await queuely.notifications.send({
  channel: "email",
  to: "user@example.com",
  template: "welcome",
  data: { name: "Alex" },
})`,
  javascript: `import Queuely from "@queuely/sdk"

const queuely = new Queuely(process.env.QUEUELY_API_KEY)

await queuely.notifications.send({
  channel: "email",
  to: "user@example.com",
  template: "welcome",
  data: { name: "Alex" },
})`,
}

export function ApiExampleTabs() {
  return (
    <Tabs defaultValue="typescript" className="w-full">
      <TabsList>
        <TabsTrigger value="curl">cURL</TabsTrigger>
        <TabsTrigger value="typescript">TypeScript</TabsTrigger>
        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
      </TabsList>
      <TabsContent value="curl">
        <CodeBlock code={examples.curl} language="bash" title="Terminal" />
      </TabsContent>
      <TabsContent value="typescript">
        <CodeBlock code={examples.typescript} language="typescript" />
      </TabsContent>
      <TabsContent value="javascript">
        <CodeBlock code={examples.javascript} language="javascript" />
      </TabsContent>
    </Tabs>
  )
}
