import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "border-border bg-muted text-muted-foreground",
        outline: "border-border text-foreground",
        pending:
          "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
        active:
          "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
        completed:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        failed:
          "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",
        cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
