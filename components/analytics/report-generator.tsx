"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type ReportType = "users" | "courses" | "compliance" | "engagement"
type ChartType = "bar" | "line" | "pie" | "table"
type DateRange = "7days" | "30days" | "90days" | "custom"

export function ReportGenerator() {
  const [reportName, setReportName] = useState("")
  const [reportType, setReportType] = useState<ReportType | "">("")
  const [chartType, setChartType] = useState<ChartType>("bar")
  const [dateRange, setDateRange] = useState<DateRange | "">("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleGenerateReport = () => {
    if (!reportName || !reportType || !dateRange) {
      alert("Please fill in all required fields")
      return
    }

    setIsGenerating(true)
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      setShowPreview(true)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Report Name</label>
          <Input placeholder="Enter report name" value={reportName} onChange={(e) => setReportName(e.target.value)} />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Report Type</label>
          <Select value={reportType} onValueChange={(value: ReportType) => setReportType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="users">User Activity</SelectItem>
              <SelectItem value="courses">Course Completion</SelectItem>
              <SelectItem value="compliance">Compliance Status</SelectItem>
              <SelectItem value="engagement">Engagement Metrics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Date Range</label>
          <Select value={dateRange} onValueChange={(value: DateRange) => setDateRange(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Visualization Type</label>
        <Tabs value={chartType} onValueChange={(value: ChartType) => setChartType(value)}>
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="bar" className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:inline-block">Bar</span>
            </TabsTrigger>
            <TabsTrigger value="line" className="flex items-center gap-1">
              <LineChart className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:inline-block">Line</span>
            </TabsTrigger>
            <TabsTrigger value="pie" className="flex items-center gap-1">
              <PieChart className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:inline-block">Pie</span>
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" />
              </svg>
              <span className="sr-only sm:not-sr-only sm:inline-block">Table</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="text-sm font-medium">Filters</h3>

              {reportType === "users" && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-2 block">User Groups</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select user groups" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="active">Active Users</SelectItem>
                        <SelectItem value="inactive">Inactive Users</SelectItem>
                        <SelectItem value="new">New Users</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Activity Type</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Activities</SelectItem>
                        <SelectItem value="logins">Logins</SelectItem>
                        <SelectItem value="course-views">Course Views</SelectItem>
                        <SelectItem value="completions">Completions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {reportType === "courses" && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Course Category</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select course category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                        <SelectItem value="skills">Skills Development</SelectItem>
                        <SelectItem value="onboarding">Onboarding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Completion Status</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select completion status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="not-started">Not Started</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {reportType === "compliance" && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Compliance Type</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select compliance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="required">Required Training</SelectItem>
                        <SelectItem value="certifications">Certifications</SelectItem>
                        <SelectItem value="regulatory">Regulatory</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="compliant">Compliant</SelectItem>
                        <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                        <SelectItem value="expiring">Expiring Soon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {reportType === "engagement" && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Engagement Metric</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select engagement metric" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Metrics</SelectItem>
                        <SelectItem value="time-spent">Time Spent</SelectItem>
                        <SelectItem value="interactions">Interactions</SelectItem>
                        <SelectItem value="completion-rate">Completion Rate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content Type</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Content</SelectItem>
                        <SelectItem value="courses">Courses</SelectItem>
                        <SelectItem value="videos">Videos</SelectItem>
                        <SelectItem value="assessments">Assessments</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <div>
                <label className="text-sm font-medium mb-2 block">Additional Filters</label>
                <Input placeholder="Search by keyword" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="text-sm font-medium">Report Options</h3>

              <div>
                <label className="text-sm font-medium mb-2 block">Group By</label>
                <Select defaultValue="day">
                  <SelectTrigger>
                    <SelectValue placeholder="Select grouping" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="quarter">Quarter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Include in Report</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="summary" defaultChecked />
                    <Label htmlFor="summary" className="text-sm">
                      Summary
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="details" defaultChecked />
                    <Label htmlFor="details" className="text-sm">
                      Details
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="charts" defaultChecked />
                    <Label htmlFor="charts" className="text-sm">
                      Charts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="recommendations" defaultChecked />
                    <Label htmlFor="recommendations" className="text-sm">
                      AI Recommendations
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Save Settings</Button>
          <Button onClick={handleGenerateReport} disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Report"}
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm font-medium mb-4">Preview</h3>
          {showPreview ? (
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h2 className="text-xl font-bold">{reportName}</h2>
                <p className="text-sm text-muted-foreground">
                  {reportType === "users" && "User Activity Report"}
                  {reportType === "courses" && "Course Completion Report"}
                  {reportType === "compliance" && "Compliance Status Report"}
                  {reportType === "engagement" && "Engagement Metrics Report"}
                  {" • "}
                  {dateRange === "7days" && "Last 7 Days"}
                  {dateRange === "30days" && "Last 30 Days"}
                  {dateRange === "90days" && "Last 90 Days"}
                  {dateRange === "custom" && "Custom Date Range"}
                </p>
              </div>

              <div className="h-[300px] bg-muted/50 rounded-lg flex items-center justify-center">
                {chartType === "bar" && <BarChart className="h-16 w-16 text-muted-foreground" />}
                {chartType === "line" && <LineChart className="h-16 w-16 text-muted-foreground" />}
                {chartType === "pie" && <PieChart className="h-16 w-16 text-muted-foreground" />}
                {chartType === "table" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" />
                  </svg>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </Button>
                <Button variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CSV
                </Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Save Report
                </Button>
              </div>
            </div>
          ) : (
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">
                Configure your report and click "Generate Report" to see a preview
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// Also export CustomReportGenerator for backward compatibility
export const CustomReportGenerator = ReportGenerator
