"use client"
import { DateRangePicker } from "@/components/analytics/date-range-picker"
import { PredictiveAnalytics } from "@/components/analytics/predictive-analytics"
import { AnomalyDetection } from "@/components/analytics/anomaly-detection"

export function ForecastingTab() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Forecasting</h1>
        <DateRangePicker />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PredictiveAnalytics />
        <AnomalyDetection />
      </div>
    </div>
  )
}
