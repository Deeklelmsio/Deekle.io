"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"
import type { PerformancePrediction } from "@/lib/ml/ml-service"

export function PerformancePredictionComponent({ userId = 1, courseId = 101 }) {
  const [prediction, setPrediction] = useState<PerformancePrediction | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/ml/performance-prediction?userId=${userId}&courseId=${courseId}`)
        const data = await response.json()

        if (!data.success) {
          throw new Error(data.error || "Failed to fetch performance prediction")
        }

        setPrediction(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching performance prediction:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrediction()
  }, [userId, courseId])

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
  }

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case "high":
        return <Badge variant="destructive">High Risk</Badge>
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Medium Risk
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Low Risk
          </Badge>
        )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Prediction</CardTitle>
        <CardDescription>AI-powered prediction of your course performance</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : !prediction ? (
          <div className="text-center py-4 text-muted-foreground">No prediction data available</div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Completion Probability</h3>
              {getRiskBadge(prediction.riskLevel)}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Predicted Completion Rate</span>
                <span className="text-sm font-medium">{Math.round(prediction.predictedCompletionRate * 100)}%</span>
              </div>
              <Progress value={prediction.predictedCompletionRate * 100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Predicted Score</span>
                <span className="text-sm font-medium">{prediction.predictedScore}/100</span>
              </div>
              <Progress value={prediction.predictedScore} className="h-2" />
            </div>

            <div className="flex items-center justify-between p-2 bg-muted rounded-md">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">Estimated Time to Complete</span>
              </div>
              <span className="text-sm font-medium">{formatTime(prediction.predictedTimeToComplete)}</span>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-medium">Strengths</h4>
              <ul className="space-y-1">
                {prediction.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-medium">Areas for Improvement</h4>
              <ul className="space-y-1">
                {prediction.areasForImprovement.map((area, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <AlertTriangle className="h-4 w-4 mr-2 text-amber-500 mt-0.5 shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
