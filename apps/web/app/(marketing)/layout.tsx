import Navbar from "@/components/marketing/Navbar"
import Footer from "@/components/marketing/Footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] selection:bg-violet-500/30">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
