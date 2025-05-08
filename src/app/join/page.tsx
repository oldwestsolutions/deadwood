'use client';

import { useState } from "react";
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  CheckCircleIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  UserGroupIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const benefits = [
  {
    title: 'Premium Learning Resources',
    description: 'Access to exclusive courses, tutorials, and documentation.',
    icon: AcademicCapIcon,
    features: [
      'Full access to all courses',
      'Downloadable resources',
      'Premium tutorials',
      'Expert-led workshops'
    ]
  },
  {
    title: 'Development Tools',
    description: 'Professional tools and software to enhance your workflow.',
    icon: CodeBracketIcon,
    features: [
      'VS Code extensions',
      'Development templates',
      'API access',
      'Cloud resources'
    ]
  },
  {
    title: 'Community Access',
    description: 'Connect with developers worldwide and grow your network.',
    icon: UserGroupIcon,
    features: [
      'Private Discord server',
      'Networking events',
      'Mentorship program',
      'Job opportunities'
    ]
  },
  {
    title: 'Learning Resources',
    description: 'Comprehensive learning materials for all skill levels.',
    icon: BookOpenIcon,
    features: [
      'E-books and guides',
      'Video tutorials',
      'Code examples',
      'Best practices'
    ]
  }
]

const stats = [
  { label: 'Active Members', value: '10,000+' },
  { label: 'Learning Resources', value: '500+' },
  { label: 'Expert Mentors', value: '100+' },
  { label: 'Success Rate', value: '98%' }
]

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your join logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-0 sm:pb-24 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Join Our Developer Community
              </h1>
              <p className="mt-3 text-lg leading-8 text-gray-300">
                Unlock unlimited access to premium resources, connect with top developers, and accelerate your career growth.
              </p>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full rounded-md bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 block w-full rounded-md bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Create a password"
                      required
                      minLength={8}
                    />
                    <p className="mt-1 text-sm text-gray-400">
                      Must be at least 8 characters long
                    </p>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="mt-1 block w-full rounded-md bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 rounded-md bg-indigo-600 px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                  >
                    {isLoading ? 'Joining...' : 'Become a Member'}
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-md bg-white px-6 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  By joining, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Developer community"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-16"
        variants={sectionVariants}
      >
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Premium Benefits
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Get access to everything you need to succeed in your development career.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="flex flex-col bg-gray-800/50 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <benefit.icon className="h-8 w-8 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="mt-2 text-gray-300">{benefit.description}</p>
              <ul className="mt-6 space-y-3">
                {benefit.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Join Deadwood?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Experience the difference of being part of a premium developer community.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <RocketLaunchIcon className="h-12 w-12 text-indigo-400" />
            <h3 className="mt-6 text-xl font-semibold text-white">Accelerate Growth</h3>
            <p className="mt-2 text-gray-300">Access premium resources and accelerate your learning journey.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <SparklesIcon className="h-12 w-12 text-indigo-400" />
            <h3 className="mt-6 text-xl font-semibold text-white">Stay Updated</h3>
            <p className="mt-2 text-gray-300">Get early access to new technologies and industry trends.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheckIcon className="h-12 w-12 text-indigo-400" />
            <h3 className="mt-6 text-xl font-semibold text-white">Quality Guaranteed</h3>
            <p className="mt-2 text-gray-300">All resources are vetted by industry experts.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="relative isolate mt-0 px-6 py-12 sm:mt-0 sm:py-16 lg:px-8 bg-gray-800/50"
        variants={sectionVariants}
      >
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Join?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Start your journey today and unlock unlimited access to premium resources.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get Started
            </button>
            <button className="text-lg font-semibold leading-6 text-gray-300">
              View Pricing <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 