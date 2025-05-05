import { generateText, generateObject } from "ai"
import { NextResponse } from "next/server"
import { z } from "zod"
import { openaiModels, systemPrompts } from "@/lib/openai"

export async function POST(req: Request) {
  try {
    const { contentType, courseId, moduleId, prompt, difficulty = "intermediate" } = await req.json()

    // Handle different types of content generation
    switch (contentType) {
      case "notes":
        return generateStudyNotes(courseId, moduleId, prompt, difficulty)
      case "quiz":
        return generateQuizQuestions(courseId, moduleId, prompt, difficulty)
      case "summary":
        return generateCourseSummary(courseId, moduleId, prompt)
      case "flashcards":
        return generateFlashcards(courseId, moduleId, prompt, difficulty)
      default:
        return NextResponse.json({ error: "Invalid content type" }, { status: 400 })
    }
  } catch (error) {
    console.error("Content generation error:", error)
    // Ensure we always return a proper JSON response
    return NextResponse.json(
      {
        error: error.message || "Failed to generate content",
        details: error.stack,
      },
      { status: 500 },
    )
  }
}

async function generateStudyNotes(courseId, moduleId, prompt, difficulty) {
  try {
    const customSystemPrompt = `${systemPrompts.contentGenerator}
    
    Difficulty level: ${difficulty}
    Format the notes for a ${difficulty} level student.
    `

    const { text } = await generateText({
      model: openaiModels.education,
      system: customSystemPrompt,
      prompt: `Generate comprehensive study notes for: ${prompt}`,
    })

    return NextResponse.json({
      content: text,
      type: "notes",
      metadata: {
        courseId,
        moduleId,
        difficulty,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Study notes generation error:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to generate study notes",
        details: error.stack,
      },
      { status: 500 },
    )
  }
}

async function generateQuizQuestions(courseId, moduleId, prompt, difficulty) {
  try {
    const quizSchema = z.object({
      questions: z.array(
        z.object({
          question: z.string(),
          options: z.array(z.string()),
          correctAnswer: z.number(),
          explanation: z.string(),
        }),
      ),
    })

    const customSystemPrompt = `${systemPrompts.quizGenerator}
    
    Difficulty level: ${difficulty}
    Create questions appropriate for a ${difficulty} level student.
    `

    const { object } = await generateObject({
      model: openaiModels.structured,
      schema: quizSchema,
      system: customSystemPrompt,
      prompt: `Generate 5 multiple-choice quiz questions for: ${prompt}. Each question should have 4 options.`,
    })

    return NextResponse.json({
      content: object,
      type: "quiz",
      metadata: {
        courseId,
        moduleId,
        difficulty,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Quiz generation error:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to generate quiz questions",
        details: error.stack,
      },
      { status: 500 },
    )
  }
}

async function generateCourseSummary(courseId, moduleId, prompt) {
  try {
    const { text } = await generateText({
      model: openaiModels.summarization,
      system:
        "Create a concise summary of the key points from the provided content. Focus on the most important concepts and takeaways.",
      prompt: `Summarize the key points from: ${prompt}`,
    })

    return NextResponse.json({
      content: text,
      type: "summary",
      metadata: {
        courseId,
        moduleId,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Summary generation error:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to generate summary",
        details: error.stack,
      },
      { status: 500 },
    )
  }
}

async function generateFlashcards(courseId, moduleId, prompt, difficulty) {
  try {
    const flashcardSchema = z.object({
      flashcards: z.array(
        z.object({
          front: z.string(),
          back: z.string(),
        }),
      ),
    })

    const { object } = await generateObject({
      model: openaiModels.structured,
      schema: flashcardSchema,
      system: `Create educational flashcards for the given topic. Each flashcard should have a front side with a question or term, and a back side with the answer or definition. Difficulty level: ${difficulty}`,
      prompt: `Generate 10 flashcards for studying: ${prompt}`,
    })

    return NextResponse.json({
      content: object,
      type: "flashcards",
      metadata: {
        courseId,
        moduleId,
        difficulty,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Flashcard generation error:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to generate flashcards",
        details: error.stack,
      },
      { status: 500 },
    )
  }
}
