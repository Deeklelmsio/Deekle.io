import { NextResponse } from "next/server"
import { getAnalyticsData } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    const dateRange = startDate && endDate ? { start: startDate, end: endDate } : undefined

    const data = await getAnalyticsData(dateRange)

    return NextResponse.json({
      success: true,
      data: data.predictiveData,
    })
  } catch (error) {
    console.error("Error fetching predictive data:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch predictive data" }, { status: 500 })
  }
}
