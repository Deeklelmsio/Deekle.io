import { NextResponse } from "next/server"
import { hrisService } from "@/lib/hris/hris-service"
import type { HRISProviderConfig } from "@/lib/hris/types"

// Get current HRIS configuration
export async function GET() {
  try {
    const config = hrisService.getConfig()

    // Remove sensitive information
    if (config) {
      const safeConfig = { ...config }
      delete safeConfig.apiKey
      delete safeConfig.clientSecret

      return NextResponse.json({ config: safeConfig })
    }

    return NextResponse.json({ config: null })
  } catch (error) {
    console.error("Error fetching HRIS config:", error)
    return NextResponse.json({ error: "Failed to fetch HRIS configuration" }, { status: 500 })
  }
}

// Update HRIS configuration
export async function POST(req: Request) {
  try {
    const config: HRISProviderConfig = await req.json()

    // Validate the configuration
    if (!config.provider || !config.apiUrl) {
      return NextResponse.json({ error: "Provider and API URL are required" }, { status: 400 })
    }

    // Initialize the HRIS service with the new configuration
    hrisService.initialize(config)

    // Test the connection
    const connectionSuccess = await hrisService.testConnection()

    if (!connectionSuccess) {
      return NextResponse.json(
        { error: "Failed to connect to HRIS provider with the provided configuration" },
        { status: 400 },
      )
    }

    return NextResponse.json({
      success: true,
      provider: hrisService.getProviderName(),
      message: "HRIS configuration updated successfully",
    })
  } catch (error) {
    console.error("Error updating HRIS config:", error)
    return NextResponse.json({ error: "Failed to update HRIS configuration" }, { status: 500 })
  }
}
