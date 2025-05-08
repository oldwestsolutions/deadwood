'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  EnvelopeIcon,
  BellIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

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
};

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
};

const benefits = [
  {
    title: 'Weekly Updates',
    description: 'Stay informed with the latest developments in technology and programming.',
    icon: BellIcon,
    features: [
      'Industry news and trends',
      'Technology updates',
      'Community highlights',
      'Upcoming events'
    ]
  },
  {
    title: 'Exclusive Content',
    description: 'Get access to premium content and insights from industry experts.',
    icon: SparklesIcon,
    features: [
      'Expert interviews',
      'Case studies',
      'Technical deep-dives',
      'Best practices'
    ]
  },
  {
    title: 'Learning Resources',
    description: 'Receive curated learning materials and educational content.',
    icon: RocketLaunchIcon,
    features: [
      'Tutorial recommendations',
      'Learning paths',
      'Resource guides',
      'Skill development tips'
    ]
  },
  {
    title: 'Community Insights',
    description: 'Stay connected with the developer community and their achievements.',
    icon: UserGroupIcon,
    features: [
      'Success stories',
      'Community projects',
      'Member spotlights',
      'Collaboration opportunities'
    ]
  }
];

const stats = [
  { label: 'Subscribers', value: '50,000+' },
  { label: 'Weekly Updates', value: '100%' },
  { label: 'Open Rate', value: '45%' },
  { label: 'Content Quality', value: 'Premium' }
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your newsletter logic here
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
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
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Stay Updated with Deadwood
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Subscribe to our newsletter and never miss out on the latest updates, resources, and opportunities in the developer community.
              </p>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-md bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Newsletter subscription"
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
            What You'll Receive
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Get access to valuable content and stay ahead in your development journey.
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
                    <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
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
            Why Subscribe?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Join thousands of developers who stay ahead with our newsletter.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <ChartBarIcon className="h-12 w-12 text-indigo-400" />
            <h3 className="mt-6 text-xl font-semibold text-white">Stay Informed</h3>
            <p className="mt-2 text-gray-300">Get the latest industry insights and trends delivered to your inbox.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <SparklesIcon className="h-12 w-12 text-indigo-400" />
            <h3 className="mt-6 text-xl font-semibold text-white">Premium Content</h3>
            <p className="mt-2 text-gray-300">Access exclusive content and resources curated by industry experts.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <RocketLaunchIcon className="h-12 w-12 text-indigo-400" />
            <h3 className="mt-6 text-xl font-semibold text-white">Grow Faster</h3>
            <p className="mt-2 text-gray-300">Accelerate your learning with weekly insights and resources.</p>
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
            Ready to Stay Updated?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Join our community of developers and never miss out on valuable insights and opportunities.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 max-w-md rounded-md bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
} 