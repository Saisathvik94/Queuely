import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  trend?: string
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
}: StatsCardProps) {
  return (
    <Card className="border-border/80 bg-card shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="size-4 text-muted-foreground" strokeWidth={1.5} />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold tabular-nums tracking-tight">{value}</p>
        {(description || trend) && (
          <p className={cn("mt-1 text-xs", trend ? "text-emerald-500" : "text-muted-foreground")}>
            {trend ?? description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
