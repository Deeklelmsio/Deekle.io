"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  FileBarChart,
  FileText,
  Gauge,
  LayoutDashboard,
  LineChart,
  PieChart,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard/analytics",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Reports",
    href: "/dashboard/analytics/reports",
    icon: <FileBarChart className="h-5 w-5" />,
    children: [
      {
        title: "Performance",
        href: "/dashboard/analytics/reports/performance",
        icon: <Gauge className="h-4 w-4" />,
      },
      {
        title: "User Engagement",
        href: "/dashboard/analytics/reports/engagement",
        icon: <Users className="h-4 w-4" />,
      },
      {
        title: "Learning Progress",
        href: "/dashboard/analytics/reports/progress",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        title: "Compliance Status",
        href: "/dashboard/analytics/reports/compliance",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "AI Insights",
    href: "/dashboard/analytics/insights",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Forecasting",
    href: "/dashboard/analytics/forecasting",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Custom Dashboards",
    href: "/dashboard/analytics/custom",
    icon: <PieChart className="h-5 w-5" />,
  },
  {
    title: "Scheduled Reports",
    href: "/dashboard/analytics/scheduled",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Export Center",
    href: "/dashboard/analytics/export",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/dashboard/analytics/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export function AnalyticsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-background h-screen sticky top-0 overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold flex items-center">
          <BarChart3 className="mr-2 h-5 w-5 text-primary" />
          Analytics
        </h2>
        <p className="text-sm text-muted-foreground">Reports & Insights</p>
      </div>

      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <div key={item.href} className="space-y-1">
                <Button
                  asChild
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", isActive && "bg-muted font-medium")}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                    {item.children && <ChevronRight className="ml-auto h-4 w-4 opacity-50" />}
                  </Link>
                </Button>

                {item.children && isActive && (
                  <div className="ml-4 border-l pl-2 space-y-1">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href

                      return (
                        <Button
                          key={child.href}
                          asChild
                          variant={isChildActive ? "secondary" : "ghost"}
                          className={cn("w-full justify-start", isChildActive && "bg-muted font-medium")}
                          size="sm"
                        >
                          <Link href={child.href}>
                            {child.icon}
                            <span className="ml-2">{child.title}</span>
                          </Link>
                        </Button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground ml-2">Last updated: 5m ago</span>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
