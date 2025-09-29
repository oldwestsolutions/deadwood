import { SunIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  "100% solar-powered infrastructure",
  "Zero carbon footprint computing",
  "Sustainable energy storage systems",
  "Green data center operations",
  "Renewable energy certificates",
  "Environmental impact tracking"
];

const benefits = [
  {
    title: "Carbon Neutral",
    description: "All our compute resources are powered by renewable solar energy, ensuring zero carbon emissions.",
    icon: SunIcon
  },
  {
    title: "Cost Effective",
    description: "Solar power reduces operational costs while providing reliable, sustainable computing power.",
    icon: SunIcon
  },
  {
    title: "Future Proof",
    description: "Built for the sustainable future with renewable energy infrastructure that scales with demand.",
    icon: SunIcon
  }
];

const pricing = [
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
];

export default function SolarComputePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl">
                <SunIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Solar Compute
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Green computing powered by renewable solar energy. Sustainable GPU computing 
              with zero carbon footprint for the environmentally conscious developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-500"
              >
                Go Green
              </Link>
              <Link href="/docs" className="rounded-md border border-green-500 px-6 py-3 text-lg font-semibold text-green-400 hover:bg-green-500/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sustainable Computing</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              The future of computing is green. Join us in building a sustainable digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Solar-Powered Features</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Every aspect of our infrastructure is designed for sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Solar Feature {idx + 1}</h3>
                </div>
                <p className="text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Green Pricing</h2>
            <p className="text-lg text-slate-300">Sustainable computing at competitive prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`bg-slate-800 rounded-2xl p-8 border-2 ${plan.popular ? 'border-green-500' : 'border-slate-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      ? 'bg-green-600 text-white hover:bg-green-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Go Solar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
