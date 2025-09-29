import { CloudIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  "Distributed file storage across global network",
  "Content addressing with cryptographic hashes",
  "Peer-to-peer data sharing",
  "Immutable data storage",
  "No single point of failure",
  "Censorship-resistant storage"
];

const pricing = [
  {
    name: "Starter",
    price: "$10",
    period: "/month",
    description: "Perfect for small projects",
    features: ["10GB storage", "Basic API access", "Community support"],
    popular: false
  },
  {
    name: "Professional",
    price: "$50",
    period: "/month",
    description: "For growing applications",
    features: ["100GB storage", "Advanced API access", "Priority support", "Custom domains"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale deployments",
    features: ["Unlimited storage", "Dedicated infrastructure", "24/7 support", "SLA guarantee"],
    popular: false
  }
];

export default function IPFSPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-2xl">
                <CloudIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              IPFS Storage
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Decentralized file storage and content addressing with IPFS protocol. 
              Store and retrieve data across a distributed network with no single point of failure.
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

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose IPFS Storage?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Built on the InterPlanetary File System protocol for truly decentralized storage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Feature {idx + 1}</h3>
                </div>
                <p className="text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-lg text-slate-300">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`bg-slate-900 rounded-2xl p-8 border-2 ${plan.popular ? 'border-blue-500' : 'border-slate-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
