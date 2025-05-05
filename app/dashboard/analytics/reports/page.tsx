import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reports | Analytics Dashboard",
  description: "Generate and view custom reports",
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and manage custom reports</p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Report Generator</h3>
          <p className="text-sm text-muted-foreground">Create custom reports based on your learning data</p>
        </div>
        <div className="p-6 pt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Report Name</label>
                <input
                  type="text"
                  placeholder="Enter report name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Report Type</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="">Select report type</option>
                  <option value="users">User Activity</option>
                  <option value="courses">Course Completion</option>
                  <option value="compliance">Compliance Status</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="">Select date range</option>
                  <option value="7days">Last 7 Days</option>
                  <option value="30days">Last 30 Days</option>
                  <option value="90days">Last 90 Days</option>
                </select>
              </div>

              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Generate Report
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-[300px] text-center">
              <h3 className="font-medium mb-1">No reports yet</h3>
              <p className="text-sm text-muted-foreground">Generate your first report to see it here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
