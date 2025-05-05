"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SavedReports } from "@/components/analytics/saved-reports"
import { ReportGenerator } from "@/components/analytics/report-generator"
import { FileBarChart, Plus } from "lucide-react"

export function ReportsPageClient() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Report Generator</h1>
          <p className="text-muted-foreground">Create, save, and schedule custom reports</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Report
        </Button>
      </div>

      <Tabs defaultValue="generator" className="space-y-4">
        <TabsList>
          <TabsTrigger value="generator">Report Generator</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <Card>
            <CardHeader>
              <CardTitle>Create Custom Report</CardTitle>
              <CardDescription>Select data sources, filters, and visualization options</CardDescription>
            </CardHeader>
            <CardContent>
              <ReportGenerator />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Reports</CardTitle>
              <CardDescription>Access and manage your saved reports</CardDescription>
            </CardHeader>
            <CardContent>
              <SavedReports />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Manage your automated report schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8 text-center">
                <div className="space-y-3">
                  <FileBarChart className="h-12 w-12 text-muted-foreground mx-auto" />
                  <h3 className="text-lg font-medium">No Scheduled Reports</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    You haven't scheduled any reports yet. Create a report and set up a schedule to automate your
                    reporting.
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Schedule a Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ReportsPageClient
