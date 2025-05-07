import { NextResponse } from "next/server"
import { getAnalyticsData, generateReport, saveReport } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    const dateRange = startDate && endDate ? { start: startDate, end: endDate } : undefined

    const data = await getAnalyticsData(dateRange)

    return NextResponse.json({
      success: true,
      data: data.reports,
    })
  } catch (error) {
    console.error("Error fetching reports data:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch reports data" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (body.action === "generate") {
      const result = await generateReport(body.params)
      return NextResponse.json({ success: true, data: result })
    } else if (body.action === "save") {
      const result = await saveReport(body.report)
      return NextResponse.json({ success: true, data: result })
    } else {
      return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error processing report request:", error)
    return NextResponse.json({ success: false, error: "Failed to process report request" }, { status: 500 })
  }
}
