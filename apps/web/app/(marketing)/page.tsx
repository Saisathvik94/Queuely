import Hero from "@/components/marketing/Hero"
import TrustedBy from "@/components/marketing/TrustedBy"
import Workflow from "@/components/marketing/Workflow"
import Features from "@/components/marketing/Features"
import AnalyticsPreview from "@/components/marketing/AnalyticsPreview"
import DeliveryPipeline from "@/components/marketing/DeliveryPipeline"
import DocsPreview from "@/components/marketing/DocsPreview"
import Pricing from "@/components/marketing/Pricing"
import CtaSection from "@/components/marketing/CtaSection"

export const metadata = {
  title: "Queuely | Notification infrastructure for modern applications",
  description:
    "Build reliable multi-channel notification workflows with real-time delivery analytics and developer-first APIs.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Workflow />
      <Features />
      <AnalyticsPreview />
      <DeliveryPipeline />
      <DocsPreview />
      <Pricing />
      <CtaSection />
    </>
  )
}
