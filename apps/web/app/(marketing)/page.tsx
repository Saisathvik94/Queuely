import Hero from "@/components/marketing/Hero"
import Features from "@/components/marketing/Features"
import Pricing from "@/components/marketing/Pricing"

export const metadata = {
  title: "Queuely | Notification infrastructure for modern apps",
  description: "Send emails, SMS, push notifications and webhooks through one unified API.",
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Pricing />
    </div>
  )
}
