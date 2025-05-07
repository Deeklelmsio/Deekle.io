"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, TrendingUp, Info } from "lucide-react"

export function TopInsights() {
  const { insightsData, isLoading } = useAnalytics()

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-[150px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[200px]" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-[200px]" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-[80px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const getIcon = (impact: string) => {
    switch (impact) {
      case "high":
        return <AlertCircle className="h-10 w-10 text-red-500" />
      case "medium":
        return <TrendingUp className="h-10 w-10 text-amber-500" />
      default:
        return <Info className="h-10 w-10 text-blue-500" />
    }
  }

  const getBadge = (impact: string) => {
    switch (impact) {
      case "high":
        return <Badge variant="destructive">High Impact</Badge>
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Medium Impact
          </Badge>
        )
      default:
        return <Badge variant="outline">Low Impact</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Insights</CardTitle>
        <CardDescription>AI-generated insights from your learning data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insightsData.slice(0, 3).map((insight) => (
            <div key={insight.id} className="flex items-start space-x-4">
              {getIcon(insight.impact)}
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-medium leading-none">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="flex justify-between items-center pt-1">
                  {getBadge(insight.impact)}
                  <span className="text-xs text-muted-foreground">{new Date(insight.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
