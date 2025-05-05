import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Send, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MessagesPage() {
  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the help with the assignment!",
      time: "10:30 AM",
      unread: 0,
      online: true,
      isActive: true,
    },
    {
      id: 2,
      name: "Study Group - Python",
      avatar: null,
      isGroup: true,
      lastMessage: "Michael: When are we meeting next?",
      time: "Yesterday",
      unread: 3,
      online: false,
    },
    {
      id: 3,
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can you share the notes from yesterday's lecture?",
      time: "Yesterday",
      unread: 0,
      online: false,
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'll send you the project files later today.",
      time: "Monday",
      unread: 0,
      online: true,
    },
    {
      id: 5,
      name: "Web Dev Team",
      avatar: null,
      isGroup: true,
      lastMessage: "Jessica: The website is looking great!",
      time: "Monday",
      unread: 0,
      online: false,
    },
  ]

  // Mock data for messages in the active conversation
  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hi there! How's your progress on the Python assignment?",
      time: "10:15 AM",
      isSelf: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Hey Sarah! I'm almost done, just struggling with the data visualization part.",
      time: "10:18 AM",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content:
        "I had trouble with that too. Have you tried using Seaborn instead of Matplotlib? It made things much easier for me.",
      time: "10:22 AM",
      isSelf: false,
    },
    {
      id: 4,
      sender: "You",
      content: "No, I haven't! That's a great suggestion. Do you have any examples you could share?",
      time: "10:25 AM",
      isSelf: true,
    },
    {
      id: 5,
      sender: "Sarah Johnson",
      content: "I'll send you my code snippet. It's pretty straightforward once you see it in action.",
      time: "10:28 AM",
      isSelf: false,
    },
    {
      id: 6,
      sender: "You",
      content: "That would be super helpful. Thank you so much!",
      time: "10:29 AM",
      isSelf: true,
    },
    {
      id: 7,
      sender: "Sarah Johnson",
      content: "Thanks for the help with the assignment!",
      time: "10:30 AM",
      isSelf: false,
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-gray-500">Connect with instructors and fellow learners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="md:col-span-1">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search messages..." className="pl-8" />
                </div>
              </div>
              <div className="divide-y">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-3 flex items-center gap-3 hover:bg-gray-50 cursor-pointer ${
                      conversation.isActive ? "bg-gray-50" : ""
                    }`}
                  >
                    {conversation.isGroup ? (
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                    ) : (
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && <Badge className="bg-purple-600">{conversation.unread}</Badge>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Message Thread */}
          <Card className="md:col-span-2">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isSelf ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] ${message.isSelf ? "order-2" : "order-1"}`}>
                      {!message.isSelf && <p className="text-xs text-gray-500 mb-1">{message.sender}</p>}
                      <div
                        className={`p-3 rounded-lg ${
                          message.isSelf ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
