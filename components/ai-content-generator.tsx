"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, Loader2, Save } from "lucide-react"

export function AIContentGenerator() {
  const [topic, setTopic] = useState("")
  const [contentType, setContentType] = useState("notes")
  const [difficulty, setDifficulty] = useState("intermediate")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const [error, setError] = useState("")

  // Update the handleGenerate function to better handle errors
  const handleGenerate = async () => {
    if (!topic) {
      setError("Please enter a topic")
      return
    }

    setIsLoading(true)
    setError("")
    setGeneratedContent("")

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentType,
          courseId: "demo-course",
          moduleId: "demo-module",
          prompt: topic,
          difficulty,
        }),
      })

      // First check if the response is valid JSON
      const contentTypeHeader = response.headers.get("content-type")
      if (!contentTypeHeader || !contentTypeHeader.includes("application/json")) {
        const text = await response.text()
        throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}...`)
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate content")
      }

      if (contentType === "quiz" || contentType === "flashcards") {
        setGeneratedContent(JSON.stringify(data.content, null, 2))
      } else {
        setGeneratedContent(data.content)
      }
    } catch (err) {
      console.error("Error generating content:", err)
      setError(err.message || "Failed to generate content")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          AI Content Generator
        </CardTitle>
        <CardDescription>Generate educational content powered by OpenAI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input
              id="topic"
              placeholder="Enter a topic (e.g., Introduction to Machine Learning)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="content-type">Content Type</Label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger id="content-type">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="notes">Study Notes</SelectItem>
                  <SelectItem value="quiz">Quiz Questions</SelectItem>
                  <SelectItem value="summary">Summary</SelectItem>
                  <SelectItem value="flashcards">Flashcards</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleGenerate} className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Brain className="mr-2 h-4 w-4" />
                Generate Content
              </>
            )}
          </Button>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600 font-medium">Error: {error}</p>
              <p className="text-xs text-red-500 mt-1">Please try again or choose a different topic/content type.</p>
            </div>
          )}
        </div>

        {generatedContent && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">Generated Content</h3>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border">
              <pre className="whitespace-pre-wrap font-sans text-sm">{generatedContent}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
