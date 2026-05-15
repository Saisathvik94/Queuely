"use client"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const data = [
  { name: "Mon", total: 120 },
  { name: "Tue", total: 300 },
  { name: "Wed", total: 450 },
  { name: "Thu", total: 200 },
  { name: "Fri", total: 600 },
  { name: "Sat", total: 150 },
  { name: "Sun", total: 80 },
]

export function UsageChart() {
  return (
    <Card className="col-span-4 border-border/80">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Delivery volume
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--foreground)' }}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="var(--primary)"
                strokeWidth={2}
                activeDot={{ r: 6, fill: "var(--primary)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
