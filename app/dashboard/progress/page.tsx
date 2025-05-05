import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  LineChart,
  PieChart,
  Target,
  TrendingUp,
} from "lucide-react"

export default function ProgressPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Learning Progress</h1>
            <p className="text-gray-500">Track your learning journey and achievements</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Learning Time"
            value="42.5 hrs"
            description="+12% from last month"
            trend="up"
            icon={<Clock className="h-5 w-5" />}
          />
          <StatsCard
            title="Courses Completed"
            value="7"
            description="3 in progress"
            trend="up"
            icon={<CheckCircle className="h-5 w-5" />}
          />
          <StatsCard
            title="Certifications"
            value="4"
            description="2 pending completion"
            trend="neutral"
            icon={<Award className="h-5 w-5" />}
          />
          <StatsCard
            title="Learning Streak"
            value="14 days"
            description="Personal best: 21 days"
            trend="up"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* Course Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>Your progress across all active courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <CourseProgressItem
                title="Python for Data Analysis"
                instructor="Dr. Robert Kim"
                progress={65}
                lastActivity="Last activity: 2 days ago"
                estimatedCompletion="Estimated completion: May 20, 2025"
              />
              <CourseProgressItem
                title="Web Development Bootcamp"
                instructor="Jessica Williams"
                progress={42}
                lastActivity="Last activity: Yesterday"
                estimatedCompletion="Estimated completion: June 15, 2025"
              />
              <CourseProgressItem
                title="Digital Marketing Essentials"
                instructor="Thomas Anderson"
                progress={78}
                lastActivity="Last activity: Today"
                estimatedCompletion="Estimated completion: May 10, 2025"
              />
            </div>
          </CardContent>
        </Card>

        {/* Skills Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Development</CardTitle>
            <CardDescription>Track your skill acquisition and proficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="technical">
              <TabsList className="mb-6">
                <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                <TabsTrigger value="business">Business Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="technical" className="space-y-6">
                <SkillProgressItem
                  name="Python Programming"
                  progress={85}
                  level="Advanced"
                  courses={["Python for Data Analysis", "Machine Learning Fundamentals"]}
                />
                <SkillProgressItem
                  name="Web Development"
                  progress={60}
                  level="Intermediate"
                  courses={["Web Development Bootcamp", "JavaScript Fundamentals"]}
                />
                <SkillProgressItem
                  name="Data Analysis"
                  progress={70}
                  level="Intermediate"
                  courses={["Python for Data Analysis", "Business Intelligence"]}
                />
                <SkillProgressItem
                  name="Machine Learning"
                  progress={40}
                  level="Beginner"
                  courses={["Machine Learning Fundamentals"]}
                />
              </TabsContent>

              <TabsContent value="soft" className="space-y-6">
                <SkillProgressItem
                  name="Communication"
                  progress={75}
                  level="Advanced"
                  courses={["Business Communication", "Team Collaboration"]}
                />
                <SkillProgressItem
                  name="Problem Solving"
                  progress={80}
                  level="Advanced"
                  courses={["Critical Thinking", "Project Management"]}
                />
                <SkillProgressItem
                  name="Time Management"
                  progress={65}
                  level="Intermediate"
                  courses={["Productivity Essentials", "Project Management"]}
                />
              </TabsContent>

              <TabsContent value="business" className="space-y-6">
                <SkillProgressItem
                  name="Marketing"
                  progress={70}
                  level="Intermediate"
                  courses={["Digital Marketing Essentials", "Social Media Strategy"]}
                />
                <SkillProgressItem
                  name="Project Management"
                  progress={55}
                  level="Intermediate"
                  courses={["Project Management Fundamentals"]}
                />
                <SkillProgressItem
                  name="Data-Driven Decision Making"
                  progress={60}
                  level="Intermediate"
                  courses={["Business Intelligence", "Data Analysis for Business"]}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-0.5">
              <CardTitle>Learning Goals</CardTitle>
              <CardDescription>Track your learning objectives</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              <Target className="mr-2 h-4 w-4" />
              Add Goal
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <GoalItem
                title="Complete Machine Learning Certification"
                progress={65}
                dueDate="June 30, 2025"
                priority="High"
              />
              <GoalItem title="Build 3 Data Science Projects" progress={33} dueDate="July 15, 2025" priority="Medium" />
              <GoalItem title="Read 'Deep Learning' textbook" progress={80} dueDate="May 20, 2025" priority="Medium" />
              <GoalItem title="Complete 5 coding challenges" progress={40} dueDate="Ongoing" priority="Low" />
            </div>
          </CardContent>
        </Card>

        {/* Learning Patterns */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Patterns</CardTitle>
            <CardDescription>When and how you learn best</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="time">
              <TabsList className="mb-4">
                <TabsTrigger value="time">Time of Day</TabsTrigger>
                <TabsTrigger value="content">Content Type</TabsTrigger>
                <TabsTrigger value="retention">Retention</TabsTrigger>
              </TabsList>
              <TabsContent value="time" className="h-[250px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
                  <BarChart3 className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">
                    Time of day learning pattern chart would render here
                  </span>
                </div>
              </TabsContent>
              <TabsContent value="content" className="h-[250px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
                  <PieChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Content type preference chart would render here</span>
                </div>
              </TabsContent>
              <TabsContent value="retention" className="h-[250px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
                  <LineChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Knowledge retention chart would render here</span>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatsCard({ title, value, description, trend, icon }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <p className="text-sm text-gray-500 mt-1 flex items-center">
              {trend === "up" && <TrendingUp className="h-3 w-3 text-green-500 mr-1" />}
              {trend === "down" && <TrendingUp className="h-3 w-3 text-red-500 mr-1 rotate-180" />}
              {description}
            </p>
          </div>
          <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function CourseProgressItem({ title, instructor, progress, lastActivity, estimatedCompletion }) {
  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">Instructor: {instructor}</p>
        </div>
        <div className="text-sm text-gray-500">{lastActivity}</div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-gray-500 mt-1">{estimatedCompletion}</p>
      </div>
    </div>
  )
}

function SkillProgressItem({ name, progress, level, courses }) {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "text-blue-600"
      case "intermediate":
        return "text-purple-600"
      case "advanced":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">
            Level: <span className={getLevelColor(level)}>{level}</span>
          </p>
        </div>
        <div className="text-sm font-medium">{progress}%</div>
      </div>
      <Progress value={progress} className="h-2" />
      <div className="flex flex-wrap gap-1 mt-1">
        {courses.map((course, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {course}
          </span>
        ))}
      </div>
    </div>
  )
}

function GoalItem({ title, progress, dueDate, priority }) {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-500 bg-red-50"
      case "medium":
        return "text-orange-500 bg-orange-50"
      case "low":
        return "text-green-500 bg-green-50"
      default:
        return "text-gray-500 bg-gray-50"
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium">{title}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500">Due: {dueDate}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(priority)}`}>{priority}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Progress value={progress} className="h-2 flex-1" />
        <span className="text-sm font-medium">{progress}%</span>
      </div>
    </div>
  )
}
