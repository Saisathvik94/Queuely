import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pending" | "active" | "completed" | "failed" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80": variant === "default",
          "border-transparent bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500": variant === "pending",
          "border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400": variant === "active",
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500": variant === "completed",
          "border-transparent bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500": variant === "failed",
          "text-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}
