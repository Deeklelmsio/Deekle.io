import type { Metadata } from "next"
import { ForecastingTab } from "@/components/analytics/forecasting-tab"

export const metadata: Metadata = {
  title: "Forecasting | Analytics Dashboard",
  description: "AI-powered predictions and forecasts",
}

export default function ForecastingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Forecasting</h1>
        <p className="text-muted-foreground">View AI-powered predictions and forecasts</p>
      </div>

      <ForecastingTab />
    </div>
  )
}
