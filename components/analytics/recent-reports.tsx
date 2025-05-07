"use client"

import { useAnalytics } from "@/contexts/analytics-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { FileText, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentReports() {
  const { reportsData, isLoading } = useAnalytics()

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-[150px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[200px]" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-1 flex-1">
                  <Skeleton className="h-5 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reports</CardTitle>
        <CardDescription>Recently generated analytics reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reportsData.slice(0, 3).map((report) => (
            <div key={report.id} className="flex items-center space-x-4">
              <FileText className="h-10 w-10 text-blue-500" />
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-medium leading-none">{report.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {new Date(report.date).toLocaleDateString()} by {report.author}
                </p>
              </div>
              <Button size="icon" variant="ghost">
                <Eye className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Button>
              <Button size="icon" variant="ghost">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
