import { ShieldCheckIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  "End-to-end encryption",
  "No-logs policy",
  "Decentralized node network",
  "Privacy-first design",
  "Kill switch protection",
  "DNS leak protection"
];

const benefits = [
  {
    title: "Privacy First",
    description: "Your data and browsing activity are completely private and secure.",
    icon: ShieldCheckIcon
  },
  {
    title: "Decentralized",
    description: "No single point of failure with our distributed node network.",
    icon: ShieldCheckIcon
  },
  {
    title: "No Logs",
    description: "We don't track, log, or store any of your online activities.",
    icon: ShieldCheckIcon
  }
];

const pricing = [
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
];

export default function VPNPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl">
                <ShieldCheckIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              VPN Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Secure, private networking with decentralized VPN infrastructure. 
              Maximum privacy and security for your digital life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="rounded-md bg-orange-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-orange-500"
              >
                Secure Now
              </Link>
              <Link href="/docs" className="rounded-md border border-orange-500 px-6 py-3 text-lg font-semibold text-orange-400 hover:bg-orange-500/10">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Privacy & Security</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Your privacy is our priority. Experience true digital freedom with our decentralized VPN.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700">
                <div className="bg-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Advanced Security Features</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade security with privacy-first design principles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <CheckIcon className="h-6 w-6 text-orange-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Security Feature {idx + 1}</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">VPN Pricing</h2>
            <p className="text-lg text-slate-300">Secure your digital life with our privacy-focused VPN</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`bg-slate-800 rounded-2xl p-8 border-2 ${plan.popular ? 'border-orange-500' : 'border-slate-700'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      <CheckIcon className="h-5 w-5 text-orange-400 mr-3" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Secure Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
