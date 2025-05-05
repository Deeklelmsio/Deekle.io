import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIInsights } from "@/components/analytics/ai-insights"
import { AnomalyDetection } from "@/components/analytics/anomaly-detection"
import { PredictiveAnalytics } from "@/components/analytics/predictive-analytics"
import { Brain, Download, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Insights | Analytics Dashboard",
  description: "AI-powered insights and recommendations based on your learning data",
}

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
          <p className="text-muted-foreground">AI-powered analytics and recommendations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">AI Analytics Assistant</h2>
                <p className="text-purple-100 max-w-xl">
                  Ask questions about your data in natural language and get instant insights
                </p>
              </div>
            </div>
            <Button className="bg-white text-purple-600 hover:bg-purple-50">Ask a Question</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="insights" className="space-y-4">
        <TabsList>
          <TabsTrigger value="insights">Key Insights</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
              <CardDescription>
                Automatically generated insights based on your learning and compliance data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AIInsights />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anomalies">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection</CardTitle>
              <CardDescription>AI-detected anomalies and unusual patterns in your data</CardDescription>
            </CardHeader>
            <CardContent>
              <AnomalyDetection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics</CardTitle>
              <CardDescription>AI-powered forecasts and predictions based on historical data</CardDescription>
            </CardHeader>
            <CardContent>
              <PredictiveAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
