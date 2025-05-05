import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ChevronLeft, ChevronRight, Clock, Download, Filter, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  // Mock data for the calendar
  const currentMonth = "May 2025"
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const totalDays = 31
  const firstDayOffset = 3 // Wednesday

  // Generate calendar days
  const calendarDays = []
  for (let i = 0; i < firstDayOffset; i++) {
    calendarDays.push({ day: "", events: [] })
  }

  for (let i = 1; i <= totalDays; i++) {
    const events = []

    // Add some mock events
    if (i === 5) {
      events.push({
        title: "Python Assignment Due",
        time: "11:59 PM",
        type: "assignment",
        course: "Python for Data Analysis",
      })
    }

    if (i === 10) {
      events.push({
        title: "Web Development Live Session",
        time: "2:00 PM - 3:30 PM",
        type: "session",
        course: "Web Development Bootcamp",
      })
    }

    if (i === 15) {
      events.push({
        title: "Marketing Quiz",
        time: "All Day",
        type: "assessment",
        course: "Digital Marketing Essentials",
      })
    }

    if (i === 20) {
      events.push({
        title: "Group Project Meeting",
        time: "4:00 PM - 5:00 PM",
        type: "meeting",
        course: "Team Collaboration",
      })
    }

    if (i === 25) {
      events.push({
        title: "Final Exam",
        time: "10:00 AM - 12:00 PM",
        type: "exam",
        course: "Business Communication",
      })
      events.push({
        title: "Study Group",
        time: "3:00 PM - 5:00 PM",
        type: "meeting",
        course: "Machine Learning",
      })
    }

    calendarDays.push({ day: i, events })
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Learning Calendar</h1>
            <p className="text-gray-500">Manage your learning schedule and deadlines</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>

        {/* Calendar Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-semibold">{currentMonth}</h2>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Today
            </Button>
            <Select defaultValue="month">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="agenda">Agenda</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Calendar */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center py-2 font-medium text-sm">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[120px] border rounded-md p-1 ${day.day ? "bg-white" : "bg-gray-50"}`}
                >
                  {day.day && (
                    <>
                      <div className="text-right text-sm font-medium p-1">{day.day}</div>
                      <div className="space-y-1">
                        {day.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className={`p-1 rounded text-xs ${
                              event.type === "assignment"
                                ? "bg-amber-100 text-amber-800"
                                : event.type === "session"
                                  ? "bg-blue-100 text-blue-800"
                                  : event.type === "assessment"
                                    ? "bg-purple-100 text-purple-800"
                                    : event.type === "exam"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-green-100 text-green-800"
                            }`}
                          >
                            <div className="font-medium truncate">{event.title}</div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <UpcomingEvent
                title="Python Assignment Due"
                date="May 5, 2025"
                time="11:59 PM"
                course="Python for Data Analysis"
                type="assignment"
              />
              <UpcomingEvent
                title="Web Development Live Session"
                date="May 10, 2025"
                time="2:00 PM - 3:30 PM"
                course="Web Development Bootcamp"
                type="session"
              />
              <UpcomingEvent
                title="Marketing Quiz"
                date="May 15, 2025"
                time="All Day"
                course="Digital Marketing Essentials"
                type="assessment"
              />
              <UpcomingEvent
                title="Group Project Meeting"
                date="May 20, 2025"
                time="4:00 PM - 5:00 PM"
                course="Team Collaboration"
                type="meeting"
              />
              <UpcomingEvent
                title="Final Exam"
                date="May 25, 2025"
                time="10:00 AM - 12:00 PM"
                course="Business Communication"
                type="exam"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function UpcomingEvent({ title, date, time, course, type }) {
  const getEventTypeStyles = (type) => {
    switch (type) {
      case "assignment":
        return { badge: "bg-amber-100 text-amber-800", icon: <CalendarIcon className="h-5 w-5 text-amber-600" /> }
      case "session":
        return { badge: "bg-blue-100 text-blue-800", icon: <CalendarIcon className="h-5 w-5 text-blue-600" /> }
      case "assessment":
        return { badge: "bg-purple-100 text-purple-800", icon: <CalendarIcon className="h-5 w-5 text-purple-600" /> }
      case "exam":
        return { badge: "bg-red-100 text-red-800", icon: <CalendarIcon className="h-5 w-5 text-red-600" /> }
      case "meeting":
        return { badge: "bg-green-100 text-green-800", icon: <CalendarIcon className="h-5 w-5 text-green-600" /> }
      default:
        return { badge: "bg-gray-100 text-gray-800", icon: <CalendarIcon className="h-5 w-5 text-gray-600" /> }
    }
  }

  const styles = getEventTypeStyles(type)

  return (
    <div className="flex items-start gap-4 p-3 border rounded-lg">
      <div className="bg-gray-100 p-2 rounded-md">{styles.icon}</div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{course}</p>
          </div>
          <Badge className={styles.badge}>{type.charAt(0).toUpperCase() + type.slice(1)}</Badge>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {time}
          </div>
        </div>
      </div>
      <Button variant="outline" size="sm">
        View Details
      </Button>
    </div>
  )
}
