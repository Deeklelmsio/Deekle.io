"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const data = [
  {
    name: "Jan",
    "Course Completions": 65,
    "Active Users": 120,
    "Learning Hours": 240,
  },
  {
    name: "Feb",
    "Course Completions": 59,
    "Active Users": 132,
    "Learning Hours": 218,
  },
  {
    name: "Mar",
    "Course Completions": 80,
    "Active Users": 150,
    "Learning Hours": 280,
  },
  {
    name: "Apr",
    "Course Completions": 81,
    "Active Users": 160,
    "Learning Hours": 290,
  },
  {
    name: "May",
    "Course Completions": 56,
    "Active Users": 120,
    "Learning Hours": 200,
  },
  {
    name: "Jun",
    "Course Completions": 55,
    "Active Users": 110,
    "Learning Hours": 190,
  },
  {
    name: "Jul",
    "Course Completions": 40,
    "Active Users": 90,
    "Learning Hours": 150,
  },
  {
    name: "Aug",
    "Course Completions": 45,
    "Active Users": 95,
    "Learning Hours": 170,
  },
  {
    name: "Sep",
    "Course Completions": 62,
    "Active Users": 125,
    "Learning Hours": 210,
  },
  {
    name: "Oct",
    "Course Completions": 78,
    "Active Users": 145,
    "Learning Hours": 250,
  },
  {
    name: "Nov",
    "Course Completions": 85,
    "Active Users": 160,
    "Learning Hours": 290,
  },
  {
    name: "Dec",
    "Course Completions": 90,
    "Active Users": 170,
    "Learning Hours": 310,
  },
]

const detailedData = [
  {
    name: "Week 1",
    "Course Completions": 22,
    "Active Users": 45,
    "Learning Hours": 80,
    "Mobile Access": 28,
    "Desktop Access": 17,
    "Avg. Session Duration": 25,
  },
  {
    name: "Week 2",
    "Course Completions": 18,
    "Active Users": 42,
    "Learning Hours": 75,
    "Mobile Access": 25,
    "Desktop Access": 17,
    "Avg. Session Duration": 22,
  },
  {
    name: "Week 3",
    "Course Completions": 25,
    "Active Users": 50,
    "Learning Hours": 90,
    "Mobile Access": 32,
    "Desktop Access": 18,
    "Avg. Session Duration": 28,
  },
  {
    name: "Week 4",
    "Course Completions": 20,
    "Active Users": 48,
    "Learning Hours": 85,
    "Mobile Access": 30,
    "Desktop Access": 18,
    "Avg. Session Duration": 26,
  },
]

export function EngagementChart({ detailed = false }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[350px] flex items-center justify-center">Loading chart...</div>
  }

  if (detailed) {
    return (
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={detailedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Course Completions" fill="#8884d8" />
                <Bar dataKey="Active Users" fill="#82ca9d" />
                <Bar dataKey="Learning Hours" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="devices">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={detailedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Mobile Access" fill="#8884d8" />
                <Bar dataKey="Desktop Access" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="sessions">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={detailedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Avg. Session Duration" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    )
  }

  return (
    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Course Completions" fill="#8884d8" />
          <Bar dataKey="Active Users" fill="#82ca9d" />
          <Bar dataKey="Learning Hours" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
