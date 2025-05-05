export function CalendarDateRangePicker() {
  return (
    <div className="flex items-center space-x-2">
      <div className="grid gap-1">
        <label className="text-sm font-medium">Date Range</label>
        <select className="flex h-8 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="custom">Custom range</option>
        </select>
      </div>
    </div>
  )
}
