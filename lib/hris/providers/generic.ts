import type {
  HRISEmployee,
  HRISDepartment,
  HRISTrainingRecord,
  HRISProviderConfig,
  HRISSyncResult,
  HRISProvider,
} from "../types"
import { mapObject } from "../utils"

export class GenericProvider implements HRISProvider {
  name = "Generic HRIS Provider"
  private config: HRISProviderConfig

  constructor(config: HRISProviderConfig) {
    this.config = config
    this.name = `${config.provider} Provider`
  }

  /**
   * Fetch employees from the HRIS system
   */
  async getEmployees(): Promise<HRISEmployee[]> {
    try {
      const response = await fetch(`${this.config.apiUrl}/employees`, {
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch employees: ${response.statusText}`)
      }

      const data = await response.json()

      // Map the response data to our standard employee structure
      return Array.isArray(data) ? data.map((item) => this.mapEmployeeData(item)) : []
    } catch (error) {
      console.error("Error fetching employees:", error)
      return []
    }
  }

  /**
   * Fetch a specific employee by ID
   */
  async getEmployee(id: string): Promise<HRISEmployee | null> {
    try {
      const response = await fetch(`${this.config.apiUrl}/employees/${id}`, {
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        if (response.status === 404) {
          return null
        }
        throw new Error(`Failed to fetch employee: ${response.statusText}`)
      }

      const data = await response.json()
      return this.mapEmployeeData(data)
    } catch (error) {
      console.error(`Error fetching employee ${id}:`, error)
      return null
    }
  }

  /**
   * Fetch departments from the HRIS system
   */
  async getDepartments(): Promise<HRISDepartment[]> {
    try {
      const response = await fetch(`${this.config.apiUrl}/departments`, {
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch departments: ${response.statusText}`)
      }

      const data = await response.json()

      // Map the response data to our standard department structure
      return Array.isArray(data) ? data.map((item) => this.mapDepartmentData(item)) : []
    } catch (error) {
      console.error("Error fetching departments:", error)
      return []
    }
  }

  /**
   * Sync training records to the HRIS system
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
      // Map our training records to the format expected by the HRIS
      const mappedRecords = records.map((record) => {
        return mapObject(record, this.config.mappings.training)
      })

      const response = await fetch(`${this.config.apiUrl}/training-records`, {
        method: "POST",
        headers: {
          ...this.getHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mappedRecords),
      })

      if (!response.ok) {
        throw new Error(`Failed to sync training records: ${response.statusText}`)
      }

      const data = await response.json()

      result.success = true
      result.processedRecords = data.processedCount || records.length
      result.failedRecords = data.failedCount || 0

      if (data.errors && Array.isArray(data.errors)) {
        result.errors = data.errors.map((err) => ({
          record: err.record,
          error: err.message,
        }))
      }

      return result
    } catch (error) {
      console.error("Error syncing training records:", error)
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
   * Handle webhook events from the HRIS system
   */
  async handleWebhook(payload: any): Promise<void> {
    try {
      // Process webhook payload based on event type
      const eventType = payload.event || payload.type || "unknown"

      switch (eventType) {
        case "employee.created":
        case "employee.updated":
          // Process employee updates
          console.log(`Employee ${eventType} event received:`, payload.data?.id)
          // TODO: Update local employee data
          break

        case "employee.terminated":
          // Process employee termination
          console.log(`Employee terminated event received:`, payload.data?.id)
          // TODO: Update employee status
          break

        case "department.updated":
          // Process department updates
          console.log(`Department update event received:`, payload.data?.id)
          // TODO: Update local department data
          break

        default:
          console.log(`Unhandled webhook event type: ${eventType}`)
      }
    } catch (error) {
      console.error("Error processing webhook:", error)
      throw error
    }
  }

  /**
   * Test the connection to the HRIS system
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.config.apiUrl}/ping`, {
        headers: this.getHeaders(),
      })

      return response.ok
    } catch (error) {
      console.error("Connection test failed:", error)
      return false
    }
  }

  /**
   * Get headers for API requests
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: "application/json",
    }

    if (this.config.apiKey) {
      headers["Authorization"] = `Bearer ${this.config.apiKey}`
    }

    return headers
  }

  /**
   * Map external employee data to our standard format
   */
  private mapEmployeeData(data: any): HRISEmployee {
    // Use the configured mappings to transform the data
    const mappedData = mapObject(data, this.config.mappings.employee)

    return {
      id: mappedData.id || data.id || "",
      externalId: mappedData.externalId || data.externalId || data.id || "",
      firstName: mappedData.firstName || "",
      lastName: mappedData.lastName || "",
      email: mappedData.email || "",
      department: mappedData.department || "",
      position: mappedData.position || "",
      manager: mappedData.manager || "",
      managerId: mappedData.managerId || "",
      hireDate: mappedData.hireDate || "",
      status: (mappedData.status as any) || "active",
      customFields: mappedData.customFields || {},
    }
  }

  /**
   * Map external department data to our standard format
   */
  private mapDepartmentData(data: any): HRISDepartment {
    // Use the configured mappings to transform the data
    const mappedData = mapObject(data, this.config.mappings.department)

    return {
      id: mappedData.id || data.id || "",
      externalId: mappedData.externalId || data.externalId || data.id || "",
      name: mappedData.name || "",
      description: mappedData.description || "",
      managerId: mappedData.managerId || "",
      parentDepartmentId: mappedData.parentDepartmentId || "",
    }
  }
}
