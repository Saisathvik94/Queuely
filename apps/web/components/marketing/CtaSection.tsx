import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="rounded-lg border border-border bg-card px-8 py-16 text-center md:px-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Ship notifications with confidence
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join teams using Queuely to deliver billions of messages with
            observability built in from day one.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/sign-up">
              <Button size="lg">Start building</Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline">
                Read documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
