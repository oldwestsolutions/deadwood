import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '/join',
    price: { monthly: '$0' },
    description: 'Perfect for getting started with Deadwood.',
    features: [
      'Access to basic community features',
      'Limited downloads per month',
      'Basic support',
      'Community forum access',
      'Newsletter subscription',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '/join',
    price: { monthly: '$29' },
    description: 'Everything you need for professional development.',
    features: [
      'Everything in Free',
      'Unlimited downloads',
      'Priority support',
      'Advanced tutorials',
      'Code reviews',
      'Team collaboration',
      'API access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    price: { monthly: 'Custom' },
    description: 'Custom solutions for large organizations.',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'Custom training',
      'Advanced analytics',
      'White-label options',
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing Plans
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-8 bg-slate-800 border rounded-2xl shadow-sm flex flex-col ${
                tier.featured ? 'border-blue-500' : 'border-slate-700'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-white">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {tier.price.monthly}
                  </span>
                  {tier.price.monthly !== 'Custom' && (
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  )}
                </p>
                <p className="mt-6 text-slate-300">{tier.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true" />
                      <span className="ml-3 text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href={tier.href}
                  className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold ${
                    tier.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.price.monthly === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 