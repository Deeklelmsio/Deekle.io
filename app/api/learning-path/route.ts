import { generateObject } from "ai"
import { NextResponse } from "next/server"
import { z } from "zod"
import { openaiModels, systemPrompts } from "@/lib/openai"

export async function POST(req: Request) {
  try {
    const { userId, interests, currentSkills, learningGoals, timeCommitment = "medium" } = await req.json()

    // Define schema for personalized learning path
    const learningPathSchema = z.object({
      recommendedCourses: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
          estimatedDuration: z.string(),
          relevanceScore: z.number().min(1).max(100),
          skills: z.array(z.string()),
        }),
      ),
      learningSequence: z.array(
        z.object({
          phase: z.string(),
          description: z.string(),
          courses: z.array(z.number()),
          milestones: z.array(z.string()),
        }),
      ),
      skillGaps: z.array(z.string()),
      estimatedTimeToGoal: z.string(),
      nextSteps: z.array(z.string()),
    })

    // Generate personalized learning path
    const { object } = await generateObject({
      model: openaiModels.structured,
      schema: learningPathSchema,
      system: systemPrompts.learningPathGenerator,
      prompt: `Create a personalized learning path for a user with the following:
      
      Interests: ${interests.join(", ")}
      Current Skills: ${currentSkills.join(", ")}
      Learning Goals: ${learningGoals}
      Time Commitment: ${timeCommitment} (low = 1-3 hours/week, medium = 4-7 hours/week, high = 8+ hours/week)
      
      Recommend courses, create a learning sequence, identify skill gaps, and estimate time to reach the goal.`,
    })

    return NextResponse.json({
      learningPath: object,
      metadata: {
        userId,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Learning path generation error:", error)
    return NextResponse.json({ error: "Failed to generate learning path" }, { status: 500 })
  }
}
