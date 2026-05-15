import { Zap, RefreshCcw, LayoutDashboard, Key, Layers, Server } from "lucide-react"

const features = [
  {
    name: "Instant delivery",
    description: "Jobs processed in milliseconds with BullMQ and Redis under the hood.",
    icon: Zap,
  },
  {
    name: "Automatic retries",
    description: "Failed jobs retry automatically with exponential backoff and jitter.",
    icon: RefreshCcw,
  },
  {
    name: "Real-time dashboard",
    description: "Monitor every job, status, payload and delivery in one unified place.",
    icon: LayoutDashboard,
  },
  {
    name: "API key auth",
    description: "Secure your jobs with scoped, granular API keys.",
    icon: Key,
  },
  {
    name: "Multi-channel",
    description: "Email, SMS, push, webhooks — all through a single clean SDK.",
    icon: Layers,
  },
  {
    name: "Built to scale",
    description: "Powered by AWS SQS and robust serverless infrastructure.",
    icon: Server,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Everything you need to <span className="text-violet-400">deliver at scale</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Built on battle-tested infrastructure so you don't have to spend months building notification pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.name} 
                className="group relative rounded-3xl border border-white/5 bg-gradient-to-b from-[#111111] to-[#0D0D0D] p-8 hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-15px_rgba(124,58,237,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-gray-300 border border-white/10 group-hover:bg-violet-600/20 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-all duration-300 shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white tracking-tight">{feature.name}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
