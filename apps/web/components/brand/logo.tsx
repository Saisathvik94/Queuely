import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card">
        <span className="font-mono text-sm font-semibold text-foreground">Q</span>
        <span className="absolute -bottom-px left-1 right-1 h-px bg-cyan-500/80" />
      </div>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Queuely
        </span>
      )}
    </Link>
  )
}
