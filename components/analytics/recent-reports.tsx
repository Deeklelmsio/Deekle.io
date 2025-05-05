"use client"

import { Button } from "@/components/ui/button"
import { Download, Eye, FileBarChart, FileText, PieChart } from "lucide-react"

export function RecentReports() {
  const reports = [
    {
      id: "rep-001",
      name: "Monthly Compliance Summary",
      type: "Compliance",
      date: "May 3, 2025",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "rep-002",
      name: "User Engagement Analysis",
      type: "Engagement",
      date: "May 2, 2025",
      icon: <PieChart className="h-4 w-4" />,
    },
    {
      id: "rep-003",
      name: "Learning Progress Report",
      type: "Learning",
      date: "May 1, 2025",
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      id: "rep-004",
      name: "Department Performance",
      type: "Performance",
      date: "Apr 28, 2025",
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      id: "rep-005",
      name: "Certification Status",
      type: "Compliance",
      date: "Apr 25, 2025",
      icon: <FileText className="h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <div key={report.id} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="bg-muted p-2 rounded-md">{report.icon}</div>
            <div>
              <p className="font-medium">{report.name}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{report.type}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{report.date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
