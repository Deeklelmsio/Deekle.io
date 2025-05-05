import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  Lightbulb,
  BookText,
  Sparkles,
  Target,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Stethoscope,
  Briefcase,
  BarChart3,
  Bell,
  LayoutDashboard,
  Zap,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <SidebarNavigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-16">
        {/* Navigation */}
        <header className="border-b sticky top-0 bg-white z-50">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">Deekle.io</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
                How It Works
              </Link>
              <Link href="#use-cases" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Use Cases
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section - UPDATED */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container flex flex-col items-center text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 px-3 py-1">
              AI-Powered Regulatory Training LMS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Stay Audit-Ready with AI-Powered Learning
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Automate learning paths, track compliance risk, and deliver engaging training with zero hassle. Our AI
              ensures your team stays compliant and prepared.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group transition-all duration-300">
                  See the AI in Action
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="group transition-all duration-300">
                  Book a Live Demo
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-4">TRUSTED BY COMPLIANCE LEADERS</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 bg-gray-200 rounded opacity-50"></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights - NEW */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Feature Highlights</Badge>
              <h2 className="text-3xl font-bold mb-4">AI-Powered Compliance Made Simple</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deekle.io is the smart LMS that ensures audit-readiness with adaptive training, real-time compliance
                insights, and automated content creation — all powered by AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureHighlightCard
                icon={<Sparkles className="h-10 w-10 text-purple-600" />}
                title="Smart Content Builder"
                description="Generate compliance-ready training materials in minutes with our AI content engine."
                hoverEffect={true}
              />
              <FeatureHighlightCard
                icon={<Bell className="h-10 w-10 text-purple-600" />}
                title="Predictive Compliance Alerts"
                description="Stay ahead of regulatory issues with AI-powered risk detection and proactive notifications."
                hoverEffect={true}
              />
              <FeatureHighlightCard
                icon={<Target className="h-10 w-10 text-purple-600" />}
                title="Adaptive Learning Paths"
                description="Personalized training journeys that adjust based on role, knowledge gaps, and compliance needs."
                hoverEffect={true}
              />
              <FeatureHighlightCard
                icon={<BarChart3 className="h-10 w-10 text-purple-600" />}
                title="Real-Time Analytics Dashboard"
                description="Comprehensive insights into compliance status, learning patterns, and certification tracking."
                hoverEffect={true}
              />
              <FeatureHighlightCard
                icon={<BookText className="h-10 w-10 text-purple-600" />}
                title="NLP Admin Interface"
                description="Natural language commands to manage your LMS - create courses, assign training, and generate reports."
                hoverEffect={true}
              />
              <FeatureHighlightCard
                icon={<Clock className="h-10 w-10 text-purple-600" />}
                title="Automated Certification"
                description="Streamline compliance verification with auto-generated certificates and expiration tracking."
                hoverEffect={true}
              />
            </div>
          </div>
        </section>

        {/* AI in Action - NEW */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">AI in Action</Badge>
              <h2 className="text-3xl font-bold mb-4">See How AI Transforms Compliance Training</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our intelligent platform automates the most challenging aspects of regulatory training
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <LayoutDashboard className="h-5 w-5 text-purple-600 mr-2" />
                    Compliance Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Real-time compliance scores, user progress tracking, and risk assessment in one view.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Lightbulb className="h-5 w-5 text-purple-600 mr-2" />
                    AI-Generated Course Suggestions
                  </h3>
                  <p className="text-gray-600">
                    Intelligent recommendations for training content based on regulatory changes and team needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Zap className="h-5 w-5 text-purple-600 mr-2" />
                    Learner Engagement Heatmaps
                  </h3>
                  <p className="text-gray-600">
                    Visual analytics showing engagement patterns and identifying knowledge gaps.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Deekle.io dashboard"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800 font-medium">
                    "The AI-powered dashboard gives me instant visibility into our compliance status across all
                    departments."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">— Sarah Johnson, Compliance Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - UPDATED */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Simple Process</Badge>
              <h2 className="text-3xl font-bold mb-4">How Deekle.io Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform transforms compliance training with a simple three-step process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6 relative group-hover:bg-purple-200 transition-colors">
                  <BookText className="h-10 w-10 text-purple-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Upload or Create Content</h3>
                <p className="text-gray-600">
                  Import existing materials or create new content. Our AI analyzes and organizes everything
                  automatically.
                </p>
                <div className="mt-6 h-24 bg-gray-50 rounded-lg w-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <img
                    src="/placeholder.svg?height=100&width=200"
                    alt="Content import visualization"
                    className="h-20 object-contain"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6 relative group-hover:bg-purple-200 transition-colors">
                  <Target className="h-10 w-10 text-purple-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Set Compliance Goals</h3>
                <p className="text-gray-600">
                  Define your regulatory requirements and training objectives. Our AI creates personalized learning
                  paths.
                </p>
                <div className="mt-6 h-24 bg-gray-50 rounded-lg w-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <img
                    src="/placeholder.svg?height=100&width=200"
                    alt="Compliance goals visualization"
                    className="h-20 object-contain"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6 relative group-hover:bg-purple-200 transition-colors">
                  <Sparkles className="h-10 w-10 text-purple-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Let AI Personalize & Track</h3>
                <p className="text-gray-600">
                  Our AI delivers personalized training and tracks progress, providing real-time compliance insights.
                </p>
                <div className="mt-6 h-24 bg-gray-50 rounded-lg w-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <img
                    src="/placeholder.svg?height=100&width=200"
                    alt="AI personalization visualization"
                    className="h-20 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Process Flow Visualization */}
            <div className="hidden md:flex justify-center mt-12">
              <div className="relative w-full max-w-3xl h-16">
                {/* Process Line */}
                <div className="absolute top-1/2 left-[15%] right-[15%] h-1 bg-purple-200 -translate-y-1/2"></div>

                {/* Process Dots */}
                <div className="absolute top-1/2 left-[15%] w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-[15%] w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/features">
                <Button className="bg-purple-600 hover:bg-purple-700 group transition-all duration-300">
                  Explore Our Process
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases Section - UPDATED */}
        <section id="use-cases" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Industry Solutions</Badge>
              <h2 className="text-3xl font-bold mb-4">Compliance Solutions for Every Industry</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how organizations across industries leverage Deekle.io to transform their compliance programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* HR Use Case */}
              <UseCaseCard
                icon={<Briefcase className="h-10 w-10 text-purple-600" />}
                title="Human Resources"
                description="Streamline onboarding, compliance training, and professional development with personalized learning paths."
                benefits={[
                  "Reduce onboarding time by 40%",
                  "Ensure 100% compliance completion",
                  "Improve employee retention",
                ]}
                outcome="Cut compliance violations by 40% in 3 months"
              />

              {/* Safety Use Case */}
              <UseCaseCard
                icon={<ShieldCheck className="h-10 w-10 text-purple-600" />}
                title="Safety Training"
                description="Deliver critical safety training with interactive scenarios and real-time knowledge verification."
                benefits={[
                  "Reduce workplace incidents",
                  "Maintain regulatory compliance",
                  "Track certification status",
                ]}
                outcome="32% fewer safety incidents in first year"
              />

              {/* Healthcare Use Case */}
              <UseCaseCard
                icon={<Stethoscope className="h-10 w-10 text-purple-600" />}
                title="Healthcare Compliance"
                description="Keep healthcare professionals up-to-date with the latest protocols, regulations, and best practices."
                benefits={[
                  "Streamline continuing education",
                  "Automate compliance tracking",
                  "Personalize clinical training",
                ]}
                outcome="100% regulatory compliance achieved"
              />

              {/* Corporate Use Case */}
              <UseCaseCard
                icon={<Building2 className="h-10 w-10 text-purple-600" />}
                title="Corporate Training"
                description="Transform corporate learning with adaptive content and detailed analytics on employee progress."
                benefits={["Increase knowledge retention", "Reduce training costs", "Scale training programs"]}
                outcome="Training costs reduced by 35%"
              />
            </div>

            <div className="mt-16 text-center">
              <Link href="/use-cases">
                <Button className="bg-purple-600 hover:bg-purple-700 group transition-all duration-300">
                  View All Use Cases
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section - UPDATED */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Success Stories</Badge>
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Organizations of all sizes trust Deekle.io to transform their compliance programs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <TestimonialCard
                quote="Deekle.io has revolutionized our compliance training. Our completion rates are up 87% and our team actually enjoys the learning process now."
                name="Sarah Johnson"
                title="Director of Compliance, TechCorp Inc."
                avatarUrl="/placeholder.svg?height=100&width=100"
                outcome="87% increase in completion rates"
              />

              {/* Testimonial 2 */}
              <TestimonialCard
                quote="The AI-generated learning paths have cut our onboarding time in half while improving knowledge retention. It's been a game-changer for our growing team."
                name="Michael Chen"
                title="Chief Learning Officer, HealthFirst"
                avatarUrl="/placeholder.svg?height=100&width=100"
                outcome="50% reduction in onboarding time"
              />

              {/* Testimonial 3 */}
              <TestimonialCard
                quote="The predictive compliance alerts have helped us maintain 100% regulatory compliance across our global offices. The ROI has been incredible."
                name="Jessica Rodriguez"
                title="Compliance Manager, Global Finance Group"
                avatarUrl="/placeholder.svg?height=100&width=100"
                outcome="100% regulatory compliance maintained"
              />
            </div>

            {/* Logos Section */}
            <div className="mt-20">
              <p className="text-center text-sm text-gray-500 mb-8">TRUSTED BY LEADING ORGANIZATIONS</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-24 bg-gray-200 rounded opacity-50"></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - UPDATED */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Pricing Plans</Badge>
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your compliance needs, with all the AI-powered features included.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Basic"
                price="Free"
                description="Perfect for trying out the platform"
                features={[
                  "Access to 5 courses",
                  "Basic AI recommendations",
                  "Limited content generation",
                  "Community support",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$19/month"
                description="Ideal for serious compliance needs"
                features={[
                  "Unlimited course access",
                  "Advanced AI learning paths",
                  "Full content generation",
                  "AI compliance monitoring",
                  "Priority support",
                ]}
                buttonText="Start Pro Plan"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="For organizations and institutions"
                features={[
                  "Custom compliance workflows",
                  "Advanced analytics",
                  "LMS integration",
                  "Unlimited AI features",
                  "Dedicated support",
                  "Custom AI model training",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* CTA Section - NEW */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Compliance Training?</h2>
              <p className="text-xl mb-8">
                Join thousands of organizations using Deekle.io to stay audit-ready with AI-powered learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="group transition-all duration-300">
                  Book a Live Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-purple-700 group transition-all duration-300"
                >
                  See the AI in Action
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - UPDATED */}
        <footer className="bg-gray-900 text-white py-12 mt-auto">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-purple-400" />
                  <span className="text-xl font-bold">Deekle.io</span>
                </div>
                <p className="text-gray-400 max-w-xs">
                  Revolutionizing compliance training with AI-powered learning experiences.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Platform</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        GDPR Compliance
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        SOC2 Roadmap
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Deekle.io. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// New component for Feature Highlights
function FeatureHighlightCard({ icon, title, description, hoverEffect = false }) {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-sm border ${hoverEffect ? "hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1" : ""}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({ title, price, description, features, buttonText, buttonVariant, highlighted = false }) {
  return (
    <div
      className={`bg-white rounded-lg border ${highlighted ? "border-purple-600 ring-1 ring-purple-600 shadow-lg" : "shadow-sm"} p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300 ${highlighted ? "" : "hover:border-purple-200"}`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`${highlighted ? "bg-purple-600 hover:bg-purple-700 w-full" : "w-full"} group transition-all duration-300`}
        variant={buttonVariant}
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </Button>
    </div>
  )
}

// Updated component for Use Cases
function UseCaseCard({ icon, title, description, benefits, outcome }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0">
        <div className="bg-purple-50 p-6">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="p-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY BENEFITS</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          {outcome && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <Award className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-800">{outcome}</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Updated component for Testimonials
function TestimonialCard({ quote, name, title, avatarUrl, outcome }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="mb-6">
          <svg className="h-8 w-8 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
        {outcome && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center">
              <Award className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-800">{outcome}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
