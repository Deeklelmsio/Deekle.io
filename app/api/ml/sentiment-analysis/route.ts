import { NextResponse } from "next/server"
import { analyzeSentiment } from "@/lib/ml/ml-service"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const text = body.text || ""

    if (!text) {
      return NextResponse.json({ success: false, error: "Text is required" }, { status: 400 })
    }

    const analysis = await analyzeSentiment(text)

    return NextResponse.json({
      success: true,
      data: analysis,
    })
  } catch (error) {
    console.error("Error analyzing sentiment:", error)
    return NextResponse.json({ success: false, error: "Failed to analyze sentiment" }, { status: 500 })
  }
}
