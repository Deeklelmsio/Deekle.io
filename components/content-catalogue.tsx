"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { FileUp, Globe, Plus, Search, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample content types
const contentTypes = ["Document", "Video", "Audio", "Presentation", "Course", "Quiz", "Other"]

// Sample content items
const sampleContent = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    type: "Course",
    source: "Imported",
    date: "2023-05-15",
    tags: ["AI", "Technology", "Data Science"],
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    type: "Document",
    source: "Uploaded",
    date: "2023-06-22",
    tags: ["Programming", "Web Development"],
  },
  {
    id: 3,
    title: "Project Management Essentials",
    type: "Presentation",
    source: "Uploaded",
    date: "2023-07-10",
    tags: ["Business", "Management"],
  },
  {
    id: 4,
    title: "Data Visualization Techniques",
    type: "Video",
    source: "Imported",
    date: "2023-08-05",
    tags: ["Data Science", "Analytics"],
  },
  {
    id: 5,
    title: "Effective Communication Skills",
    type: "Course",
    source: "Imported",
    date: "2023-09-18",
    tags: ["Soft Skills", "Communication"],
  },
]

export function ContentCatalogue() {
  const [searchQuery, setSearchQuery] = useState("")
  const [content, setContent] = useState(sampleContent)
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Filter content based on search query and filter
  const filteredContent = content.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    if (selectedFilter === "all") return matchesSearch
    return matchesSearch && item.type.toLowerCase() === selectedFilter.toLowerCase()
  })

  // Handle file upload
  const handleFileUpload = (e) => {
    // In a real implementation, this would handle file uploads to a server
    console.log("Files selected:", e.target.files)
    // For demo purposes, we'll just add a placeholder item
    if (e.target.files.length > 0) {
      const newItem = {
        id: content.length + 1,
        title: e.target.files[0].name.split(".")[0],
        type: guessContentType(e.target.files[0].name),
        source: "Uploaded",
        date: new Date().toISOString().split("T")[0],
        tags: ["New"],
      }
      setContent([...content, newItem])
      setIsImportDialogOpen(false)
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

    // In a real implementation, this would validate and process the URL
    console.log("Importing from URL:", { url, title, type, description })

    // For demo purposes, add a placeholder item
    const newItem = {
      id: content.length + 1,
      title: title,
      type: type,
      source: "Imported",
      date: new Date().toISOString().split("T")[0],
      tags: ["Imported", type],
    }
    setContent([...content, newItem])
    setIsImportDialogOpen(false)
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search content..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {contentTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
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
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Brief description of the content"
                        rows={3}
                      />
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
        </div>
      </div>

      {filteredContent.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-gray-50">
          <p className="text-gray-500 mb-4">No content found matching your search criteria</p>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{item.type}</Badge>
                  <Badge variant="secondary">{item.source}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-purple-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-3 text-sm text-gray-500">
                <span>Added: {item.date}</span>
                <Button variant="ghost" size="sm">
                  Use
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
