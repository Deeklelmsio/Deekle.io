export function AnomalyDetection() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Anomaly Detection</h3>
          <p className="text-sm text-muted-foreground">AI-detected anomalies in your learning data</p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Unusual Drop in Engagement</h3>
              <p className="text-sm text-muted-foreground">
                There was an unusual 30% drop in engagement for the "Advanced JavaScript" course last week.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Spike in Mobile Usage</h3>
              <p className="text-sm text-muted-foreground">
                There was an unexpected 45% increase in mobile app usage during non-business hours.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-1">Compliance Training Anomaly</h3>
              <p className="text-sm text-muted-foreground">
                The IT department has a significantly lower compliance training completion rate than other departments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
