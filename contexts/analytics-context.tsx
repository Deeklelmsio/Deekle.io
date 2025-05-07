"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type DateRange = {
  startDate: string
  endDate: string
}

type AnalyticsContextType = {
  dateRange: DateRange
  setDateRange: (range: DateRange) => void
  isLoading: boolean
  refreshData: () => Promise<void>
  overviewData: any
  engagementData: any[]
  complianceData: any[]
  learningProgressData: any[]
  insightsData: any[]
  reportsData: any[]
  predictiveData: any
  anomaliesData: any[]
}

const defaultDateRange = {
  startDate: new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split("T")[0],
  endDate: new Date().toISOString().split("T")[0],
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [dateRange, setDateRange] = useState<DateRange>(defaultDateRange)
  const [isLoading, setIsLoading] = useState(true)
  const [overviewData, setOverviewData] = useState<any>(null)
  const [engagementData, setEngagementData] = useState<any[]>([])
  const [complianceData, setComplianceData] = useState<any[]>([])
  const [learningProgressData, setLearningProgressData] = useState<any[]>([])
  const [insightsData, setInsightsData] = useState<any[]>([])
  const [reportsData, setReportsData] = useState<any[]>([])
  const [predictiveData, setPredictiveData] = useState<any>(null)
  const [anomaliesData, setAnomaliesData] = useState<any[]>([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      // Fetch all data in parallel
      const [
        overviewResponse,
        engagementResponse,
        complianceResponse,
        learningProgressResponse,
        insightsResponse,
        reportsResponse,
        predictiveResponse,
        anomaliesResponse,
      ] = await Promise.all([
        fetch(`/api/analytics/overview?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/engagement?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/compliance?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/learning-progress?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/insights?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/reports?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/predictive?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
        fetch(`/api/analytics/anomalies?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`),
      ])

      // Parse all responses
      const [
        overviewData,
        engagementData,
        complianceData,
        learningProgressData,
        insightsData,
        reportsData,
        predictiveData,
        anomaliesData,
      ] = await Promise.all([
        overviewResponse.json(),
        engagementResponse.json(),
        complianceResponse.json(),
        learningProgressResponse.json(),
        insightsResponse.json(),
        reportsResponse.json(),
        predictiveResponse.json(),
        anomaliesResponse.json(),
      ])

      // Update state with fetched data
      setOverviewData(overviewData.data)
      setEngagementData(engagementData.data)
      setComplianceData(complianceData.data)
      setLearningProgressData(learningProgressData.data)
      setInsightsData(insightsData.data)
      setReportsData(reportsData.data)
      setPredictiveData(predictiveData.data)
      setAnomaliesData(anomaliesData.data)
    } catch (error) {
      console.error("Error fetching analytics data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch data on initial load and when date range changes
  useEffect(() => {
    fetchData()
  }, [dateRange])

  return (
    <AnalyticsContext.Provider
      value={{
        dateRange,
        setDateRange,
        isLoading,
        refreshData: fetchData,
        overviewData,
        engagementData,
        complianceData,
        learningProgressData,
        insightsData,
        reportsData,
        predictiveData,
        anomaliesData,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}
