"use client"

import { useEffect, useState } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const data = [
  { name: "Compliant", value: 68, color: "#4ade80" },
  { name: "In Progress", value: 22, color: "#facc15" },
  { name: "Non-Compliant", value: 10, color: "#f87171" },
]

const departmentData = [
  {
    department: "Engineering",
    compliant: 75,
    inProgress: 20,
    nonCompliant: 5,
    requiredTrainings: 12,
    completedTrainings: 9,
    overdueTrainings: 1,
  },
  {
    department: "Marketing",
    compliant: 60,
    inProgress: 25,
    nonCompliant: 15,
    requiredTrainings: 8,
    completedTrainings: 5,
    overdueTrainings: 2,
  },
  {
    department: "Sales",
    compliant: 82,
    inProgress: 15,
    nonCompliant: 3,
    requiredTrainings: 10,
    completedTrainings: 8,
    overdueTrainings: 0,
  },
  {
    department: "HR",
    compliant: 90,
    inProgress: 10,
    nonCompliant: 0,
    requiredTrainings: 15,
    completedTrainings: 14,
    overdueTrainings: 0,
  },
  {
    department: "Finance",
    compliant: 70,
    inProgress: 20,
    nonCompliant: 10,
    requiredTrainings: 12,
    completedTrainings: 8,
    overdueTrainings: 1,
  },
]

export function ComplianceStatusChart({ detailed = false }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>
  }

  if (detailed) {
    return (
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">By Department</TabsTrigger>
          <TabsTrigger value="trainings">Training Status</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Overall Compliance Rate</span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Required Trainings Completed</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Certifications Up-to-date</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Policy Acknowledgements</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="departments">
          <div className="space-y-4">
            {departmentData.map((dept, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{dept.department}</h3>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={dept.compliant >= 80 ? "success" : dept.compliant >= 60 ? "warning" : "destructive"}
                    >
                      {dept.compliant}% Compliant
                    </Badge>
                    {dept.overdueTrainings > 0 && <Badge variant="destructive">{dept.overdueTrainings} Overdue</Badge>}
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Compliance Status</span>
                      <span className="text-sm font-medium">{dept.compliant}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-green-500 h-full" style={{ width: `${dept.compliant}%` }} />
                        <div className="bg-yellow-500 h-full" style={{ width: `${dept.inProgress}%` }} />
                        <div className="bg-red-500 h-full" style={{ width: `${dept.nonCompliant}%` }} />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{dept.compliant}% Compliant</span>
                      <span>{dept.inProgress}% In Progress</span>
                      <span>{dept.nonCompliant}% Non-Compliant</span>
                    </div>
                  </div>
                  <div className="text-sm mt-2">
                    <span>
                      {dept.completedTrainings} of {dept.requiredTrainings} required trainings completed
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trainings">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Required Trainings</h3>
                <div className="text-3xl font-bold">57</div>
                <div className="text-sm text-muted-foreground">Across all departments</div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Completed</h3>
                <div className="text-3xl font-bold">44</div>
                <div className="text-sm text-muted-foreground">77% completion rate</div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Overdue</h3>
                <div className="text-3xl font-bold text-red-500">4</div>
                <div className="text-sm text-muted-foreground">Require immediate attention</div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-3">Training Compliance by Category</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Data Security</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Ethics & Compliance</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Health & Safety</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Industry Regulations</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    )
  }

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
