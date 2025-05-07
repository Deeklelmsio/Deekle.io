// Database connection and utility functions
import { PrismaClient } from "@prisma/client"

// For development, we'll use a singleton pattern to avoid too many connections
let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

// Mock data for development
export const mockAnalyticsData = {
  overview: {
    totalUsers: 1245,
    activeUsers: 876,
    completionRate: 68,
    averageScore: 82,
  },
  engagementData: [
    { date: "2023-01", value: 45 },
    { date: "2023-02", value: 52 },
    { date: "2023-03", value: 49 },
    { date: "2023-04", value: 62 },
    { date: "2023-05", value: 57 },
    { date: "2023-06", value: 59 },
    { date: "2023-07", value: 68 },
    { date: "2023-08", value: 73 },
    { date: "2023-09", value: 78 },
    { date: "2023-10", value: 82 },
    { date: "2023-11", value: 87 },
    { date: "2023-12", value: 92 },
  ],
  complianceData: [
    { name: "Compliant", value: 68 },
    { name: "In Progress", value: 22 },
    { name: "Non-Compliant", value: 10 },
  ],
  learningProgressData: [
    { name: "Completed", value: 58 },
    { name: "In Progress", value: 32 },
    { name: "Not Started", value: 10 },
  ],
  insights: [
    {
      id: 1,
      title: "Engagement Spike in October",
      description: "User engagement increased by 15% in October compared to September.",
      impact: "high",
      date: "2023-11-01",
    },
    {
      id: 2,
      title: "Compliance Improvement",
      description: "Compliance rate improved from 62% to 68% in the last quarter.",
      impact: "medium",
      date: "2023-10-15",
    },
    {
      id: 3,
      title: "Course Completion Trend",
      description: "Average course completion time decreased by 2.5 days.",
      impact: "medium",
      date: "2023-10-10",
    },
  ],
  reports: [
    {
      id: 1,
      title: "Q4 Compliance Report",
      description: "Overview of compliance status across all departments",
      date: "2023-10-30",
      author: "Admin",
    },
    {
      id: 2,
      title: "Learning Path Effectiveness",
      description: "Analysis of custom learning path completion rates",
      date: "2023-10-25",
      author: "Admin",
    },
    {
      id: 3,
      title: "Department Performance",
      description: "Comparison of learning metrics across departments",
      date: "2023-10-20",
      author: "Admin",
    },
  ],
  predictiveData: {
    complianceForecast: [
      { month: "Nov", actual: null, predicted: 72 },
      { month: "Dec", actual: null, predicted: 76 },
      { month: "Jan", actual: null, predicted: 80 },
    ],
    skillGapsForecast: [
      { skill: "Data Analysis", current: 65, required: 80 },
      { skill: "Project Management", current: 72, required: 85 },
      { skill: "Communication", current: 78, required: 90 },
      { skill: "Technical Writing", current: 60, required: 75 },
    ],
  },
  anomalies: [
    {
      id: 1,
      title: "Unusual Drop in Engagement",
      description: "Engineering department showed 25% drop in engagement last week",
      severity: "high",
      date: "2023-11-02",
    },
    {
      id: 2,
      title: "Compliance Deadline Risk",
      description: "35 users at risk of missing compliance deadline",
      severity: "medium",
      date: "2023-11-01",
    },
  ],
}

// Function to fetch analytics data
export async function getAnalyticsData(dateRange?: { start: string; end: string }) {
  // In a real app, this would query the database
  // For now, we'll return mock data
  return mockAnalyticsData
}

// Function to generate a report
export async function generateReport(params: {
  title: string
  type: string
  dateRange: { start: string; end: string }
  filters: Record<string, any>
}) {
  // In a real app, this would generate a report based on the parameters
  // For now, we'll return a success message
  return {
    success: true,
    reportId: Math.floor(Math.random() * 1000),
    message: `Report "${params.title}" generated successfully`,
  }
}

// Function to save a report
export async function saveReport(report: {
  title: string
  description: string
  config: Record<string, any>
}) {
  // In a real app, this would save the report to the database
  // For now, we'll return a success message
  return {
    success: true,
    reportId: Math.floor(Math.random() * 1000),
    message: `Report "${report.title}" saved successfully`,
  }
}

export default prisma
