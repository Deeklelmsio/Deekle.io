"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function PredictiveAnalytics() {
  const { predictiveData, isLoading } = useAnalytics()

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-[180px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[250px]" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill Gap Analysis</CardTitle>
        <CardDescription>Current skill levels vs. required levels</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            current: {
              label: "Current Level",
              color: "hsl(var(--chart-1))",
            },
            required: {
              label: "Required Level",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={predictiveData?.skillGapsForecast || []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="skill" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="current" fill="var(--color-current)" name="Current Level" />
              <Bar dataKey="required" fill="var(--color-required)" name="Required Level" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
