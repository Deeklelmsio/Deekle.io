import { AnalyticsProvider } from "@/contexts/analytics-context"
import { InsightsTab } from "@/components/analytics/insights-tab"

export default function InsightsPage() {
  return (
    <AnalyticsProvider>
      <InsightsTab />
    </AnalyticsProvider>
  )
}
