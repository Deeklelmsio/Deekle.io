"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, AlertTriangle, ArrowRight, Calendar, CheckCircle, Clock, Shield, Users } from "lucide-react"

export function PredictiveComplianceAlerts() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="at-risk">At Risk</TabsTrigger>
          <TabsTrigger value="team">Team Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Upcoming Compliance Requirements</h3>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Add to Calendar
            </Button>
          </div>

          <div className="space-y-4">
            <ComplianceAlertCard
              title="Data Privacy and Security"
              dueDate="May 15, 2025"
              daysRemaining={-5}
              priority="high"
              status="overdue"
              estimatedTime="1 hour"
              category="Information Security"
              prediction="Based on your schedule, you should complete this by tomorrow to avoid compliance issues."
            />

            <ComplianceAlertCard
              title="Code of Conduct"
              dueDate="May 30, 2025"
              daysRemaining={10}
              priority="high"
              status="upcoming"
              estimatedTime="45 minutes"
              category="Ethics"
              prediction="You typically complete ethics training in one session. Schedule 45 minutes this week."
            />

            <ComplianceAlertCard
              title="Anti-Harassment Training"
              dueDate="June 10, 2025"
              daysRemaining={21}
              priority="medium"
              status="upcoming"
              estimatedTime="1.5 hours"
              category="Workplace Conduct"
              prediction="Based on department schedules, completing this next week will align with your team."
            />
          </div>
        </TabsContent>

        <TabsContent value="at-risk" className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">At-Risk Compliance Items</h3>
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">3 Items Requiring Attention</Badge>
          </div>

          <div className="p-4 border rounded-lg bg-red-50 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Compliance Risk Alert</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Our AI has detected a pattern of last-minute compliance completions that puts you at risk. Consider
                  adjusting your approach to complete trainings earlier.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <ComplianceRiskCard
              title="Data Privacy and Security"
              dueDate="May 15, 2025"
              status="critical"
              riskFactors={["5 days overdue", "Required for project access", "Department compliance rate: 92%"]}
              recommendation="Complete immediately - this is blocking your access to the new project starting tomorrow."
            />

            <ComplianceRiskCard
              title="Cybersecurity Awareness"
              dueDate="June 15, 2025"
              status="high"
              riskFactors={[
                "Historical pattern of late completion",
                "Prerequisite for upcoming security certification",
                "2-hour duration may require scheduling",
              ]}
              recommendation="Schedule this training within the next 7 days to avoid conflicts with your project deadline on June 10."
            />

            <ComplianceRiskCard
              title="GDPR Compliance Renewal"
              dueDate="July 1, 2025"
              status="moderate"
              riskFactors={[
                "New content since your last completion",
                "Required for customer data access",
                "Typically takes 2 sessions to complete",
              ]}
              recommendation="Start this training by June 15 to ensure timely completion before your customer presentation on July 3."
            />
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Team Compliance Insights</h3>
            <Button variant="outline" size="sm">
              <Users className="mr-2 h-4 w-4" />
              View Team Details
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Engineering Team</h4>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">92% Compliant</Badge>
              </div>
              <Progress value={92} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">2 members have training expiring this month</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Marketing Team</h4>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">78% Compliant</Badge>
              </div>
              <Progress value={78} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">5 overdue trainings in this department</p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Your Status</h4>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">1 Overdue</Badge>
              </div>
              <Progress value={67} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">Complete Data Privacy training to reach 100%</p>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-blue-50">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Team Compliance Prediction</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Based on current completion rates, your team is projected to reach 95% compliance by June 1. This is
                  ahead of the quarterly target (90%).
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    <CheckCircle className="h-3 w-3 mr-1" /> Engineering: On Track
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Marketing: At Risk
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                    <Users className="h-3 w-3 mr-1" /> 3 New Team Members Need Onboarding
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {activeTab === "upcoming" && (
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <h4 className="font-medium">Smart Compliance Assistant</h4>
              <p className="text-sm text-gray-700 mt-1">
                I've analyzed your calendar and learning patterns. The best time for you to complete your overdue Data
                Privacy training is tomorrow between 2-3 PM, when you typically have focused learning time.
              </p>
              <div className="mt-3">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Schedule Training Session
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ComplianceAlertCard({ title, dueDate, daysRemaining, priority, status, estimatedTime, category, prediction }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "upcoming":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-50 text-red-700 hover:bg-red-50"
      case "medium":
        return "bg-amber-50 text-amber-700 hover:bg-amber-50"
      case "low":
        return "bg-green-50 text-green-700 hover:bg-green-50"
      default:
        return "bg-gray-50 text-gray-700 hover:bg-gray-50"
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
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">Category: {category}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className={getStatusColor(status)}>
              {status === "overdue" ? "Overdue" : status === "upcoming" ? "Upcoming" : status}
            </Badge>
            <Badge className={getPriorityColor(priority)}>
              {priority === "high" ? "High Priority" : priority === "medium" ? "Medium Priority" : "Low Priority"}
            </Badge>
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Due: {dueDate}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {estimatedTime}
          </div>
          <div
            className={`flex items-center ${
              daysRemaining < 0 ? "text-red-600" : daysRemaining < 7 ? "text-amber-600" : "text-gray-600"
            }`}
          >
            <AlertCircle className="h-4 w-4 mr-1" />
            {getDaysRemainingText(daysRemaining)}
          </div>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded-md text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
            <p>{prediction}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 self-end sm:self-center">
        <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
          Start Training
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function ComplianceRiskCard({ title, dueDate, status, riskFactors, recommendation }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "high":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">Due: {dueDate}</p>
        </div>
        <Badge className={getStatusColor(status)}>
          {status === "critical" ? "Critical Risk" : status === "high" ? "High Risk" : "Moderate Risk"}
        </Badge>
      </div>

      <div className="space-y-2 mb-3">
        <h4 className="text-sm font-medium">Risk Factors:</h4>
        <ul className="text-sm space-y-1">
          {riskFactors.map((factor, index) => (
            <li key={index} className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 bg-blue-50 rounded-md text-sm text-gray-700 mb-3">
        <div className="flex items-start gap-2">
          <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
          <p>{recommendation}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
          Start Training
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule
        </Button>
      </div>
    </div>
  )
}
