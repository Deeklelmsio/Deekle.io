/**
 * Map properties from one object to another based on a mapping configuration
 *
 * @param source The source object
 * @param mapping The mapping configuration (target: source)
 * @returns A new object with mapped properties
 */
export function mapObject(source: any, mapping: Record<string, string>): any {
  if (!source || !mapping) {
    return source
  }

  const result: Record<string, any> = {}

  // Apply the mappings
  Object.entries(mapping).forEach(([targetKey, sourceKey]) => {
    // Handle nested properties with dot notation
    if (sourceKey.includes(".")) {
      const parts = sourceKey.split(".")
      let value = source

      for (const part of parts) {
        if (value === undefined || value === null) {
          value = undefined
          break
        }
        value = value[part]
      }

      result[targetKey] = value
    } else {
      result[targetKey] = source[sourceKey]
    }
  })

  return result
}

/**
 * Format a date to ISO string or custom format
 */
export function formatDate(date: Date | string | null | undefined, format?: string): string {
  if (!date) return ""

  const dateObj = typeof date === "string" ? new Date(date) : date

  if (isNaN(dateObj.getTime())) {
    return ""
  }

  if (format) {
    // Implement custom date formatting if needed
    return dateObj.toLocaleDateString()
  }

  return dateObj.toISOString()
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
