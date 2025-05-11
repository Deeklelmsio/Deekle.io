"use client"

import { useState } from "react"
import { useAnalytics } from "@/contexts/analytics-context"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"

export function DateRangePicker() {
  const { dateRange, setDateRange } = useAnalytics()
  const [date, setDate] = useState<DateRange | undefined>({
    from: dateRange.startDate ? new Date(dateRange.startDate) : undefined,
    to: dateRange.endDate ? new Date(dateRange.endDate) : undefined,
  })

  const handleDateChange = (range: DateRange | undefined) => {
    setDate(range)
    if (range?.from && range?.to) {
      setDateRange({
        startDate: format(range.from, "yyyy-MM-dd"),
        endDate: format(range.to, "yyyy-MM-dd"),
      })
    }
  }

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className="w-[300px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
