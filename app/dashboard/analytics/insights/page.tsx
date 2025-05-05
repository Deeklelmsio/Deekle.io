import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Insights | Analytics Dashboard",
  description: "AI-generated insights from your learning data",
}

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
        <p className="text-muted-foreground">Discover AI-generated insights from your learning data</p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">AI-Generated Insights</h3>
          <p className="text-sm text-muted-foreground">Automatically generated insights based on your learning data</p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Increased Engagement in Technical Courses</h3>
              <p className="text-sm text-muted-foreground">
                Technical courses have seen a 15% increase in engagement over the last month.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Compliance Training Completion Rate Dropping</h3>
              <p className="text-sm text-muted-foreground">
                Compliance training completion rates have decreased by 8% this month.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Mobile Learning on the Rise</h3>
              <p className="text-sm text-muted-foreground">
                Mobile device usage for learning has increased by 22% in the last quarter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Recommendations</h3>
          <p className="text-sm text-muted-foreground">AI-powered recommendations to improve learning outcomes</p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-1">Increase Mobile Learning Support</h4>
              <p className="text-sm text-muted-foreground">
                Based on usage patterns, investing in better mobile learning experiences could increase engagement by up
                to 30%.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-1">Simplify Compliance Training</h4>
              <p className="text-sm text-muted-foreground">
                Breaking compliance courses into smaller modules could improve completion rates by 15-20%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
