"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, TrendingDown, TrendingUp } from "lucide-react"

export function InsightsTab() {
  const insights = [
    {
      id: "insight-1",
      title: "Increased Engagement in Technical Courses",
      description: "Technical courses have seen a 15% increase in engagement over the last month.",
      type: "positive",
      impact: "high",
    },
    {
      id: "insight-2",
      title: "Compliance Training Completion Rate Dropping",
      description: "Compliance training completion rates have decreased by 8% this month.",
      type: "negative",
      impact: "medium",
    },
    {
      id: "insight-3",
      title: "Mobile Learning on the Rise",
      description: "Mobile device usage for learning has increased by 22% in the last quarter.",
      type: "positive",
      impact: "medium",
    },
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
          <CardDescription>Automatically generated insights based on your learning data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight) => (
            <Card key={insight.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`rounded-full p-2 ${insight.type === "positive" ? "bg-green-100" : "bg-red-100"}`}>
                    {insight.type === "positive" ? (
                      <TrendingUp
                        className={`h-4 w-4 ${insight.type === "positive" ? "text-green-600" : "text-red-600"}`}
                      />
                    ) : (
                      <TrendingDown
                        className={`h-4 w-4 ${insight.type === "positive" ? "text-green-600" : "text-red-600"}`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{insight.title}</h3>
                      <Badge variant={insight.impact === "high" ? "default" : "outline"}>{insight.impact} impact</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" size="sm">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
          <CardDescription>AI-powered recommendations to improve learning outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Increase Mobile Learning Support</h4>
                <p className="text-sm text-muted-foreground">
                  Based on usage patterns, investing in better mobile learning experiences could increase engagement by
                  up to 30%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Simplify Compliance Training</h4>
                <p className="text-sm text-muted-foreground">
                  Breaking compliance courses into smaller modules could improve completion rates by 15-20%.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
