import { CloudIcon, SunIcon, ServerIcon, ShieldCheckIcon, BookOpenIcon, CodeBracketIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    description: "Learn the basics of our DeFi compute infrastructure",
    icon: BookOpenIcon,
    articles: [
      { title: "Quick Start Guide", description: "Get up and running in minutes", href: "/docs/quick-start" },
      { title: "Account Setup", description: "Create and configure your account", href: "/docs/account-setup" },
      { title: "First Deployment", description: "Deploy your first application", href: "/docs/first-deployment" }
    ]
  },
  {
    title: "IPFS Storage",
    description: "Decentralized file storage and content addressing",
    icon: CloudIcon,
    articles: [
      { title: "IPFS Basics", description: "Understanding IPFS protocol", href: "/docs/ipfs-basics" },
      { title: "Content Addressing", description: "How IPFS content addressing works", href: "/docs/content-addressing" },
      { title: "Pinning Services", description: "Keep your content available", href: "/docs/pinning" },
      { title: "API Reference", description: "Complete API documentation", href: "/docs/ipfs-api" }
    ]
  },
  {
    title: "Solar Compute",
    description: "Green computing powered by renewable energy",
    icon: SunIcon,
    articles: [
      { title: "Solar Infrastructure", description: "How our solar-powered infrastructure works", href: "/docs/solar-infrastructure" },
      { title: "Energy Management", description: "Battery storage and energy optimization", href: "/docs/energy-management" },
      { title: "Carbon Footprint", description: "Measuring and reducing environmental impact", href: "/docs/carbon-footprint" }
    ]
  },
  {
    title: "Virtual Machines",
    description: "High-performance VMs for DeFi applications",
    icon: ServerIcon,
    articles: [
      { title: "VM Configuration", description: "Setting up your virtual machine", href: "/docs/vm-configuration" },
      { title: "DeFi Development", description: "Building DeFi applications on our VMs", href: "/docs/defi-development" },
      { title: "Smart Contracts", description: "Deploying and managing smart contracts", href: "/docs/smart-contracts" },
      { title: "Scaling", description: "Scaling your applications", href: "/docs/scaling" }
    ]
  },
  {
    title: "VPN Services",
    description: "Secure, private networking infrastructure",
    icon: ShieldCheckIcon,
    articles: [
      { title: "VPN Setup", description: "Configuring your VPN connection", href: "/docs/vpn-setup" },
      { title: "Security Features", description: "Encryption and privacy features", href: "/docs/vpn-security" },
      { title: "Node Network", description: "Understanding our decentralized node network", href: "/docs/node-network" }
    ]
  },
  {
    title: "Developer Tools",
    description: "Tools and APIs for DeFi development",
    icon: CodeBracketIcon,
    articles: [
      { title: "SDKs", description: "Software development kits for all platforms", href: "/docs/sdks" },
      { title: "CLI Tools", description: "Command-line interface tools", href: "/docs/cli-tools" },
      { title: "Monitoring", description: "Monitoring and observability tools", href: "/docs/monitoring" },
      { title: "Debugging", description: "Debugging and troubleshooting", href: "/docs/debugging" }
    ]
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-2xl">
                <BookOpenIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Complete guides and references for building on our DeFi compute infrastructure. 
              Everything you need to get started with decentralized, solar-powered computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/quick-start"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500"
              >
                Quick Start
              </Link>
              <Link href="/docs/api-reference" className="rounded-md border border-blue-500 px-6 py-3 text-lg font-semibold text-blue-400 hover:bg-blue-500/10">
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Documentation Sections</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive documentation for all our services and tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={section.title} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <p className="text-slate-300 text-sm">{section.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.articles.map((article, articleIdx) => (
                    <li key={articleIdx}>
                      <Link href={article.href} className="block p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
                        <h4 className="text-white font-semibold mb-1">{article.title}</h4>
                        <p className="text-slate-300 text-sm">{article.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Help Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Can't find what you're looking for? We're here to help you succeed with our DeFi compute infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <BookOpenIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-slate-300 mb-6">Browse our comprehensive documentation for detailed guides and references.</p>
              <Link href="/docs" className="text-green-400 font-semibold hover:text-green-300">
                Browse Docs →
              </Link>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-slate-300 mb-6">Get help from our support team for technical issues and questions.</p>
              <Link href="/support" className="text-blue-400 font-semibold hover:text-blue-300">
                Contact Support →
              </Link>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 text-center">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <CodeBracketIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-slate-300 mb-6">Join our developer community for discussions and collaboration.</p>
              <Link href="/community" className="text-purple-400 font-semibold hover:text-purple-300">
                Join Community →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}