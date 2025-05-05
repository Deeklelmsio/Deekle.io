import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Brain,
  CheckCircle,
  ChevronLeft,
  Clock,
  FileText,
  Lightbulb,
  MessageSquare,
  PlayCircle,
  Settings,
  Star,
  Users,
} from "lucide-react"

export default function CoursePage({ params }) {
  // In a real app, you would fetch course data based on params.id
  const courseId = params.id

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Machine Learning Fundamentals</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Ask AI Tutor
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
              <Brain className="h-4 w-4 mr-2" />
              Generate Study Notes
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="content">
              <TabsList className="mb-6">
                <TabsTrigger value="content">Course Content</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="notes">AI Notes</TabsTrigger>
              </TabsList>

              <TabsContent value="content">
                <div className="space-y-6">
                  <CourseModule
                    title="Module 1: Introduction to Machine Learning"
                    description="Understand the fundamentals of machine learning and its applications."
                    lessons={[
                      { title: "What is Machine Learning?", duration: "15 min", completed: true },
                      { title: "Types of Machine Learning", duration: "20 min", completed: true },
                      { title: "Machine Learning Workflow", duration: "25 min", completed: false, current: true },
                      { title: "Setting Up Your Environment", duration: "30 min", completed: false },
                    ]}
                  />

                  <CourseModule
                    title="Module 2: Supervised Learning"
                    description="Learn about supervised learning algorithms and their implementation."
                    lessons={[
                      { title: "Linear Regression", duration: "30 min", completed: false },
                      { title: "Logistic Regression", duration: "25 min", completed: false },
                      { title: "Decision Trees", duration: "35 min", completed: false },
                      { title: "Support Vector Machines", duration: "40 min", completed: false },
                    ]}
                  />

                  <CourseModule
                    title="Module 3: Unsupervised Learning"
                    description="Explore unsupervised learning techniques for pattern discovery."
                    lessons={[
                      { title: "Clustering Algorithms", duration: "30 min", completed: false },
                      { title: "Dimensionality Reduction", duration: "35 min", completed: false },
                      { title: "Principal Component Analysis", duration: "40 min", completed: false },
                      { title: "Anomaly Detection", duration: "25 min", completed: false },
                    ]}
                  />

                  <CourseModule
                    title="Module 4: Neural Networks & Deep Learning"
                    description="Dive into neural networks and deep learning architectures."
                    lessons={[
                      { title: "Introduction to Neural Networks", duration: "35 min", completed: false },
                      { title: "Activation Functions", duration: "20 min", completed: false },
                      { title: "Backpropagation", duration: "45 min", completed: false },
                      { title: "Convolutional Neural Networks", duration: "50 min", completed: false },
                    ]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="overview">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-gray-700 mb-4">
                      This comprehensive course introduces you to the exciting world of machine learning. You'll learn
                      both theoretical foundations and practical applications through hands-on projects and exercises.
                      By the end of this course, you'll be able to build, train, and deploy your own machine learning
                      models.
                    </p>
                    <p className="text-gray-700">
                      Whether you're a beginner or have some programming experience, this course is designed to take you
                      from the basics to advanced concepts in a structured and engaging way. The AI-powered learning
                      assistant will provide personalized guidance throughout your journey.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Understand machine learning fundamentals and algorithms",
                        "Build and train supervised and unsupervised models",
                        "Implement neural networks and deep learning architectures",
                        "Evaluate and improve model performance",
                        "Apply machine learning to real-world problems",
                        "Deploy models to production environments",
                        "Use popular ML libraries and frameworks",
                        "Develop a portfolio of machine learning projects",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=64&width=64"
                          alt="Dr. Sarah Chen"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Dr. Sarah Chen</h3>
                        <p className="text-gray-500 mb-2">AI Research Scientist, Stanford University</p>
                        <p className="text-gray-700">
                          Dr. Chen has over 10 years of experience in machine learning research and application. She has
                          published numerous papers in top AI conferences and worked with leading tech companies on
                          implementing ML solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="space-y-2">
                      {[
                        "Basic understanding of programming concepts",
                        "Familiarity with Python (beginner level is sufficient)",
                        "Basic knowledge of mathematics and statistics",
                        "A computer with internet access",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">•</div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="discussions">
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Course Discussions</h2>
                    <Button className="bg-purple-600 hover:bg-purple-700">New Topic</Button>
                  </div>

                  <Card className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=40&width=40"
                              alt="User avatar"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">Help with backpropagation algorithm</h3>
                            <p className="text-sm text-gray-500">Posted by Alex Johnson • 2 days ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MessageSquare className="h-4 w-4" />
                          <span>12 replies</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        I'm having trouble understanding the backpropagation algorithm from Module 4. Could someone
                        explain how the chain rule is applied in this context? The mathematical notation is confusing
                        me.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Reply
                        </Button>
                        <Button variant="ghost" size="sm" className="text-purple-600">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Ask AI to explain
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=40&width=40"
                              alt="User avatar"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">Project ideas for the final assignment</h3>
                            <p className="text-sm text-gray-500">Posted by Maria Garcia • 1 week ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MessageSquare className="h-4 w-4" />
                          <span>8 replies</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        I'm brainstorming ideas for the final project. I'm interested in applying ML to environmental
                        data. Has anyone worked on similar projects or have suggestions for datasets I could use?
                      </p>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Reply
                        </Button>
                        <Button variant="ghost" size="sm" className="text-purple-600">
                          <Brain className="h-4 w-4 mr-2" />
                          Generate project ideas
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="outline" className="w-full">
                    Load More Discussions
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="notes">
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">AI-Generated Study Notes</h2>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Brain className="h-4 w-4 mr-2" />
                      Generate New Notes
                    </Button>
                  </div>

                  <Card className="mb-4">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Key Concepts: Machine Learning Fundamentals</h3>
                      <p className="text-sm text-gray-500 mb-4">Generated from Module 1 • Last updated: 2 days ago</p>

                      <div className="prose max-w-none">
                        <h4>Definition and Types of Machine Learning</h4>
                        <p>
                          Machine Learning is a subset of artificial intelligence that enables systems to learn and
                          improve from experience without being explicitly programmed. The three main types are:
                        </p>
                        <ul>
                          <li>
                            <strong>Supervised Learning:</strong> Training with labeled data to make predictions
                          </li>
                          <li>
                            <strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data
                          </li>
                          <li>
                            <strong>Reinforcement Learning:</strong> Learning through trial and error with
                            rewards/penalties
                          </li>
                        </ul>

                        <h4>The Machine Learning Workflow</h4>
                        <ol>
                          <li>Problem Definition: Clearly define what you're trying to solve</li>
                          <li>Data Collection: Gather relevant, high-quality data</li>
                          <li>Data Preprocessing: Clean, normalize, and prepare data</li>
                          <li>Feature Engineering: Select and transform features</li>
                          <li>Model Selection: Choose appropriate algorithms</li>
                          <li>Training: Fit the model to training data</li>
                          <li>Evaluation: Assess model performance</li>
                          <li>Hyperparameter Tuning: Optimize model parameters</li>
                          <li>Deployment: Implement the model in production</li>
                          <li>Monitoring: Track performance and update as needed</li>
                        </ol>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="ghost" size="sm" className="text-purple-600">
                          <Brain className="h-4 w-4 mr-2" />
                          Expand Notes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Quiz Preparation: Types of Machine Learning</h3>
                      <p className="text-sm text-gray-500 mb-4">Generated from Module 1 • Last updated: 5 days ago</p>

                      <div className="prose max-w-none">
                        <p>
                          Here are practice questions to help you prepare for the upcoming quiz on Types of Machine
                          Learning:
                        </p>

                        <div className="bg-gray-50 p-4 rounded-md mb-4">
                          <p className="font-medium">
                            1. Which type of machine learning would be most appropriate for predicting house prices
                            based on features like square footage, location, and number of bedrooms?
                          </p>
                          <ul className="mt-2">
                            <li>a) Supervised Learning</li>
                            <li>b) Unsupervised Learning</li>
                            <li>c) Reinforcement Learning</li>
                            <li>d) Semi-supervised Learning</li>
                          </ul>
                          <p className="text-purple-600 mt-2">Answer: a) Supervised Learning</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="font-medium">2. In which scenario would you use clustering algorithms?</p>
                          <ul className="mt-2">
                            <li>a) Predicting stock prices</li>
                            <li>b) Classifying emails as spam or not spam</li>
                            <li>c) Customer segmentation based on purchasing behavior</li>
                            <li>d) Teaching a robot to walk</li>
                          </ul>
                          <p className="text-purple-600 mt-2">
                            Answer: c) Customer segmentation based on purchasing behavior
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="ghost" size="sm" className="text-purple-600">
                          <Brain className="h-4 w-4 mr-2" />
                          Generate More Questions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Your Progress</h2>
                <div className="flex justify-between text-sm mb-2">
                  <span>Course Completion</span>
                  <span className="font-medium">23%</span>
                </div>
                <Progress value={23} className="h-2 mb-6" />

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Module 1</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Module 2</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <Progress value={0} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Module 3</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <Progress value={0} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Module 4</span>
                      <span className="font-medium">0%</span>
                    </div>
                    <Progress value={0} className="h-1.5" />
                  </div>
                </div>

                <div className="border-t mt-6 pt-6">
                  <h3 className="font-semibold mb-3">Next Up</h3>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Machine Learning Workflow</p>
                      <p className="text-sm text-gray-500">25 min • Module 1, Lesson 3</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Continue Learning</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">AI Learning Assistant</h2>
                <p className="text-gray-700 mb-4">
                  Get personalized help with course concepts, generate study materials, or ask questions about the
                  content.
                </p>
                <div className="space-y-3 mb-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Lightbulb className="h-4 w-4 mr-2 text-purple-600" />
                    Explain difficult concepts
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2 text-purple-600" />
                    Generate practice questions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Brain className="h-4 w-4 mr-2 text-purple-600" />
                    Create study notes
                  </Button>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat with AI Tutor
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Course Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-gray-600">8 weeks • 12 hours total</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Students</p>
                      <p className="text-gray-600">1,245 enrolled</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Rating</p>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-gray-600">4.9 (328 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Level</p>
                      <p className="text-gray-600">Beginner to Intermediate</p>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-6 pt-6">
                  <h3 className="font-semibold mb-3">Certificate</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Complete all course requirements to earn a verified certificate of completion.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md text-center">
                    <p className="text-sm text-gray-600">23% complete</p>
                    <p className="text-xs text-gray-500 mt-1">Estimated completion: June 15, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function CourseModule({ title, description, lessons }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-3">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-md ${
                lesson.current ? "bg-purple-50 border border-purple-200" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    lesson.completed ? "bg-green-100" : lesson.current ? "bg-purple-100" : "bg-gray-100"
                  }`}
                >
                  {lesson.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : lesson.current ? (
                    <PlayCircle className="h-5 w-5 text-purple-600" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                <div>
                  <p className={`font-medium ${lesson.current ? "text-purple-700" : ""}`}>{lesson.title}</p>
                  <p className="text-sm text-gray-500">{lesson.duration}</p>
                </div>
              </div>
              <Button
                variant={lesson.current ? "default" : "ghost"}
                size="sm"
                className={lesson.current ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {lesson.completed ? "Review" : lesson.current ? "Continue" : "Start"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
