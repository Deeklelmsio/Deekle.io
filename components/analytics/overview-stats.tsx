"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Users, BookOpen, Award, ShieldCheck } from "lucide-react"

// Mock data - in a real app, this would come from an API
const mockStats = {
  totalUsers: 1234,
  activeCourses: 87,
  completionRate: 76,
  complianceStatus: 92,
  trends: {
    totalUsers: 12,
    activeCourses: 4,
    completionRate: 2,
    complianceStatus: 3,
  },
}

export function OverviewStats() {
  const [stats, setStats] = useState(mockStats)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStats(mockStats)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Users"
        value={stats.totalUsers}
        trend={stats.trends.totalUsers}
        icon={<Users className="h-4 w-4" />}
        loading={loading}
      />
      <StatsCard
        title="Active Courses"
        value={stats.activeCourses}
        trend={stats.trends.activeCourses}
        icon={<BookOpen className="h-4 w-4" />}
        loading={loading}
      />
      <StatsCard
        title="Completion Rate"
        value={`${stats.completionRate}%`}
        trend={stats.trends.completionRate}
        icon={<Award className="h-4 w-4" />}
        loading={loading}
      />
      <StatsCard
        title="Compliance Status"
        value={`${stats.complianceStatus}%`}
        trend={stats.trends.complianceStatus}
        icon={<ShieldCheck className="h-4 w-4" />}
        loading={loading}
      />
    </div>
  )
}

function StatsCard({ title, value, trend, icon, loading }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-sm font-medium">{title}</h3>
          <div className="bg-muted p-2 rounded-full">{icon}</div>
        </div>
        {loading ? (
          <div className="h-8 w-24 bg-muted animate-pulse rounded-md" />
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
        {loading ? (
          <div className="h-4 w-32 bg-muted animate-pulse rounded-md mt-1" />
        ) : (
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            {trend > 0 ? (
              <>
                <ArrowUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">{trend}%</span> from last month
              </>
            ) : (
              <>
                <ArrowDown className="h-3 w-3 text-red-500" />
                <span className="text-red-500">{Math.abs(trend)}%</span> from last month
              </>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
