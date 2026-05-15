import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Button } from "@/components/ui/Button"
import { ApiExampleTabs } from "@/components/docs/api-example-tabs"

export default function DocsPreview() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            align="left"
            label="Documentation"
            title="Developer documentation that matches the product"
            description="Guides, API reference, and copy-paste examples. Built for engineers shipping fast."
          />
          <div className="space-y-4">
            <ApiExampleTabs />
            <Link href="/docs">
              <Button variant="outline" className="gap-2">
                Explore documentation
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
