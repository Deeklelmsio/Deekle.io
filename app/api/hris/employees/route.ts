import { NextResponse } from "next/server"
import { hrisService } from "@/lib/hris/hris-service"

// Get employees from HRIS
export async function GET() {
  try {
    if (!hrisService.getConfig()) {
      return NextResponse.json({ error: "HRIS not configured" }, { status: 400 })
    }

    const employees = await hrisService.getEmployees()

    return NextResponse.json({
      employees,
      count: employees.length,
      provider: hrisService.getProviderName(),
    })
  } catch (error) {
    console.error("Error fetching HRIS employees:", error)
    return NextResponse.json({ error: "Failed to fetch employees from HRIS" }, { status: 500 })
  }
}

// Get a specific employee
export async function POST(req: Request) {
  try {
    const { employeeId } = await req.json()

    if (!employeeId) {
      return NextResponse.json({ error: "Employee ID is required" }, { status: 400 })
    }

    if (!hrisService.getConfig()) {
      return NextResponse.json({ error: "HRIS not configured" }, { status: 400 })
    }

    const employee = await hrisService.getEmployee(employeeId)

    if (!employee) {
      return NextResponse.json({ error: "Employee not found" }, { status: 404 })
    }

    return NextResponse.json({
      employee,
      provider: hrisService.getProviderName(),
    })
  } catch (error) {
    console.error("Error fetching HRIS employee:", error)
    return NextResponse.json({ error: "Failed to fetch employee from HRIS" }, { status: 500 })
  }
}
