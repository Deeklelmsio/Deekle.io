import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/analytics/date-range-picker"
import { OverviewStats } from "@/components/analytics/overview-stats"
import { RecentReports } from "@/components/analytics/recent-reports"
import { TopInsights } from "@/components/analytics/top-insights"
import { EngagementChart } from "@/components/analytics/engagement-chart"
import { ComplianceStatusChart } from "@/components/analytics/compliance-status-chart"
import { LearningProgressChart } from "@/components/analytics/learning-progress-chart"
import { Download, FileBarChart, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Analytics Dashboard | Deekle.io",
  description: "Comprehensive analytics and reporting dashboard with AI-powered insights",
}

export default function AnalyticsDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Get insights and visualize your learning and compliance data</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDateRangePicker />
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button>
            <FileBarChart className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="learning">Learning Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <OverviewStats />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Engagement Overview</CardTitle>
                <CardDescription>User activity and engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <EngagementChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top AI Insights</CardTitle>
                <CardDescription>AI-generated insights based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <TopInsights />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Current compliance metrics across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <ComplianceStatusChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Your recently generated reports</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export All
                </Button>
              </CardHeader>
              <CardContent>
                <RecentReports />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Engagement Analytics</CardTitle>
              <CardDescription>Detailed metrics on user activity and engagement</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <EngagementChart detailed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Analytics</CardTitle>
              <CardDescription>Detailed compliance status and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ComplianceStatusChart detailed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress Analytics</CardTitle>
              <CardDescription>Detailed metrics on learning progress and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <LearningProgressChart detailed />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
