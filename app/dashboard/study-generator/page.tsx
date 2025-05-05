import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Brain, Download, FileText, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function StudyGeneratorPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Study Material Generator</h1>
            <p className="text-gray-500">Create personalized study materials with AI</p>
          </div>
        </div>

        <Tabs defaultValue="notes">
          <TabsList>
            <TabsTrigger value="notes">Study Notes</TabsTrigger>
            <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
            <TabsTrigger value="quiz">Practice Quiz</TabsTrigger>
            <TabsTrigger value="summary">Content Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="notes" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Study Notes</CardTitle>
                  <CardDescription>Create comprehensive study notes on any topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="topic">Topic</Label>
                      <Input id="topic" placeholder="e.g., Python Data Structures" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Content or Syllabus (Optional)</Label>
                      <Textarea
                        id="content"
                        placeholder="Paste content or describe what you want to study..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="level">Difficulty Level</Label>
                        <Select defaultValue="intermediate">
                          <SelectTrigger id="level">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="format">Format</Label>
                        <Select defaultValue="detailed">
                          <SelectTrigger id="format">
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="concise">Concise</SelectItem>
                            <SelectItem value="detailed">Detailed</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Include</Label>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="examples" defaultChecked />
                          <label
                            htmlFor="examples"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Examples
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="diagrams" defaultChecked />
                          <label
                            htmlFor="diagrams"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Diagrams (text-based)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="practice" defaultChecked />
                          <label
                            htmlFor="practice"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Practice questions
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Study Notes
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Generated Notes</CardTitle>
                  <CardDescription>Your AI-generated study materials will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[400px] flex items-center justify-center border border-dashed rounded-lg p-8 text-center">
                    <div className="space-y-2">
                      <Brain className="h-12 w-12 text-gray-300 mx-auto" />
                      <p className="text-gray-500">
                        Fill out the form and click "Generate Study Notes" to create your personalized study materials.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" disabled>
                      <FileText className="mr-2 h-4 w-4" />
                      Save to Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="flashcards" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Flashcards</CardTitle>
                  <CardDescription>Create flashcards for effective memorization</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="flashcard-topic">Topic</Label>
                      <Input id="flashcard-topic" placeholder="e.g., JavaScript Functions" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="flashcard-content">Content (Optional)</Label>
                      <Textarea
                        id="flashcard-content"
                        placeholder="Paste content or describe what you want to create flashcards for..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-count">Number of Cards</Label>
                        <Select defaultValue="10">
                          <SelectTrigger id="card-count">
                            <SelectValue placeholder="Select count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 cards</SelectItem>
                            <SelectItem value="10">10 cards</SelectItem>
                            <SelectItem value="15">15 cards</SelectItem>
                            <SelectItem value="20">20 cards</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-style">Card Style</Label>
                        <Select defaultValue="qa">
                          <SelectTrigger id="card-style">
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="qa">Question & Answer</SelectItem>
                            <SelectItem value="term">Term & Definition</SelectItem>
                            <SelectItem value="fill">Fill in the Blank</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Flashcards
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Generated Flashcards</CardTitle>
                  <CardDescription>Your AI-generated flashcards will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[400px] flex items-center justify-center border border-dashed rounded-lg p-8 text-center">
                    <div className="space-y-2">
                      <Brain className="h-12 w-12 text-gray-300 mx-auto" />
                      <p className="text-gray-500">
                        Fill out the form and click "Generate Flashcards" to create your study cards.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download Cards
                    </Button>
                    <Button variant="outline" disabled>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Practice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Practice Quiz</CardTitle>
                  <CardDescription>Create a quiz to test your knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="quiz-topic">Topic</Label>
                      <Input id="quiz-topic" placeholder="e.g., Marketing Analytics" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quiz-content">Content (Optional)</Label>
                      <Textarea
                        id="quiz-content"
                        placeholder="Paste content or describe what you want to be quizzed on..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="question-count">Number of Questions</Label>
                        <Select defaultValue="5">
                          <SelectTrigger id="question-count">
                            <SelectValue placeholder="Select count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 questions</SelectItem>
                            <SelectItem value="10">10 questions</SelectItem>
                            <SelectItem value="15">15 questions</SelectItem>
                            <SelectItem value="20">20 questions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="difficulty">Difficulty</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="difficulty">
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                            <SelectItem value="mixed">Mixed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Question Types</Label>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="multiple-choice" defaultChecked />
                          <label
                            htmlFor="multiple-choice"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Multiple Choice
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="true-false" defaultChecked />
                          <label
                            htmlFor="true-false"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            True/False
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="short-answer" />
                          <label
                            htmlFor="short-answer"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Short Answer
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Quiz
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Generated Quiz</CardTitle>
                  <CardDescription>Your AI-generated quiz will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[400px] flex items-center justify-center border border-dashed rounded-lg p-8 text-center">
                    <div className="space-y-2">
                      <Brain className="h-12 w-12 text-gray-300 mx-auto" />
                      <p className="text-gray-500">
                        Fill out the form and click "Generate Quiz" to create your practice questions.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download Quiz
                    </Button>
                    <Button variant="outline" disabled>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="summary" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Content Summary</CardTitle>
                  <CardDescription>Create concise summaries of learning materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="summary-title">Title</Label>
                      <Input id="summary-title" placeholder="e.g., Machine Learning Fundamentals" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="summary-content">Content to Summarize</Label>
                      <Textarea
                        id="summary-content"
                        placeholder="Paste the content you want to summarize..."
                        className="min-h-[200px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="summary-length">Summary Length</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="summary-length">
                            <SelectValue placeholder="Select length" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short">Short (1-2 paragraphs)</SelectItem>
                            <SelectItem value="medium">Medium (3-4 paragraphs)</SelectItem>
                            <SelectItem value="long">Long (5+ paragraphs)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="summary-focus">Focus On</Label>
                        <Select defaultValue="key-concepts">
                          <SelectTrigger id="summary-focus">
                            <SelectValue placeholder="Select focus" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="key-concepts">Key Concepts</SelectItem>
                            <SelectItem value="definitions">Definitions</SelectItem>
                            <SelectItem value="examples">Examples</SelectItem>
                            <SelectItem value="applications">Applications</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Summary
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Generated Summary</CardTitle>
                  <CardDescription>Your AI-generated summary will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[400px] flex items-center justify-center border border-dashed rounded-lg p-8 text-center">
                    <div className="space-y-2">
                      <Brain className="h-12 w-12 text-gray-300 mx-auto" />
                      <p className="text-gray-500">
                        Fill out the form and click "Generate Summary" to create your content summary.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download Summary
                    </Button>
                    <Button variant="outline" disabled>
                      <FileText className="mr-2 h-4 w-4" />
                      Save to Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
