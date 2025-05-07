"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Clock, BookOpen, ArrowRight } from "lucide-react"
import type { RecommendationItem } from "@/lib/ml/ml-service"

export function CourseRecommendations({ userId = 1 }) {
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/ml/recommendations?userId=${userId}`)
        const data = await response.json()

        if (!data.success) {
          throw new Error(data.error || "Failed to fetch recommendations")
        }

        setRecommendations(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching recommendations:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [userId])

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Recommendations</CardTitle>
        <CardDescription>AI-powered course recommendations based on your learning patterns</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start space-x-4">
                <Skeleton className="h-12 w-12 rounded-md" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : recommendations.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">No recommendations available</div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                <div className="bg-primary/10 p-3 rounded-md">
                  {item.type === "course" ? (
                    <BookOpen className="h-6 w-6 text-primary" />
                  ) : (
                    <BookOpen className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {item.estimatedTime && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {formatTime(item.estimatedTime)}
                      </div>
                    )}
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="pt-2 text-center">
              <Button variant="outline">View All Recommendations</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
