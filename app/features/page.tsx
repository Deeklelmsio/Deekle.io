import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  BarChart3,
  MessageSquare,
  Sparkles,
  Zap,
  Database,
  Lock,
  LineChart,
  UserCheck,
  Layers,
  Cpu,
  BookText,
  Lightbulb,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">Deekle.io</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="/#use-cases" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Use Cases
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI-Powered Learning Features</h1>
            <p className="text-xl text-gray-600 mb-10">
              Discover how our advanced AI technology transforms the learning experience with personalized, adaptive,
              and engaging features.
            </p>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our AI Technology Stack</h2>
            <p className="text-lg text-gray-600">
              Deekle.io leverages cutting-edge AI technologies to deliver a superior learning experience
            </p>
          </div>

          <Tabs defaultValue="nlp" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="nlp" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  NLP
                </TabsTrigger>
                <TabsTrigger value="adaptive" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Adaptive Learning
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Predictive Analytics
                </TabsTrigger>
                <TabsTrigger value="generation" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Content Generation
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="nlp" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Natural Language Processing</h3>
                  <p className="text-gray-600 mb-6">
                    Our advanced NLP models understand context, intent, and nuance in language, enabling more natural
                    interactions with learning content.
                  </p>
                  <ul className="space-y-3">
                    <TechFeature
                      title="Semantic Understanding"
                      description="Comprehends the meaning behind questions and content, not just keywords"
                    />
                    <TechFeature
                      title="Multilingual Support"
                      description="Processes and generates content in multiple languages"
                    />
                    <TechFeature
                      title="Sentiment Analysis"
                      description="Detects learner frustration or confusion to provide timely assistance"
                    />
                    <TechFeature
                      title="Content Summarization"
                      description="Automatically creates concise summaries of complex learning materials"
                    />
                  </ul>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="NLP visualization"
                    className="max-h-80 object-contain"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="adaptive" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Adaptive Learning</h3>
                  <p className="text-gray-600 mb-6">
                    Our adaptive learning system continuously adjusts content difficulty, pacing, and presentation based
                    on individual learner performance.
                  </p>
                  <ul className="space-y-3">
                    <TechFeature
                      title="Dynamic Difficulty Adjustment"
                      description="Automatically adjusts content complexity based on learner performance"
                    />
                    <TechFeature
                      title="Learning Style Detection"
                      description="Identifies visual, auditory, or kinesthetic learning preferences"
                    />
                    <TechFeature
                      title="Knowledge Gap Analysis"
                      description="Pinpoints specific areas where additional practice is needed"
                    />
                    <TechFeature
                      title="Personalized Learning Paths"
                      description="Creates custom learning journeys optimized for each individual"
                    />
                  </ul>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Adaptive learning visualization"
                    className="max-h-80 object-contain"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                  <p className="text-gray-600 mb-6">
                    Our predictive models analyze learning patterns to forecast outcomes and provide proactive
                    interventions.
                  </p>
                  <ul className="space-y-3">
                    <TechFeature
                      title="Completion Probability"
                      description="Predicts likelihood of course completion based on engagement patterns"
                    />
                    <TechFeature
                      title="Performance Forecasting"
                      description="Projects assessment scores based on current learning trajectory"
                    />
                    <TechFeature
                      title="Retention Risk Alerts"
                      description="Identifies learners at risk of disengagement before it happens"
                    />
                    <TechFeature
                      title="Optimal Learning Time"
                      description="Determines the best times for individual learning based on past performance"
                    />
                  </ul>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Predictive analytics visualization"
                    className="max-h-80 object-contain"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="generation" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Content Generation</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI creates personalized learning materials, assessments, and practice exercises tailored to
                    individual needs.
                  </p>
                  <ul className="space-y-3">
                    <TechFeature
                      title="Quiz Generation"
                      description="Creates custom quizzes based on learning materials and knowledge gaps"
                    />
                    <TechFeature
                      title="Explanation Synthesis"
                      description="Generates multiple explanations of concepts using different approaches"
                    />
                    <TechFeature
                      title="Practice Problem Creation"
                      description="Develops targeted practice exercises at appropriate difficulty levels"
                    />
                    <TechFeature
                      title="Content Adaptation"
                      description="Transforms existing materials into different formats (visual, text, interactive)"
                    />
                  </ul>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Content generation visualization"
                    className="max-h-80 object-contain"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Platform Features</h2>
            <p className="text-lg text-gray-600">
              Comprehensive tools powered by AI to transform every aspect of the learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-purple-600" />}
              title="AI Tutor"
              description="24/7 personalized tutoring that adapts to your learning style and answers questions in real-time."
            />
            <FeatureCard
              icon={<BookText className="h-8 w-8 text-purple-600" />}
              title="Smart Content Library"
              description="Organize and access all your learning materials with AI-powered search and recommendations."
            />
            <FeatureCard
              icon={<LineChart className="h-8 w-8 text-purple-600" />}
              title="Learning Analytics"
              description="Comprehensive insights into learning patterns, strengths, and areas for improvement."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-purple-600" />}
              title="Compliance Automation"
              description="Predictive alerts and automated tracking ensure regulatory requirements are always met."
            />
            <FeatureCard
              icon={<Layers className="h-8 w-8 text-purple-600" />}
              title="Personalized Learning Paths"
              description="Custom learning journeys based on goals, current knowledge, and learning preferences."
            />
            <FeatureCard
              icon={<UserCheck className="h-8 w-8 text-purple-600" />}
              title="Skills Assessment"
              description="Accurate evaluation of current skills with personalized improvement recommendations."
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-purple-600" />}
              title="Content Management"
              description="Powerful tools to create, organize, and distribute learning materials across your organization."
            />
            <FeatureCard
              icon={<Cpu className="h-8 w-8 text-purple-600" />}
              title="Integration Ecosystem"
              description="Seamless connections with HRIS, LMS, and other enterprise systems."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-purple-600" />}
              title="Enterprise Security"
              description="SOC 2 compliant platform with role-based access control and data encryption."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl mb-10">
              Join thousands of organizations using Deekle.io to create engaging, effective, and personalized learning
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Deekle.io</span>
              </div>
              <p className="text-gray-400 max-w-xs">Revolutionizing education with AI-powered learning experiences.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Deekle.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="bg-purple-50 p-3 rounded-lg w-fit mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function TechFeature({ title, description }) {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1">
        <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
          <CheckIcon className="h-3 w-3 text-purple-600" />
        </div>
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
