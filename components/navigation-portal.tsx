"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  BarChart3,
  BookOpen,
  Brain,
  Compass,
  FileText,
  Home,
  LayoutDashboard,
  LogIn,
  MessageSquare,
  Shield,
  UserPlus,
  Users,
} from "lucide-react"

export function NavigationPortal() {
  const [open, setOpen] = useState(false)

  const sections = [
    {
      title: "Main Navigation",
      links: [
        { name: "Home", href: "#", icon: <Home className="h-5 w-5" /> },
        { name: "Features", href: "#features", icon: <Compass className="h-5 w-5" /> },
        { name: "How It Works", href: "#how-it-works", icon: <FileText className="h-5 w-5" /> },
        { name: "Pricing", href: "#pricing", icon: <FileText className="h-5 w-5" /> },
      ],
    },
    {
      title: "Platform",
      links: [
        { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
        { name: "My Courses", href: "/dashboard/courses", icon: <BookOpen className="h-5 w-5" /> },
        { name: "Learning Analytics", href: "/dashboard/learning-analytics", icon: <BarChart3 className="h-5 w-5" /> },
        { name: "Compliance Training", href: "/dashboard/compliance", icon: <Shield className="h-5 w-5" /> },
        { name: "AI Tutor", href: "/ai-tutor", icon: <Brain className="h-5 w-5" /> },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Messages", href: "/dashboard/messages", icon: <MessageSquare className="h-5 w-5" /> },
        { name: "Community", href: "/dashboard/community", icon: <Users className="h-5 w-5" /> },
      ],
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Compass className="h-4 w-4" />
          <span>Navigate</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span>Deekle.io Navigation</span>
          </SheetTitle>
          <SheetDescription>Quickly navigate to any section of the Deekle.io platform</SheetDescription>
        </SheetHeader>

        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500">{section.title}</h3>
              <div className="space-y-1">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    <div className="text-gray-600">{link.icon}</div>
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="sm:col-span-2 border-t pt-4 mt-2">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Account</h3>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/signup" onClick={() => setOpen(false)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setOpen(false)}>
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
