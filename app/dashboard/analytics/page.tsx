import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics Dashboard | Deekle.io",
  description: "View and analyze learning metrics and performance data",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground">View and analyze learning metrics and performance data</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Simple stat cards */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Users</h3>
          </div>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Active Courses</h3>
          </div>
          <div className="text-2xl font-bold">87</div>
          <p className="text-xs text-muted-foreground">+4 since last month</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Completion Rate</h3>
          </div>
          <div className="text-2xl font-bold">76%</div>
          <p className="text-xs text-muted-foreground">+2% from last month</p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Compliance Status</h3>
          </div>
          <div className="text-2xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground">+3% from last month</p>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Monthly Activity</h3>
          <p className="text-sm text-muted-foreground">User and course activity over the past 5 months</p>
        </div>
        <div className="p-6 pt-0">
          <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
            <p className="text-muted-foreground">Chart visualization would appear here</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Top Insights</h3>
            <p className="text-sm text-muted-foreground">AI-generated insights based on your data</p>
          </div>
          <div className="p-6 pt-0">
            <ul className="space-y-4">
              <li className="border-b pb-4">
                <h4 className="font-medium">Increased Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  Technical courses have seen a 15% increase in engagement.
                </p>
              </li>
              <li className="border-b pb-4">
                <h4 className="font-medium">Compliance Training</h4>
                <p className="text-sm text-muted-foreground">
                  Compliance training completion rates have decreased by 8%.
                </p>
              </li>
              <li>
                <h4 className="font-medium">Mobile Learning</h4>
                <p className="text-sm text-muted-foreground">Mobile device usage for learning has increased by 22%.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Recent Reports</h3>
            <p className="text-sm text-muted-foreground">Your recently generated reports</p>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col items-center justify-center h-[200px] text-center">
              <h3 className="font-medium mb-1">No reports yet</h3>
              <p className="text-sm text-muted-foreground">Generate your first report to see it here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
