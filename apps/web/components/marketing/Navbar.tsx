"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useEffect, useState } from "react"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const { isSignedIn } = useAuth()
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "pricing"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center space-x-3 z-50">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold shadow-lg shadow-violet-500/20">
            Q
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Queuely</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#features" className={`transition-colors hover:text-white ${activeSection === "features" ? "text-white" : "text-gray-400"}`}>
            Features
          </Link>
          <Link href="#pricing" className={`transition-colors hover:text-white ${activeSection === "pricing" ? "text-white" : "text-gray-400"}`}>
            Pricing
          </Link>
          <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
            Docs
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Dashboard
                </Button>
              </Link>
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                <UserButton afterSignOutUrl="/" />
              </div>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/20">
                  Get started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center text-gray-300 hover:text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 md:hidden flex flex-col px-4 py-8 space-y-6 shadow-2xl z-40">
          <Link href="#features" onClick={closeMenu} className="text-lg font-medium text-gray-300 hover:text-white">Features</Link>
          <Link href="#pricing" onClick={closeMenu} className="text-lg font-medium text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/docs" onClick={closeMenu} className="text-lg font-medium text-gray-300 hover:text-white">Docs</Link>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col space-y-4">
            {isSignedIn ? (
              <>
                <Link href="/dashboard" onClick={closeMenu}>
                  <Button className="w-full bg-violet-600 text-white hover:bg-violet-700 justify-center">
                    Go to Dashboard
                  </Button>
                </Link>
                <div className="flex items-center space-x-3 pt-2">
                  <UserButton afterSignOutUrl="/" />
                  <span className="text-sm text-gray-400">Manage Account</span>
                </div>
              </>
            ) : (
              <>
                <Link href="/sign-in" onClick={closeMenu}>
                  <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-white/10 justify-start px-0">
                    Sign in
                  </Button>
                </Link>
                <Link href="/sign-up" onClick={closeMenu}>
                  <Button className="w-full bg-violet-600 text-white hover:bg-violet-700 justify-center">
                    Get started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}