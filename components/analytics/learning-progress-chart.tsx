"use client"

import { useState, useEffect } from "react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

// Mock data - in a real app, this would come from an API
const mockData = [
  { name: "Technical", completed: 85, inProgress: 15 },
  { name: "Compliance", completed: 92, inProgress: 8 },
  { name: "Soft Skills", completed: 70, inProgress: 30 },
  { name: "Leadership", completed: 65, inProgress: 35 },
  { name: "Onboarding", completed: 95, inProgress: 5 },
]

export function LearningProgressChart({ detailed = false }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 600))
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
        completed: {
          label: "Completed",
          color: "hsl(var(--chart-1))",
        },
        inProgress: {
          label: "In Progress",
          color: "hsl(var(--chart-2))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height={detailed ? 400 : 300}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="completed" fill="var(--color-completed)" stackId="a" />
          <Bar dataKey="inProgress" fill="var(--color-inProgress)" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
