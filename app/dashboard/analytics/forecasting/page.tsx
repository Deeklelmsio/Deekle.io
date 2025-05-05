import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forecasting | Analytics Dashboard",
  description: "AI-powered predictions and forecasts",
}

export default function ForecastingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Forecasting</h1>
        <p className="text-muted-foreground">View AI-powered predictions and forecasts</p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Enrollment Forecast</h3>
          <p className="text-sm text-muted-foreground">Predicted enrollment trends for the next 3 months</p>
        </div>
        <div className="p-6 pt-0">
          <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
            <p className="text-muted-foreground">Forecast chart would appear here</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Key Predictions</h3>
          <p className="text-sm text-muted-foreground">AI-generated predictions based on historical data</p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Enrollment Growth</h3>
              <p className="text-sm text-muted-foreground">
                Enrollment is predicted to increase by 15% in the next quarter based on current trends and seasonality
                patterns.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Completion Rate Improvement</h3>
              <p className="text-sm text-muted-foreground">
                Course completion rates are expected to improve by 8% with the introduction of new microlearning
                modules.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Mobile Usage Trend</h3>
              <p className="text-sm text-muted-foreground">
                Mobile learning is projected to become the primary access method for 60% of users by the end of the next
                quarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
