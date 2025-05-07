import { NextResponse } from "next/server"
import { analyzeSkillGaps } from "@/lib/ml/ml-service"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = Number.parseInt(searchParams.get("userId") || "1")

    const analysis = await analyzeSkillGaps(userId)

    return NextResponse.json({
      success: true,
      data: analysis,
    })
  } catch (error) {
    console.error("Error analyzing skill gaps:", error)
    return NextResponse.json({ success: false, error: "Failed to analyze skill gaps" }, { status: 500 })
  }
}
