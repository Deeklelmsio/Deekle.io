export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-8 w-48 bg-muted rounded-md mb-2"></div>
        <div className="h-4 w-72 bg-muted rounded-md"></div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="h-4 w-24 bg-muted rounded-md mb-4"></div>
            <div className="h-6 w-16 bg-muted rounded-md mb-2"></div>
            <div className="h-3 w-20 bg-muted rounded-md"></div>
          </div>
        ))}
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
    </div>
  )
}
