"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Download, FileText, MoreHorizontal, Search, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  const [searchTerm, setSearchTerm] = useState("")
  const [reports, setReports] = useState(sampleReports)

  const filteredReports = reports.filter((report) => report.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDelete = (id: string) => {
    setReports(reports.filter((report) => report.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search reports..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Import
        </Button>
      </div>

      {filteredReports.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <BarChart className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-lg font-medium">No reports found</p>
            <p className="text-sm text-muted-foreground mt-1">
              {searchTerm
                ? `No reports matching "${searchTerm}"`
                : "You haven't created any reports yet. Generate a new report to get started."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Run</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>{report.created}</TableCell>
                  <TableCell>{report.lastRun}</TableCell>
                  <TableCell>{report.createdBy}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <BarChart className="mr-2 h-4 w-4" />
                          Run Report
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          Edit Report
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDelete(report.id)} className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
