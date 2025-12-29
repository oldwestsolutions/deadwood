import Link from "next/link";
import {
  ChartBarIcon,
  CubeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  BoltIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ServerIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const useCases = [
  {
    id: 1,
    title: "Demand Forecasting Under Uncertainty",
    category: "Restaurants",
    problem: "Highly volatile demand, weather sensitivity, event-driven spikes, spoilage constraints. Classical forecasts break when uncertainty compounds.",
    approach: "Probabilistic demand states, scenario superposition, constraint satisfaction across inventory, labor, and shelf life.",
    output: "Optimal order quantities per SKU, confidence intervals, waste-minimizing recommendations.",
    value: "Lower spoilage, fewer stockouts, better labor alignment.",
    icon: ChartBarIcon,
  },
  {
    id: 2,
    title: "Inventory Optimization with Spoilage Constraints",
    category: "Food Inventory",
    problem: "Perishable, multi-tiered, time-decaying inventory. Classical solvers struggle with large constraint graphs.",
    approach: "Encode inventory as constrained optimization, solve using hybrid quantum/classical solvers. Optimize across time, temperature, shelf life, transport delays.",
    output: "When to reorder, when to discount, when to divert inventory.",
    value: "Measurable waste reduction, higher gross margins.",
    icon: CubeIcon,
  },
  {
    id: 3,
    title: "Supplier Selection & Risk Modeling",
    category: "Supply Chain",
    problem: "Suppliers fail due to weather, labor, transport, financial stress. Most systems treat suppliers as static.",
    approach: "Probabilistic supplier reliability modeling, correlated risk analysis, multi-objective optimization: cost, reliability, distance, sustainability.",
    output: "Ranked supplier portfolios, dynamic reallocation under stress, early warning signals.",
    value: "Fewer disruptions, faster recovery, smarter sourcing.",
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    title: "Logistics & Routing Optimization",
    category: "Cold Chain",
    problem: "Temperature constraints, time windows, fuel volatility, multi-stop routing. This becomes NP-hard very fast.",
    approach: "Quantum annealing–style routing optimization, evaluate millions of route permutations. Optimize jointly for cost, time, spoilage risk, energy use.",
    output: "Optimal delivery routes, real-time rerouting suggestions, cost vs freshness tradeoffs.",
    value: "Lower logistics costs, better food quality, lower emissions.",
    icon: TruckIcon,
  },
  {
    id: 5,
    title: "Pricing & Menu Optimization",
    category: "Restaurants",
    problem: "Menu pricing affects demand, waste, prep scheduling, supplier drawdown. Most menus are static.",
    approach: "Multi-variable pricing optimization, demand elasticity under uncertainty, cross-item interactions (combo effects).",
    output: "Dynamic menu pricing ranges, promotion timing, portion sizing guidance.",
    value: "Higher margins, lower waste, better customer satisfaction.",
    icon: CurrencyDollarIcon,
  },
  {
    id: 6,
    title: "Water, Energy, and Sustainability Optimization",
    category: "Sustainability",
    problem: "Food supply chains are resource-intensive: water use, energy use, refrigeration losses.",
    approach: "Resource allocation optimization across facilities. Trade-offs between cost, sustainability, reliability.",
    output: "When to run cold storage, when to process vs store, resource usage forecasts.",
    value: "Lower operating costs, ESG compliance, regulatory resilience.",
    icon: BoltIcon,
  },
];

const platformFeatures = [
  {
    title: "Quantum-Inspired Optimization",
    description: "Probabilistic modeling and hybrid solvers for problems classical heuristics struggle with.",
    icon: CpuChipIcon,
  },
  {
    title: "Hybrid Solvers",
    description: "Combines quantum-inspired algorithms with classical optimization for enterprise-scale problems.",
    icon: ServerIcon,
  },
  {
    title: "End-to-End System View",
    description: "Decision engine spanning Farm → Processor → Distributor → Restaurant → Customer.",
    icon: GlobeAltIcon,
  },
];

const benefits = [
  "Reduce data warehouse and integration cost",
  "Enforce business definitions and security",
  "Create an AI-ready data foundation",
  "Accelerate data product delivery",
  "Ensure vendor freedom",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Top Banner Strip */}
      <div className="bg-black text-white py-2 text-center text-sm">
        <span>NEW! Get a 30-day trial of Deadwood Platform Standard. </span>
        <Link href="#contact" className="underline hover:no-underline">
          Start now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-neutral-950 border-b border-neutral-800 pt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-16 pt-8 sm:pb-24 lg:flex lg:px-8 lg:py-20 items-center">
          {/* Left column: text content */}
          <div className="w-full max-w-2xl flex-shrink-0 mx-auto lg:mx-0 lg:max-w-2xl lg:pt-8 text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Build an <span className="text-white">AI-Ready, Trusted Data Foundation</span> for your Enterprise
            </h1>
            <p className="text-xl sm:text-2xl leading-8 text-neutral-400 mb-8">
              Connect every data silo, control your business definitions, and consume trusted data in any application — without the cost and complexity of data warehouses and integration.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-6">
              <Link
                href="#platform"
                className="px-8 py-4 text-lg font-semibold w-full sm:w-auto text-center border-2 border-white text-white hover:bg-white hover:text-neutral-950 transition-colors duration-200"
              >
                Explore Platform
              </Link>
            </div>
          </div>
          
          {/* Right column: optimization interface illustration */}
          <div className="w-full flex justify-center items-center mt-8 lg:mt-0 lg:ml-16">
            <div className="relative w-full max-w-2xl">
              <div className="bg-neutral-900 border border-neutral-800 p-8">
                <div className="space-y-4">
                  {/* Terminal-like interface */}
                  <div className="bg-neutral-950 p-4 border border-neutral-800">
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                      <div>$ deadwood optimize --supply-chain</div>
                      <div className="text-neutral-400">✓ Demand forecast: 847 SKUs analyzed</div>
                      <div className="text-neutral-400">✓ Inventory optimization: 12 facilities</div>
                      <div className="text-neutral-400">✓ Route optimization: 156 deliveries</div>
                      <div className="text-neutral-400">✓ Waste reduction: 23% projected</div>
                      <div className="text-white">🚀 Optimization complete</div>
                    </div>
                  </div>
                  
                  {/* Supply chain diagram */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-neutral-950 border border-neutral-800 p-3 text-center">
                      <ChartBarIcon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-xs text-neutral-400">Forecast</div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 p-3 text-center">
                      <CubeIcon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-xs text-neutral-400">Inventory</div>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 p-3 text-center">
                      <TruckIcon className="h-6 w-6 text-white mx-auto mb-2" />
                      <div className="text-xs text-neutral-400">Logistics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section - Two Column Layout */}
      <section id="platform" className="bg-neutral-900 border-b border-neutral-800 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Deadwood helps you seamlessly <span className="text-white">integrate and engage with data</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Our data platform delivers governed insights and AI readiness on any cloud, at unparalleled scale.
            </p>
          </div>

          {/* Two Column Product Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Left Box - Optimization Platform */}
            <div className="bg-neutral-950 border-2 border-white p-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 border-2 border-white flex items-center justify-center mr-4">
                  <CpuChipIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Deadwood Platform</h3>
                  <p className="text-neutral-400 text-sm">The Universal Optimization Layer</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                Deliver governed, AI-optimized access to data that scales with your enterprise—eliminating the trade-offs between flexibility, control, and speed.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <ArrowRightIcon className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Data Clarity and Connection</p>
                    <p className="text-neutral-400 text-sm">Eliminates data chaos, ensures data integrity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRightIcon className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Scalable, Secure, Cost-Effective</p>
                    <p className="text-neutral-400 text-sm">Proven scalability, robust security, lower Total Cost of Ownership.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRightIcon className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Accelerate AI-Ready Models</p>
                    <p className="text-neutral-400 text-sm">Enhances data with semantic context, streamlines model creation.</p>
                  </div>
                </div>
              </div>
              <Link
                href="#platform"
                className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-neutral-950 transition-colors duration-200 font-semibold"
              >
                Explore Platform
              </Link>
            </div>

            {/* Right Box - Analytics Platform */}
            <div className="bg-neutral-950 border-2 border-white p-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 border-2 border-white flex items-center justify-center mr-4">
                  <ChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Deadwood Analytics</h3>
                  <p className="text-neutral-400 text-sm">The AI-Powered Enterprise Analytics Platform</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                The AI+BI platform trusted to deliver intelligence everywhere, on any cloud, at enterprise scale.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <ArrowRightIcon className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">AI-Powered Insights and Flexibility</p>
                    <p className="text-neutral-400 text-sm">Leverages AI integration for quick insights, customized dashboards, and enterprise innovation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRightIcon className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Enterprise-Grade Analytics for All</p>
                    <p className="text-neutral-400 text-sm">Democratizes data with powerful BI tools, cloud-native architecture.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRightIcon className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Unified Data and Performance</p>
                    <p className="text-neutral-400 text-sm">Streamlines data access from various sources, enhances agility and decision-making.</p>
                  </div>
                </div>
              </div>
              <Link
                href="#platform"
                className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-neutral-950 transition-colors duration-200 font-semibold"
              >
                Explore Analytics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-neutral-950 border-b border-neutral-800 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Don't let your <span className="text-white">data foundation</span> limit your enterprise intelligence
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Empower your organization to deliver consistent information across departments. Accelerate innovative data projects, cut costly integrations, and lower warehousing expenses. Experience seamless information flow for a smarter, more efficient enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            {/* Left Column - Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-white">
                  <p className="font-semibold text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Center Column - Detailed Benefit */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Reduce data warehouse and integration cost
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Leverage existing data infrastructure to lower cloud query expenses and Total Cost of Ownership.
              </p>
            </div>

            {/* Right Column - Abstract Diagram Placeholder */}
            <div className="bg-neutral-900 border border-neutral-800 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                  <GlobeAltIcon className="h-16 w-16 text-neutral-600" />
                </div>
                <p className="text-neutral-500 text-sm">Enterprise Data Foundation</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-block px-10 py-4 text-lg font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
            >
              Get your data foundation AI-ready with Deadwood
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="bg-neutral-900 py-24 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-neutral-400">
              Quantum-inspired optimization for the most challenging problems in food supply chains.
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, idx) => (
              <div
                key={useCase.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 border-2 border-neutral-700 flex items-center justify-center mr-4">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                        {useCase.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {useCase.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="bg-neutral-950 border border-neutral-800 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                          Problem
                        </h4>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                          {useCase.problem}
                        </p>
                        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                          Quantum-Inspired Approach
                        </h4>
                        <p className="text-neutral-300 leading-relaxed">
                          {useCase.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                          Output
                        </h4>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                          {useCase.output}
                        </p>
                        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                          Value
                        </h4>
                        <p className="text-neutral-300 leading-relaxed">
                          {useCase.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Demo Section */}
      <section id="contact" className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Request a Demo
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              See how quantum-inspired optimization can transform your food supply chain operations.
            </p>
            <div className="bg-neutral-900 border border-neutral-800 p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-3 bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                <button
                  type="submit"
                  className="w-full px-10 py-4 text-lg font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Footer */}
      <section className="bg-neutral-900 border-t border-neutral-800 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h3 className="text-center text-xl font-semibold text-neutral-400 mb-12">
            Trusted by the world's most innovative companies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-neutral-600">SAP</div>
            <div className="text-3xl font-bold text-neutral-600">KFC</div>
            <div className="text-3xl font-bold text-neutral-600">eBay</div>
            <div className="text-3xl font-bold text-neutral-600">Crate&Barrel</div>
            <div className="text-3xl font-bold text-neutral-600">VISA</div>
            <div className="text-3xl font-bold text-neutral-600">SONY</div>
            <div className="text-3xl font-bold text-neutral-600">Pfizer</div>
          </div>
        </div>
      </section>
    </div>
  );
}
