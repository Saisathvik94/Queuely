import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-violet-600 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Start free, scale seamlessly as your application grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Free Tier */}
          <div className="rounded-3xl border border-white/10 bg-[#111111]/50 backdrop-blur-sm p-8 flex flex-col hover:border-white/20 transition-colors h-full">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="flex items-baseline text-white">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-gray-500 ml-2 font-medium">/mo</span>
              </div>
            </div>
            
            <ul className="mb-8 space-y-4 text-gray-400 flex-1">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">1,000 jobs/month</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">1 API key</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Email channel only</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Community support</span></li>
            </ul>
            
            <Link href="/sign-up">
              <Button className="w-full h-12 rounded-xl border-white/10 text-white hover:bg-white/10 transition-colors" variant="outline">
                Get started
              </Button>
            </Link>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="relative rounded-3xl border border-violet-500 bg-gradient-to-b from-[#111111] to-[#0A0A0A] p-8 flex flex-col shadow-[0_0_50px_-15px_rgba(124,58,237,0.4)] lg:-mt-8 lg:mb-8 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                Most Popular
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-violet-400 mb-2">Pro</h3>
              <div className="flex items-baseline text-white">
                <span className="text-5xl font-bold tracking-tight">$19</span>
                <span className="text-gray-500 ml-2 font-medium">/mo</span>
              </div>
            </div>
            
            <ul className="mb-8 space-y-4 text-gray-300 flex-1">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">50,000 jobs/month</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">10 API keys</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">All channels (email, SMS, push)</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Priority support</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Analytics dashboard</span></li>
            </ul>
            
            <Link href="/sign-up">
              <Button className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20 transition-all hover:scale-[1.02]">
                Get started
              </Button>
            </Link>
          </div>

          {/* Team Tier */}
          <div className="rounded-3xl border border-white/10 bg-[#111111]/50 backdrop-blur-sm p-8 flex flex-col hover:border-white/20 transition-colors h-full">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Team</h3>
              <div className="flex items-baseline text-white">
                <span className="text-5xl font-bold tracking-tight">$49</span>
                <span className="text-gray-500 ml-2 font-medium">/mo</span>
              </div>
            </div>
            
            <ul className="mb-8 space-y-4 text-gray-400 flex-1">
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">500,000 jobs/month</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Unlimited API keys</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">All channels</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Priority support</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">Custom integrations</span></li>
              <li className="flex items-center gap-3"><Check className="h-5 w-5 text-violet-400 shrink-0" /> <span className="text-sm md:text-base">SLA guarantee</span></li>
            </ul>
            
            <Link href="/contact">
              <Button className="w-full h-12 rounded-xl border-white/10 text-white hover:bg-white/10 transition-colors" variant="outline">
                Contact us
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
