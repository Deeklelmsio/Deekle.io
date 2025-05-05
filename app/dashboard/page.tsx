import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Flame,
  LineChart,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"
import { PredictiveComplianceAlerts } from "@/components/predictive-compliance-alerts"
import { LearningPathVisualizer } from "@/components/learning-path-visualizer"
import { EngagementHeatmap } from "@/components/engagement-heatmap"

export default function Dashboard() {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-6">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Learning Dashboard</h1>
            <p className="text-gray-500">Welcome back, John. Here's what's happening with your learning journey</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              This Week
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Customize
            </Button>
          </div>
        </div>

        {/* AI Learning Assistant */}
        <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Your AI Learning Assistant</h2>
                <p className="text-purple-100 max-w-xl">
                  Based on your recent activity, I've created a personalized learning path for you. Would you like to
                  explore it or ask me a question about your courses?
                </p>
              </div>
              <Button className="bg-white text-purple-600 hover:bg-purple-50">Chat with AI</Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="learning-path">Learning Path</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard
                title="Learning Progress"
                value="68%"
                description="Overall completion rate"
                icon={<TrendingUp className="h-5 w-5 text-green-500" />}
                trend="up"
                trendValue="12%"
              />
              <StatCard
                title="Study Time"
                value="12.5 hrs"
                description="This week"
                icon={<Clock className="h-5 w-5 text-blue-500" />}
                trend="up"
                trendValue="3.2 hrs"
              />
              <StatCard
                title="Upcoming Deadlines"
                value="3"
                description="Due this week"
                icon={<Calendar className="h-5 w-5 text-red-500" />}
                trend="down"
                trendValue="2"
              />
              <StatCard
                title="Learning Streak"
                value="14 days"
                description="Current streak"
                icon={<Flame className="h-5 w-5 text-orange-500" />}
                trend="up"
                trendValue="5 days"
              />
            </div>

            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Continue Learning</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard/courses">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CourseCard
                  title="Python for Data Analysis"
                  instructor="Dr. Robert Kim"
                  progress={65}
                  image="/placeholder.svg?height=200&width=300"
                  lastActivity="Last activity: 2 days ago"
                  tags={["Python", "Data Science", "Intermediate"]}
                  nextLesson="Data Visualization with Matplotlib"
                  timeRemaining="45 min remaining"
                />
                <CourseCard
                  title="Web Development Bootcamp"
                  instructor="Jessica Williams"
                  progress={42}
                  image="/placeholder.svg?height=200&width=300"
                  lastActivity="Last activity: Yesterday"
                  tags={["HTML", "CSS", "JavaScript"]}
                  nextLesson="Responsive Design Principles"
                  timeRemaining="30 min remaining"
                />
                <CourseCard
                  title="Digital Marketing Essentials"
                  instructor="Thomas Anderson"
                  progress={78}
                  image="/placeholder.svg?height=200&width=300"
                  lastActivity="Last activity: Today"
                  tags={["Marketing", "SEO", "Social Media"]}
                  nextLesson="Social Media Strategy"
                  timeRemaining="20 min remaining"
                />
              </div>
            </div>

            {/* Smart Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>Personalized content based on your learning patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Optimize Your Learning Schedule</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Based on your activity patterns, you learn most effectively in the evening between 7-9 PM.
                        Consider scheduling focused study sessions during this time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Suggested Next Course</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Based on your completion of Python basics, we recommend "Machine Learning Fundamentals" to build
                        on your data science skills.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Path Tab */}
          <TabsContent value="learning-path">
            <Card>
              <CardHeader>
                <CardTitle>Your Personalized Learning Path</CardTitle>
                <CardDescription>AI-generated learning journey based on your goals and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <LearningPathVisualizer />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Predictive Compliance Alerts</CardTitle>
                <CardDescription>Smart notifications to keep you ahead of compliance requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <PredictiveComplianceAlerts />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Learning Engagement Heatmap</CardTitle>
                <CardDescription>Visualize your learning patterns and identify optimal study times</CardDescription>
              </CardHeader>
              <CardContent>
                <EngagementHeatmap />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Weekly Progress and Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
              <CardDescription>Your learning activity for the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full">
                {/* This would be a chart in a real implementation */}
                <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
                  <LineChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Weekly progress chart would render here</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Scheduled sessions and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-md">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Data Privacy Training Due</p>
                    <p className="text-sm text-gray-500">Tomorrow, 11:59 PM</p>
                    <Badge className="mt-1 bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Python Study Group</p>
                    <p className="text-sm text-gray-500">Wednesday, 6:00 PM</p>
                    <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-100">Virtual</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Marketing Project Submission</p>
                    <p className="text-sm text-gray-500">Friday, 5:00 PM</p>
                    <Badge className="mt-1 bg-amber-100 text-amber-800 hover:bg-amber-100">Assignment</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, description, icon, trend, trendValue }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <div className="flex items-center mt-1">
              {trend === "up" && <TrendingUp className="h-3 w-3 text-green-500 mr-1" />}
              {trend === "down" && <TrendingUp className="h-3 w-3 text-red-500 mr-1 rotate-180" />}
              <span className={`text-xs ${trend === "up" ? "text-green-500" : "text-red-500"}`}>{trendValue}</span>
              <span className="text-xs text-gray-500 ml-1">{description}</span>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function CourseCard({ title, instructor, progress, image, lastActivity, tags, nextLesson, timeRemaining }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">Instructor: {instructor}</p>

        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-gray-500 mt-1">{lastActivity}</p>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 p-3 rounded-md mb-3">
          <p className="text-sm font-medium">Next: {nextLesson}</p>
          <p className="text-xs text-gray-500 mt-1">{timeRemaining}</p>
        </div>

        <Button variant="outline" size="sm" className="w-full">
          Continue Learning
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  )
}
