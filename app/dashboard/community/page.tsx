import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Filter, MessageSquare, Search, ThumbsUp, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommunityPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Community</h1>
            <p className="text-gray-500">Connect with fellow learners and instructors</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              New Discussion
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search community..." className="pl-8" />
        </div>

        {/* Community Tabs */}
        <Tabs defaultValue="discussions">
          <TabsList>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="mt-6">
            <div className="space-y-6">
              <DiscussionCard
                title="Tips for mastering Python data visualization?"
                author="Michael Johnson"
                authorAvatar="/placeholder.svg?height=40&width=40"
                course="Python for Data Analysis"
                date="2 hours ago"
                replies={12}
                likes={8}
                tags={["Python", "Data Visualization", "Matplotlib"]}
              />
              <DiscussionCard
                title="Best resources for learning React hooks?"
                author="Emma Rodriguez"
                authorAvatar="/placeholder.svg?height=40&width=40"
                course="Web Development Bootcamp"
                date="Yesterday"
                replies={24}
                likes={15}
                tags={["React", "JavaScript", "Web Development"]}
              />
              <DiscussionCard
                title="How to create effective marketing campaigns on social media?"
                author="Thomas Anderson"
                authorAvatar="/placeholder.svg?height=40&width=40"
                course="Digital Marketing Essentials"
                date="2 days ago"
                replies={18}
                likes={21}
                tags={["Marketing", "Social Media", "Strategy"]}
              />
              <DiscussionCard
                title="Struggling with machine learning algorithms - any advice?"
                author="Sarah Chen"
                authorAvatar="/placeholder.svg?height=40&width=40"
                course="Machine Learning Fundamentals"
                date="3 days ago"
                replies={32}
                likes={27}
                tags={["Machine Learning", "AI", "Algorithms"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="study-groups" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StudyGroupCard
                name="Python Data Science"
                description="A group for discussing data science projects and techniques using Python."
                memberCount={24}
                topics={["Python", "Data Science", "Machine Learning"]}
                isJoined={true}
              />
              <StudyGroupCard
                name="Web Development"
                description="Share resources and help each other with web development challenges."
                memberCount={36}
                topics={["HTML/CSS", "JavaScript", "React"]}
                isJoined={false}
              />
              <StudyGroupCard
                name="Marketing Strategies"
                description="Discuss effective marketing strategies and case studies."
                memberCount={18}
                topics={["Digital Marketing", "Social Media", "Analytics"]}
                isJoined={true}
              />
              <StudyGroupCard
                name="Machine Learning Projects"
                description="Collaborate on machine learning projects and share insights."
                memberCount={42}
                topics={["AI", "Neural Networks", "Data Analysis"]}
                isJoined={false}
              />
              <StudyGroupCard
                name="Business Communication"
                description="Improve your business communication skills with fellow learners."
                memberCount={15}
                topics={["Communication", "Presentation", "Writing"]}
                isJoined={false}
              />
              <StudyGroupCard
                name="UI/UX Design"
                description="Share design resources and get feedback on your projects."
                memberCount={29}
                topics={["UI Design", "UX Research", "Prototyping"]}
                isJoined={false}
              />
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <div className="space-y-6">
              <EventCard
                title="Python Data Science Workshop"
                description="Learn advanced data visualization techniques with Python experts."
                date="May 15, 2025"
                time="2:00 PM - 4:00 PM"
                host="Dr. Robert Kim"
                attendees={42}
                isRegistered={true}
              />
              <EventCard
                title="Web Development Career Panel"
                description="Industry professionals share insights about careers in web development."
                date="May 20, 2025"
                time="6:00 PM - 7:30 PM"
                host="Jessica Williams"
                attendees={78}
                isRegistered={false}
              />
              <EventCard
                title="Digital Marketing Trends 2025"
                description="Explore the latest trends and strategies in digital marketing."
                date="May 25, 2025"
                time="1:00 PM - 3:00 PM"
                host="Thomas Anderson"
                attendees={56}
                isRegistered={false}
              />
              <EventCard
                title="Machine Learning Study Group Kickoff"
                description="First meeting of the new machine learning study group."
                date="June 2, 2025"
                time="5:00 PM - 6:30 PM"
                host="Dr. Sarah Chen"
                attendees={35}
                isRegistered={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="people" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PeopleCard
                name="Dr. Robert Kim"
                role="Instructor"
                courses={["Python for Data Analysis", "Machine Learning Fundamentals"]}
                avatar="/placeholder.svg?height=80&width=80"
                isFollowing={true}
              />
              <PeopleCard
                name="Jessica Williams"
                role="Instructor"
                courses={["Web Development Bootcamp", "JavaScript Fundamentals"]}
                avatar="/placeholder.svg?height=80&width=80"
                isFollowing={false}
              />
              <PeopleCard
                name="Thomas Anderson"
                role="Instructor"
                courses={["Digital Marketing Essentials", "Social Media Strategy"]}
                avatar="/placeholder.svg?height=80&width=80"
                isFollowing={true}
              />
              <PeopleCard
                name="Emma Rodriguez"
                role="Student"
                courses={["Web Development Bootcamp", "UI/UX Design"]}
                avatar="/placeholder.svg?height=80&width=80"
                isFollowing={false}
              />
              <PeopleCard
                name="Michael Johnson"
                role="Student"
                courses={["Python for Data Analysis", "Machine Learning Fundamentals"]}
                avatar="/placeholder.svg?height=80&width=80"
                isFollowing={true}
              />
              <PeopleCard
                name="Sarah Chen"
                role="Student"
                courses={["Machine Learning Fundamentals", "Data Science Projects"]}
                avatar="/placeholder.svg?height=80&width=80"
                isFollowing={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function DiscussionCard({ title, author, authorAvatar, course, date, replies, likes, tags }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={authorAvatar || "/placeholder.svg"} alt={author} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{course}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold">{title}</h3>

          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{replies} replies</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{likes} likes</span>
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              View Discussion
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StudyGroupCard({ name, description, memberCount, topics, isJoined }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{name}</h3>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{memberCount} members</Badge>
          </div>

          <p className="text-sm text-gray-600">{description}</p>

          <div className="flex flex-wrap gap-1">
            {topics.map((topic, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>

          <Button
            variant={isJoined ? "outline" : "default"}
            className={isJoined ? "" : "bg-purple-600 hover:bg-purple-700"}
          >
            {isJoined ? "Leave Group" : "Join Group"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function EventCard({ title, description, date, time, host, attendees, isRegistered }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="bg-purple-100 text-purple-800 p-4 rounded-lg text-center">
              <div className="text-sm">{date.split(" ")[0]}</div>
              <div className="text-3xl font-bold">{date.split(" ")[1]}</div>
              <div className="text-sm">{date.split(" ")[2]}</div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>
                  {date}, {time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <span>Hosted by {host}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span>{attendees} attendees</span>
              </div>
            </div>

            <Button
              variant={isRegistered ? "outline" : "default"}
              className={isRegistered ? "" : "bg-purple-600 hover:bg-purple-700"}
            >
              {isRegistered ? "Cancel Registration" : "Register"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PeopleCard({ name, role, courses, avatar, isFollowing }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <Badge className={role === "Instructor" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
              {role}
            </Badge>
          </div>

          <div className="space-y-1 w-full">
            <p className="text-sm font-medium">Courses:</p>
            <ul className="text-sm text-gray-600">
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 w-full">
            <Button
              variant={isFollowing ? "outline" : "default"}
              className={`flex-1 ${isFollowing ? "" : "bg-purple-600 hover:bg-purple-700"}`}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
            <Button variant="outline" className="flex-1">
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
