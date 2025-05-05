import { NextResponse } from "next/server"
import { hrisService } from "@/lib/hris/hris-service"
import type { HRISTrainingRecord } from "@/lib/hris/types"

// Sync training records to HRIS
export async function POST(req: Request) {
  try {
    const { records } = await req.json()

    if (!Array.isArray(records) || records.length === 0) {
      return NextResponse.json({ error: "Training records array is required" }, { status: 400 })
    }

    if (!hrisService.getConfig()) {
      return NextResponse.json({ error: "HRIS not configured" }, { status: 400 })
    }

    // Validate and format the training records
    const trainingRecords: HRISTrainingRecord[] = records.map((record) => ({
      id: record.id || "",
      employeeId: record.employeeId || "",
      courseId: record.courseId || "",
      courseName: record.courseName || "",
      completionDate: record.completionDate || "",
      expirationDate: record.expirationDate || undefined,
      status: (record.status as any) || "completed",
      score: record.score || undefined,
      certificateUrl: record.certificateUrl || undefined,
    }))

    // Sync the records to the HRIS
    const result = await hrisService.syncTrainingRecords(trainingRecords)

    return NextResponse.json({
      result,
      provider: hrisService.getProviderName(),
    })
  } catch (error) {
    console.error("Error syncing training records to HRIS:", error)
    return NextResponse.json({ error: "Failed to sync training records to HRIS" }, { status: 500 })
  }
}
