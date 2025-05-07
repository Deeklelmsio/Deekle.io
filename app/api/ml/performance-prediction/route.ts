import { NextResponse } from "next/server"
import { predictUserPerformance } from "@/lib/ml/ml-service"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = Number.parseInt(searchParams.get("userId") || "1")
    const courseId = Number.parseInt(searchParams.get("courseId") || "101")

    const prediction = await predictUserPerformance(userId, courseId)

    return NextResponse.json({
      success: true,
      data: prediction,
    })
  } catch (error) {
    console.error("Error predicting performance:", error)
    return NextResponse.json({ success: false, error: "Failed to predict performance" }, { status: 500 })
  }
}
