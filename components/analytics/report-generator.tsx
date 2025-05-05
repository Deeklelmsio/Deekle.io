"use client"

type ReportType = "users" | "courses" | "compliance" | "engagement"
type ChartType = "bar" | "line" | "pie" | "table"

export function ReportGenerator() {
  return (
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
  )
}

// Also export as CustomReportGenerator for backward compatibility
export const CustomReportGenerator = ReportGenerator
