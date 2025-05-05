import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Filter,
  Search,
  Shield,
  Users,
  PieChart,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompliancePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Compliance Training</h1>
            <p className="text-gray-500">Track and manage required compliance training</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
              <Shield className="mr-2 h-4 w-4" />
              Compliance Dashboard
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ComplianceStatsCard
            title="Overall Compliance"
            value="87%"
            description="Target: 100%"
            status="warning"
            icon={<Shield className="h-5 w-5" />}
          />
          <ComplianceStatsCard
            title="Required Trainings"
            value="12"
            description="8 completed, 4 pending"
            status="warning"
            icon={<FileText className="h-5 w-5" />}
          />
          <ComplianceStatsCard
            title="Expiring Soon"
            value="3"
            description="Within next 30 days"
            status="danger"
            icon={<Calendar className="h-5 w-5" />}
          />
          <ComplianceStatsCard
            title="Certifications"
            value="5"
            description="All current"
            status="success"
            icon={<Award className="h-5 w-5" />}
          />
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-0.5">
                <CardTitle>Compliance Training Requirements</CardTitle>
                <CardDescription>Track your mandatory and recommended training</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search trainings..." className="w-full sm:w-[200px] pl-8" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="expiring">Expiring Soon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="required">
              <TabsList className="mb-6">
                <TabsTrigger value="required">Required</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>

              <TabsContent value="required">
                <div className="space-y-6">
                  <ComplianceTrainingItem
                    title="Data Privacy and Security"
                    category="Information Security"
                    dueDate="May 15, 2025"
                    status="overdue"
                    priority="high"
                    estimatedTime="1 hour"
                    progress={0}
                  />
                  <ComplianceTrainingItem
                    title="Code of Conduct"
                    category="Ethics"
                    dueDate="May 30, 2025"
                    status="pending"
                    priority="high"
                    estimatedTime="45 minutes"
                    progress={0}
                  />
                  <ComplianceTrainingItem
                    title="Anti-Harassment Training"
                    category="Workplace Conduct"
                    dueDate="June 10, 2025"
                    status="pending"
                    priority="medium"
                    estimatedTime="1.5 hours"
                    progress={0}
                  />
                  <ComplianceTrainingItem
                    title="Cybersecurity Awareness"
                    category="Information Security"
                    dueDate="June 15, 2025"
                    status="in-progress"
                    priority="high"
                    estimatedTime="2 hours"
                    progress={35}
                  />
                </div>
              </TabsContent>

              <TabsContent value="recommended">
                <div className="space-y-6">
                  <ComplianceTrainingItem
                    title="AI Ethics and Governance"
                    category="Ethics"
                    dueDate="Optional"
                    status="recommended"
                    priority="medium"
                    estimatedTime="2 hours"
                    progress={0}
                  />
                  <ComplianceTrainingItem
                    title="Diversity and Inclusion"
                    category="Workplace Conduct"
                    dueDate="Optional"
                    status="recommended"
                    priority="medium"
                    estimatedTime="1 hour"
                    progress={0}
                  />
                  <ComplianceTrainingItem
                    title="Environmental Sustainability"
                    category="Corporate Responsibility"
                    dueDate="Optional"
                    status="recommended"
                    priority="low"
                    estimatedTime="45 minutes"
                    progress={0}
                  />
                </div>
              </TabsContent>

              <TabsContent value="completed">
                <div className="space-y-6">
                  <ComplianceTrainingItem
                    title="Information Security Basics"
                    category="Information Security"
                    completionDate="April 12, 2025"
                    status="completed"
                    priority="high"
                    estimatedTime="1 hour"
                    progress={100}
                    expirationDate="April 12, 2026"
                  />
                  <ComplianceTrainingItem
                    title="GDPR Compliance"
                    category="Data Privacy"
                    completionDate="March 25, 2025"
                    status="completed"
                    priority="high"
                    estimatedTime="1.5 hours"
                    progress={100}
                    expirationDate="March 25, 2026"
                  />
                  <ComplianceTrainingItem
                    title="Workplace Safety"
                    category="Health and Safety"
                    completionDate="February 18, 2025"
                    status="completed"
                    priority="medium"
                    estimatedTime="1 hour"
                    progress={100}
                    expirationDate="February 18, 2026"
                  />
                </div>
              </TabsContent>

              <TabsContent value="certifications">
                <div className="space-y-6">
                  <CertificationItem
                    title="Information Security Certification"
                    issuer="Deekle.io"
                    issueDate="January 15, 2025"
                    expirationDate="January 15, 2026"
                    status="active"
                  />
                  <CertificationItem
                    title="Data Protection Officer"
                    issuer="Data Privacy Institute"
                    issueDate="November 10, 2024"
                    expirationDate="November 10, 2026"
                    status="active"
                  />
                  <CertificationItem
                    title="Ethics in AI"
                    issuer="AI Governance Council"
                    issueDate="March 5, 2025"
                    expirationDate="March 5, 2027"
                    status="active"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Compliance Calendar and Reports */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <CardTitle>Compliance Calendar</CardTitle>
                  <CardDescription>Upcoming compliance deadlines</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <CalendarItem
                  title="Data Privacy and Security"
                  date="May 15, 2025"
                  status="overdue"
                  daysRemaining={-5}
                />
                <CalendarItem title="Code of Conduct" date="May 30, 2025" status="upcoming" daysRemaining={10} />
                <CalendarItem
                  title="Anti-Harassment Training"
                  date="June 10, 2025"
                  status="upcoming"
                  daysRemaining={21}
                />
                <CalendarItem
                  title="Cybersecurity Awareness"
                  date="June 15, 2025"
                  status="upcoming"
                  daysRemaining={26}
                />
                <CalendarItem
                  title="Information Security Certification Renewal"
                  date="January 15, 2026"
                  status="future"
                  daysRemaining={240}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <CardTitle>Compliance Reports</CardTitle>
                  <CardDescription>Training and certification reports</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  All Reports
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ReportItem
                  title="Quarterly Compliance Summary"
                  date="April 1, 2025"
                  type="summary"
                  status="available"
                />
                <ReportItem
                  title="Department Compliance Status"
                  date="April 15, 2025"
                  type="department"
                  status="available"
                />
                <ReportItem title="Training Completion Audit" date="March 30, 2025" type="audit" status="available" />
                <ReportItem
                  title="Certification Expiration Report"
                  date="May 1, 2025"
                  type="certification"
                  status="scheduled"
                />
                <ReportItem
                  title="Annual Compliance Review"
                  date="December 31, 2025"
                  type="annual"
                  status="scheduled"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Compliance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <CardTitle>Team Compliance Overview</CardTitle>
                <CardDescription>For team managers and administrators</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Users className="mr-2 h-4 w-4" />
                View Team Details
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <TeamComplianceCard department="Engineering" complianceRate={92} memberCount={24} overdueCount={2} />
                <TeamComplianceCard department="Marketing" complianceRate={78} memberCount={12} overdueCount={3} />
                <TeamComplianceCard department="Product" complianceRate={85} memberCount={18} overdueCount={3} />
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Compliance Insights</h3>
                <p className="text-sm text-gray-600 mb-4">
                  AI-generated insights based on your team's compliance data:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data Privacy Training:</strong> 5 team members have this training expiring within the next
                      30 days. Consider sending a reminder.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Marketing Department:</strong> Compliance rate has dropped 8% in the last month. The main
                      gap is in Code of Conduct training completion.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Engineering Department:</strong> Has improved compliance rate by 12% this quarter.
                      Excellent progress in cybersecurity training completion.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ComplianceStatsCard({ title, value, description, status, icon }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "text-green-500 bg-green-50"
      case "warning":
        return "text-amber-500 bg-amber-50"
      case "danger":
        return "text-red-500 bg-red-50"
      default:
        return "text-gray-500 bg-gray-50"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <div className={`p-3 rounded-full ${getStatusColor(status)}`}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function ComplianceTrainingItem({
  title,
  category,
  dueDate,
  completionDate,
  status,
  priority,
  estimatedTime,
  progress,
  expirationDate,
}) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Overdue</Badge>
      case "pending":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
      case "recommended":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Recommended</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-50 text-red-700 hover:bg-red-50">High Priority</Badge>
      case "medium":
        return <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-green-50 text-green-700 hover:bg-green-50">Low Priority</Badge>
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">Category: {category}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {getStatusBadge(status)}
            {priority && getPriorityBadge(priority)}
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {estimatedTime}
          </div>
          {status === "completed" ? (
            <>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                Completed: {completionDate}
              </div>
              {expirationDate && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Expires: {expirationDate}
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {status === "recommended" ? "Optional" : `Due: ${dueDate}`}
            </div>
          )}
        </div>
        {progress > 0 && progress < 100 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        )}
      </div>
      <div className="flex gap-2 self-end sm:self-center">
        {status !== "completed" && (
          <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
            {progress > 0 ? "Continue" : "Start"} Training
          </Button>
        )}
        <Button variant="outline" size="sm">
          Details
        </Button>
      </div>
    </div>
  )
}

function CertificationItem({ title, issuer, issueDate, expirationDate, status }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "expiring":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Expiring Soon</Badge>
      case "expired":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Expired</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">Issued by: {issuer}</p>
          </div>
          <div>{getStatusBadge(status)}</div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Issued: {issueDate}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Expires: {expirationDate}
          </div>
        </div>
      </div>
      <div className="flex gap-2 self-end sm:self-center">
        <Button variant="outline" size="sm">
          View Certificate
        </Button>
      </div>
    </div>
  )
}

function CalendarItem({ title, date, status, daysRemaining }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "text-red-600"
      case "upcoming":
        return "text-amber-600"
      case "future":
        return "text-gray-600"
      default:
        return "text-gray-600"
    }
  }

  const getDaysRemainingText = (days) => {
    if (days < 0) {
      return `${Math.abs(days)} days overdue`
    } else if (days === 0) {
      return "Due today"
    } else {
      return `${days} days remaining`
    }
  }

  return (
    <div className="flex items-center justify-between p-3 border-b last:border-0">
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            status === "overdue" ? "bg-red-100" : status === "upcoming" ? "bg-amber-100" : "bg-gray-100"
          }`}
        >
          <Calendar className={`h-5 w-5 ${getStatusColor(status)}`} />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <div className="flex items-center gap-2 text-sm">
            <span>{date}</span>
            <span className={`${getStatusColor(status)}`}>{getDaysRemainingText(daysRemaining)}</span>
          </div>
        </div>
      </div>
      <Button variant="ghost" size="sm">
        <Calendar className="h-4 w-4 mr-2" />
        Add to Calendar
      </Button>
    </div>
  )
}

function ReportItem({ title, date, type, status }) {
  const getTypeIcon = (type) => {
    switch (type) {
      case "summary":
        return <PieChart className="h-5 w-5 text-purple-600" />
      case "department":
        return <Users className="h-5 w-5 text-blue-600" />
      case "audit":
        return <FileText className="h-5 w-5 text-green-600" />
      case "certification":
        return <Award className="h-5 w-5 text-amber-600" />
      case "annual":
        return <Calendar className="h-5 w-5 text-red-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="flex items-center justify-between p-3 border-b last:border-0">
      <div className="flex items-start gap-3">
        <div className="bg-gray-100 p-2 rounded-md">{getTypeIcon(type)}</div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      {status === "available" ? (
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      ) : (
        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Scheduled</Badge>
      )}
    </div>
  )
}

function TeamComplianceCard({ department, complianceRate, memberCount, overdueCount }) {
  const getComplianceColor = (rate) => {
    if (rate >= 90) return "text-green-600"
    if (rate >= 75) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium">{department}</h3>
        <Badge
          className={`${
            complianceRate >= 90
              ? "bg-green-100 text-green-800"
              : complianceRate >= 75
                ? "bg-amber-100 text-amber-800"
                : "bg-red-100 text-red-800"
          } hover:bg-opacity-100`}
        >
          {complianceRate}% Compliant
        </Badge>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Compliance Rate</span>
            <span className={getComplianceColor(complianceRate)}>{complianceRate}%</span>
          </div>
          <Progress
            value={complianceRate}
            className={`h-2 ${
              complianceRate >= 90 ? "bg-green-600" : complianceRate >= 75 ? "bg-amber-600" : "bg-red-600"
            }`}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>Team Members: {memberCount}</span>
          <span>Overdue: {overdueCount}</span>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="w-full mt-3">
        <ArrowUpRight className="h-4 w-4 mr-2" />
        View Team Details
      </Button>
    </div>
  )
}
