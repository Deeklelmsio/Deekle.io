"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

export function AnomalyDetection() {
  const { anomaliesData, isLoading } = useAnalytics()

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
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
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

  const getBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High Severity</Badge>
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Medium Severity
          </Badge>
        )
      default:
        return <Badge variant="outline">Low Severity</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Anomaly Detection</CardTitle>
        <CardDescription>AI-detected anomalies in learning patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {anomaliesData.length > 0 ? (
            anomaliesData.map((anomaly) => (
              <div key={anomaly.id} className="flex items-start space-x-4">
                <AlertTriangle className="h-10 w-10 text-red-500" />
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-medium leading-none">{anomaly.title}</h4>
                  <p className="text-sm text-muted-foreground">{anomaly.description}</p>
                  <div className="flex justify-between items-center pt-1">
                    {getBadge(anomaly.severity)}
                    <span className="text-xs text-muted-foreground">{new Date(anomaly.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground">No anomalies detected</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
