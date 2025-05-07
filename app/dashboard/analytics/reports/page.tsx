import { AnalyticsProvider } from "@/contexts/analytics-context"
import { ReportsTab } from "@/components/analytics/reports-tab"

export default function ReportsPage() {
  return (
    <AnalyticsProvider>
      <ReportsTab />
    </AnalyticsProvider>
  )
}
