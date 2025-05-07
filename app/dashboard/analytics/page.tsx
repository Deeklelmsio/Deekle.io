import type { Metadata } from "next"
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"

export const metadata: Metadata = {
  title: "Analytics Dashboard | Deekle.io",
  description: "View and analyze learning metrics and performance data",
}

export default function AnalyticsPage() {
  return <AnalyticsDashboard />
}
