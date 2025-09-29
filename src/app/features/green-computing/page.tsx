import { CheckIcon, SunIcon, BoltIcon, GlobeAltIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    title: "100% Solar Powered",
    description: "All infrastructure runs on renewable solar energy",
    icon: SunIcon,
    benefits: ["Zero carbon emissions", "Renewable energy", "Sustainable operations", "Green certificates"]
  },
  {
    title: "Real-time Carbon Tracking",
    description: "Monitor and optimize your carbon footprint in real-time",
    icon: ChartBarIcon,
    benefits: ["Live carbon metrics", "Emission tracking", "Optimization insights", "Sustainability reports"]
  },
  {
    title: "Battery Storage Systems",
    description: "Advanced energy storage for 24/7 green computing",
    icon: BoltIcon,
    benefits: ["24/7 availability", "Energy efficiency", "Peak shaving", "Grid independence"]
  },
  {
    title: "Global Green Network",
    description: "Worldwide infrastructure powered by renewable energy",
    icon: GlobeAltIcon,
    benefits: ["Global coverage", "Renewable sourcing", "Carbon neutral", "Green partnerships"]
  }
];

const stats = [
  { label: "Carbon Emissions", value: "0kg CO₂" },
  { label: "Renewable Energy", value: "100%" },
  { label: "Solar Capacity", value: "50MW+" },
  { label: "Battery Storage", value: "200MWh" }
];

export default function GreenComputingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-green-600 p-4 rounded-2xl">
                <SunIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Carbon-Neutral Computing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              100% renewable energy infrastructure with real-time carbon tracking. Achieve net-zero emissions 
              while maintaining enterprise performance standards.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sustainable Infrastructure</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our commitment to environmental responsibility doesn't compromise on performance. 
              Build the future with zero environmental impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-xl mr-4">
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
                      <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Infrastructure Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Solar-Powered Infrastructure</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our data centers are powered by advanced solar arrays and battery storage systems, 
              ensuring 100% renewable energy operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <SunIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Solar Arrays</h3>
              <p className="text-slate-300">High-efficiency photovoltaic panels generating clean energy</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Battery Storage</h3>
              <p className="text-slate-300">Advanced lithium-ion batteries for 24/7 power availability</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Energy Management</h3>
              <p className="text-slate-300">Smart energy optimization and real-time monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Environmental Impact</h2>
              <p className="text-lg text-slate-300">
                Track your positive environmental impact with real-time metrics and sustainability reports.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Carbon Footprint</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">CO₂ Emissions</span>
                    <span className="text-green-400 font-bold">0kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Renewable Energy</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Energy Efficiency</span>
                    <span className="text-green-400 font-bold">95%+</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Sustainability Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Solar Generation</span>
                    <span className="text-blue-400 font-bold">50MW+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Battery Storage</span>
                    <span className="text-blue-400 font-bold">200MWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Grid Independence</span>
                    <span className="text-blue-400 font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Build Sustainably</h2>
            <p className="text-xl text-green-100 mb-8">
              Join the green revolution and build your DeFi applications on 100% renewable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50"
              >
                Start Green
              </Link>
              <Link
                href="/docs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
