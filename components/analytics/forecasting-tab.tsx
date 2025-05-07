"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PredictiveAnalytics } from "./predictive-analytics"

export function ForecastingTab() {
  const [activeTab, setActiveTab] = useState("enrollment")

  return (
    <Tabs defaultValue="enrollment" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
        <TabsTrigger value="completion">Completion</TabsTrigger>
        <TabsTrigger value="engagement">Engagement</TabsTrigger>
        <TabsTrigger value="compliance">Compliance</TabsTrigger>
      </TabsList>
      <TabsContent value="enrollment">
        <div className="py-6">
          <PredictiveAnalytics type="enrollment" />
        </div>
      </TabsContent>
      <TabsContent value="completion">
        <div className="py-6">
          <PredictiveAnalytics type="completion" />
        </div>
      </TabsContent>
      <TabsContent value="engagement">
        <div className="py-6">
          <PredictiveAnalytics type="engagement" />
        </div>
      </TabsContent>
      <TabsContent value="compliance">
        <div className="py-6">
          <PredictiveAnalytics type="compliance" />
        </div>
      </TabsContent>
    </Tabs>
  )
}
