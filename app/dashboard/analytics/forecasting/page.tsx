import { AnalyticsProvider } from "@/contexts/analytics-context"
import { ForecastingTab } from "@/components/analytics/forecasting-tab"

export default function ForecastingPage() {
  return (
    <AnalyticsProvider>
      <ForecastingTab />
    </AnalyticsProvider>
  )
}
