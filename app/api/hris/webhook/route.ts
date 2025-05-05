import { NextResponse } from "next/server"
import { hrisService } from "@/lib/hris/hris-service"

// Handle HRIS webhooks
export async function POST(req: Request) {
  try {
    const payload = await req.json()

    if (!hrisService.getConfig()) {
      return NextResponse.json({ error: "HRIS not configured" }, { status: 400 })
    }

    // Process the webhook
    await hrisService.handleWebhook(payload)

    return NextResponse.json({
      success: true,
      message: "Webhook processed successfully",
      provider: hrisService.getProviderName(),
    })
  } catch (error) {
    console.error("Error processing HRIS webhook:", error)
    return NextResponse.json({ error: "Failed to process HRIS webhook" }, { status: 500 })
  }
}
