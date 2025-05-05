"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const forecastData = [
  { month: "Jan", actual: 65, predicted: 65 },
  { month: "Feb", actual: 72, predicted: 72 },
  { month: "Mar", actual: 78, predicted: 78 },
  { month: "Apr", actual: 85, predicted: 85 },
  { month: "May", actual: 80, predicted: 80 },
  { month: "Jun", actual: null, predicted: 88 },
  { month: "Jul", actual: null, predicted: 94 },
  { month: "Aug", actual: null, predicted: 98 },
]

export function ForecastingTab() {
  const [forecastType, setForecastType] = useState("enrollment")

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Enrollment Forecast</CardTitle>
            <CardDescription>Predicted enrollment trends for the next 3 months</CardDescription>
          </div>
          <Select value={forecastType} onValueChange={setForecastType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select forecast type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enrollment">Enrollment</SelectItem>
              <SelectItem value="completion">Completion</SelectItem>
              <SelectItem value="engagement">Engagement</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} name="Actual" />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                  name="Predicted"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Predictions</CardTitle>
          <CardDescription>AI-generated predictions based on historical data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Enrollment Growth</h3>
              <p className="text-sm text-muted-foreground">
                Enrollment is predicted to increase by 15% in the next quarter based on current trends and seasonality
                patterns.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Completion Rate Improvement</h3>
              <p className="text-sm text-muted-foreground">
                Course completion rates are expected to improve by 8% with the introduction of new microlearning
                modules.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Mobile Usage Trend</h3>
              <p className="text-sm text-muted-foreground">
                Mobile learning is projected to become the primary access method for 60% of users by the end of the next
                quarter.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
