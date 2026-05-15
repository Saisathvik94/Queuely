import { UserButton } from "@clerk/nextjs"

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-background px-6">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}
