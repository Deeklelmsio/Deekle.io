import type {
  HRISEmployee,
  HRISDepartment,
  HRISTrainingRecord,
  HRISProviderConfig,
  HRISSyncResult,
  HRISProvider,
} from "./types"
import { WorkdayProvider } from "./providers/workday"
import { BambooHRProvider } from "./providers/bamboohr"
import { ADPProvider } from "./providers/adp"
import { SuccessFactorsProvider } from "./providers/successfactors"
import { GenericProvider } from "./providers/generic"

export class HRISService {
  private provider: HRISProvider | null = null
  private config: HRISProviderConfig | null = null

  constructor(config?: HRISProviderConfig) {
    if (config) {
      this.initialize(config)
    }
  }

  /**
   * Initialize the HRIS service with a provider configuration
   */
  public initialize(config: HRISProviderConfig): void {
    this.config = config

    // Initialize the appropriate provider based on configuration
    switch (config.provider.toLowerCase()) {
      case "workday":
        this.provider = new WorkdayProvider(config)
        break
      case "bamboohr":
        this.provider = new BambooHRProvider(config)
        break
      case "adp":
        this.provider = new ADPProvider(config)
        break
      case "successfactors":
        this.provider = new SuccessFactorsProvider(config)
        break
      default:
        this.provider = new GenericProvider(config)
        break
    }
  }

  /**
   * Test the connection to the HRIS provider
   */
  public async testConnection(): Promise<boolean> {
    if (!this.provider) {
      throw new Error("HRIS provider not initialized")
    }

    return this.provider.testConnection()
  }

  /**
   * Get all employees from the HRIS
   */
  public async getEmployees(): Promise<HRISEmployee[]> {
    if (!this.provider) {
      throw new Error("HRIS provider not initialized")
    }

    return this.provider.getEmployees()
  }

  /**
   * Get a specific employee by ID
   */
  public async getEmployee(id: string): Promise<HRISEmployee | null> {
    if (!this.provider) {
      throw new Error("HRIS provider not initialized")
    }

    return this.provider.getEmployee(id)
  }

  /**
   * Get all departments from the HRIS
   */
  public async getDepartments(): Promise<HRISDepartment[]> {
    if (!this.provider) {
      throw new Error("HRIS provider not initialized")
    }

    return this.provider.getDepartments()
  }

  /**
   * Sync training records to the HRIS
   */
  public async syncTrainingRecords(records: HRISTrainingRecord[]): Promise<HRISSyncResult> {
    if (!this.provider) {
      throw new Error("HRIS provider not initialized")
    }

    return this.provider.syncTrainingRecords(records)
  }

  /**
   * Handle webhook events from the HRIS
   */
  public async handleWebhook(payload: any): Promise<void> {
    if (!this.provider) {
      throw new Error("HRIS provider not initialized")
    }

    return this.provider.handleWebhook(payload)
  }

  /**
   * Get the current provider configuration
   */
  public getConfig(): HRISProviderConfig | null {
    return this.config
  }

  /**
   * Get the name of the current provider
   */
  public getProviderName(): string {
    return this.provider?.name || "Not initialized"
  }
}

// Create a singleton instance for use throughout the application
export const hrisService = new HRISService()
