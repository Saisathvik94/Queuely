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
      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
        <img src="/logo.png" alt="logo" className="h-full w-full object-cover rounded-lg"/>
      </div>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Queuely
        </span>
      )}
    </Link>
  )
}
