"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Loader2, MessageSquare } from "lucide-react"

export function SentimentAnalyzer() {
  const [text, setText] = useState("")
  const [analysis, setAnalysis] = useState<{
    sentiment: "positive" | "neutral" | "negative"
    score: number
    keywords: string[]
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!text.trim()) return

    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/ml/sentiment-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Failed to analyze sentiment")
      }

      setAnalysis(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      console.error("Error analyzing sentiment:", err)
    } finally {
      setLoading(false)
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "negative":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    }
  }

  const getSentimentLabel = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "Positive"
      case "negative":
        return "Negative"
      default:
        return "Neutral"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Analyzer</CardTitle>
        <CardDescription>AI-powered analysis of feedback and comments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="Enter feedback or comments to analyze sentiment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[100px]"
          />
          <Button onClick={handleAnalyze} disabled={loading || !text.trim()} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <MessageSquare className="mr-2 h-4 w-4" />
                Analyze Sentiment
              </>
            )}
          </Button>

          {error && <div className="text-center py-2 text-red-500">{error}</div>}

          {analysis && (
            <div className="pt-4 border-t mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Sentiment Analysis</h3>
                <Badge className={getSentimentColor(analysis.sentiment)}>{getSentimentLabel(analysis.sentiment)}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sentiment Score</span>
                  <span className="text-sm font-medium">{Math.round(analysis.score * 100)}%</span>
                </div>
                <Progress value={analysis.score * 100} className="h-2" />
              </div>

              {analysis.keywords.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Sentiment Words</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
