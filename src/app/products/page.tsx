'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  CodeBracketIcon,
  ArrowRightIcon,
  SparklesIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const products = [
  {
    name: 'Deadwood Academy',
    description: 'Comprehensive learning platform for developers of all levels.',
    icon: AcademicCapIcon,
    features: [
      'Interactive coding challenges',
      'Expert-led workshops',
      'Certification programs',
      'Live coding sessions',
      'Peer learning communities',
    ],
    href: '/products/academy',
    color: 'from-blue-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    stats: [
      { label: 'Active Students', value: '50K+' },
      { label: 'Courses', value: '200+' },
      { label: 'Success Rate', value: '94%' },
    ],
  },
  {
    name: 'Deadwood Certifications',
    description: 'Industry-recognized certifications for professional development.',
    icon: DocumentCheckIcon,
    features: [
      'Full-stack development certification',
      'Cloud architecture certification',
      'DevOps engineering certification',
      'Security specialist certification',
      'AI/ML engineering certification',
    ],
    href: '/products/certifications',
    color: 'from-purple-500 to-pink-600',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { label: 'Certified Developers', value: '25K+' },
      { label: 'Certification Types', value: '12+' },
      { label: 'Pass Rate', value: '92%' },
    ],
  },
  {
    name: 'Deadwood Equity',
    description: 'Revolutionary equity-based payment system for developers.',
    icon: CurrencyDollarIcon,
    features: [
      'Revenue sharing model',
      'Project-based equity',
      'Transparent tracking',
      'Automated payments',
      'Smart contracts',
    ],
    href: '/products/equity',
    color: 'from-green-500 to-emerald-600',
    gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20',
    image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { label: 'Developers Paid', value: '5K+' },
      { label: 'Total Distributed', value: '$2M+' },
      { label: 'Success Rate', value: '98%' },
    ],
  },
  {
    name: 'Deadwood Royalties',
    description: 'Earn ongoing royalties from your code contributions.',
    icon: ChartBarIcon,
    features: [
      'Code licensing system',
      'Usage-based royalties',
      'Global distribution',
      'Analytics dashboard',
      'Automated tracking',
    ],
    href: '/products/royalties',
    color: 'from-red-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-red-500/20 to-orange-600/20',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stats: [
      { label: 'Active Licenses', value: '1K+' },
      { label: 'Monthly Payouts', value: '$100K+' },
      { label: 'Success Rate', value: '96%' },
    ],
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Master Your Development Skills
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
              Join our comprehensive learning platform and earn industry-recognized certifications. Start your journey to becoming a certified Deadwood developer.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/products/academy"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Start Learning
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/products/certifications"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View Certifications
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">50K+</div>
              <div className="mt-2 text-lg text-slate-300">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">25K+</div>
              <div className="mt-2 text-lg text-slate-300">Certified Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">200+</div>
              <div className="mt-2 text-lg text-slate-300">Learning Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400">12+</div>
              <div className="mt-2 text-lg text-slate-300">Certification Types</div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Resources Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Comprehensive Learning Paths</h2>
            <p className="mt-4 text-lg text-slate-300">
              Choose from our extensive range of learning resources and certification programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <BookOpenIcon className="h-8 w-8 text-purple-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Learning Resources</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Interactive tutorials</li>
                <li>• Video courses</li>
                <li>• Documentation</li>
                <li>• Code examples</li>
                <li>• Practice exercises</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <UserGroupIcon className="h-8 w-8 text-blue-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Community Support</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Peer learning groups</li>
                <li>• Expert mentorship</li>
                <li>• Discussion forums</li>
                <li>• Code reviews</li>
                <li>• Study groups</li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <DocumentCheckIcon className="h-8 w-8 text-green-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Certification Process</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Skill assessment</li>
                <li>• Project evaluation</li>
                <li>• Technical interview</li>
                <li>• Portfolio review</li>
                <li>• Certification exam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 ${product.gradient}`} />
              </div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${product.color}`}>
                  <product.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{product.name}</h3>
                <p className="mt-2 text-lg text-slate-300">{product.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {product.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <ul role="list" className="mt-6 space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-slate-300">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-base font-semibold text-purple-400 hover:text-purple-300"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Advance Your Career?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Join our community of learners and earn your Deadwood certification today.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Admissions
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 