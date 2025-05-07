"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIInsights } from "./ai-insights"
import { AnomalyDetection } from "./anomaly-detection"

export function InsightsTab() {
  const [activeTab, setActiveTab] = useState("ai-insights")

  return (
    <Tabs defaultValue="ai-insights" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        <TabsTrigger value="anomaly-detection">Anomaly Detection</TabsTrigger>
      </TabsList>
      <TabsContent value="ai-insights">
        <div className="py-6">
          <AIInsights />
        </div>
      </TabsContent>
      <TabsContent value="anomaly-detection">
        <div className="py-6">
          <AnomalyDetection />
        </div>
      </TabsContent>
    </Tabs>
  )
}
