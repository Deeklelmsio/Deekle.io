"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ArrowRight, Brain, Clock, LineChart, TrendingDown, TrendingUp, Users } from "lucide-react"

// Mock data for insights
const mockInsights = [
  {
    id: "ins-001",
    title: "Compliance Risk Alert",
    description:
      "Data Privacy training completion rate has dropped by 15% this month. 28 users have overdue certifications that expire in the next 7 days.",
    category: "compliance",
    priority: "high",
    icon: <AlertCircle className="h-4 w-4 text-red-600" />,
    iconBg: "bg-red-100",
    actions: ["View affected users", "Send reminders", "Generate compliance report"],
  },
  {
    id: "ins-002",
    title: "Engagement Opportunity",
    description:
      "Mobile engagement is 35% lower than desktop. Consider optimizing mobile content and sending push notifications to increase mobile usage.",
    category: "engagement",
    priority: "medium",
    icon: <TrendingDown className="h-4 w-4 text-amber-600" />,
    iconBg: "bg-amber-100",
    actions: ["View mobile analytics", "Optimize mobile content", "Set up notifications"],
  },
  {
    id: "ins-003",
    title: "Content Effectiveness",
    description:
      "Interactive content shows 42% higher retention rates than video lectures. Consider converting 5 of your top video courses to interactive formats.",
    category: "learning",
    priority: "medium",
    icon: <Brain className="h-4 w-4 text-purple-600" />,
    iconBg: "bg-purple-100",
    actions: ["View content analytics", "Identify conversion candidates", "Schedule content updates"],
  },
  {
    id: "ins-004",
    title: "Learning Time Optimization",
    description:
      "Users who learn between 2-4 PM show 28% higher completion rates. Consider scheduling important training sessions during this time window.",
    category: "learning",
    priority: "low",
    icon: <Clock className="h-4 w-4 text-blue-600" />,
    iconBg: "bg-blue-100",
    actions: ["View time analytics", "Schedule training sessions", "Send calendar invites"],
  },
  {
    id: "ins-005",
    title: "Positive Trend: Certification Completions",
    description:
      "Certification completions have increased by 23% this quarter, with the Engineering department showing the highest improvement at 35%.",
    category: "compliance",
    priority: "info",
    icon: <TrendingUp className="h-4 w-4 text-green-600" />,
    iconBg: "bg-green-100",
    actions: ["View certification analytics", "Share success story", "Recognize top performers"],
  },
  {
    id: "ins-006",
    title: "User Segment Analysis",
    description:
      "New employees (0-90 days) are completing onboarding courses 15% faster than the previous cohort. The improved course structure is showing positive results.",
    category: "engagement",
    priority: "info",
    icon: <Users className="h-4 w-4 text-indigo-600" />,
    iconBg: "bg-indigo-100",
    actions: ["View segment details", "Compare with previous cohort", "Export analysis"],
  },
]

export function AIInsights() {
  const [insightCategory, setInsightCategory] = useState("all")
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))
      setInsights(mockInsights)
      setLoading(false)
    }

    fetchData()
  }, [])

  const filteredInsights =
    insightCategory === "all" ? insights : insights.filter((insight) => insight.category === insightCategory)

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
      case "medium":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Low Priority</Badge>
      case "info":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Information</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={insightCategory} onValueChange={setInsightCategory}>
        <TabsList>
          <TabsTrigger value="all">All Insights</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>
      </Tabs>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[150px] bg-muted/50 animate-pulse rounded-md" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredInsights.map((insight) => (
            <div key={insight.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-full ${insight.iconBg}`}>{insight.icon}</div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-medium">{insight.title}</h3>
                    {getPriorityBadge(insight.priority)}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {insight.actions.map((action, index) => (
                  <Button key={index} variant="outline" size="sm" className="text-xs">
                    {action}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border rounded-lg p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-full">
            <Brain className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium">AI Insight Summary</h3>
            <p className="text-sm text-gray-600 mt-1">
              Based on the analysis of your learning and compliance data, here are the key areas that require attention:
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Compliance Risk Level</span>
              <span className="text-sm font-medium text-amber-600">Medium</span>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">
              28 users with overdue certifications require immediate attention
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Content Effectiveness</span>
              <span className="text-sm font-medium text-green-600">Good</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">
              Interactive content is performing well, but video content needs optimization
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Mobile Engagement</span>
              <span className="text-sm font-medium text-red-600">Needs Improvement</span>
            </div>
            <Progress value={35} className="h-2" />
            <p className="text-xs text-gray-500 mt-1">
              Mobile engagement is significantly lower than desktop engagement
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button>
            <LineChart className="mr-2 h-4 w-4" />
            View Detailed Analysis
          </Button>
        </div>
      </div>
    </div>
  )
}
