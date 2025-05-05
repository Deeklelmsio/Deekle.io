"use client"

import { Badge } from "@/components/ui/badge"
import { Brain, TrendingDown, TrendingUp } from "lucide-react"

export function TopInsights() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <div className="bg-blue-100 p-2 rounded-full">
          <Brain className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Compliance Risk Alert</h3>
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
          </div>
          <p className="text-sm text-gray-700 mt-1">
            Data Privacy training completion rate has dropped by 15% this month. 28 users have overdue certifications
            that expire in the next 7 days.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
        <div className="bg-green-100 p-2 rounded-full">
          <TrendingUp className="h-4 w-4 text-green-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Positive Trend</h3>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Insight</Badge>
          </div>
          <p className="text-sm text-gray-700 mt-1">
            Course completion rates have increased by 12% after implementing the new microlearning modules. Average time
            to completion reduced by 25%.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
        <div className="bg-amber-100 p-2 rounded-full">
          <TrendingDown className="h-4 w-4 text-amber-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Engagement Opportunity</h3>
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Recommendation</Badge>
          </div>
          <p className="text-sm text-gray-700 mt-1">
            Mobile engagement is 35% lower than desktop. Consider optimizing mobile content and sending push
            notifications to increase mobile usage.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
        <div className="bg-purple-100 p-2 rounded-full">
          <Brain className="h-4 w-4 text-purple-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Content Effectiveness</h3>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">AI Analysis</Badge>
          </div>
          <p className="text-sm text-gray-700 mt-1">
            Interactive content shows 42% higher retention rates than video lectures. Consider converting 5 of your top
            video courses to interactive formats.
          </p>
        </div>
      </div>
    </div>
  )
}
