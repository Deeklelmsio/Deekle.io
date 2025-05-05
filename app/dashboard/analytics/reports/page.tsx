import type { Metadata } from "next"
import { ReportsPageClient } from "./ReportsPageClient"

export const metadata: Metadata = {
  title: "Report Generator | Analytics Dashboard",
  description: "Generate custom reports with advanced filtering and visualization options",
}

export default function ReportsPage() {
  return <ReportsPageClient />
}
