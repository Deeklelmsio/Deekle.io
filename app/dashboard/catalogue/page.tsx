import type { Metadata } from "next"
import { ContentCatalogue } from "@/components/content-catalogue"

export const metadata: Metadata = {
  title: "Content Catalogue | Deekle.io",
  description: "Import and manage your learning content",
}

export default function CataloguePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Content Catalogue</h1>
        <p className="text-gray-500">Import, organize, and manage your learning content</p>
      </div>

      <ContentCatalogue />
    </div>
  )
}
