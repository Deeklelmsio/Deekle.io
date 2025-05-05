"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Save, TestTube, RefreshCw } from "lucide-react"
import type { HRISProviderConfig } from "@/lib/hris/types"

export function HRISConfiguration() {
  const [isLoading, setIsLoading] = useState(false)
  const [isTesting, setIsTesting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)
  const [error, setError] = useState("")

  const [config, setConfig] = useState<HRISProviderConfig>({
    provider: "generic",
    apiUrl: "",
    apiKey: "",
    clientId: "",
    clientSecret: "",
    webhookUrl: "",
    syncFrequency: "daily",
    mappings: {
      employee: {},
      department: {},
      training: {},
    },
    active: false,
  })

  // Fetch current configuration on component mount
  useEffect(() => {
    const fetchConfig = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/hris/config")
        const data = await response.json()

        if (data.config) {
          setConfig((prevConfig) => ({
            ...prevConfig,
            ...data.config,
            // Don't overwrite sensitive fields if they're not returned
            apiKey: prevConfig.apiKey,
            clientSecret: prevConfig.clientSecret,
          }))
        }
      } catch (err) {
        console.error("Error fetching HRIS configuration:", err)
        setError("Failed to load HRIS configuration")
      } finally {
        setIsLoading(false)
      }
    }

    fetchConfig()
  }, [])

  // Handle form field changes
  const handleChange = (field: string, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Handle mapping field changes
  const handleMappingChange = (mappingType: "employee" | "department" | "training", field: string, value: string) => {
    setConfig((prev) => ({
      ...prev,
      mappings: {
        ...prev.mappings,
        [mappingType]: {
          ...prev.mappings[mappingType],
          [field]: value,
        },
      },
    }))
  }

  // Test the HRIS connection
  const testConnection = async () => {
    setIsTesting(true)
    setTestResult(null)
    setError("")

    try {
      const response = await fetch("/api/hris/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      })

      const data = await response.json()

      if (response.ok) {
        setTestResult({
          success: true,
          message: `Successfully connected to ${data.provider}`,
        })
      } else {
        setTestResult({
          success: false,
          message: data.error || "Failed to connect to HRIS provider",
        })
      }
    } catch (err) {
      console.error("Error testing HRIS connection:", err)
      setTestResult({
        success: false,
        message: "An error occurred while testing the connection",
      })
    } finally {
      setIsTesting(false)
    }
  }

  // Save the HRIS configuration
  const saveConfiguration = async () => {
    setIsSaving(true)
    setError("")

    try {
      const response = await fetch("/api/hris/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...config,
          active: true,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to save HRIS configuration")
      }

      // Update the config with active set to true
      setConfig((prev) => ({
        ...prev,
        active: true,
      }))

      setTestResult({
        success: true,
        message: `Configuration saved successfully for ${data.provider}`,
      })
    } catch (err) {
      console.error("Error saving HRIS configuration:", err)
      setError(err.message || "Failed to save HRIS configuration")
    } finally {
      setIsSaving(false)
    }
  }

  // Sync employees from HRIS
  const syncEmployees = async () => {
    // Implementation for employee sync button
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>HRIS Integration Configuration</CardTitle>
        <CardDescription>
          Connect Deekle.io with your Human Resource Information System to synchronize employee data, training records,
          and compliance requirements.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        ) : (
          <Tabs defaultValue="general">
            <TabsList className="mb-6">
              <TabsTrigger value="general">General Settings</TabsTrigger>
              <TabsTrigger value="mappings">Field Mappings</TabsTrigger>
              <TabsTrigger value="sync">Synchronization</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="provider">HRIS Provider</Label>
                  <Select value={config.provider} onValueChange={(value) => handleChange("provider", value)}>
                    <SelectTrigger id="provider">
                      <SelectValue placeholder="Select HRIS provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workday">Workday</SelectItem>
                      <SelectItem value="bamboohr">BambooHR</SelectItem>
                      <SelectItem value="adp">ADP</SelectItem>
                      <SelectItem value="successfactors">SAP SuccessFactors</SelectItem>
                      <SelectItem value="generic">Generic HRIS (Custom)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apiUrl">API URL</Label>
                  <Input
                    id="apiUrl"
                    placeholder="https://api.example.com"
                    value={config.apiUrl}
                    onChange={(e) => handleChange("apiUrl", e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    {config.provider === "workday" &&
                      "Example: https://wd2-impl-services1.workday.com/ccx/api/v1/tenant_name"}
                    {config.provider === "bamboohr" && "Example: https://api.bamboohr.com/api/gateway.php/company_name"}
                    {config.provider === "adp" && "Example: https://api.adp.com"}
                    {config.provider === "successfactors" && "Example: https://api.successfactors.eu/odata/v2"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="Enter API key"
                      value={config.apiKey}
                      onChange={(e) => handleChange("apiKey", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="syncFrequency">Sync Frequency</Label>
                    <Select
                      value={config.syncFrequency}
                      onValueChange={(value) => handleChange("syncFrequency", value)}
                    >
                      <SelectTrigger id="syncFrequency">
                        <SelectValue placeholder="Select sync frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time (Webhooks)</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">Webhook URL (for real-time sync)</Label>
                  <Input
                    id="webhookUrl"
                    placeholder="https://your-app.com/api/hris/webhook"
                    value={config.webhookUrl}
                    onChange={(e) => handleChange("webhookUrl", e.target.value)}
                  />
                  <p className="text-xs text-gray-500">
                    Configure this URL in your HRIS system to receive real-time updates.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="clientId">Client ID (OAuth)</Label>
                    <Input
                      id="clientId"
                      placeholder="OAuth Client ID"
                      value={config.clientId}
                      onChange={(e) => handleChange("clientId", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clientSecret">Client Secret (OAuth)</Label>
                    <Input
                      id="clientSecret"
                      type="password"
                      placeholder="OAuth Client Secret"
                      value={config.clientSecret}
                      onChange={(e) => handleChange("clientSecret", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mappings">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Employee Field Mappings</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Map fields from your HRIS system to Deekle.io. Use dot notation for nested fields (e.g.,
                    "user.name").
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="map-employee-id">Employee ID</Label>
                      <Input
                        id="map-employee-id"
                        placeholder="id"
                        value={config.mappings.employee.id || ""}
                        onChange={(e) => handleMappingChange("employee", "id", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-employee-email">Email</Label>
                      <Input
                        id="map-employee-email"
                        placeholder="email"
                        value={config.mappings.employee.email || ""}
                        onChange={(e) => handleMappingChange("employee", "email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-employee-firstName">First Name</Label>
                      <Input
                        id="map-employee-firstName"
                        placeholder="firstName"
                        value={config.mappings.employee.firstName || ""}
                        onChange={(e) => handleMappingChange("employee", "firstName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-employee-lastName">Last Name</Label>
                      <Input
                        id="map-employee-lastName"
                        placeholder="lastName"
                        value={config.mappings.employee.lastName || ""}
                        onChange={(e) => handleMappingChange("employee", "lastName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-employee-department">Department</Label>
                      <Input
                        id="map-employee-department"
                        placeholder="department"
                        value={config.mappings.employee.department || ""}
                        onChange={(e) => handleMappingChange("employee", "department", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-employee-position">Position/Title</Label>
                      <Input
                        id="map-employee-position"
                        placeholder="position"
                        value={config.mappings.employee.position || ""}
                        onChange={(e) => handleMappingChange("employee", "position", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Department Field Mappings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="map-department-id">Department ID</Label>
                      <Input
                        id="map-department-id"
                        placeholder="id"
                        value={config.mappings.department.id || ""}
                        onChange={(e) => handleMappingChange("department", "id", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-department-name">Department Name</Label>
                      <Input
                        id="map-department-name"
                        placeholder="name"
                        value={config.mappings.department.name || ""}
                        onChange={(e) => handleMappingChange("department", "name", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Training Record Field Mappings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="map-training-employeeId">Employee ID</Label>
                      <Input
                        id="map-training-employeeId"
                        placeholder="employeeId"
                        value={config.mappings.training.employeeId || ""}
                        onChange={(e) => handleMappingChange("training", "employeeId", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-training-courseId">Course ID</Label>
                      <Input
                        id="map-training-courseId"
                        placeholder="courseId"
                        value={config.mappings.training.courseId || ""}
                        onChange={(e) => handleMappingChange("training", "courseId", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-training-courseName">Course Name</Label>
                      <Input
                        id="map-training-courseName"
                        placeholder="courseName"
                        value={config.mappings.training.courseName || ""}
                        onChange={(e) => handleMappingChange("training", "courseName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="map-training-completionDate">Completion Date</Label>
                      <Input
                        id="map-training-completionDate"
                        placeholder="completionDate"
                        value={config.mappings.training.completionDate || ""}
                        onChange={(e) => handleMappingChange("training", "completionDate", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sync">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md border">
                  <h3 className="text-lg font-medium mb-2">Synchronization Status</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {config.active
                      ? `HRIS integration is active. Synchronizing ${config.syncFrequency}.`
                      : "HRIS integration is not active. Configure and save settings to activate."}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" onClick={syncEmployees} disabled={!config.active}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Sync Employees Now
                    </Button>

                    <Button variant="outline" disabled={!config.active}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Sync Departments Now
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Sync History</Label>
                  <div className="bg-gray-50 p-4 rounded-md border h-64 overflow-y-auto">
                    <p className="text-sm text-gray-500 text-center py-8">
                      {config.active
                        ? "No sync history available yet."
                        : "Activate HRIS integration to view sync history."}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {testResult && (
          <div
            className={`mt-4 p-3 ${testResult.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} border rounded-md`}
          >
            <p className={`text-sm ${testResult.success ? "text-green-600" : "text-red-600"}`}>{testResult.message}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={testConnection} disabled={isTesting || !config.apiUrl}>
          {isTesting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Testing...
            </>
          ) : (
            <>
              <TestTube className="mr-2 h-4 w-4" />
              Test Connection
            </>
          )}
        </Button>

        <Button
          onClick={saveConfiguration}
          disabled={isSaving || !config.apiUrl}
          className="bg-purple-600 hover:bg-purple-700"
        >
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Configuration
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
