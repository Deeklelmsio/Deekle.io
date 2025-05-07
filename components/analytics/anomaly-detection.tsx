"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowRight, TrendingDown } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const mockData = {
  engagement: [
    { date: "Apr 24", expected: 120, actual: 118 },
    { date: "Apr 25", expected: 132, actual: 130 },
    { date: "Apr 26", expected: 125, actual: 123 },
    { date: "Apr 27", expected: 130, actual: 128 },
    { date: "Apr 28", expected: 142, actual: 140 },
    { date: "Apr 29", expected: 135, actual: 132 },
    { date: "Apr 30", expected: 140, actual: 137 },
    { date: "May 1", expected: 145, actual: 142 },
    { date: "May 2", expected: 150, actual: 85 }, // Anomaly
    { date: "May 3", expected: 155, actual: 90 }, // Anomaly
  ],
  completion: [
    { date: "Apr 24", expected: 42, actual: 40 },
    { date: "Apr 25", expected: 45, actual: 43 },
    { date: "Apr 26", expected: 40, actual: 38 },
    { date: "Apr 27", expected: 38, actual: 36 },
    { date: "Apr 28", expected: 44, actual: 15 }, // Anomaly
    { date: "Apr 29", expected: 46, actual: 18 }, // Anomaly
    { date: "Apr 30", expected: 48, actual: 20 }, // Anomaly
    { date: "May 1", expected: 50, actual: 48 },
    { date: "May 2", expected: 52, actual: 50 },
    { date: "May 3", expected: 55, actual: 53 },
  ],
  compliance: [
    { date: "Apr 24", expected: 88, actual: 87 },
    { date: "Apr 25", expected: 88, actual: 86 },
    { date: "Apr 26", expected: 89, actual: 87 },
    { date: "Apr 27", expected: 89, actual: 88 },
    { date: "Apr 28", expected: 90, actual: 89 },
    { date: "Apr 29", expected: 90, actual: 88 },
    { date: "Apr 30", expected: 91, actual: 90 },
    { date: "May 1", expected: 91, actual: 75 }, // Anomaly
    { date: "May 2", expected: 92, actual: 76 }, // Anomaly
    { date: "May 3", expected: 92, actual: 78 }, // Anomaly
  ],
  all: [],
}

const mockAnomalies = [
  {
    id: "anom-001",
    title: "Significant Drop in User Engagement",
    description: "User engagement dropped by 43% on May 2-3, 2025, which is significantly outside the normal range.",
    category: "engagement",
    severity: "high",
    detectedAt: "May 3, 2025",
    affectedMetrics: ["Active Users", "Session Duration", "Course Views"],
    possibleCauses: ["Platform outage", "Authentication issues", "UI/UX problems"],
  },
  {
    id: "anom-002",
    title: "Course Completion Rate Anomaly",
    description:
      "Course completion rates dropped by 65% between Apr 28-30, 2025, which is significantly below the expected trend.",
    category: "completion",
    severity: "high",
    detectedAt: "Apr 30, 2025",
    affectedMetrics: ["Course Completions", "Module Progress", "Assessment Submissions"],
    possibleCauses: ["Technical issues with course content", "Assessment loading errors", "Progress tracking failure"],
  },
  {
    id: "anom-003",
    title: "Compliance Rate Decline",
    description: "Compliance rate dropped by 17% on May 1-3, 2025, which is outside the expected range.",
    category: "compliance",
    severity: "medium",
    detectedAt: "May 3, 2025",
    affectedMetrics: ["Compliance Completion", "Required Training Status", "Certification Status"],
    possibleCauses: [
      "Certification expiration notifications not sent",
      "New compliance requirements added",
      "System tracking issues",
    ],
  },
]

export function AnomalyDetection() {
  const [activeTab, setActiveTab] = useState("engagement")
  const [chartData, setChartData] = useState([])
  const [anomalies, setAnomalies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      if (activeTab === "all") {
        setAnomalies(mockAnomalies)
      } else {
        setChartData(mockData[activeTab])
        setAnomalies(mockAnomalies.filter((anomaly) => anomaly.category === activeTab))
      }

      setLoading(false)
    }

    fetchData()
  }, [activeTab])

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-destructive text-destructive-foreground"
      case "medium":
        return "bg-warning text-warning-foreground"
      case "low":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Anomaly Detection</CardTitle>
        <CardDescription>AI-powered detection of unusual patterns in your learning data</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="engagement" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="completion">Completion</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="all">All Anomalies</TabsTrigger>
          </TabsList>

          {activeTab !== "all" && (
            <TabsContent value={activeTab} className="space-y-4">
              {loading ? (
                <div className="h-[300px] bg-muted/50 animate-pulse rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Loading chart data...</p>
                </div>
              ) : (
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      expected: {
                        label: "Expected",
                        color: "hsl(var(--chart-1))",
                      },
                      actual: {
                        label: "Actual",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="expected"
                          stroke="var(--color-expected)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="actual"
                          stroke="var(--color-actual)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              )}
            </TabsContent>
          )}

          <div className="space-y-4 mt-6">
            <h3 className="text-lg font-medium">
              {loading ? (
                <div className="h-6 w-32 bg-muted animate-pulse rounded-md" />
              ) : (
                <>
                  {anomalies.length} {anomalies.length === 1 ? "Anomaly" : "Anomalies"} Detected
                </>
              )}
            </h3>

            {loading ? (
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="h-[120px] bg-muted/50 animate-pulse rounded-md" />
                ))}
              </div>
            ) : anomalies.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">No anomalies detected</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  All metrics are within expected ranges for this category.
                </p>
              </div>
            ) : (
              anomalies.map((anomaly) => (
                <Alert key={anomaly.id} variant="destructive" className="border-l-4 border-destructive">
                  <div className="flex items-start justify-between">
                    <div>
                      <AlertTitle className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4" />
                        {anomaly.title}
                        <Badge className={`ml-2 ${getSeverityColor(anomaly.severity)}`}>{anomaly.severity}</Badge>
                      </AlertTitle>
                      <AlertDescription className="mt-1">
                        <p className="text-sm text-muted-foreground mb-2">{anomaly.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-xs font-medium">Detected</p>
                            <p className="text-sm">{anomaly.detectedAt}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium">Affected Metrics</p>
                            <p className="text-sm">{anomaly.affectedMetrics.join(", ")}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium">Possible Causes</p>
                            <p className="text-sm">{anomaly.possibleCauses.join(", ")}</p>
                          </div>
                        </div>
                      </AlertDescription>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">
                      Investigate <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </Alert>
              ))
            )}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
