"use client"

import { useState, useEffect } from "react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

// Mock data - in a real app, this would come from an API
const mockData = [
  { date: "Jan", activeUsers: 400, courseViews: 240, completions: 100 },
  { date: "Feb", activeUsers: 300, courseViews: 139, completions: 80 },
  { date: "Mar", activeUsers: 200, courseViews: 980, completions: 200 },
  { date: "Apr", activeUsers: 278, courseViews: 390, completions: 208 },
  { date: "May", activeUsers: 189, courseViews: 480, completions: 200 },
  { date: "Jun", activeUsers: 239, courseViews: 380, completions: 210 },
  { date: "Jul", activeUsers: 349, courseViews: 430, completions: 220 },
]

export function EngagementChart({ detailed = false }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))
      setData(mockData)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div
        className={`w-full ${detailed ? "h-[400px]" : "h-[300px]"} bg-muted/50 animate-pulse rounded-md flex items-center justify-center`}
      >
        <p className="text-muted-foreground">Loading chart data...</p>
      </div>
    )
  }

  return (
    <ChartContainer
      config={{
        activeUsers: {
          label: "Active Users",
          color: "hsl(var(--chart-1))",
        },
        courseViews: {
          label: "Course Views",
          color: "hsl(var(--chart-2))",
        },
        completions: {
          label: "Completions",
          color: "hsl(var(--chart-3))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height={detailed ? 400 : 300}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="var(--color-activeUsers)"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="courseViews" stroke="var(--color-courseViews)" strokeWidth={2} />
          <Line type="monotone" dataKey="completions" stroke="var(--color-completions)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
