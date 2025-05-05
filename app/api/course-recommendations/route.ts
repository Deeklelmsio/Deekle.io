import { generateObject } from "ai"
import { NextResponse } from "next/server"
import { z } from "zod"
import { openaiModels } from "@/lib/openai"

export async function POST(req: Request) {
  try {
    const { userId, learningHistory, interests, currentCourses } = await req.json()

    // Define schema for course recommendations
    const recommendationsSchema = z.object({
      personalizedRecommendations: z.array(
        z.object({
          courseTitle: z.string(),
          description: z.string(),
          relevanceScore: z.number().min(1).max(100),
          reasonForRecommendation: z.string(),
          prerequisiteKnowledge: z.array(z.string()).optional(),
          estimatedCompletionTime: z.string(),
        }),
      ),
      topicClusters: z.array(
        z.object({
          clusterName: z.string(),
          courses: z.array(z.number()),
          description: z.string(),
        }),
      ),
      careerPathways: z.array(
        z.object({
          pathwayName: z.string(),
          description: z.string(),
          recommendedCourses: z.array(z.number()),
        }),
      ),
    })

    // Generate personalized course recommendations
    const { object } = await generateObject({
      model: openaiModels.structured,
      schema: recommendationsSchema,
      system: `You are an AI course recommendation system for the Deekle.io learning platform.
      Create personalized course recommendations based on the user's learning history, interests, and current courses.
      Group recommendations into meaningful topic clusters and suggest potential career pathways.
      Focus on providing diverse, relevant, and achievable recommendations.`,
      prompt: `Generate personalized course recommendations for a user with the following profile:
      
      Learning History: ${learningHistory.join(", ")}
      Interests: ${interests.join(", ")}
      Current Courses: ${currentCourses.join(", ")}
      
      Provide detailed recommendations with relevance scores and reasons for each recommendation.`,
    })

    return NextResponse.json({
      recommendations: object,
      metadata: {
        userId,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Course recommendations error:", error)
    return NextResponse.json({ error: "Failed to generate course recommendations" }, { status: 500 })
  }
}
