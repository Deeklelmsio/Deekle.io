"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { DateRangePicker } from "@/components/analytics/date-range-picker"
import { OverviewStats } from "@/components/analytics/overview-stats"
import { EngagementChart } from "@/components/analytics/engagement-chart"
import { ComplianceStatusChart } from "@/components/analytics/compliance-status-chart"
import { LearningProgressChart } from "@/components/analytics/learning-progress-chart"
import { TopInsights } from "@/components/analytics/top-insights"
import { RecentReports } from "@/components/analytics/recent-reports"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export function AnalyticsDashboard() {
  const { refreshData, isLoading } = useAnalytics()

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <DateRangePicker />
          <Button variant="outline" size="icon" onClick={() => refreshData()} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            <span className="sr-only">Refresh</span>
          </Button>
        </div>
      </div>

      <OverviewStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EngagementChart />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ComplianceStatusChart />
          <LearningProgressChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopInsights />
        <RecentReports />
      </div>
    </div>
  )
}
