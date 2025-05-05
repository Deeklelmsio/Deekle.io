import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Briefcase, ShieldCheck, Stethoscope, Building2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Benefit component for use case sections
function Benefit({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-4 border-purple-600 pl-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">Deekle.io</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="/#use-cases" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Use Cases
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industry Use Cases</h1>
            <p className="text-xl text-gray-600 mb-10">
              Discover how organizations across industries leverage Deekle.io to transform their learning and compliance
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-16 bg-white">
        <div className="container">
          <Tabs defaultValue="hr" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="hr" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  HR & Onboarding
                </TabsTrigger>
                <TabsTrigger value="safety" className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Safety Training
                </TabsTrigger>
                <TabsTrigger value="healthcare" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Healthcare
                </TabsTrigger>
                <TabsTrigger value="corporate" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Corporate
                </TabsTrigger>
              </TabsList>
            </div>

            {/* HR & Onboarding Tab */}
            <TabsContent value="hr" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">HR & Employee Onboarding</h2>
                  <p className="text-gray-600 mb-6">
                    Transform your employee onboarding and training programs with personalized learning paths that get
                    new hires up to speed faster and ensure compliance requirements are met.
                  </p>
                  <div className="space-y-4">
                    <Benefit
                      title="Reduce Onboarding Time by 40%"
                      description="Personalized learning paths ensure new employees focus on what they need to know"
                    />
                    <Benefit
                      title="100% Compliance Completion"
                      description="Automated tracking and predictive alerts ensure no compliance requirements are missed"
                    />
                    <Benefit
                      title="Improved Employee Retention"
                      description="Better onboarding experiences lead to higher employee satisfaction and retention"
                    />
                    <Benefit
                      title="Consistent Training Across Locations"
                      description="Standardized content delivery with local customizations where needed"
                    />
                  </div>
                  <div className="mt-8">
                    <Button className="bg-purple-600 hover:bg-purple-700">Schedule HR Demo</Button>
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="HR onboarding visualization"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Case Study: Global Tech Company</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Reduced onboarding time from 6 weeks to 3.5 weeks while improving knowledge retention scores by
                      27%.
                    </p>
                    <Link href="#" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                      Read the full case study →
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Safety Training Tab */}
            <TabsContent value="safety" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Safety Training & Compliance</h2>
                  <p className="text-gray-600 mb-6">
                    Ensure your workforce is properly trained on critical safety procedures with interactive learning
                    experiences and automated compliance tracking.
                  </p>
                  <div className="space-y-4">
                    <Benefit
                      title="Reduce Workplace Incidents"
                      description="Interactive scenarios and knowledge verification improve safety awareness"
                    />
                    <Benefit
                      title="Maintain Regulatory Compliance"
                      description="Automated tracking of certifications and required training with predictive alerts"
                    />
                    <Benefit
                      title="Streamline Safety Audits"
                      description="Comprehensive reporting and documentation for regulatory inspections"
                    />
                    <Benefit
                      title="Personalized Safety Training"
                      description="Tailored content based on job role, location, and previous safety record"
                    />
                  </div>
                  <div className="mt-8">
                    <Button className="bg-purple-600 hover:bg-purple-700">Schedule Safety Demo</Button>
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Safety training visualization"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Case Study: Manufacturing Leader</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Reduced safety incidents by 32% in the first year while achieving 100% compliance with OSHA
                      regulations.
                    </p>
                    <Link href="#" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                      Read the full case study →
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Healthcare Tab */}
            <TabsContent value="healthcare" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Healthcare Compliance & Training</h2>
                  <p className="text-gray-600 mb-6">
                    Keep healthcare professionals up-to-date with the latest protocols, regulations, and best practices
                    through personalized learning experiences.
                  </p>
                  <div className="space-y-4">
                    <Benefit
                      title="Streamline Continuing Education"
                      description="Personalized learning paths for different healthcare specialties"
                    />
                    <Benefit
                      title="Automate Compliance Tracking"
                      description="Real-time monitoring of certification status and renewal requirements"
                    />
                    <Benefit
                      title="Improve Patient Outcomes"
                      description="Better trained staff deliver higher quality care and follow protocols more consistently"
                    />
                    <Benefit
                      title="Reduce Administrative Burden"
                      description="Automated reporting and documentation for accreditation requirements"
                    />
                  </div>
                  <div className="mt-8">
                    <Button className="bg-purple-600 hover:bg-purple-700">Schedule Healthcare Demo</Button>
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Healthcare compliance visualization"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Case Study: Regional Hospital Network</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Achieved 100% compliance with continuing education requirements while reducing administrative
                      costs by 45%.
                    </p>
                    <Link href="#" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                      Read the full case study →
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Corporate Tab */}
            <TabsContent value="corporate" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Corporate Training & Development</h2>
                  <p className="text-gray-600 mb-6">
                    Transform corporate learning with adaptive content, detailed analytics, and personalized development
                    plans for employees at all levels.
                  </p>
                  <div className="space-y-4">
                    <Benefit
                      title="Increase Knowledge Retention"
                      description="Adaptive learning techniques improve information recall and application"
                    />
                    <Benefit
                      title="Reduce Training Costs"
                      description="More efficient learning paths reduce time spent in training by 35% on average"
                    />
                    <Benefit
                      title="Scale Training Programs"
                      description="Easily deploy consistent training across departments, regions, and countries"
                    />
                    <Benefit
                      title="Improve Employee Engagement"
                      description="Personalized learning experiences increase participation and completion rates"
                    />
                  </div>
                  <div className="mt-8">
                    <Button className="bg-purple-600 hover:bg-purple-700">Schedule Corporate Demo</Button>
                  </div>
                </div>
                <div className="bg-purple-50 p-8 rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Corporate training visualization"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">Case Study: Fortune 500 Financial Services</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Increased training completion rates from 64% to 93% while reducing total training hours by 28%.
                    </p>
                    <Link href="#" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                      Read the full case study →
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your learning program?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of organizations that use Deekle.io to deliver more effective, engaging, and compliant
              learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">Request a Demo</Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold text-white">Deekle.io</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Deekle.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
