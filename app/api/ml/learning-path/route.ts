import { NextResponse } from "next/server"
import { generateLearningPath } from "@/lib/ml/ml-service"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = Number.parseInt(searchParams.get("userId") || "1")
    const targetSkill = searchParams.get("targetSkill") || "data"

    const learningPath = await generateLearningPath(userId, targetSkill)

    return NextResponse.json({
      success: true,
      data: learningPath,
    })
  } catch (error) {
    console.error("Error generating learning path:", error)
    return NextResponse.json({ success: false, error: "Failed to generate learning path" }, { status: 500 })
  }
}
