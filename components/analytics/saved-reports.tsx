"use client"

// Sample data for saved reports
const sampleReports = [
  {
    id: "rep-001",
    name: "Monthly User Activity",
    type: "User Activity",
    created: "May 1, 2025",
    lastRun: "May 3, 2025",
    createdBy: "Admin",
  },
  {
    id: "rep-002",
    name: "Compliance Status Overview",
    type: "Compliance",
    created: "Apr 15, 2025",
    lastRun: "May 2, 2025",
    createdBy: "Admin",
  },
  {
    id: "rep-003",
    name: "Course Completion Trends",
    type: "Course Completion",
    created: "Apr 10, 2025",
    lastRun: "Apr 30, 2025",
    createdBy: "Admin",
  },
  {
    id: "rep-004",
    name: "Engagement Metrics Q2",
    type: "Engagement",
    created: "Apr 5, 2025",
    lastRun: "Apr 28, 2025",
    createdBy: "Admin",
  },
]

export function SavedReports() {
  return (
    <div className="flex flex-col items-center justify-center h-[200px] text-center">
      <h3 className="font-medium mb-1">No saved reports yet</h3>
      <p className="text-sm text-muted-foreground">Save a report to see it here</p>
    </div>
  )
}
