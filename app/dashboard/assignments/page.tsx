import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, Clock, Download, FileText, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AssignmentsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
            <p className="text-gray-500">Track and manage your course assignments</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search assignments..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assignments</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="graded">Graded</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Assignment Tabs */}
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
            <TabsTrigger value="all">All Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-4">
              <AssignmentItem
                title="Data Analysis Project"
                course="Python for Data Analysis"
                dueDate="May 15, 2025"
                timeRemaining="10 days remaining"
                status="pending"
                progress={25}
              />
              <AssignmentItem
                title="Responsive Website Design"
                course="Web Development Bootcamp"
                dueDate="May 20, 2025"
                timeRemaining="15 days remaining"
                status="pending"
                progress={50}
              />
              <AssignmentItem
                title="Marketing Campaign Analysis"
                course="Digital Marketing Essentials"
                dueDate="May 5, 2025"
                timeRemaining="Overdue by 2 days"
                status="overdue"
                progress={75}
              />
            </div>
          </TabsContent>

          <TabsContent value="submitted" className="mt-6">
            <div className="space-y-4">
              <AssignmentItem
                title="JavaScript Fundamentals Quiz"
                course="Web Development Bootcamp"
                submittedDate="April 28, 2025"
                status="submitted"
              />
              <AssignmentItem
                title="Data Visualization Exercise"
                course="Python for Data Analysis"
                submittedDate="April 25, 2025"
                status="submitted"
              />
            </div>
          </TabsContent>

          <TabsContent value="graded" className="mt-6">
            <div className="space-y-4">
              <AssignmentItem
                title="Introduction to Python"
                course="Python for Data Analysis"
                submittedDate="April 15, 2025"
                gradedDate="April 18, 2025"
                grade="95/100"
                status="graded"
              />
              <AssignmentItem
                title="HTML & CSS Basics"
                course="Web Development Bootcamp"
                submittedDate="April 10, 2025"
                gradedDate="April 13, 2025"
                grade="88/100"
                status="graded"
              />
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {/* This would include all assignments from the other tabs */}
              <AssignmentItem
                title="Data Analysis Project"
                course="Python for Data Analysis"
                dueDate="May 15, 2025"
                timeRemaining="10 days remaining"
                status="pending"
                progress={25}
              />
              <AssignmentItem
                title="JavaScript Fundamentals Quiz"
                course="Web Development Bootcamp"
                submittedDate="April 28, 2025"
                status="submitted"
              />
              <AssignmentItem
                title="Introduction to Python"
                course="Python for Data Analysis"
                submittedDate="April 15, 2025"
                gradedDate="April 18, 2025"
                grade="95/100"
                status="graded"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function AssignmentItem({
  title,
  course,
  dueDate,
  timeRemaining,
  submittedDate,
  gradedDate,
  grade,
  status,
  progress = 0,
}) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Pending</Badge>
      case "submitted":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Submitted</Badge>
      case "graded":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Graded</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Overdue</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              {getStatusBadge(status)}
            </div>
            <p className="text-sm text-gray-500">Course: {course}</p>

            {status === "pending" || status === "overdue" ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                  <span>Due: {dueDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-500" />
                  <span className={status === "overdue" ? "text-red-600" : ""}>{timeRemaining}</span>
                </div>
              </div>
            ) : status === "submitted" ? (
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-1 text-amber-500" />
                <span>Submitted on {submittedDate}</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Graded on {gradedDate}</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-1 text-gray-500" />
                  <span className="font-medium">Grade: {grade}</span>
                </div>
              </div>
            )}

            {(status === "pending" || status === "overdue") && progress > 0 && (
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>
            )}
          </div>

          <div className="flex gap-2 self-end md:self-center">
            {(status === "pending" || status === "overdue") && (
              <>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
                  {progress > 0 ? "Continue" : "Start"} Assignment
                </Button>
              </>
            )}
            {status === "submitted" && (
              <Button variant="outline" size="sm">
                View Submission
              </Button>
            )}
            {status === "graded" && (
              <Button variant="outline" size="sm">
                View Feedback
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
