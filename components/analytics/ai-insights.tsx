"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Search } from "lucide-react"

export function AIInsights() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setResponse("")

    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock response based on query
      let mockResponse = ""
      if (query.toLowerCase().includes("engagement")) {
        mockResponse =
          "Based on the data, user engagement has increased by 15% in the last quarter. The most significant growth is seen in interactive content and assessments. Consider expanding these areas for continued improvement."
      } else if (query.toLowerCase().includes("compliance")) {
        mockResponse =
          "Compliance rates are currently at 68%, which is 5% higher than the industry average. However, the Engineering department is showing a 10% lower compliance rate than other departments. Consider targeted interventions for this group."
      } else if (query.toLowerCase().includes("learning")) {
        mockResponse =
          "Learning completion rates are highest for short-form content (under 15 minutes) with an 82% completion rate. Long-form content (over 30 minutes) has only a 45% completion rate. Consider breaking down longer content into smaller modules."
      } else {
        mockResponse =
          "I've analyzed your learning data and found several insights. User engagement is trending upward, with a 15% increase in the last quarter. Compliance rates are at 68%, and learning completion rates vary significantly by content length and type. Would you like more specific information about any of these areas?"
      }

      setResponse(mockResponse)
    } catch (error) {
      setResponse("Sorry, I couldn't process your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights Assistant</CardTitle>
        <CardDescription>Ask questions about your learning data</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Ask a question about your learning data..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" disabled={isLoading || !query.trim()} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Get Insights
              </>
            )}
          </Button>
        </form>

        {response && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p className="text-sm">{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
