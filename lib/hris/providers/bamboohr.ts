import type {
  HRISEmployee,
  HRISDepartment,
  HRISTrainingRecord,
  HRISProviderConfig,
  HRISSyncResult,
  HRISProvider,
} from "../types"

export class BambooHRProvider implements HRISProvider {
  name = "BambooHR Provider"
  private config: HRISProviderConfig
  private subdomain: string

  constructor(config: HRISProviderConfig) {
    this.config = config

    // Extract subdomain from API URL if present
    const match = this.config.apiUrl.match(/https:\/\/([^.]+)\.bamboohr\.com/)
    this.subdomain = match ? match[1] : "api"
  }

  /**
   * Fetch employees from BambooHR
   */
  async getEmployees(): Promise<HRISEmployee[]> {
    try {
      // BambooHR requires specific fields to be requested
      const fields = [
        "id",
        "firstName",
        "lastName",
        "workEmail",
        "department",
        "jobTitle",
        "supervisor",
        "supervisorId",
        "hireDate",
        "status",
      ].join(",")

      const response = await fetch(
        `https://${this.subdomain}.bamboohr.com/api/gateway.php/${this.subdomain}/v1/employees/directory?fields=${fields}`,
        {
          headers: this.getHeaders(),
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch employees: ${response.statusText}`)
      }

      const data = await response.json()

      // BambooHR-specific mapping logic
      return Array.isArray(data.employees) ? data.employees.map((employee) => this.mapBambooEmployee(employee)) : []
    } catch (error) {
      console.error("Error fetching employees from BambooHR:", error)
      return []
    }
  }

  /**
   * Fetch a specific employee by ID from BambooHR
   */
  async getEmployee(id: string): Promise<HRISEmployee | null> {
    try {
      // BambooHR requires specific fields to be requested
      const fields = [
        "id",
        "firstName",
        "lastName",
        "workEmail",
        "department",
        "jobTitle",
        "supervisor",
        "supervisorId",
        "hireDate",
        "status",
      ].join(",")

      const response = await fetch(
        `https://${this.subdomain}.bamboohr.com/api/gateway.php/${this.subdomain}/v1/employees/${id}?fields=${fields}`,
        {
          headers: this.getHeaders(),
        },
      )

      if (!response.ok) {
        if (response.status === 404) {
          return null
        }
        throw new Error(`Failed to fetch employee: ${response.statusText}`)
      }

      const data = await response.json()
      return this.mapBambooEmployee(data)
    } catch (error) {
      console.error(`Error fetching employee ${id} from BambooHR:`, error)
      return null
    }
  }

  /**
   * Fetch departments from BambooHR
   */
  async getDepartments(): Promise<HRISDepartment[]> {
    try {
      const response = await fetch(
        `https://${this.subdomain}.bamboohr.com/api/gateway.php/${this.subdomain}/v1/meta/lists/department`,
        {
          headers: this.getHeaders(),
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch departments: ${response.statusText}`)
      }

      const data = await response.json()

      // BambooHR-specific mapping logic for departments
      return Array.isArray(data.options) ? data.options.map((dept) => this.mapBambooDepartment(dept)) : []
    } catch (error) {
      console.error("Error fetching departments from BambooHR:", error)
      return []
    }
  }

  /**
   * Sync training records to BambooHR
   * Note: BambooHR doesn't have a native training records API, so we'll use custom tables
   */
  async syncTrainingRecords(records: HRISTrainingRecord[]): Promise<HRISSyncResult> {
    const result: HRISSyncResult = {
      success: false,
      operation: "export",
      entityType: "training",
      totalRecords: records.length,
      processedRecords: 0,
      failedRecords: 0,
      errors: [],
      timestamp: new Date().toISOString(),
    }

    try {
      // BambooHR uses custom tables for training records
      // We'll assume a custom table with ID 'trainingRecords' exists
      const tableId = "trainingRecords"

      // Process records one by one since BambooHR doesn't support bulk updates
      for (const record of records) {
        try {
          const bambooRecord = {
            employeeId: record.employeeId,
            courseId: record.courseId,
            courseName: record.courseName,
            completionDate: record.completionDate,
            expirationDate: record.expirationDate || "",
            status: record.status,
            score: record.score?.toString() || "",
            certificateUrl: record.certificateUrl || "",
          }

          const response = await fetch(
            `https://${this.subdomain}.bamboohr.com/api/gateway.php/${this.subdomain}/v1/employees/${record.employeeId}/tables/${tableId}`,
            {
              method: "POST",
              headers: {
                ...this.getHeaders(),
                "Content-Type": "application/json",
              },
              body: JSON.stringify(bambooRecord),
            },
          )

          if (response.ok) {
            result.processedRecords++
          } else {
            result.failedRecords++
            const errorText = await response.text()
            result.errors?.push({
              record: bambooRecord,
              error: errorText,
            })
          }
        } catch (err) {
          result.failedRecords++
          result.errors?.push({
            record: record,
            error: err.message,
          })
        }
      }

      result.success = result.failedRecords === 0
      return result
    } catch (error) {
      console.error("Error syncing training records to BambooHR:", error)
      result.errors = [
        {
          record: null,
          error: error.message,
        },
      ]
      return result
    }
  }

  /**
   * Handle webhook events from BambooHR
   */
  async handleWebhook(payload: any): Promise<void> {
    try {
      // BambooHR webhook format
      const event = payload.type || "unknown"

      switch (event) {
        case "employee_added":
        case "employee_changed":
          // Process employee updates
          console.log(`BambooHR ${event} event received:`, payload.employee?.id)
          // TODO: Update local employee data
          break

        case "employee_terminated":
          // Process employee termination
          console.log(`BambooHR termination event received:`, payload.employee?.id)
          // TODO: Update employee status
          break

        default:
          console.log(`Unhandled BambooHR webhook event type: ${event}`)
      }
    } catch (error) {
      console.error("Error processing BambooHR webhook:", error)
      throw error
    }
  }

  /**
   * Test the connection to BambooHR
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(
        `https://${this.subdomain}.bamboohr.com/api/gateway.php/${this.subdomain}/v1/meta/fields`,
        {
          headers: this.getHeaders(),
        },
      )

      return response.ok
    } catch (error) {
      console.error("BambooHR connection test failed:", error)
      return false
    }
  }

  /**
   * Get headers for BambooHR API requests
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: "application/json",
    }

    if (this.config.apiKey) {
      // BambooHR uses Basic Auth with API key as password
      const basicAuth = Buffer.from(`${this.config.apiKey}:x`).toString("base64")
      headers["Authorization"] = `Basic ${basicAuth}`
    }

    return headers
  }

  /**
   * Map BambooHR employee data to our standard format
   */
  private mapBambooEmployee(employee: any): HRISEmployee {
    return {
      id: employee.id || "",
      externalId: employee.id || "",
      firstName: employee.firstName || "",
      lastName: employee.lastName || "",
      email: employee.workEmail || "",
      department: employee.department || "",
      position: employee.jobTitle || "",
      manager: employee.supervisor || "",
      managerId: employee.supervisorId || "",
      hireDate: employee.hireDate || "",
      status: this.mapEmployeeStatus(employee.status || ""),
      customFields: {
        location: employee.location || "",
        division: employee.division || "",
      },
    }
  }

  /**
   * Map BambooHR department data to our standard format
   */
  private mapBambooDepartment(dept: any): HRISDepartment {
    return {
      id: dept.id || "",
      externalId: dept.id || "",
      name: dept.name || "",
      description: "",
      managerId: "",
      parentDepartmentId: "",
    }
  }

  /**
   * Map BambooHR employee status to our standard format
   */
  private mapEmployeeStatus(status: string): "active" | "inactive" | "onLeave" | "terminated" {
    const statusLower = (status || "").toLowerCase()

    if (statusLower === "active") return "active"
    if (statusLower.includes("leave")) return "onLeave"
    if (statusLower === "terminated") return "terminated"

    return "inactive"
  }
}
