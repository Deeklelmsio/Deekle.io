import { NextResponse } from "next/server"
import { getPersonalizedRecommendations } from "@/lib/ml/ml-service"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = Number.parseInt(searchParams.get("userId") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "4")

    const recommendations = await getPersonalizedRecommendations(userId, limit)

    return NextResponse.json({
      success: true,
      data: recommendations,
    })
  } catch (error) {
    console.error("Error fetching recommendations:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch recommendations" }, { status: 500 })
  }
}
