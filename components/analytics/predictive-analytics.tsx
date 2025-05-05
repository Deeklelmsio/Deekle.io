"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

// Sample data for predictions
const samplePredictionData = [
  { month: "Jan", actual: 65, predicted: 68 },
  { month: "Feb", actual: 72, predicted: 70 },
  { month: "Mar", actual: 78, predicted: 80 },
  { month: "Apr", actual: 85, predicted: 84 },
  { month: "May", actual: 80, predicted: 82 },
  { month: "Jun", actual: 90, predicted: 88 },
  { month: "Jul", actual: null, predicted: 94 },
  { month: "Aug", actual: null, predicted: 98 },
  { month: "Sep", actual: null, predicted: 92 },
]

// Sample data for completion rate predictions
const completionPredictions = [
  { month: "Jan", actual: 45, predicted: 48 },
  { month: "Feb", actual: 52, predicted: 50 },
  { month: "Mar", actual: 58, predicted: 60 },
  { month: "Apr", actual: 65, predicted: 64 },
  { month: "May", actual: 60, predicted: 62 },
  { month: "Jun", actual: 70, predicted: 68 },
  { month: "Jul", actual: null, predicted: 74 },
  { month: "Aug", actual: null, predicted: 78 },
  { month: "Sep", actual: null, predicted: 72 },
]

// Sample data for engagement predictions
const engagementPredictions = [
  { month: "Jan", actual: 85, predicted: 88 },
  { month: "Feb", actual: 82, predicted: 80 },
  { month: "Mar", actual: 88, predicted: 90 },
  { month: "Apr", actual: 95, predicted: 94 },
  { month: "May", actual: 90, predicted: 92 },
  { month: "Jun", actual: 100, predicted: 98 },
  { month: "Jul", actual: null, predicted: 104 },
  { month: "Aug", actual: null, predicted: 108 },
  { month: "Sep", actual: null, predicted: 102 },
]

export function PredictiveAnalytics() {
  const [predictionType, setPredictionType] = useState("enrollment")
  const [timeframe, setTimeframe] = useState("3months")

  // Select the appropriate data based on prediction type
  const getPredictionData = () => {
    switch (predictionType) {
      case "enrollment":
        return samplePredictionData
      case "completion":
        return completionPredictions
      case "engagement":
        return engagementPredictions
      default:
        return samplePredictionData
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Predictive Analytics</CardTitle>
            <CardDescription>AI-powered predictions based on historical data</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={predictionType} onValueChange={setPredictionType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Prediction Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enrollment">Course Enrollment</SelectItem>
                <SelectItem value="completion">Completion Rate</SelectItem>
                <SelectItem value="engagement">User Engagement</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">Next 3 Months</SelectItem>
                <SelectItem value="6months">Next 6 Months</SelectItem>
                <SelectItem value="12months">Next 12 Months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="chart" className="w-full">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={getPredictionData()}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#8884d8"
                    name="Actual"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#82ca9d"
                    name="Predicted"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="insights">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-2 font-medium">Key Insights</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 rounded-full bg-green-500 p-1"></span>
                    <span>
                      {predictionType === "enrollment"
                        ? "Enrollment is predicted to increase by 12% in the next quarter based on current trends."
                        : predictionType === "completion"
                          ? "Completion rates are expected to improve by 8% with the introduction of new microlearning modules."
                          : "User engagement is projected to grow steadily with peak activity expected in August."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 rounded-full bg-blue-500 p-1"></span>
                    <span>
                      {predictionType === "enrollment"
                        ? "Seasonal patterns suggest higher enrollment in August-September."
                        : predictionType === "completion"
                          ? "Courses with interactive elements show 15% higher predicted completion rates."
                          : "Content engagement is predicted to be highest for video-based materials."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 rounded-full bg-yellow-500 p-1"></span>
                    <span>
                      {predictionType === "enrollment"
                        ? "Recommendation: Prepare additional resources for the predicted enrollment spike."
                        : predictionType === "completion"
                          ? "Recommendation: Focus on enhancing course interactivity to boost completion rates."
                          : "Recommendation: Increase video content production to capitalize on engagement trends."}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-2 font-medium">Confidence Level</h4>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
                  </div>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Based on 12 months of historical data and current learning patterns
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
