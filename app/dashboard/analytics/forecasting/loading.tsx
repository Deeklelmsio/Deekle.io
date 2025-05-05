export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-8 w-32 bg-muted rounded-md mb-2"></div>
        <div className="h-4 w-64 bg-muted rounded-md"></div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="h-5 w-40 bg-muted rounded-md mb-2"></div>
          <div className="h-4 w-60 bg-muted rounded-md"></div>
        </div>
        <div className="p-6 pt-0">
          <div className="h-[300px] bg-muted/50 rounded-md"></div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="h-5 w-40 bg-muted rounded-md mb-2"></div>
          <div className="h-4 w-60 bg-muted rounded-md"></div>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="h-5 w-48 bg-muted rounded-md mb-2"></div>
                <div className="h-4 w-full bg-muted rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
