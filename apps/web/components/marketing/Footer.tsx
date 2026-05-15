import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        
        <div className="space-y-6 max-w-sm">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold shadow-lg shadow-violet-500/20">
              Q
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Queuely</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            The notification infrastructure for modern applications. Send emails, SMS, push notifications and webhooks effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 text-sm">
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide">Product</h4>
            <div className="flex flex-col space-y-3 text-gray-400">
              <Link href="#features" className="hover:text-violet-400 transition-colors w-fit">Features</Link>
              <Link href="#pricing" className="hover:text-violet-400 transition-colors w-fit">Pricing</Link>
              <Link href="/docs" className="hover:text-violet-400 transition-colors w-fit">Documentation</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide">Company</h4>
            <div className="flex flex-col space-y-3 text-gray-400">
              <Link href="/about" className="hover:text-violet-400 transition-colors w-fit">About</Link>
              <Link href="/blog" className="hover:text-violet-400 transition-colors w-fit">Blog</Link>
              <Link href="/contact" className="hover:text-violet-400 transition-colors w-fit">Contact Us</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide">Legal</h4>
            <div className="flex flex-col space-y-3 text-gray-400">
              <Link href="/privacy" className="hover:text-violet-400 transition-colors w-fit">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-violet-400 transition-colors w-fit">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2025 Queuely Inc. All rights reserved.
        </p>
        <div className="flex space-x-6 text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  )
}
