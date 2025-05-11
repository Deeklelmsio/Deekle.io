"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function ComplianceStatusChart() {
  const { complianceData, isLoading } = useAnalytics()

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
        <CardContent className="flex justify-center">
          <Skeleton className="h-[200px] w-[200px] rounded-full" />
        </CardContent>
      </Card>
    )
  }

  const COLORS = ["#4CAF50", "#FFC107", "#F44336"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance Status</CardTitle>
        <CardDescription>Current compliance status distribution</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer
          config={{
            compliance: {
              label: "Compliance",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[250px] w-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={complianceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {complianceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
