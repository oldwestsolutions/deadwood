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

const technologyFeatures = [
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

const enterpriseFeatures = [
  {
    title: "Security",
    description: "Enterprise-grade security with SOC 2 Type II compliance and advanced threat detection.",
  },
  {
    title: "Scalability",
    description: "Built for enterprise scale with proven performance across large supply chain networks.",
  },
  {
    title: "Integration",
    description: "RESTful APIs and comprehensive SDKs for seamless integration with existing systems.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-neutral-950 border-b border-neutral-800 pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-16 pt-8 sm:pb-24 lg:flex lg:px-8 lg:py-32 items-center">
          {/* Left column: text content */}
          <div className="w-full max-w-2xl flex-shrink-0 mx-auto lg:mx-0 lg:max-w-xl lg:pt-8 text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Quantum-Powered Supply Chain Optimization
            </h1>
            <p className="text-xl sm:text-2xl leading-8 text-neutral-400 mb-8">
              Deadwood.software applies quantum-inspired optimization to reduce waste, volatility, and cost across the entire food supply chain.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="px-8 py-4 text-lg font-semibold w-full sm:w-auto text-center bg-white text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
              >
                Request Demo
              </Link>
              <Link
                href="#use-cases"
                className="px-8 py-4 text-lg font-semibold w-full sm:w-auto text-center border-2 border-neutral-600 text-white hover:border-white transition-colors duration-200"
              >
                Explore Use Cases <span aria-hidden="true">→</span>
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

      {/* Platform Overview */}
      <section className="bg-neutral-900 border-b border-neutral-800 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Platform Overview
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              A decision engine that spans the entire food supply chain, from farm to customer. 
              Quantum-inspired solvers are deployed where uncertainty is high, constraints interact, 
              and classical greedy algorithms fail.
            </p>
          </div>

          {/* System Diagram */}
          <div className="mt-16">
            <div className="bg-neutral-950 border border-neutral-800 p-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm font-semibold">FARM</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRightIcon className="h-8 w-8 text-neutral-600 hidden md:block" />
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm font-semibold">PROCESSOR</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ArrowRightIcon className="h-8 w-8 text-neutral-600 hidden md:block" />
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm font-semibold">DISTRIBUTOR</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm font-semibold">RESTAURANT</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm font-semibold">CUSTOMER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="bg-neutral-950 py-24 border-b border-neutral-800">
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
                  <div className="bg-neutral-900 border border-neutral-800 p-8">
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

      {/* Technology Section */}
      <section id="technology" className="bg-neutral-900 py-24 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technology
            </h2>
            <p className="text-xl text-neutral-400">
              Quantum-inspired optimization, probabilistic modeling, and hybrid solvers—the same approach used by IBM, D-Wave, and leading supply-chain vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-neutral-950 border border-neutral-800 p-8">
                <div className="w-16 h-16 border-2 border-neutral-700 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Readiness */}
      <section id="enterprise" className="bg-neutral-950 py-24 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Enterprise Readiness
            </h2>
            <p className="text-xl text-neutral-400">
              Built for enterprise operators, supply chain executives, and institutional partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Demo Section */}
      <section id="contact" className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Request a Demo
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              See how quantum-inspired optimization can transform your food supply chain operations.
            </p>
            <div className="bg-neutral-950 border border-neutral-800 p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
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
    </div>
  );
}



