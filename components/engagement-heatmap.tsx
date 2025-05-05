"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Download, LineChart, Brain, AlertCircle } from "lucide-react"

export function EngagementHeatmap() {
  const [timeframe, setTimeframe] = useState("month")
  const [dataType, setDataType] = useState("engagement")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Select defaultValue={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Past Week</SelectItem>
              <SelectItem value="month">Past Month</SelectItem>
              <SelectItem value="quarter">Past Quarter</SelectItem>
              <SelectItem value="year">Past Year</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={dataType} onValueChange={setDataType}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select data type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engagement">Engagement</SelectItem>
              <SelectItem value="retention">Retention</SelectItem>
              <SelectItem value="completion">Completion Rate</SelectItem>
              <SelectItem value="focus">Focus Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <LineChart className="mr-2 h-4 w-4" />
            View Trends
          </Button>
        </div>
      </div>

      <Tabs defaultValue="heatmap">
        <TabsList>
          <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
          <TabsTrigger value="patterns">Learning Patterns</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="heatmap" className="pt-4">
          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Learning Engagement Heatmap</h3>
              <p className="text-sm text-gray-500">
                Visualizing your learning activity patterns over the{" "}
                {timeframe === "week"
                  ? "past week"
                  : timeframe === "month"
                    ? "past month"
                    : timeframe === "quarter"
                      ? "past quarter"
                      : "past year"}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Time of Day</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">Low</span>
                  <div className="flex h-2">
                    <div className="w-4 h-2 bg-blue-100"></div>
                    <div className="w-4 h-2 bg-blue-200"></div>
                    <div className="w-4 h-2 bg-blue-300"></div>
                    <div className="w-4 h-2 bg-blue-400"></div>
                    <div className="w-4 h-2 bg-blue-500"></div>
                    <div className="w-4 h-2 bg-blue-600"></div>
                    <div className="w-4 h-2 bg-blue-700"></div>
                    <div className="w-4 h-2 bg-blue-800"></div>
                  </div>
                  <span className="text-xs text-gray-500">High</span>
                </div>
              </div>

              {/* This would be a real heatmap in a production environment */}
              <div className="border rounded-md overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 border-b border-r text-left font-medium">Hour</th>
                      <th className="p-2 border-b border-r text-center font-medium">Mon</th>
                      <th className="p-2 border-b border-r text-center font-medium">Tue</th>
                      <th className="p-2 border-b border-r text-center font-medium">Wed</th>
                      <th className="p-2 border-b border-r text-center font-medium">Thu</th>
                      <th className="p-2 border-b border-r text-center font-medium">Fri</th>
                      <th className="p-2 border-b border-r text-center font-medium">Sat</th>
                      <th className="p-2 border-b text-center font-medium">Sun</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        time: "6-8 AM",
                        values: [
                          "bg-blue-100",
                          "bg-blue-200",
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-200",
                          "bg-blue-300",
                          "bg-blue-400",
                        ],
                      },
                      {
                        time: "8-10 AM",
                        values: [
                          "bg-blue-300",
                          "bg-blue-200",
                          "bg-blue-400",
                          "bg-blue-300",
                          "bg-blue-200",
                          "bg-blue-500",
                          "bg-blue-300",
                        ],
                      },
                      {
                        time: "10-12 PM",
                        values: [
                          "bg-blue-200",
                          "bg-blue-300",
                          "bg-blue-200",
                          "bg-blue-300",
                          "bg-blue-200",
                          "bg-blue-400",
                          "bg-blue-200",
                        ],
                      },
                      {
                        time: "12-2 PM",
                        values: [
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-100",
                          "bg-blue-200",
                          "bg-blue-100",
                        ],
                      },
                      {
                        time: "2-4 PM",
                        values: [
                          "bg-blue-300",
                          "bg-blue-400",
                          "bg-blue-300",
                          "bg-blue-400",
                          "bg-blue-300",
                          "bg-blue-200",
                          "bg-blue-100",
                        ],
                      },
                      {
                        time: "4-6 PM",
                        values: [
                          "bg-blue-500",
                          "bg-blue-600",
                          "bg-blue-500",
                          "bg-blue-600",
                          "bg-blue-400",
                          "bg-blue-300",
                          "bg-blue-200",
                        ],
                      },
                      {
                        time: "6-8 PM",
                        values: [
                          "bg-blue-700",
                          "bg-blue-800",
                          "bg-blue-700",
                          "bg-blue-600",
                          "bg-blue-500",
                          "bg-blue-400",
                          "bg-blue-300",
                        ],
                      },
                      {
                        time: "8-10 PM",
                        values: [
                          "bg-blue-600",
                          "bg-blue-700",
                          "bg-blue-600",
                          "bg-blue-500",
                          "bg-blue-600",
                          "bg-blue-500",
                          "bg-blue-400",
                        ],
                      },
                      {
                        time: "10-12 AM",
                        values: [
                          "bg-blue-300",
                          "bg-blue-400",
                          "bg-blue-300",
                          "bg-blue-200",
                          "bg-blue-400",
                          "bg-blue-300",
                          "bg-blue-200",
                        ],
                      },
                    ].map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-2 border-r font-medium">{row.time}</td>
                        {row.values.map((cellColor, cellIndex) => (
                          <td key={cellIndex} className={`p-2 border-r last:border-r-0 ${cellColor}`}></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Optimal Learning Times</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Your highest engagement and retention occurs on weekday evenings between 6-8 PM. Consider scheduling
                    focused learning sessions during these peak times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-md">
                <Calendar className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Weekly Pattern Insights</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    You tend to be most consistent with learning on Tuesdays and Wednesdays. Weekend mornings also show
                    strong engagement, especially on Saturdays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="patterns" className="pt-4">
          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">Learning Pattern Analysis</h3>
              <p className="text-sm text-gray-500">Detailed breakdown of your learning behaviors and preferences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">Content Type Preferences</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Interactive Exercises</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Video Lectures</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Reading Materials</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quizzes & Assessments</span>
                      <span className="font-medium">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">Learning Session Duration</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Short (&lt; 15 min)</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Medium (15-30 min)</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Long (30-60 min)</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Extended (&gt; 60 min)</span>
                      <span className="font-medium">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-md">
                <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Learning Efficiency Patterns</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    You show highest retention and comprehension with medium-length sessions (15-30 minutes) followed by
                    short breaks. Your interactive exercise completion rate is 85% higher than the platform average.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-md">
                <Calendar className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Consistency Insights</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Your learning consistency has improved by 32% in the past month. You now maintain a 4-day weekly
                    average compared to 3 days in the previous period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="pt-4">
          <div className="border rounded-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-1">AI-Generated Learning Insights</h3>
              <p className="text-sm text-gray-500">Personalized recommendations based on your learning patterns</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-purple-50">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Optimize Your Learning Schedule</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Based on your heatmap data, you learn most effectively on weekday evenings between 6-8 PM. We
                      recommend scheduling your most challenging content during these peak performance times.
                    </p>
                    <div className="mt-3">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Optimize My Schedule
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">Personalized Learning Recommendations</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Content Type</Badge>
                    <p className="text-sm text-gray-700">
                      Your engagement is 85% higher with interactive exercises. We've adjusted your learning path to
                      prioritize hands-on activities and coding challenges.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Session Length</Badge>
                    <p className="text-sm text-gray-700">
                      You show optimal retention with 25-minute focused sessions. Try the Pomodoro technique (25 min
                      work, 5 min break) for your study sessions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Learning Sequence</Badge>
                    <p className="text-sm text-gray-700">
                      You perform better when theory is followed immediately by practice. We've restructured your
                      upcoming modules to follow this pattern.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">Learning Challenges & Solutions</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-md">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Challenge: Consistency Gaps on Thursdays and Fridays</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Your learning activity drops by 40% at the end of the work week.
                      </p>
                      <p className="text-sm font-medium text-blue-600 mt-1">
                        Solution: Schedule shorter, high-engagement sessions on these days to maintain momentum.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-md">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Challenge: Lower Completion Rate for Reading Materials</p>
                      <p className="text-sm text-gray-600 mt-1">
                        You complete only 45% of assigned reading materials compared to 85% of interactive exercises.
                      </p>
                      <p className="text-sm font-medium text-blue-600 mt-1">
                        Solution: Try the audio versions of readings or the summarized key points feature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
