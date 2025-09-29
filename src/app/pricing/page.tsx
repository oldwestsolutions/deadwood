import { CheckIcon, CloudIcon, SunIcon, ServerIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  {
    name: "IPFS Storage",
    icon: CloudIcon,
    color: "blue",
    plans: [
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
    ]
  },
  {
    name: "Solar Compute",
    icon: SunIcon,
    color: "green",
    plans: [
      {
        name: "Green Starter",
        price: "$25",
        period: "/month",
        description: "Solar-powered compute for small projects",
        features: ["2 vCPUs", "4GB RAM", "50GB SSD", "Solar powered"],
        popular: false
      },
      {
        name: "Solar Professional",
        price: "$100",
        period: "/month",
        description: "Sustainable computing for growing applications",
        features: ["8 vCPUs", "16GB RAM", "200GB SSD", "Solar powered", "Priority support"],
        popular: true
      },
      {
        name: "Eco Enterprise",
        price: "Custom",
        period: "",
        description: "Large-scale solar infrastructure",
        features: ["Dedicated solar farms", "Unlimited resources", "24/7 support", "Custom SLA"],
        popular: false
      }
    ]
  },
  {
    name: "Virtual Machines",
    icon: ServerIcon,
    color: "purple",
    plans: [
      {
        name: "Development",
        price: "$30",
        period: "/month",
        description: "Perfect for development and testing",
        features: ["2 vCPUs", "4GB RAM", "50GB SSD", "Basic support"],
        popular: false
      },
      {
        name: "Production",
        price: "$150",
        period: "/month",
        description: "For production DeFi applications",
        features: ["8 vCPUs", "32GB RAM", "500GB SSD", "Priority support", "99.9% SLA"],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Custom infrastructure for large deployments",
        features: ["Dedicated hardware", "Custom specs", "24/7 support", "SLA guarantee"],
        popular: false
      }
    ]
  },
  {
    name: "VPN Services",
    icon: ShieldCheckIcon,
    color: "orange",
    plans: [
      {
        name: "Basic",
        price: "$5",
        period: "/month",
        description: "Essential privacy protection",
        features: ["1 device", "Basic encryption", "Community support", "Standard speeds"],
        popular: false
      },
      {
        name: "Pro",
        price: "$15",
        period: "/month",
        description: "Advanced privacy features",
        features: ["5 devices", "Advanced encryption", "Priority support", "Fast speeds", "Kill switch"],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Custom solutions for organizations",
        features: ["Unlimited devices", "Custom encryption", "24/7 support", "Dedicated servers"],
        popular: false
      }
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your DeFi compute needs. All plans include our core features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      {services.map((service, serviceIdx) => (
        <section key={service.name} className={`py-16 sm:py-24 ${serviceIdx % 2 === 1 ? 'bg-slate-800' : ''}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className={`bg-gradient-to-r ${
                  service.color === 'blue' ? 'from-blue-500 to-cyan-600' :
                  service.color === 'green' ? 'from-green-500 to-emerald-600' :
                  service.color === 'purple' ? 'from-purple-500 to-violet-600' :
                  'from-orange-500 to-red-600'
                } p-4 rounded-2xl`}>
                  <service.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{service.name}</h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                {service.name === 'IPFS Storage' && 'Decentralized file storage with content addressing'}
                {service.name === 'Solar Compute' && 'Green computing powered by renewable solar energy'}
                {service.name === 'Virtual Machines' && 'High-performance VMs for DeFi applications'}
                {service.name === 'VPN Services' && 'Secure, private networking with decentralized infrastructure'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.plans.map((plan, planIdx) => (
                <div key={plan.name} className={`bg-slate-900 rounded-2xl p-8 border-2 ${
                  plan.popular 
                    ? `border-${service.color}-500` 
                    : 'border-slate-700'
                } relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`bg-${service.color}-500 text-white px-4 py-1 rounded-full text-sm font-semibold`}>
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
                        <CheckIcon className={`h-5 w-5 text-${service.color}-400 mr-3`} />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/login"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-semibold ${
                      plan.popular
                        ? `bg-${service.color}-600 text-white hover:bg-${service.color}-500`
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
      ))}

      {/* FAQ Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-300">Everything you need to know about our DeFi compute infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What is DeFi compute infrastructure?</h3>
              <p className="text-slate-300">Our infrastructure provides decentralized, solar-powered compute resources including IPFS storage, virtual machines, and VPN services designed specifically for DeFi applications.</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How does solar-powered computing work?</h3>
              <p className="text-slate-300">Our data centers are powered by renewable solar energy with battery storage systems, ensuring 100% green computing with zero carbon footprint.</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is my data secure with IPFS?</h3>
              <p className="text-slate-300">Yes, IPFS uses content addressing and cryptographic hashing to ensure data integrity and security. Your data is distributed across multiple nodes for redundancy.</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can I use multiple services together?</h3>
              <p className="text-slate-300">Absolutely! Our services are designed to work together seamlessly. You can combine IPFS storage, solar compute, VMs, and VPN services for a complete DeFi infrastructure stack.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}