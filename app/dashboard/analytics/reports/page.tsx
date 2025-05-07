import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportsTab } from "@/components/analytics/reports-tab"

export const metadata: Metadata = {
  title: "Reports | Analytics Dashboard",
  description: "Generate and view custom reports",
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and manage custom reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Generator</CardTitle>
          <CardDescription>Create custom reports based on your learning data</CardDescription>
        </CardHeader>
        <CardContent>
          <ReportsTab />
        </CardContent>
      </Card>
    </div>
  )
}
