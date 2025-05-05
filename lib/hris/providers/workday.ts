import type {
  HRISEmployee,
  HRISDepartment,
  HRISTrainingRecord,
  HRISProviderConfig,
  HRISSyncResult,
  HRISProvider,
} from "../types"

export class WorkdayProvider implements HRISProvider {
  name = "Workday Provider"
  private config: HRISProviderConfig

  constructor(config: HRISProviderConfig) {
    this.config = config
  }

  /**
   * Fetch employees from Workday
   */
  async getEmployees(): Promise<HRISEmployee[]> {
    try {
      // Workday typically uses SOAP APIs, but we'll use REST for simplicity in this example
      const response = await fetch(`${this.config.apiUrl}/workers`, {
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch employees: ${response.statusText}`)
      }

      const data = await response.json()

      // Workday-specific mapping logic
      return Array.isArray(data.workers) ? data.workers.map((worker) => this.mapWorkdayEmployee(worker)) : []
    } catch (error) {
      console.error("Error fetching employees from Workday:", error)
      return []
    }
  }

  /**
   * Fetch a specific employee by ID from Workday
   */
  async getEmployee(id: string): Promise<HRISEmployee | null> {
    try {
      const response = await fetch(`${this.config.apiUrl}/workers/${id}`, {
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        if (response.status === 404) {
          return null
        }
        throw new Error(`Failed to fetch employee: ${response.statusText}`)
      }

      const data = await response.json()
      return this.mapWorkdayEmployee(data)
    } catch (error) {
      console.error(`Error fetching employee ${id} from Workday:`, error)
      return null
    }
  }

  /**
   * Fetch departments from Workday
   */
  async getDepartments(): Promise<HRISDepartment[]> {
    try {
      const response = await fetch(`${this.config.apiUrl}/organizations`, {
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch departments: ${response.statusText}`)
      }

      const data = await response.json()

      // Workday-specific mapping logic for organizations/departments
      return Array.isArray(data.organizations) ? data.organizations.map((org) => this.mapWorkdayDepartment(org)) : []
    } catch (error) {
      console.error("Error fetching departments from Workday:", error)
      return []
    }
  }

  /**
   * Sync training records to Workday
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
      // Workday-specific mapping for training records
      const workdayRecords = records.map((record) => ({
        workerId: record.employeeId,
        trainingCourseId: record.courseId,
        trainingCourseName: record.courseName,
        completionDate: record.completionDate,
        expirationDate: record.expirationDate || null,
        status: this.mapTrainingStatus(record.status),
        grade: record.score ? record.score.toString() : null,
        attachmentUrl: record.certificateUrl || null,
      }))

      const response = await fetch(`${this.config.apiUrl}/training-records`, {
        method: "POST",
        headers: {
          ...this.getHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trainingRecords: workdayRecords }),
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
      console.error("Error syncing training records to Workday:", error)
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
   * Handle webhook events from Workday
   */
  async handleWebhook(payload: any): Promise<void> {
    try {
      // Workday-specific webhook handling
      const eventType = payload.eventType || "unknown"

      switch (eventType) {
        case "WORKER_HIRE":
        case "WORKER_CHANGE":
          // Process employee updates
          console.log(`Workday ${eventType} event received:`, payload.workerId)
          // TODO: Update local employee data
          break

        case "WORKER_TERMINATE":
          // Process employee termination
          console.log(`Workday termination event received:`, payload.workerId)
          // TODO: Update employee status
          break

        case "ORGANIZATION_CHANGE":
          // Process department updates
          console.log(`Workday organization change event received:`, payload.organizationId)
          // TODO: Update local department data
          break

        default:
          console.log(`Unhandled Workday webhook event type: ${eventType}`)
      }
    } catch (error) {
      console.error("Error processing Workday webhook:", error)
      throw error
    }
  }

  /**
   * Test the connection to Workday
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.config.apiUrl}/tenants/current`, {
        headers: this.getHeaders(),
      })

      return response.ok
    } catch (error) {
      console.error("Workday connection test failed:", error)
      return false
    }
  }

  /**
   * Get headers for Workday API requests
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: "application/json",
    }

    if (this.config.apiKey) {
      headers["Authorization"] = `Bearer ${this.config.apiKey}`
    } else if (this.config.clientId && this.config.clientSecret) {
      // For Workday OAuth
      const basicAuth = Buffer.from(`${this.config.clientId}:${this.config.clientSecret}`).toString("base64")
      headers["Authorization"] = `Basic ${basicAuth}`
    }

    return headers
  }

  /**
   * Map Workday employee data to our standard format
   */
  private mapWorkdayEmployee(worker: any): HRISEmployee {
    return {
      id: worker.workerId || "",
      externalId: worker.workerId || "",
      firstName: worker.name?.givenName || worker.firstName || "",
      lastName: worker.name?.familyName || worker.lastName || "",
      email: worker.emails?.[0]?.emailAddress || worker.email || "",
      department: worker.organization?.name || worker.departmentName || "",
      position: worker.position?.name || worker.positionTitle || "",
      manager: worker.manager?.name || worker.managerName || "",
      managerId: worker.manager?.id || worker.managerId || "",
      hireDate: worker.hireDate || "",
      status: this.mapEmployeeStatus(worker.workerStatus || worker.status),
      customFields: {
        businessTitle: worker.businessTitle || "",
        location: worker.location?.name || worker.locationName || "",
        costCenter: worker.costCenter?.id || worker.costCenterId || "",
      },
    }
  }

  /**
   * Map Workday department data to our standard format
   */
  private mapWorkdayDepartment(org: any): HRISDepartment {
    return {
      id: org.organizationId || org.id || "",
      externalId: org.organizationId || org.id || "",
      name: org.organizationName || org.name || "",
      description: org.description || "",
      managerId: org.managerWorkerId || org.managerId || "",
      parentDepartmentId: org.parentOrganizationId || org.parentId || "",
    }
  }

  /**
   * Map Workday employee status to our standard format
   */
  private mapEmployeeStatus(status: string): "active" | "inactive" | "onLeave" | "terminated" {
    const statusLower = (status || "").toLowerCase()

    if (statusLower.includes("active")) return "active"
    if (statusLower.includes("leave")) return "onLeave"
    if (statusLower.includes("termin")) return "terminated"

    return "inactive"
  }

  /**
   * Map our training status to Workday format
   */
  private mapTrainingStatus(status: string): string {
    switch (status) {
      case "completed":
        return "COMPLETED"
      case "inProgress":
        return "IN_PROGRESS"
      case "notStarted":
        return "NOT_STARTED"
      case "expired":
        return "EXPIRED"
      default:
        return status.toUpperCase()
    }
  }
}
