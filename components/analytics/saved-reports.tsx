"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Calendar,
  Clock,
  Copy,
  Download,
  Edit,
  FileBarChart,
  MoreHorizontal,
  PieChart,
  Search,
  Share2,
  Trash2,
} from "lucide-react"

export function SavedReports() {
  const [searchQuery, setSearchQuery] = useState("")

  const reports = [
    {
      id: "rep-001",
      name: "Monthly Compliance Summary",
      type: "Compliance",
      created: "May 3, 2025",
      lastRun: "May 3, 2025",
      schedule: "Monthly",
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      id: "rep-002",
      name: "User Engagement Analysis",
      type: "Engagement",
      created: "May 2, 2025",
      lastRun: "May 2, 2025",
      schedule: null,
      icon: <PieChart className="h-4 w-4" />,
    },
    {
      id: "rep-003",
      name: "Learning Progress Report",
      type: "Learning",
      created: "May 1, 2025",
      lastRun: "May 1, 2025",
      schedule: "Weekly",
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      id: "rep-004",
      name: "Department Performance",
      type: "Performance",
      created: "Apr 28, 2025",
      lastRun: "Apr 28, 2025",
      schedule: null,
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      id: "rep-005",
      name: "Certification Status",
      type: "Compliance",
      created: "Apr 25, 2025",
      lastRun: "Apr 25, 2025",
      schedule: "Quarterly",
      icon: <FileBarChart className="h-4 w-4" />,
    },
  ]

  const filteredReports = reports.filter(
    (report) =>
      report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search reports..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <FileBarChart className="mr-2 h-4 w-4" />
          Import
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export All
        </Button>
      </div>

      <div className="border rounded-md">
        <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 text-sm font-medium">
          <div className="col-span-5">Report Name</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Created</div>
          <div className="col-span-2">Schedule</div>
          <div className="col-span-1"></div>
        </div>

        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <div key={report.id} className="grid grid-cols-12 gap-4 p-4 border-b items-center">
              <div className="col-span-5 flex items-center gap-3">
                <div className="bg-muted p-2 rounded-md">{report.icon}</div>
                <div>
                  <p className="font-medium">{report.name}</p>
                  <p className="text-xs text-muted-foreground">Last run: {report.lastRun}</p>
                </div>
              </div>
              <div className="col-span-2">
                <Badge variant="outline">{report.type}</Badge>
              </div>
              <div className="col-span-2 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {report.created}
              </div>
              <div className="col-span-2">
                {report.schedule ? (
                  <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                    <span className="text-sm">{report.schedule}</span>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">One-time</span>
                )}
              </div>
              <div className="col-span-1 flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="h-4 w-4 mr-2" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center">
            <FileBarChart className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <h3 className="text-lg font-medium">No reports found</h3>
            <p className="text-sm text-muted-foreground mb-4">No reports match your search criteria</p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
