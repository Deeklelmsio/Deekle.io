import { generateText } from "ai"
import { NextResponse } from "next/server"
import { openaiModels, systemPrompts } from "@/lib/openai"

export async function POST(req: Request) {
  try {
    const { messages, courseContext, userLevel = "intermediate" } = await req.json()

    // Create a system prompt that includes course context and user level
    const customSystemPrompt = `${systemPrompts.tutor}
    
    ${courseContext ? `Current course context: ${courseContext}` : ""}
    User knowledge level: ${userLevel}
    `

    // Generate response using AI SDK with OpenAI
    const { text } = await generateText({
      model: openaiModels.education,
      system: customSystemPrompt,
      prompt: messages.map((m) => `${m.role === "user" ? "Student" : "AI Tutor"}: ${m.content}`).join("\n"),
    })

    return NextResponse.json({
      response: text,
      metadata: {
        model: "gpt-4o",
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("AI Tutor API error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
