import type { Metadata } from "next"
import { InsightsTab } from "@/components/analytics/insights-tab"

export const metadata: Metadata = {
  title: "AI Insights | Analytics Dashboard",
  description: "AI-generated insights from your learning data",
}

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
        <p className="text-muted-foreground">Discover AI-generated insights from your learning data</p>
      </div>

      <InsightsTab />
    </div>
  )
}
