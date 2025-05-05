"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Globe, Plus, Upload } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Content types
const contentTypes = ["Document", "Video", "Audio", "Presentation", "Course", "Quiz", "Other"]

export function ImportContentDialog({ onImport }) {
  const [open, setOpen] = useState(false)

  // Handle file upload
  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      const files = Array.from(e.target.files)
      const importedContent = files.map((file) => ({
        title: file.name.split(".")[0],
        type: guessContentType(file.name),
        source: "Uploaded",
        date: new Date().toISOString().split("T")[0],
        tags: ["New"],
        file,
      }))

      onImport(importedContent)
      setOpen(false)
    }
  }

  // Handle URL import
  const handleUrlImport = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const url = formData.get("url")
    const title = formData.get("title")
    const type = formData.get("type")
    const description = formData.get("description")

    const importedContent = [
      {
        title: title,
        type: type,
        source: "Imported",
        date: new Date().toISOString().split("T")[0],
        tags: ["Imported", type],
        url,
        description,
      },
    ]

    onImport(importedContent)
    setOpen(false)
    e.target.reset()
  }

  // Guess content type from filename
  const guessContentType = (filename) => {
    const ext = filename.split(".").pop().toLowerCase()
    if (["pdf", "doc", "docx", "txt"].includes(ext)) return "Document"
    if (["mp4", "mov", "avi", "webm"].includes(ext)) return "Video"
    if (["mp3", "wav", "ogg"].includes(ext)) return "Audio"
    if (["ppt", "pptx"].includes(ext)) return "Presentation"
    if (["zip", "rar"].includes(ext)) return "Course"
    return "Other"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Import Content
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Import Learning Content</DialogTitle>
          <DialogDescription>
            Add content to your catalogue by uploading files or importing from a URL.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="upload" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload Files</TabsTrigger>
            <TabsTrigger value="url">Import from URL</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="py-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <FileUp className="h-10 w-10 mx-auto mb-4 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">Drag and drop files here, or click to browse</p>
              <p className="text-xs text-gray-400 mb-4">
                Supports PDF, DOCX, PPTX, MP4, MP3, and ZIP files (max 100MB)
              </p>
              <Input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
                multiple
                accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.mp3,.zip"
              />
              <Label htmlFor="file-upload" asChild>
                <Button variant="outline" className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  Browse Files
                </Button>
              </Label>
            </div>
          </TabsContent>

          <TabsContent value="url" className="py-4">
            <form onSubmit={handleUrlImport} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url">Content URL</Label>
                <Input id="url" name="url" placeholder="https://example.com/content" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Content title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Content Type</Label>
                <Select name="type" defaultValue="Document">
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea id="description" name="description" placeholder="Brief description of the content" rows={3} />
              </div>

              <DialogFooter>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  <Globe className="h-4 w-4 mr-2" />
                  Import from URL
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
