import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ChevronRight, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
            <p className="text-gray-500">Manage and track your learning journey</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Catalog
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search courses..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="not-started">Not Started</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Tabs */}
        <Tabs defaultValue="in-progress">
          <TabsList>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="all">All Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="in-progress" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Python for Data Analysis"
                instructor="Dr. Robert Kim"
                progress={65}
                image="/placeholder.svg?height=200&width=300"
                lastActivity="Last activity: 2 days ago"
                tags={["Python", "Data Science", "Intermediate"]}
              />
              <CourseCard
                title="Web Development Bootcamp"
                instructor="Jessica Williams"
                progress={42}
                image="/placeholder.svg?height=200&width=300"
                lastActivity="Last activity: Yesterday"
                tags={["HTML", "CSS", "JavaScript"]}
              />
              <CourseCard
                title="Digital Marketing Essentials"
                instructor="Thomas Anderson"
                progress={78}
                image="/placeholder.svg?height=200&width=300"
                lastActivity="Last activity: Today"
                tags={["Marketing", "SEO", "Social Media"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Introduction to Machine Learning"
                instructor="Dr. Sarah Chen"
                progress={100}
                image="/placeholder.svg?height=200&width=300"
                completionDate="Completed on: March 15, 2025"
                tags={["AI", "Machine Learning", "Beginner"]}
              />
              <CourseCard
                title="Business Communication"
                instructor="Michael Johnson"
                progress={100}
                image="/placeholder.svg?height=200&width=300"
                completionDate="Completed on: February 28, 2025"
                tags={["Business", "Communication", "Professional"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Advanced JavaScript Patterns"
                instructor="Michael Johnson"
                progress={0}
                image="/placeholder.svg?height=200&width=300"
                savedDate="Saved on: April 10, 2025"
                tags={["Web Development", "JavaScript", "Advanced"]}
              />
              <CourseCard
                title="UX Design Principles"
                instructor="Emma Rodriguez"
                progress={0}
                image="/placeholder.svg?height=200&width=300"
                savedDate="Saved on: April 5, 2025"
                tags={["Design", "UI/UX", "Beginner"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* This would include all courses from the other tabs */}
              <CourseCard
                title="Python for Data Analysis"
                instructor="Dr. Robert Kim"
                progress={65}
                image="/placeholder.svg?height=200&width=300"
                lastActivity="Last activity: 2 days ago"
                tags={["Python", "Data Science", "Intermediate"]}
              />
              <CourseCard
                title="Introduction to Machine Learning"
                instructor="Dr. Sarah Chen"
                progress={100}
                image="/placeholder.svg?height=200&width=300"
                completionDate="Completed on: March 15, 2025"
                tags={["AI", "Machine Learning", "Beginner"]}
              />
              <CourseCard
                title="Advanced JavaScript Patterns"
                instructor="Michael Johnson"
                progress={0}
                image="/placeholder.svg?height=200&width=300"
                savedDate="Saved on: April 10, 2025"
                tags={["Web Development", "JavaScript", "Advanced"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function CourseCard({ title, instructor, progress, image, lastActivity, completionDate, savedDate, tags }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">Instructor: {instructor}</p>

        {progress > 0 && progress < 100 && (
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            {lastActivity && <p className="text-xs text-gray-500 mt-1">{lastActivity}</p>}
          </div>
        )}

        {progress === 100 && completionDate && (
          <div className="mb-3">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
            <p className="text-xs text-gray-500 mt-1">{completionDate}</p>
          </div>
        )}

        {progress === 0 && savedDate && (
          <div className="mb-3">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Saved</Badge>
            <p className="text-xs text-gray-500 mt-1">{savedDate}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full">
          {progress > 0 && progress < 100 ? "Continue" : progress === 100 ? "Review" : "Start"} Course
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  )
}
