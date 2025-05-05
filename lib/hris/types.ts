/**
 * Core HRIS integration types
 */

// Common employee data structure that maps to most HRIS systems
export interface HRISEmployee {
  id: string
  externalId?: string // ID in the HRIS system
  firstName: string
  lastName: string
  email: string
  department?: string
  position?: string
  manager?: string
  managerId?: string
  hireDate?: string
  status: "active" | "inactive" | "onLeave" | "terminated"
  customFields?: Record<string, any>
}

// Department/team structure
export interface HRISDepartment {
  id: string
  externalId?: string
  name: string
  description?: string
  managerId?: string
  parentDepartmentId?: string
}

// Training record structure
export interface HRISTrainingRecord {
  id: string
  employeeId: string
  courseId: string
  courseName: string
  completionDate: string
  expirationDate?: string
  status: "completed" | "inProgress" | "notStarted" | "expired"
  score?: number
  certificateUrl?: string
}

// Compliance requirement structure
export interface HRISComplianceRequirement {
  id: string
  name: string
  description?: string
  frequency: "once" | "monthly" | "quarterly" | "biannually" | "annually" | "custom"
  customFrequencyDays?: number
  applicableDepartments?: string[]
  applicablePositions?: string[]
  courseId?: string
}

// HRIS provider configuration
export interface HRISProviderConfig {
  provider: string
  apiUrl: string
  apiKey?: string
  clientId?: string
  clientSecret?: string
  webhookUrl?: string
  syncFrequency: "realtime" | "hourly" | "daily" | "weekly"
  mappings: {
    employee: Record<string, string>
    department: Record<string, string>
    training: Record<string, string>
  }
  active: boolean
}

// Sync operation result
export interface HRISSyncResult {
  success: boolean
  operation: "import" | "export"
  entityType: "employee" | "department" | "training" | "compliance"
  totalRecords: number
  processedRecords: number
  failedRecords: number
  errors?: Array<{
    record: any
    error: string
  }>
  timestamp: string
}

// HRIS provider interface that all specific providers must implement
export interface HRISProvider {
  name: string
  getEmployees(): Promise<HRISEmployee[]>
  getEmployee(id: string): Promise<HRISEmployee | null>
  getDepartments(): Promise<HRISDepartment[]>
  syncTrainingRecords(records: HRISTrainingRecord[]): Promise<HRISSyncResult>
  handleWebhook(payload: any): Promise<void>
  testConnection(): Promise<boolean>
}
