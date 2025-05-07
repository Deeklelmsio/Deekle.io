"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewStats } from "./overview-stats"
import { EngagementChart } from "./engagement-chart"
import { ComplianceStatusChart } from "./compliance-status-chart"
import { LearningProgressChart } from "./learning-progress-chart"
import { TopInsights } from "./top-insights"
import { RecentReports } from "./recent-reports"
import { CalendarDateRangePicker } from "./date-range-picker"

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">View and analyze learning metrics and performance data</p>
        </div>
        <CalendarDateRangePicker />
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <OverviewStats />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>User engagement over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Current compliance training status</CardDescription>
              </CardHeader>
              <CardContent>
                <ComplianceStatusChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Insights</CardTitle>
                <CardDescription>AI-generated insights based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <TopInsights />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your recently generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentReports />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics</CardTitle>
              <CardDescription>Detailed user engagement analytics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <EngagementChart detailed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Detailed compliance training analytics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ComplianceStatusChart detailed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Detailed learning progress analytics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LearningProgressChart detailed />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
