import { NextResponse } from "next/server"
import { summarizeText } from "@/lib/ml/ml-service"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const text = body.text || ""
    const maxLength = body.maxLength || 200

    if (!text) {
      return NextResponse.json({ success: false, error: "Text is required" }, { status: 400 })
    }

    const summary = await summarizeText(text, maxLength)

    return NextResponse.json({
      success: true,
      data: { summary },
    })
  } catch (error) {
    console.error("Error summarizing text:", error)
    return NextResponse.json({ success: false, error: "Failed to summarize text" }, { status: 500 })
  }
}
