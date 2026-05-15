import { Sidebar } from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/20">
      <Sidebar />
      <div className="md:pl-60 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
