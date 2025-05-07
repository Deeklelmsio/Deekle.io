"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight, BookOpen } from "lucide-react"
import type { SkillGapAnalysis } from "@/lib/ml/ml-service"

export function SkillGapAnalysisComponent({ userId = 1 }) {
  const [skillGaps, setSkillGaps] = useState<SkillGapAnalysis | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("gaps")

  useEffect(() => {
    const fetchSkillGaps = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/ml/skill-gaps?userId=${userId}`)
        const data = await response.json()

        if (!data.success) {
          throw new Error(data.error || "Failed to fetch skill gaps")
        }

        setSkillGaps(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching skill gaps:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkillGaps()
  }, [userId])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill Gap Analysis</CardTitle>
        <CardDescription>AI-powered analysis of your skills and improvement opportunities</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[60px]" />
                </div>
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : !skillGaps ? (
          <div className="text-center py-4 text-muted-foreground">No skill gap data available</div>
        ) : (
          <>
            <Tabs defaultValue="gaps" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="gaps">Skill Gaps</TabsTrigger>
                <TabsTrigger value="current">Current Skills</TabsTrigger>
                <TabsTrigger value="required">Required Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="gaps" className="space-y-4">
                {skillGaps.gaps.map((gap) => (
                  <div key={gap.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{gap.name}</span>
                      <span className="text-sm">
                        {gap.currentLevel} / {gap.requiredLevel}
                      </span>
                    </div>
                    <Progress value={(gap.currentLevel / gap.requiredLevel) * 100} className="h-2" />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Gap: {gap.requiredLevel - gap.currentLevel} points</span>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        View Courses <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="current" className="space-y-4">
                {skillGaps.currentSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm">{skill.level} / 100</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="required" className="space-y-4">
                {skillGaps.requiredSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm">{skill.level} / 100</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-4 border-t">
              <h4 className="font-medium mb-3">Recommended Learning Paths</h4>
              <div className="space-y-2">
                {skillGaps.recommendedPaths.map((pathId) => (
                  <div key={pathId} className="flex items-center justify-between p-2 bg-muted rounded-md">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      <span>Learning Path #{pathId}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
