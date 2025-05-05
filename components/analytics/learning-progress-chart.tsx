"use client"

import { useEffect, useState } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    "Course Completion Rate": 65,
    "Average Score": 78,
    "Learning Hours": 240,
  },
  {
    name: "Feb",
    "Course Completion Rate": 68,
    "Average Score": 80,
    "Learning Hours": 250,
  },
  {
    name: "Mar",
    "Course Completion Rate": 70,
    "Average Score": 82,
    "Learning Hours": 280,
  },
  {
    name: "Apr",
    "Course Completion Rate": 72,
    "Average Score": 79,
    "Learning Hours": 290,
  },
  {
    name: "May",
    "Course Completion Rate": 75,
    "Average Score": 83,
    "Learning Hours": 300,
  },
  {
    name: "Jun",
    "Course Completion Rate": 78,
    "Average Score": 85,
    "Learning Hours": 320,
  },
]

const detailedData = {
  completion: [
    { name: "Week 1", Beginner: 60, Intermediate: 45, Advanced: 30 },
    { name: "Week 2", Beginner: 65, Intermediate: 48, Advanced: 32 },
    { name: "Week 3", Beginner: 70, Intermediate: 52, Advanced: 35 },
    { name: "Week 4", Beginner: 75, Intermediate: 55, Advanced: 38 },
  ],
  scores: [
    { name: "Week 1", "Quiz Scores": 75, "Assessment Scores": 70, "Project Scores": 80 },
    { name: "Week 2", "Quiz Scores": 78, "Assessment Scores": 72, "Project Scores": 82 },
    { name: "Week 3", "Quiz Scores": 80, "Assessment Scores": 75, "Project Scores": 85 },
    { name: "Week 4", "Quiz Scores": 82, "Assessment Scores": 78, "Project Scores": 88 },
  ],
  time: [
    { name: "Week 1", "Video Content": 40, "Reading Materials": 25, "Interactive Exercises": 35 },
    { name: "Week 2", "Video Content": 42, "Reading Materials": 28, "Interactive Exercises": 38 },
    { name: "Week 3", "Video Content": 45, "Reading Materials": 30, "Interactive Exercises": 40 },
    { name: "Week 4", "Video Content": 48, "Reading Materials": 32, "Interactive Exercises": 45 },
  ],
}

export function LearningProgressChart({ detailed = false }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[350px] flex items-center justify-center">Loading chart...</div>
  }

  if (detailed) {
    return (
      <Tabs defaultValue="completion">
        <TabsList className="mb-4">
          <TabsTrigger value="completion">Completion Rates</TabsTrigger>
          <TabsTrigger value="scores">Assessment Scores</TabsTrigger>
          <TabsTrigger value="time">Learning Time</TabsTrigger>
        </TabsList>

        <TabsContent value="completion">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={detailedData.completion}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Beginner" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="Intermediate" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="Advanced" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">75%</div>
                <p className="text-sm text-muted-foreground">Beginner Course Completion</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">55%</div>
                <p className="text-sm text-muted-foreground">Intermediate Course Completion</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">38%</div>
                <p className="text-sm text-muted-foreground">Advanced Course Completion</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scores">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={detailedData.scores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Quiz Scores" stroke="#8884d8" />
                <Line type="monotone" dataKey="Assessment Scores" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Project Scores" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">82%</div>
                <p className="text-sm text-muted-foreground">Average Quiz Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">78%</div>
                <p className="text-sm text-muted-foreground">Average Assessment Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">88%</div>
                <p className="text-sm text-muted-foreground">Average Project Score</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="time">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={detailedData.time}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Video Content" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="Reading Materials" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="Interactive Exercises" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">48 hrs</div>
                <p className="text-sm text-muted-foreground">Video Content Time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">32 hrs</div>
                <p className="text-sm text-muted-foreground">Reading Materials Time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">45 hrs</div>
                <p className="text-sm text-muted-foreground">Interactive Exercises Time</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    )
  }

  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Course Completion Rate" stroke="#8884d8" />
          <Line type="monotone" dataKey="Average Score" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Learning Hours" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
