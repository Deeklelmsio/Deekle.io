"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  BookOpen,
  Brain,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileText,
  Home,
  LayoutDashboard,
  LogIn,
  Menu,
  MessageSquare,
  Shield,
  Sparkles,
  UserPlus,
  Users,
  X,
} from "lucide-react"

export function SidebarNavigation() {
  const [expanded, setExpanded] = useState(false)

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  const navigationItems = [
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
        { name: "AI Demo", href: "/ai-demo", icon: <Sparkles className="h-5 w-5" /> },
        {
          name: "ML Features",
          href: "/dashboard/ml-features",
          icon: <Brain className="h-5 w-5" />,
        },
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
    <>
      {/* Mobile Toggle Button - Only visible on small screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md"
        aria-label="Toggle navigation"
      >
        {expanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-100 border-r z-40 transition-all duration-300 ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        {/* Collapse/Expand Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-2 p-2 rounded-full hover:bg-gray-200"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 p-4 border-b border-gray-200">
          <Brain className="h-6 w-6 text-purple-600" />
          <span
            className={`text-xl font-bold transition-opacity duration-200 ${expanded ? "opacity-100" : "opacity-0 w-0"}`}
          >
            Deekle.io
          </span>
        </div>

        {/* Navigation Links */}
        <div className="py-4 overflow-y-auto h-[calc(100%-64px)]">
          {navigationItems.map((section) => (
            <div key={section.title} className="mb-6">
              <h3
                className={`px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 transition-opacity duration-200 ${
                  expanded ? "opacity-100" : "opacity-0"
                }`}
              >
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
                      title={!expanded ? link.name : undefined}
                    >
                      <div className="text-gray-600 flex-shrink-0">{link.icon}</div>
                      <span
                        className={`transition-all duration-200 ${
                          expanded ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Account Links */}
          <div className={`px-4 pt-4 mt-4 border-t border-gray-200 ${expanded ? "block" : "hidden"}`}>
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Account</h3>
            <div className="space-y-2">
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link href="/signup">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
