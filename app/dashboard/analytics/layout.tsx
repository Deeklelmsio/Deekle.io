import type React from "react"
import type { Metadata } from "next"
import { AnalyticsSidebar } from "@/components/analytics/analytics-sidebar"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Analytics Dashboard | Deekle.io",
  description: "Comprehensive analytics and reporting dashboard with AI-powered insights",
}

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AnalyticsSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container py-6 max-w-7xl mx-auto">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  )
}
