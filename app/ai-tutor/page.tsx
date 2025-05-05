"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Brain,
  ChevronRight,
  FileText,
  Lightbulb,
  MessageSquare,
  Send,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react"

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm your AI learning assistant. How can I help you with your studies today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: inputValue }])

    // Simulate AI response (in a real app, this would call an AI API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'd be happy to help with that! Let me provide some information about machine learning algorithms and how they work...",
        },
      ])
    }, 1000)

    setInputValue("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chat Area */}
          <div className="lg:col-span-2 flex flex-col h-[calc(100vh-8rem)]">
            <div className="bg-white p-4 rounded-t-lg border border-b-0 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <h1 className="font-bold text-lg">AI Learning Assistant</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Save Chat
                </Button>
                <Button variant="outline" size="sm">
                  <Sparkles className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto border-x p-4 bg-white">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-3/4 rounded-lg p-4 ${
                      message.role === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}

                    {message.role === "assistant" && (
                      <div className="mt-2 flex items-center gap-2 text-gray-500">
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          Helpful
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ThumbsDown className="h-3 w-3 mr-1" />
                          Not helpful
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="bg-white p-4 rounded-b-lg border border-t-0 flex items-end gap-2">
              <Textarea
                placeholder="Ask me anything about your courses..."
                className="min-h-24 resize-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button className="bg-purple-600 hover:bg-purple-700 h-10 w-10 p-2" onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">AI Capabilities</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Explain Concepts</p>
                      <p className="text-sm text-gray-600">Get clear explanations of complex topics</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Generate Study Materials</p>
                      <p className="text-sm text-gray-600">Create notes, summaries, and practice questions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Course Guidance</p>
                      <p className="text-sm text-gray-600">Get recommendations for your learning path</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Answer Questions</p>
                      <p className="text-sm text-gray-600">Get help with assignments and projects</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Suggested Prompts</h2>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 font-normal"
                    onClick={() => setInputValue("Explain the difference between supervised and unsupervised learning")}
                  >
                    Explain the difference between supervised and unsupervised learning
                    <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 font-normal"
                    onClick={() => setInputValue("Generate practice questions for the neural networks module")}
                  >
                    Generate practice questions for the neural networks module
                    <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 font-normal"
                    onClick={() => setInputValue("Help me understand backpropagation with a simple example")}
                  >
                    Help me understand backpropagation with a simple example
                    <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 font-normal"
                    onClick={() => setInputValue("Create a study plan for the machine learning course")}
                  >
                    Create a study plan for the machine learning course
                    <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 font-normal"
                    onClick={() => setInputValue("Summarize the key points from Module 2 on supervised learning")}
                  >
                    Summarize the key points from Module 2 on supervised learning
                    <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Learning History</h2>
                <Tabs defaultValue="recent">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="recent" className="flex-1">
                      Recent
                    </TabsTrigger>
                    <TabsTrigger value="saved" className="flex-1">
                      Saved
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="recent">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <p className="font-medium">Neural Networks Explanation</p>
                        <p className="text-sm text-gray-500">Yesterday • Machine Learning Fundamentals</p>
                        <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                          View conversation
                        </Button>
                      </div>

                      <div className="border-b pb-3">
                        <p className="font-medium">Decision Trees Quiz Prep</p>
                        <p className="text-sm text-gray-500">3 days ago • Supervised Learning</p>
                        <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                          View conversation
                        </Button>
                      </div>

                      <div>
                        <p className="font-medium">Study Plan Creation</p>
                        <p className="text-sm text-gray-500">1 week ago • Course Planning</p>
                        <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                          View conversation
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="saved">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <p className="font-medium">Backpropagation Explained</p>
                        <p className="text-sm text-gray-500">Saved on May 10, 2025</p>
                        <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                          View conversation
                        </Button>
                      </div>

                      <div>
                        <p className="font-medium">ML Algorithm Comparison</p>
                        <p className="text-sm text-gray-500">Saved on April 28, 2025</p>
                        <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">
                          View conversation
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
