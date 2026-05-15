import { DocsSidebar } from "@/components/docs/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-7xl border-t border-border">
      <DocsSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
