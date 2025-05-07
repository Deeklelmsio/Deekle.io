"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Loader2, FileText, Clock, AlertTriangle } from "lucide-react"
import type { ContentAnalysisResult } from "@/lib/ml/ml-service"

export function ContentAnalyzer() {
  const [content, setContent] = useState("")
  const [analysis, setAnalysis] = useState<ContentAnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("topics")

  const handleAnalyze = async () => {
    if (!content.trim()) return

    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/ml/content-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Failed to analyze content")
      }

      setAnalysis(data.data)
      setActiveTab("topics")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      console.error("Error analyzing content:", err)
    } finally {
      setLoading(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "intermediate":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "advanced":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      default:
        return ""
    }
  }

  const getReadabilityLabel = (score: number) => {
    if (score >= 80) return "Easy to read"
    if (score >= 60) return "Moderately readable"
    return "Difficult to read"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Analyzer</CardTitle>
        <CardDescription>AI-powered analysis of learning content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="Paste your learning content here for analysis..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[150px]"
          />
          <Button onClick={handleAnalyze} disabled={loading || !content.trim()} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <FileText className="mr-2 h-4 w-4" />
                Analyze Content
              </>
            )}
          </Button>

          {error && <div className="text-center py-2 text-red-500">{error}</div>}

          {analysis && (
            <div className="pt-4 border-t mt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge className={getDifficultyColor(analysis.difficulty)}>
                    {analysis.difficulty.charAt(0).toUpperCase() + analysis.difficulty.slice(1)}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {analysis.estimatedDuration} min
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span>Readability:</span>
                  <span className="font-medium">{getReadabilityLabel(analysis.readabilityScore)}</span>
                </div>
              </div>

              <Tabs defaultValue="topics" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="topics">Topics</TabsTrigger>
                  <TabsTrigger value="terms">Key Terms</TabsTrigger>
                  <TabsTrigger value="improvements">Suggestions</TabsTrigger>
                </TabsList>

                <TabsContent value="topics" className="space-y-4">
                  {analysis.topics.map((topic) => (
                    <div key={topic.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{topic.name}</span>
                        <span className="text-sm">{Math.round(topic.relevance * 100)}%</span>
                      </div>
                      <Progress value={topic.relevance * 100} className="h-2" />
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="terms">
                  <div className="flex flex-wrap gap-2">
                    {analysis.keyTerms.map((term) => (
                      <Badge key={term} variant="outline">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="improvements" className="space-y-2">
                  <ul className="space-y-2">
                    {analysis.suggestedImprovements.map((suggestion, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-4 w-4 mr-2 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
