import { CheckIcon, CodeBracketIcon, WrenchScrewdriverIcon, ChartBarIcon, BoltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    title: "Production-Ready SDKs",
    description: "Comprehensive SDKs for all major programming languages",
    icon: CodeBracketIcon,
    benefits: ["JavaScript/TypeScript", "Python", "Go", "Rust", "Java", "C#"]
  },
  {
    title: "RESTful APIs",
    description: "Well-documented APIs with comprehensive endpoints",
    icon: WrenchScrewdriverIcon,
    benefits: ["OpenAPI 3.0 spec", "Interactive docs", "Rate limiting", "Authentication"]
  },
  {
    title: "Real-time Monitoring",
    description: "Advanced observability and monitoring tools",
    icon: ChartBarIcon,
    benefits: ["Performance metrics", "Error tracking", "Log aggregation", "Alerting"]
  },
  {
    title: "High Performance",
    description: "99.99% API uptime with sub-second response times",
    icon: BoltIcon,
    benefits: ["Global CDN", "Edge caching", "Load balancing", "Auto-scaling"]
  }
];

const sdks = [
  { name: "JavaScript/TypeScript", icon: "🟨", description: "Node.js and browser support" },
  { name: "Python", icon: "🐍", description: "Full async/await support" },
  { name: "Go", icon: "🐹", description: "High-performance concurrent programming" },
  { name: "Rust", icon: "🦀", description: "Memory-safe systems programming" },
  { name: "Java", icon: "☕", description: "Enterprise-grade JVM support" },
  { name: "C#", icon: "🔷", description: ".NET Core and Framework support" }
];

export default function DeveloperToolsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-purple-600 p-4 rounded-2xl">
                <CodeBracketIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Enterprise APIs
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Production-ready SDKs and RESTful APIs with comprehensive documentation. Built for scale 
              with rate limiting, monitoring, and enterprise support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="rounded-md bg-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-purple-500"
              >
                View Documentation
              </Link>
              <Link href="/pricing" className="rounded-md border border-purple-500 px-6 py-3 text-lg font-semibold text-purple-400 hover:bg-purple-500/10">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <div className="text-slate-300">API Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt;100ms</div>
              <div className="text-slate-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6+</div>
              <div className="text-slate-300">SDK Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Developer Experience</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your DeFi applications with enterprise-grade tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 p-3 rounded-xl mr-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Multi-Language SDKs</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Choose your preferred programming language with our comprehensive SDKs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdks.map((sdk, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{sdk.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{sdk.name}</h3>
                </div>
                <p className="text-slate-300">{sdk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Interactive API Documentation</h2>
              <p className="text-lg text-slate-300">
                Explore our APIs with interactive documentation and live examples.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">OpenAPI 3.0 Specification</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Complete API specification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Interactive Swagger UI</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Code generation support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Developer Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Comprehensive guides</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Code examples</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Advanced Monitoring</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Monitor your applications with real-time metrics, logs, and alerts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance Metrics</h3>
              <p className="text-slate-300">Real-time performance monitoring and optimization insights</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Error Tracking</h3>
              <p className="text-slate-300">Comprehensive error tracking and debugging tools</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Log Aggregation</h3>
              <p className="text-slate-300">Centralized logging with powerful search and analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Building with Our APIs</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of developers building the future of DeFi with our enterprise-grade APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50"
              >
                View Documentation
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
