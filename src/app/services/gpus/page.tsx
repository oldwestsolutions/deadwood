import { ServerIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  "High-performance GPU computing",
  "Blockchain-ready infrastructure",
  "Smart contract development support",
  "Scalable GPU resources",
  "Dedicated GPU instances",
  "Custom network configurations"
];

const specs = [
  {
    name: "GPU",
    description: "Latest generation graphics processing units for compute-intensive tasks",
    details: ["NVIDIA RTX 4090", "AMD Radeon RX 7900", "CUDA/OpenCL support"]
  },
  {
    name: "Memory",
    description: "High-speed VRAM for demanding GPU applications",
    details: ["24GB+ VRAM", "GDDR6X", "High bandwidth"]
  },
  {
    name: "Storage",
    description: "Fast NVMe SSD storage for optimal performance",
    details: ["NVMe SSDs", "Up to 10TB", "High IOPS"]
  },
  {
    name: "Network",
    description: "High-bandwidth networking for DeFi applications",
    details: ["10Gbps+", "Low latency", "Global CDN"]
  }
];

const pricing = [
  {
    name: "Development",
    price: "$50",
    period: "/month",
    description: "Perfect for development and testing",
    features: ["1 GPU", "8GB VRAM", "50GB SSD", "Basic support"],
    popular: false
  },
  {
    name: "Production",
    price: "$200",
    period: "/month",
    description: "For production DeFi applications",
    features: ["2 GPUs", "24GB VRAM", "500GB SSD", "Priority support", "99.9% SLA"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom infrastructure for large deployments",
    features: ["Dedicated GPU clusters", "Custom specs", "24/7 support", "SLA guarantee"],
    popular: false
  }
];

export default function GPUsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-4 rounded-2xl">
                <ServerIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              GPU Leasing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              High-performance GPU computing for DeFi applications, smart contracts, 
              and blockchain development. Built for the decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="rounded-md bg-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-purple-500"
              >
                Deploy Now
              </Link>
              <Link href="/docs" className="rounded-md border border-purple-500 px-6 py-3 text-lg font-semibold text-purple-400 hover:bg-purple-500/10">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">DeFi-Ready Infrastructure</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              GPU computing optimized for blockchain and DeFi applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <CheckIcon className="h-6 w-6 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">GPU Feature {idx + 1}</h3>
                </div>
                <p className="text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">High-Performance Specs</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade GPU hardware for demanding DeFi applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">{spec.name}</h3>
                <p className="text-slate-300 mb-6">{spec.description}</p>
                <ul className="space-y-2">
                  {spec.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">GPU Pricing</h2>
            <p className="text-lg text-slate-300">Flexible pricing for every use case</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`bg-slate-800 rounded-2xl p-8 border-2 ${plan.popular ? 'border-purple-500' : 'border-slate-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Deploy GPU
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
