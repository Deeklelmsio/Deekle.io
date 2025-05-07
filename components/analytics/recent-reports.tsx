"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

// Mock data - in a real app, this would come from an API
const mockReports = [
  {
    id: 1,
    name: "Monthly User Activity",
    date: "May 3, 2025",
    type: "User Activity",
  },
  {
    id: 2,
    name: "Compliance Status Overview",
    date: "May 2, 2025",
    type: "Compliance",
  },
  {
    id: 3,
    name: "Course Completion Trends",
    date: "Apr 30, 2025",
    type: "Course Completion",
  },
]

export function RecentReports() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))
      setReports(mockReports)
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
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-3 bg-muted rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (reports.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[200px] text-center">
        <FileText className="h-8 w-8 text-muted-foreground mb-2" />
        <h3 className="font-medium mb-1">No reports yet</h3>
        <p className="text-sm text-muted-foreground">Generate your first report to see it here</p>
        <Button className="mt-4">Generate Report</Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <div key={report.id} className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-muted">
            <FileText className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{report.name}</h4>
            <p className="text-xs text-muted-foreground">
              {report.type} • {report.date}
            </p>
          </div>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
