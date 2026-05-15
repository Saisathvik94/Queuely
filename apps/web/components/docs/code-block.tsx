"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

export function CodeBlock({
  code,
  language = "typescript",
  title,
  className,
}: {
  code: string
  language?: string
  title?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-[#0c0c0e] font-mono text-sm",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border/80 bg-[#111113] px-4 py-2">
        <span className="text-xs text-muted-foreground">
          {title ?? language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1.5 px-2 text-xs text-muted-foreground hover:text-foreground"
          onClick={copy}
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-500" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 leading-relaxed text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  )
}
