"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronRight,
  FileText,
  GraduationCap,
  Lock,
  Star,
  Target,
} from "lucide-react"

export function LearningPathVisualizer() {
  const [expandedPhase, setExpandedPhase] = useState("current")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Data Science Career Path</h3>
          <p className="text-sm text-gray-500">Personalized learning journey based on your goals</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Target className="mr-2 h-4 w-4" />
            Adjust Goals
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
            <Brain className="mr-2 h-4 w-4" />
            AI Recommendations
          </Button>
        </div>
      </div>

      <div className="relative">
        {/* Path Progress Bar */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>

        {/* Learning Phases */}
        <div className="space-y-8 relative z-10">
          {/* Completed Phase */}
          <LearningPhase
            title="Phase 1: Foundations"
            status="completed"
            progress={100}
            expanded={expandedPhase === "completed"}
            onClick={() => setExpandedPhase(expandedPhase === "completed" ? null : "completed")}
            courses={[
              {
                title: "Python Programming Basics",
                status: "completed",
                progress: 100,
                duration: "4 weeks",
                skills: ["Python", "Programming Fundamentals", "Data Types"],
                certificate: true,
              },
              {
                title: "Introduction to Data Analysis",
                status: "completed",
                progress: 100,
                duration: "3 weeks",
                skills: ["Data Cleaning", "Exploratory Analysis", "Pandas"],
                certificate: true,
              },
              {
                title: "Statistics for Data Science",
                status: "completed",
                progress: 100,
                duration: "5 weeks",
                skills: ["Probability", "Statistical Testing", "Distributions"],
                certificate: true,
              },
            ]}
          />

          {/* Current Phase */}
          <LearningPhase
            title="Phase 2: Applied Data Science"
            status="current"
            progress={65}
            expanded={expandedPhase === "current"}
            onClick={() => setExpandedPhase(expandedPhase === "current" ? null : "current")}
            courses={[
              {
                title: "Data Visualization with Python",
                status: "completed",
                progress: 100,
                duration: "3 weeks",
                skills: ["Matplotlib", "Seaborn", "Visualization Principles"],
                certificate: true,
              },
              {
                title: "Machine Learning Fundamentals",
                status: "in-progress",
                progress: 65,
                duration: "6 weeks",
                skills: ["Supervised Learning", "Model Evaluation", "Scikit-Learn"],
                certificate: false,
                currentModule: "Feature Engineering Techniques",
              },
              {
                title: "SQL for Data Analysis",
                status: "not-started",
                progress: 0,
                duration: "4 weeks",
                skills: ["SQL Queries", "Database Design", "Data Extraction"],
                certificate: false,
              },
            ]}
          />

          {/* Upcoming Phase */}
          <LearningPhase
            title="Phase 3: Advanced Techniques"
            status="upcoming"
            progress={0}
            expanded={expandedPhase === "upcoming"}
            onClick={() => setExpandedPhase(expandedPhase === "upcoming" ? null : "upcoming")}
            courses={[
              {
                title: "Deep Learning with TensorFlow",
                status: "locked",
                progress: 0,
                duration: "8 weeks",
                skills: ["Neural Networks", "TensorFlow", "Model Deployment"],
                certificate: false,
                prerequisite: "Machine Learning Fundamentals",
              },
              {
                title: "Natural Language Processing",
                status: "locked",
                progress: 0,
                duration: "6 weeks",
                skills: ["Text Processing", "Sentiment Analysis", "Language Models"],
                certificate: false,
                prerequisite: "Deep Learning with TensorFlow",
              },
              {
                title: "Big Data Processing",
                status: "locked",
                progress: 0,
                duration: "5 weeks",
                skills: ["Spark", "Distributed Computing", "Data Pipelines"],
                certificate: false,
                prerequisite: "SQL for Data Analysis",
              },
            ]}
          />

          {/* Final Phase */}
          <LearningPhase
            title="Phase 4: Capstone Project"
            status="upcoming"
            progress={0}
            expanded={expandedPhase === "final"}
            onClick={() => setExpandedPhase(expandedPhase === "final" ? null : "final")}
            courses={[
              {
                title: "Data Science Capstone Project",
                status: "locked",
                progress: 0,
                duration: "10 weeks",
                skills: ["Project Management", "End-to-End Implementation", "Presentation"],
                certificate: false,
                prerequisite: "Complete Phase 3",
              },
            ]}
          />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border">
        <div className="flex items-start gap-3">
          <Brain className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="font-medium">AI Learning Path Insights</h4>
            <p className="text-sm text-gray-700 mt-1">
              Based on your progress and learning patterns, you're on track to complete your Data Science path by
              November 2025. To accelerate your progress, consider focusing on the Machine Learning Fundamentals course
              first, as it's a prerequisite for 2 advanced courses.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <CheckCircle className="h-3 w-3 mr-1" /> On track for completion
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Star className="h-3 w-3 mr-1" /> 3 skills mastered
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                <Target className="h-3 w-3 mr-1" /> 2 career goals aligned
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LearningPhase({ title, status, progress, expanded, onClick, courses }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "current":
        return <BookOpen className="h-5 w-5 text-blue-600" />
      case "upcoming":
        return <Target className="h-5 w-5 text-gray-600" />
      default:
        return <Target className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100"
      case "current":
        return "bg-blue-100"
      case "upcoming":
        return "bg-gray-100"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <div className="relative">
      <div className={`flex items-center gap-4 cursor-pointer ${expanded ? "mb-6" : ""}`} onClick={onClick}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(status)}`}>
          {getStatusIcon(status)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{title}</h3>
            <div className="flex items-center gap-2">
              {status === "completed" && (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
              )}
              {status === "current" && (
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
              )}
              {status === "upcoming" && <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Upcoming</Badge>}
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expanded ? "rotate-90" : ""}`} />
            </div>
          </div>
          {status !== "upcoming" && (
            <div className="mt-1">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>
          )}
        </div>
      </div>

      {expanded && (
        <div className="pl-16 space-y-4">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      )}
    </div>
  )
}

function CourseCard({ title, status, progress, duration, skills, certificate, currentModule, prerequisite }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-gray-500">Duration: {duration}</p>
        </div>
        <div className="flex items-center gap-2">
          {status === "completed" && (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
          )}
          {status === "in-progress" && (
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
          )}
          {status === "not-started" && (
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Not Started</Badge>
          )}
          {status === "locked" && (
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
              <Lock className="h-3 w-3 mr-1" /> Locked
            </Badge>
          )}
          {certificate && (
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
              <GraduationCap className="h-3 w-3 mr-1" /> Certificate
            </Badge>
          )}
        </div>
      </div>

      {status !== "locked" && progress > 0 && (
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
          {currentModule && <p className="text-xs text-gray-500 mt-1">Current module: {currentModule}</p>}
        </div>
      )}

      {prerequisite && (
        <div className="mb-3 p-2 bg-amber-50 rounded text-sm text-amber-800">
          <div className="flex items-center gap-1">
            <Lock className="h-3 w-3" />
            <span>Prerequisite: {prerequisite}</span>
          </div>
        </div>
      )}

      <div className="mb-3">
        <h5 className="text-sm font-medium mb-1">Skills you'll learn:</h5>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {status === "in-progress" && (
        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
          Continue Learning
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      )}

      {status === "not-started" && (
        <Button size="sm" className="w-full">
          Start Course
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      )}

      {status === "completed" && (
        <Button size="sm" variant="outline" className="w-full">
          <FileText className="mr-2 h-4 w-4" />
          View Certificate
        </Button>
      )}

      {status === "locked" && (
        <Button size="sm" variant="outline" className="w-full" disabled>
          <Lock className="mr-2 h-4 w-4" />
          Complete Prerequisites
        </Button>
      )}
    </div>
  )
}
