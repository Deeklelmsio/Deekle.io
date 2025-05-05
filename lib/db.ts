import { PrismaClient } from "@prisma/client"

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Helper functions for analytics data
export async function getAnalyticsData(dateRange: { start: Date; end: Date }) {
  // This is a placeholder function that would normally query the database
  // In a real application, you would use prisma to query your database
  return {
    totalUsers: 1250,
    activeUsers: 876,
    completionRate: 68,
    averageEngagement: 72,
  }
}

export async function getReportData(reportType: string, filters: Record<string, any>) {
  // This is a placeholder function that would normally query the database
  // In a real application, you would use prisma to query your database based on the report type and filters
  return {
    data: [],
    metadata: {
      reportType,
      generatedAt: new Date(),
      filters,
    },
  }
}

export async function saveReport(reportData: any) {
  // This is a placeholder function that would normally save a report to the database
  // In a real application, you would use prisma to save the report data
  return {
    id: "report-" + Math.random().toString(36).substring(2, 9),
    ...reportData,
    createdAt: new Date(),
  }
}

export async function getInsightsData() {
  // This is a placeholder function that would normally query the database for insights
  // In a real application, you would use prisma to query your database
  return {
    insights: [
      {
        id: "insight-1",
        title: "Increased Engagement",
        description: "User engagement has increased by 15% in the last month.",
        impact: "high",
        category: "engagement",
      },
      {
        id: "insight-2",
        title: "Completion Rate Drop",
        description: "Course completion rates have decreased by 8% for technical courses.",
        impact: "medium",
        category: "completion",
      },
      {
        id: "insight-3",
        title: "New User Growth",
        description: "New user registrations have grown by 22% this quarter.",
        impact: "high",
        category: "growth",
      },
    ],
  }
}
