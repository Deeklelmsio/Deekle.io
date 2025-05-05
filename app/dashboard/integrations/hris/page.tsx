import { HRISConfiguration } from "@/components/hris-configuration"

export default function HRISIntegrationPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">HRIS Integration</h1>
          <p className="text-gray-500">Connect Deekle.io with your Human Resource Information System</p>
        </div>

        <HRISConfiguration />
      </div>
    </div>
  )
}
