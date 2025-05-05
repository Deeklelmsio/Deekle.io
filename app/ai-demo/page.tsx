import { AIContentGenerator } from "@/components/ai-content-generator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, FileText, Lightbulb, BarChart3, BookOpen } from "lucide-react"

export default function AIDemo() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">OpenAI Integration Demo</h1>
          <p className="text-gray-500">Explore the AI capabilities of Deekle.io powered by OpenAI</p>
        </div>

        <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Deekle.io + OpenAI</h2>
                <p className="text-purple-100 max-w-xl">
                  Deekle.io leverages OpenAI's powerful models to deliver personalized learning experiences, generate
                  educational content, and provide intelligent tutoring assistance.
                </p>
              </div>
              <Brain className="h-16 w-16 text-white opacity-75" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="content-generator" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content-generator" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content Generator
            </TabsTrigger>
            <TabsTrigger value="ai-features" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              AI Features
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content-generator">
            <AIContentGenerator />
          </TabsContent>

          <TabsContent value="ai-features">
            <div className="grid gap-6 md:grid-cols-2">
              <FeatureCard
                icon={<Brain className="h-8 w-8 text-purple-600" />}
                title="AI Tutor"
                description="Personalized tutoring assistance powered by OpenAI's GPT-4o model. Get help with concepts, assignments, and exam preparation."
              />
              <FeatureCard
                icon={<FileText className="h-8 w-8 text-purple-600" />}
                title="Content Generation"
                description="Generate study notes, quizzes, flashcards, and summaries tailored to your learning needs and difficulty level."
              />
              <FeatureCard
                icon={<BarChart3 className="h-8 w-8 text-purple-600" />}
                title="Learning Analytics"
                description="AI-powered insights into your learning patterns, strengths, weaknesses, and personalized recommendations."
              />
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-purple-600" />}
                title="Personalized Learning Paths"
                description="Custom learning journeys based on your goals, interests, and current skill level, optimized for your success."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="bg-purple-50 p-2 rounded-md">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Powered by OpenAI's GPT-4o model for state-of-the-art performance and accuracy.
        </p>
      </CardContent>
    </Card>
  )
}
