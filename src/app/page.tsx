import { ArrowRightIcon, CloudIcon, ServerIcon, ShieldCheckIcon, BoltIcon, CpuChipIcon, GlobeAltIcon, SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "IPFS Storage",
    description: "Decentralized file storage and content addressing with IPFS protocol. Store and retrieve data across a distributed network.",
    icon: CloudIcon,
    href: "/services/ipfs",
    features: ["Distributed Storage", "Content Addressing", "Peer-to-Peer Network", "Immutable Data"],
  },
  {
    name: "Solar Compute",
    description: "Green computing powered by renewable solar energy. Sustainable GPU computing with zero carbon footprint.",
    icon: SunIcon,
    href: "/services/solar-compute",
    features: ["100% Solar Powered", "Carbon Neutral", "Sustainable Computing", "Green Infrastructure"],
  },
  {
    name: "GPU Leasing",
    description: "High-performance GPU leasing for DeFi applications, smart contracts, and blockchain development.",
    icon: ServerIcon,
    href: "/services/gpus",
    features: ["High Performance", "Blockchain Ready", "Smart Contract Support", "Scalable Infrastructure"],
  },
  {
    name: "VPN Services",
    description: "Secure, private networking with decentralized VPN infrastructure for maximum privacy and security.",
    icon: ShieldCheckIcon,
    href: "/services/vpn",
    features: ["End-to-End Encryption", "No-Logs Policy", "Decentralized Nodes", "Privacy First"],
  },
];

const features = [
  {
    name: "Decentralized Infrastructure",
    description: "Enterprise-grade distributed architecture with 99.9% uptime SLA. Built on peer-to-peer networks that eliminate single points of failure and ensure global availability.",
    href: "/features/decentralized",
    stats: "99.9% Uptime SLA"
  },
  {
    name: "Carbon-Neutral Computing",
    description: "100% renewable energy infrastructure with real-time carbon tracking. Achieve net-zero emissions while maintaining enterprise performance standards.",
    href: "/features/green-computing",
    stats: "0kg CO₂ Emissions"
  },
  {
    name: "Military-Grade Security",
    description: "End-to-end encryption with zero-knowledge architecture. SOC 2 Type II compliant infrastructure with advanced threat detection and automated security protocols.",
    href: "/features/security",
    stats: "SOC 2 Type II"
  },
  {
    name: "Enterprise APIs",
    description: "Production-ready SDKs and RESTful APIs with comprehensive documentation. Built for scale with rate limiting, monitoring, and enterprise support.",
    href: "/features/developer-tools",
    stats: "99.99% API Uptime"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden dark-gray-bg pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-8 sm:pb-24 lg:flex lg:px-8 lg:py-32 items-center">
          {/* Left column: text content */}
          <div className="w-full max-w-2xl flex-shrink-0 mx-auto lg:mx-0 lg:max-w-xl lg:pt-8 text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              DeFi Compute Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl leading-8 text-gray-400 mb-8">
              Decentralized, solar-powered compute infrastructure for the future of DeFi. Build on sustainable, secure, and scalable infrastructure that's truly decentralized.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 justify-center lg:justify-start">
              <Link
                href="/download"
                className="lofi-button px-8 py-4 text-lg font-semibold w-full sm:w-auto text-center"
              >
                Download App
              </Link>
              <Link href="/docs" className="lofi-button-outline px-8 py-4 text-lg font-semibold w-full sm:w-auto text-center">
                Documentation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          
          {/* Right column: software image */}
          <div className="w-full flex justify-center items-center mt-8 lg:mt-0 lg:ml-16">
            <div className="relative w-full max-w-2xl">
              <div className="lofi-card p-8 bg-gray-900">
                <div className="space-y-4">
                  {/* Terminal-like interface */}
                  <div className="bg-black p-4 border border-gray-700">
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                      <div>$ deadwood deploy --solar</div>
                      <div className="text-gray-400">✓ Solar compute nodes: 12 active</div>
                      <div className="text-gray-400">✓ IPFS storage: 2.4TB allocated</div>
                      <div className="text-gray-400">✓ VPN tunnels: 8 established</div>
                      <div className="text-gray-400">✓ Carbon footprint: 0kg CO₂</div>
                      <div className="text-white">🚀 Infrastructure ready</div>
                    </div>
                  </div>
                  
                  {/* Network diagram */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="lofi-card p-3 text-center">
                      <CloudIcon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-xs text-gray-400">IPFS</div>
                    </div>
                    <div className="lofi-card p-3 text-center">
                      <SunIcon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-xs text-gray-400">Solar</div>
                    </div>
                    <div className="lofi-card p-3 text-center">
                      <ServerIcon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-xs text-gray-400">GPUs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive DeFi compute infrastructure designed for the decentralized future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={service.name} className="lofi-card p-8 hover:border-white transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="lofi-card p-3 mr-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.name}</h3>
              </div>
              <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="lofi-card px-3 py-2 text-sm text-gray-300">
                    {feature}
                  </div>
                ))}
              </div>
              <Link href={service.href} className="inline-flex items-center text-white font-semibold hover:text-gray-400">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="dark-gray-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-white uppercase tracking-wide">Enterprise Platform</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Production-Ready Infrastructure
            </p>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-8 text-gray-400">
              Enterprise-grade DeFi infrastructure with military-grade security, carbon-neutral operations, and 99.9% uptime guarantees.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="lofi-card p-8 hover:border-white transition-all duration-300">
                  <div className="flex flex-col">
                    <dt className="text-xl font-bold leading-7 text-white mb-3">
                      {feature.name}
                    </dt>
                    <dd className="text-base leading-7 text-gray-400 mb-6">
                      {feature.description}
                    </dd>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white bg-gray-800 px-3 py-1">
                        {feature.stats}
                      </span>
                      <Link href={feature.href} className="text-sm font-semibold text-white hover:text-gray-400 flex items-center">
                        Learn more <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
