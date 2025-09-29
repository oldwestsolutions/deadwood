import { CheckIcon, ShieldCheckIcon, LockClosedIcon, EyeIcon, KeyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    title: "End-to-End Encryption",
    description: "Military-grade encryption for all data in transit and at rest",
    icon: LockClosedIcon,
    benefits: ["AES-256 encryption", "Perfect forward secrecy", "Zero-knowledge architecture", "Quantum-resistant algorithms"]
  },
  {
    title: "SOC 2 Type II Compliance",
    description: "Enterprise-grade security standards and compliance",
    icon: ShieldCheckIcon,
    benefits: ["Security audits", "Compliance reporting", "Risk assessments", "Continuous monitoring"]
  },
  {
    title: "Advanced Threat Detection",
    description: "AI-powered threat detection and automated response",
    icon: EyeIcon,
    benefits: ["Real-time monitoring", "Behavioral analysis", "Anomaly detection", "Automated response"]
  },
  {
    title: "Zero-Knowledge Architecture",
    description: "We never see your data - complete privacy by design",
    icon: KeyIcon,
    benefits: ["Client-side encryption", "No data access", "Privacy by design", "User control"]
  }
];

const securityStandards = [
  { name: "SOC 2 Type II", status: "Compliant" },
  { name: "ISO 27001", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "CCPA", status: "Compliant" }
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-red-600 p-4 rounded-2xl">
                <ShieldCheckIcon className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Military-Grade Security
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              End-to-end encryption with zero-knowledge architecture. SOC 2 Type II compliant infrastructure 
              with advanced threat detection and automated security protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="rounded-md bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-red-500"
              >
                Secure Your Data
              </Link>
              <Link href="/docs" className="rounded-md border border-red-500 px-6 py-3 text-lg font-semibold text-red-400 hover:bg-red-500/10">
                Security Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Standards Section */}
      <section className="bg-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Security Standards</h2>
            <p className="text-lg text-slate-300">Enterprise-grade compliance and certifications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityStandards.map((standard, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <span className="text-green-400 font-bold">{standard.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Security Features</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Multi-layered security approach protecting your data and infrastructure at every level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 p-3 rounded-xl mr-4">
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
                      <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encryption Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Advanced Encryption</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              State-of-the-art encryption protecting your data with military-grade security standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <LockClosedIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AES-256 Encryption</h3>
              <p className="text-slate-300">Industry-standard encryption for maximum security</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <KeyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Perfect Forward Secrecy</h3>
              <p className="text-slate-300">Unique keys for each session ensuring maximum protection</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum-Resistant</h3>
              <p className="text-slate-300">Future-proof encryption against quantum computing threats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Detection Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Threat Detection</h2>
              <p className="text-lg text-slate-300">
                Advanced machine learning algorithms continuously monitor and protect your infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Real-time Monitoring</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-slate-300">24/7 threat monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Behavioral analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Anomaly detection</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Automated Response</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Instant threat blocking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Automatic incident response</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-red-400 mr-3" />
                    <span className="text-slate-300">Security alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Secure Your DeFi Infrastructure</h2>
            <p className="text-xl text-red-100 mb-8">
              Build with confidence knowing your data is protected by military-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50"
              >
                Get Secure
              </Link>
              <Link
                href="/docs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Security Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
