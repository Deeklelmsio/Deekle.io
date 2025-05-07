"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, Award, BarChart } from "lucide-react"

export function OverviewStats() {
  const { overviewData, isLoading } = useAnalytics()

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-[100px]" />
              </CardTitle>
              <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-7 w-[60px] mb-1" />
              <Skeleton className="h-4 w-[100px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const stats = [
    {
      title: "Total Users",
      value: overviewData?.totalUsers || 0,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      description: "Total registered users",
    },
    {
      title: "Active Users",
      value: overviewData?.activeUsers || 0,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      description: "Active in last 30 days",
    },
    {
      title: "Completion Rate",
      value: `${overviewData?.completionRate || 0}%`,
      icon: <Award className="h-4 w-4 text-muted-foreground" />,
      description: "Average course completion",
    },
    {
      title: "Average Score",
      value: overviewData?.averageScore || 0,
      icon: <BarChart className="h-4 w-4 text-muted-foreground" />,
      description: "Average assessment score",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
