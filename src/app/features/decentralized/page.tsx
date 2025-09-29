import { CheckIcon, ServerIcon, GlobeAltIcon, ShieldCheckIcon, BoltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    title: "Peer-to-Peer Architecture",
    description: "Eliminate single points of failure with distributed node networks",
    icon: ServerIcon,
    benefits: ["No central authority", "Automatic failover", "Global distribution", "Resilient infrastructure"]
  },
  {
    title: "Global Availability",
    description: "99.9% uptime SLA with worldwide node coverage",
    icon: GlobeAltIcon,
    benefits: ["Multi-region deployment", "Edge computing", "Low latency", "24/7 availability"]
  },
  {
    title: "Enterprise Security",
    description: "Military-grade security with zero-knowledge architecture",
    icon: ShieldCheckIcon,
    benefits: ["End-to-end encryption", "SOC 2 Type II", "Advanced threat detection", "Automated security protocols"]
  },
  {
    title: "High Performance",
    description: "Optimized for DeFi applications with lightning-fast processing",
    icon: BoltIcon,
    benefits: ["Sub-second response times", "High throughput", "Scalable resources", "Real-time processing"]
  }
];

const stats = [
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Global Nodes", value: "500+" },
  { label: "Response Time", value: "<100ms" },
  { label: "Throughput", value: "1M+ TPS" }
];

export default function DecentralizedPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-600 p-4 rounded-2xl">
                <ServerIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Decentralized Infrastructure
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade distributed architecture with 99.9% uptime SLA. Built on peer-to-peer networks 
              that eliminate single points of failure and ensure global availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500"
              >
                Get Started
              </Link>
              <Link href="/docs" className="rounded-md border border-blue-500 px-6 py-3 text-lg font-semibold text-blue-400 hover:bg-blue-500/10">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Decentralized Infrastructure?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Traditional centralized infrastructure creates single points of failure. Our decentralized approach 
              ensures maximum reliability and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4">
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
                      <CheckIcon className="h-5 w-5 text-blue-400 mr-3" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Distributed Architecture</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our infrastructure is built on a global network of nodes, ensuring maximum availability and performance.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <ServerIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Edge Nodes</h3>
                <p className="text-slate-300">Distributed computing nodes at the edge for low-latency processing</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
                <p className="text-slate-300">Worldwide coverage with automatic failover and load balancing</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Security Layer</h3>
                <p className="text-slate-300">End-to-end encryption and zero-knowledge architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build on Decentralized Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers building the future of DeFi on our decentralized platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
              >
                Start Building
              </Link>
              <Link
                href="/docs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
