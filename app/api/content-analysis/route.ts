import { generateObject } from "ai"
import { NextResponse } from "next/server"
import { z } from "zod"
import { openaiModels } from "@/lib/openai"

export async function POST(req: Request) {
  try {
    const { courseId, moduleId, content, analysisType = "comprehension" } = await req.json()

    // Define schema for content analysis
    const analysisSchema = z.object({
      readabilityScore: z.number().min(0).max(100),
      complexityLevel: z.enum(["Elementary", "Intermediate", "Advanced", "Expert"]),
      keyTerms: z.array(z.string()),
      conceptMap: z.array(
        z.object({
          concept: z.string(),
          relatedConcepts: z.array(z.string()),
          importance: z.number().min(1).max(10),
        }),
      ),
      suggestedImprovements: z.array(z.string()),
      estimatedLearningTime: z.string(),
    })

    // Generate content analysis
    const { object } = await generateObject({
      model: openaiModels.structured,
      schema: analysisSchema,
      system: `You are an AI content analyzer for the Deekle.io learning platform.
      Analyze educational content to determine readability, complexity, key terms, and concept relationships.
      Provide constructive suggestions for improving the content's educational value.`,
      prompt: `Analyze the following ${analysisType} educational content:
      
      ${content}
      
      Provide a detailed analysis including readability score, complexity level, key terms, concept map, suggested improvements, and estimated learning time.`,
    })

    return NextResponse.json({
      analysis: object,
      metadata: {
        courseId,
        moduleId,
        analysisType,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Content analysis error:", error)
    return NextResponse.json({ error: "Failed to analyze content" }, { status: 500 })
  }
}
