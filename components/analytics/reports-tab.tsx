"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportGenerator } from "./report-generator"
import { SavedReports } from "./saved-reports"

export function ReportsTab() {
  const [activeTab, setActiveTab] = useState("generate")

  return (
    <Tabs defaultValue="generate" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="generate">Generate Report</TabsTrigger>
        <TabsTrigger value="saved">Saved Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="generate">
        <div className="py-6">
          <ReportGenerator />
        </div>
      </TabsContent>
      <TabsContent value="saved">
        <div className="py-6">
          <SavedReports />
        </div>
      </TabsContent>
    </Tabs>
  )
}
