import type { Metadata } from "next"
import { PredictiveAnalytics } from "@/components/analytics/predictive-analytics"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Forecasting | Deekle.io Analytics",
  description: "AI-powered forecasting and predictive analytics",
}

export default function ForecastingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forecasting</h1>
          <p className="text-muted-foreground">AI-powered predictions and trend analysis</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Tabs defaultValue="predictions" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="scenarios">Scenario Planning</TabsTrigger>
        </TabsList>

        <TabsContent value="predictions" className="space-y-6">
          <PredictiveAnalytics />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Completion Forecasts</CardTitle>
                <CardDescription>Projected course completion rates by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] rounded-lg bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Completion forecast visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>Predicted platform resource usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] rounded-lg bg-muted p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Resource utilization forecast would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Long-term Trends</CardTitle>
              <CardDescription>Analysis of learning patterns over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-lg bg-muted p-4">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">Trend analysis visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scenario Planning</CardTitle>
              <CardDescription>Model different scenarios and their potential outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-lg bg-muted p-4">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">Scenario planning tools would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
