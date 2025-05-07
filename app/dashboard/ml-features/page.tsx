import type { Metadata } from "next"
import { CourseRecommendations } from "@/components/ml/course-recommendations"
import { SkillGapAnalysisComponent } from "@/components/ml/skill-gap-analysis"
import { PerformancePredictionComponent } from "@/components/ml/performance-prediction"
import { ContentAnalyzer } from "@/components/ml/content-analyzer"
import { SentimentAnalyzer } from "@/components/ml/sentiment-analyzer"

export const metadata: Metadata = {
  title: "Machine Learning Features | Deekle.io",
  description: "Explore AI-powered learning features",
}

export default function MLFeaturesPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Machine Learning Features</h1>
        <p className="text-muted-foreground">Explore AI-powered features to enhance your learning experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CourseRecommendations userId={1} />
        <SkillGapAnalysisComponent userId={1} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PerformancePredictionComponent userId={1} courseId={101} />
        <ContentAnalyzer />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SentimentAnalyzer />
        {/* Additional ML component can go here */}
      </div>
    </div>
  )
}
