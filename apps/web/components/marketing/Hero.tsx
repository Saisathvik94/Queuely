import Link from "next/link"
import { Button } from "@/components/ui/Button"
import CodePreview from "./CodePreview"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
          
          <Link href="/sign-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-violet-500/30 transition-all cursor-pointer group">
              <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
              Now in Beta — Start for free
              <ArrowRight className="h-3.5 w-3.5 text-gray-500 group-hover:text-violet-400 transition-colors transform group-hover:translate-x-0.5" />
            </div>
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            <span className="bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
              Notification infrastructure
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent"> for modern apps</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            Send emails, SMS, push notifications and webhooks through one unified API. No infrastructure to manage, no queues to configure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button size="lg" className="h-12 px-8 text-base bg-violet-600 hover:bg-violet-500 text-white rounded-xl w-full sm:w-auto shadow-lg shadow-violet-600/25 transition-all hover:scale-[1.02]">
                Start for free
              </Button>
            </Link>
            <Link href="/docs" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="h-12 px-8 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-xl w-full sm:w-auto border border-white/10 transition-all">
                View docs
              </Button>
            </Link>
          </div>
          
        </div>

        <div className="px-2 sm:px-0 mt-8 md:mt-16">
          <CodePreview />
        </div>

      </div>
      
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] md:h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600 via-indigo-600/20 to-transparent blur-3xl rounded-b-full transform -translate-y-1/2"></div>
      </div>
    </section>
  )
}
