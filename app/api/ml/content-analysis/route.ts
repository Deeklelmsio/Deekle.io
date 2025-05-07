import { NextResponse } from "next/server"
import { analyzeContent } from "@/lib/ml/ml-service"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const contentId = Number.parseInt(searchParams.get("contentId") || "1")

    const analysis = await analyzeContent(contentId)

    return NextResponse.json({
      success: true,
      data: analysis,
    })
  } catch (error) {
    console.error("Error analyzing content:", error)
    return NextResponse.json({ success: false, error: "Failed to analyze content" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const contentId = body.contentId || 1

    const analysis = await analyzeContent(contentId)

    return NextResponse.json({
      success: true,
      data: analysis,
    })
  } catch (error) {
    console.error("Error analyzing content:", error)
    return NextResponse.json({ success: false, error: "Failed to analyze content" }, { status: 500 })
  }
}
