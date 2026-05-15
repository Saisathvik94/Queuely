"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Hobby",
    price: "$0",
    desc: "For prototypes and side projects.",
    features: ["10k notifications/mo", "1 workspace", "Email channel", "Community support"],
    cta: "Start free",
    href: "/sign-up",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    desc: "For production applications.",
    features: [
      "500k notifications/mo",
      "All channels",
      "Workflows & scheduling",
      "Priority support",
      "99.9% SLA",
    ],
    cta: "Start building",
    href: "/sign-up",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large-scale infrastructure.",
    features: [
      "Unlimited volume",
      "Dedicated support",
      "SSO & audit logs",
      "Custom regions",
      "Volume discounts",
    ],
    cta: "Contact sales",
    href: "/contact",
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <SectionHeader
          label="Pricing"
          title="Predictable pricing as you scale"
          description="Start free. Upgrade when your delivery volume grows."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex flex-col rounded-lg border border-border bg-card p-6",
                plan.highlight && "border-cyan-500/30 ring-1 ring-cyan-500/10"
              )}
            >
              <h3 className="text-sm font-semibold">{plan.name}</h3>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className="mt-8">
                <Button
                  variant={plan.highlight ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
