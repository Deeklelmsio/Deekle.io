import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  GraduationCap,
  LineChart,
  PieChart,
  Target,
  TrendingUp,
} from "lucide-react"

export default function LearningAnalyticsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Learning Dashboard</h1>
            <p className="text-gray-500">Track your progress and learning insights</p>
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

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-7">
          {/* Learning Progress */}
          <Card className="md:col-span-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your progress across all courses</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                {/* This would be a chart in a real implementation */}
                <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
                  <LineChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Learning progress chart would render here</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Acquisition */}
          <Card className="md:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle>Skills Acquisition</CardTitle>
                <CardDescription>Your top developing skills</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <SkillProgress name="Machine Learning" progress={78} category="Data Science" />
                <SkillProgress name="Python Programming" progress={92} category="Development" />
                <SkillProgress name="Data Analysis" progress={65} category="Data Science" />
                <SkillProgress name="Neural Networks" progress={42} category="AI" />
                <SkillProgress name="Project Management" progress={58} category="Business" />
              </div>
            </CardContent>
          </Card>

          {/* Learning Goals */}
          <Card className="md:col-span-3">
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
                <GoalItem
                  title="Build 3 Data Science Projects"
                  progress={33}
                  dueDate="July 15, 2025"
                  priority="Medium"
                />
                <GoalItem
                  title="Read 'Deep Learning' textbook"
                  progress={80}
                  dueDate="May 20, 2025"
                  priority="Medium"
                />
                <GoalItem title="Complete 5 coding challenges" progress={40} dueDate="Ongoing" priority="Low" />
              </div>
            </CardContent>
          </Card>

          {/* Learning Patterns */}
          <Card className="md:col-span-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle>Learning Patterns</CardTitle>
                <CardDescription>When and how you learn best</CardDescription>
              </div>
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

          {/* AI Recommendations */}
          <Card className="md:col-span-7">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle>AI-Powered Recommendations</CardTitle>
                <CardDescription>Personalized suggestions based on your learning patterns</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <RecommendationCard
                  title="Optimize Your Learning Schedule"
                  description="Based on your activity patterns, you learn most effectively in the evening between 7-9 PM. Consider scheduling focused study sessions during this time."
                  icon={<Clock className="h-5 w-5 text-purple-600" />}
                />
                <RecommendationCard
                  title="Skill Gap: Statistical Analysis"
                  description="To strengthen your data science profile, focus on improving your statistical analysis skills. We recommend the 'Statistics for Data Science' course."
                  icon={<Target className="h-5 w-5 text-purple-600" />}
                />
                <RecommendationCard
                  title="Learning Method Suggestion"
                  description="You show higher retention with interactive exercises compared to video lectures. Try more hands-on projects to maximize your learning outcomes."
                  icon={<GraduationCap className="h-5 w-5 text-purple-600" />}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications and Achievements */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle>Certifications</CardTitle>
                <CardDescription>Your earned and in-progress certifications</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <CertificationItem
                  title="Machine Learning Fundamentals"
                  issuer="Deekle.io"
                  date="March 15, 2025"
                  status="completed"
                />
                <CertificationItem
                  title="Python for Data Science"
                  issuer="Deekle.io"
                  date="January 10, 2025"
                  status="completed"
                />
                <CertificationItem
                  title="Deep Learning Specialization"
                  issuer="Deekle.io"
                  progress={65}
                  status="in-progress"
                />
                <CertificationItem
                  title="AI Ethics and Governance"
                  issuer="Deekle.io"
                  progress={32}
                  status="in-progress"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle>Learning Achievements</CardTitle>
                <CardDescription>Milestones and badges you've earned</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <AchievementBadge
                  title="Fast Learner"
                  description="Completed 5 courses in 30 days"
                  icon={<TrendingUp className="h-6 w-6" />}
                />
                <AchievementBadge
                  title="Perfect Score"
                  description="Scored 100% on a course assessment"
                  icon={<Award className="h-6 w-6" />}
                />
                <AchievementBadge
                  title="Consistent Learner"
                  description="Maintained a 14-day learning streak"
                  icon={<Calendar className="h-6 w-6" />}
                />
                <AchievementBadge
                  title="Knowledge Explorer"
                  description="Completed courses in 3 different subjects"
                  icon={<BookOpen className="h-6 w-6" />}
                />
                <AchievementBadge
                  title="Project Master"
                  description="Completed 5 hands-on projects"
                  icon={<CheckCircle className="h-6 w-6" />}
                />
                <AchievementBadge
                  title="AI Enthusiast"
                  description="Completed all AI fundamentals courses"
                  icon={<GraduationCap className="h-6 w-6" />}
                />
              </div>
            </CardContent>
          </Card>
        </div>
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

function SkillProgress({ name, progress, category }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div>
          <span className="font-medium">{name}</span>
          <span className="text-xs text-gray-500 ml-2">{category}</span>
        </div>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
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

function RecommendationCard({ title, description, icon }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border">
      <div className="flex items-start gap-3">
        <div className="bg-white p-2 rounded-md shadow-sm">{icon}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

function CertificationItem({ title, issuer, date, status, progress = 0 }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-purple-100 p-2 rounded-md">
        <Award className="h-5 w-5 text-purple-600" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-500">Issued by {issuer}</p>
          </div>
          {status === "completed" ? (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Completed</span>
          ) : (
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">In Progress</span>
          )}
        </div>
        {status === "completed" ? (
          <p className="text-sm text-gray-500 mt-1">Earned on {date}</p>
        ) : (
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        )}
      </div>
    </div>
  )
}

function AchievementBadge({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border">
      <div className="bg-purple-100 p-3 rounded-full mb-3">{icon}</div>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  )
}
