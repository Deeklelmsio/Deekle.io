"use client"
import { DateRangePicker } from "@/components/analytics/date-range-picker"
import { ReportGenerator } from "@/components/analytics/report-generator"
import { SavedReports } from "@/components/analytics/saved-reports"

export function ReportsTab() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <DateRangePicker />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportGenerator />
        <SavedReports />
      </div>
    </div>
  )
}
