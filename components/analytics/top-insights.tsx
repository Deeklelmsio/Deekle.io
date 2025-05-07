"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, TrendingUp, Users } from "lucide-react"

// Mock data - in a real app, this would come from an API
const mockInsights = [
  {
    id: 1,
    title: "Increased Engagement",
    description: "Technical courses have seen a 15% increase in engagement over the last month.",
    icon: <TrendingUp className="h-4 w-4 text-green-500" />,
    iconBg: "bg-green-100",
    action: "View details",
  },
  {
    id: 2,
    title: "Compliance Training",
    description: "Compliance training completion rates have decreased by 8% this month.",
    icon: <TrendingDown className="h-4 w-4 text-red-500" />,
    iconBg: "bg-red-100",
    action: "Take action",
  },
  {
    id: 3,
    title: "New User Growth",
    description: "New user registrations have grown by 22% this quarter.",
    icon: <Users className="h-4 w-4 text-blue-500" />,
    iconBg: "bg-blue-100",
    action: "View user data",
  },
]

export function TopInsights() {
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 900))
      setInsights(mockInsights)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-3 animate-pulse">
            <div className="w-8 h-8 rounded-full bg-muted"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-muted rounded w-1/3"></div>
              <div className="h-3 bg-muted rounded w-full"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <div key={insight.id} className="flex items-start gap-3">
          <div className={`p-2 rounded-full ${insight.iconBg}`}>{insight.icon}</div>
          <div className="flex-1">
            <h4 className="font-medium">{insight.title}</h4>
            <p className="text-sm text-muted-foreground">{insight.description}</p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-1">
              {insight.action} <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
