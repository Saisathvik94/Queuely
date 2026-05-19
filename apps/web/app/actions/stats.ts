"use server"

import { getCurrentUser } from "@/lib/auth"
import prisma from "@queuely/db"
import { subDays, startOfDay, format } from "date-fns"

export async function getUsageChartData() {
  const user = await getCurrentUser()

  // Get last 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i)
    return {
      date,
      name: format(date, "EEE"),
      start: startOfDay(date),
      end: startOfDay(subDays(date, -1))
    }
  })

  // Query jobs per day
  const data = await Promise.all(
    days.map(async (day) => {
      const count = await prisma.job.count({
        where: {
          userId: user.id,
          createdAt: {
            gte: day.start,
            lt: day.end
          }
        }
      })
      return { name: day.name, total: count }
    })
  )

  return data
}