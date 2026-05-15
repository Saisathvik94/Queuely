import { cn } from "@/lib/utils"

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-500">
          {label}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
