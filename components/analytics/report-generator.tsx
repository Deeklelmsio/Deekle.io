"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CalendarDateRangePicker } from "@/components/analytics/date-range-picker"
import { BarChart, LineChart, PieChart, Table } from "lucide-react"

export function ReportGenerator() {
  const [reportType, setReportType] = useState("compliance")
  const [visualizationType, setVisualizationType] = useState("chart")
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="report-name">Report Name</Label>
            <Input id="report-name" placeholder="Enter report name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="report-type">Report Type</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compliance">Compliance Report</SelectItem>
                <SelectItem value="engagement">User Engagement Report</SelectItem>
                <SelectItem value="learning">Learning Progress Report</SelectItem>
                <SelectItem value="performance">Performance Report</SelectItem>
                <SelectItem value="custom">Custom Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Date Range</Label>
            <CalendarDateRangePicker className="w-full" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Data Sources</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="source-users" defaultChecked />
                <label
                  htmlFor="source-users"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  User Data
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="source-courses" defaultChecked />
                <label
                  htmlFor="source-courses"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course Data
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="source-compliance" defaultChecked />
                <label
                  htmlFor="source-compliance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Compliance Data
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="source-assessments" />
                <label
                  htmlFor="source-assessments"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Assessment Data
                </label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Filters</Label>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="not-started">Not Started</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Course Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="skills">Skills Development</SelectItem>
                    <SelectItem value="onboarding">Onboarding</SelectItem>
                    <SelectItem value="certification">Certification</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Completion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Completion Rates</SelectItem>
                    <SelectItem value="high">High (>80%)</SelectItem>
                    <SelectItem value="medium">Medium (50-80%)</SelectItem>
                    <SelectItem value="low">Low (<50%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Visualization Type</Label>
            <RadioGroup defaultValue="chart" value={visualizationType} onValueChange={setVisualizationType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chart" id="viz-chart" />
                <Label htmlFor="viz-chart" className="flex items-center">
                  <BarChart className="h-4 w-4 mr-2" />
                  Charts & Graphs
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="table" id="viz-table" />
                <Label htmlFor="viz-table" className="flex items-center">
                  <Table className="h-4 w-4 mr-2" />
                  Data Tables
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="viz-both" />
                <Label htmlFor="viz-both">Both</Label>
              </div>
            </RadioGroup>
          </div>
          
          {visualizationType !== "table" && (
            <div className="space-y-2">
              <Label>Chart Type</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="flex flex-col items-center justify-center h-20 p-2">
                  <BarChart className="h-8 w-8 mb-1" />
                  <span className="text-xs">Bar Chart</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-20 p-2">
                  <LineChart className="h-8 w-8 mb-1" />
                  <span className="text-xs">Line Chart</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-20 p-2">
                  <PieChart className="h-8 w-8 mb-1" />
                  <span className="text-xs">Pie Chart</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center justify-center h-20 p-2">
                  <BarChart className="h-8 w-8 mb-1 rotate-90" />
                  <span className="text-xs">Horizontal Bar</span>
                </Button>
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label>Export Format</Label>
            <Select defaultValue="pdf">
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF Document</SelectItem>
                <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                <SelectItem value="csv">CSV File</SelectItem>
                <SelectItem value="image">Image (PNG)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Report Preview</h3>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center p-12 border-2 border-dashed rounded-lg">
              <div className="text-center">
                <BarChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Report Preview</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Configure your report options above to generate a preview
                </p>
                <Button>Generate Preview</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline">Save as Template</Button>
        <Button variant="outline">Schedule Report</Button>
        <Button>Generate Report</Button>
      </div>
    </div>
  )
}
