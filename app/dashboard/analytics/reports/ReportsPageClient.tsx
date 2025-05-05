"use client"
import { Button as ButtonUI } from "@/components/ui/button"
import {
  Card as CardUI,
  CardContent,
  CardDescription,
  CardHeader as CardHeaderUI,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SavedReports } from "@/components/analytics/saved-reports"
import { FileBarChart, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button as ButtonAction } from "@/components/ui/button"
import {
  Card as CardAction,
  CardHeader as CardHeaderAction,
  CardTitle as CardTitleAction,
  CardContent as CardContentAction,
} from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useUser } from "@clerk/nextjs"
import toast from "react-hot-toast"

type ReportRow = Record<string, any>

const MOCK_DATA_SOURCES = ["Users", "Orders", "Revenue"]
const MOCK_METRICS = ["Total Sales", "Active Users", "Conversion Rate"]
const MOCK_DIMENSIONS = ["Date", "Region", "Category"]

export function CustomReportGenerator() {
  const { user } = useUser()
  const [dataSource, setDataSource] = useState<string | null>(null)
  const [metrics, setMetrics] = useState<string[]>([])
  const [dimensions, setDimensions] = useState<string[]>([])
  const [previewData, setPreviewData] = useState<ReportRow[]>([])
  const [reportName, setReportName] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Mock preview data load
    if (dataSource && metrics.length > 0) {
      const mockData = [
        { Date: "2025-05-01", Region: "North", "Total Sales": 1000 },
        { Date: "2025-05-02", Region: "South", "Total Sales": 1500 },
      ]
      setPreviewData(mockData)
    }
  }, [dataSource, metrics])

  const toggleMetric = (metric: string) => {
    setMetrics((prev) => (prev.includes(metric) ? prev.filter((m) => m !== metric) : [...prev, metric]))
  }

  const toggleDimension = (dim: string) => {
    setDimensions((prev) => (prev.includes(dim) ? prev.filter((d) => d !== dim) : [...prev, dim]))
  }

  const handleSave = async () => {
    if (!reportName || !dataSource || metrics.length === 0) {
      toast.error("Complete all required fields")
      return
    }

    setLoading(true)

    const payload = {
      name: reportName,
      dataSource,
      metrics,
      dimensions,
      userId: user?.id,
    }

    const res = await fetch("/api/reports", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })

    if (res.ok) {
      toast.success("Report saved!")
      setReportName("")
    } else {
      toast.error("Error saving report.")
    }

    setLoading(false)
  }

  return (
    <div className="p-6 space-y-6">
      <CardAction>
        <CardHeaderAction>
          <CardTitleAction>Build Your Custom Report</CardTitleAction>
        </CardHeaderAction>
        <CardContentAction className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select onValueChange={(v) => setDataSource(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Data Source" />
              </SelectTrigger>
              <SelectContent>
                {MOCK_DATA_SOURCES.map((src) => (
                  <SelectItem key={src} value={src}>
                    {src}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div>
              <p className="text-sm font-medium mb-1">Metrics</p>
              <div className="flex flex-wrap gap-2">
                {MOCK_METRICS.map((metric) => (
                  <ButtonAction
                    key={metric}
                    size="sm"
                    variant={metrics.includes(metric) ? "default" : "outline"}
                    onClick={() => toggleMetric(metric)}
                  >
                    {metric}
                  </ButtonAction>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Dimensions</p>
              <div className="flex flex-wrap gap-2">
                {MOCK_DIMENSIONS.map((dim) => (
                  <ButtonAction
                    key={dim}
                    size="sm"
                    variant={dimensions.includes(dim) ? "default" : "outline"}
                    onClick={() => toggleDimension(dim)}
                  >
                    {dim}
                  </ButtonAction>
                ))}
              </div>
            </div>
          </div>

          <Input placeholder="Report Name" value={reportName} onChange={(e) => setReportName(e.target.value)} />

          <ButtonAction onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save Report"}
          </ButtonAction>
        </CardContentAction>
      </CardAction>

      <CardAction>
        <CardHeaderAction>
          <CardTitleAction>Preview</CardTitleAction>
        </CardHeaderAction>
        <CardContentAction>
          <Table>
            <TableHeader>
              <TableRow>
                {previewData.length > 0 && Object.keys(previewData[0]).map((k) => <TableHead key={k}>{k}</TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {previewData.map((row, i) => (
                <TableRow key={i}>
                  {Object.values(row).map((v, j) => (
                    <TableCell key={j}>{v}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContentAction>
      </CardAction>
    </div>
  )
}

// Add named export for ReportsPageClient
export function ReportsPageClient() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Report Generator</h1>
          <p className="text-muted-foreground">Create, save, and schedule custom reports</p>
        </div>
        <ButtonUI>
          <Plus className="mr-2 h-4 w-4" />
          New Report
        </ButtonUI>
      </div>

      <Tabs defaultValue="generator" className="space-y-4">
        <TabsList>
          <TabsTrigger value="generator">Report Generator</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <CardUI>
            <CardHeaderUI>
              <CardTitle>Create Custom Report</CardTitle>
              <CardDescription>Select data sources, filters, and visualization options</CardDescription>
            </CardHeaderUI>
            <CardContent>
              <CustomReportGenerator />
            </CardContent>
          </CardUI>
        </TabsContent>

        <TabsContent value="saved">
          <CardUI>
            <CardHeaderUI>
              <CardTitle>Saved Reports</CardTitle>
              <CardDescription>Access and manage your saved reports</CardDescription>
            </CardHeaderUI>
            <CardContent>
              <SavedReports />
            </CardContent>
          </CardUI>
        </TabsContent>

        <TabsContent value="scheduled">
          <CardUI>
            <CardHeaderUI>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Manage your automated report schedules</CardDescription>
            </CardHeaderUI>
            <CardContent>
              <div className="flex items-center justify-center p-8 text-center">
                <div className="space-y-3">
                  <FileBarChart className="h-12 w-12 text-muted-foreground mx-auto" />
                  <h3 className="text-lg font-medium">No Scheduled Reports</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    You haven't scheduled any reports yet. Create a report and set up a schedule to automate your
                    reporting.
                  </p>
                  <ButtonUI>
                    <Plus className="mr-2 h-4 w-4" />
                    Schedule a Report
                  </ButtonUI>
                </div>
              </div>
            </CardContent>
          </CardUI>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Keep the default export as well
export default ReportsPageClient
