'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ServerIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ScaleIcon,
  RocketLaunchIcon,
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

const applications = [
  {
    name: 'Cloud Infrastructure',
    description: 'Build and manage scalable cloud applications using AWS, Azure, and Google Cloud Platform.',
    icon: CloudIcon,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Auto-scaling capabilities',
      'Load balancing',
      'High availability',
      'Disaster recovery'
    ]
  },
  {
    name: 'Distributed Systems',
    description: 'Create robust distributed applications that can handle millions of concurrent users.',
    icon: ServerIcon,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Microservices architecture',
      'Service mesh',
      'Message queues',
      'Event-driven design'
    ]
  },
  {
    name: 'High-Performance Computing',
    description: 'Leverage GPU and CPU clusters for complex computational tasks.',
    icon: CpuChipIcon,
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Parallel processing',
      'GPU acceleration',
      'Distributed computing',
      'Real-time analytics'
    ]
  },
  {
    name: 'Global Applications',
    description: 'Build applications that serve users worldwide with minimal latency.',
    icon: GlobeAltIcon,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'CDN integration',
      'Multi-region deployment',
      'Edge computing',
      'Global load balancing'
    ]
  },
  {
    name: 'Scalable Databases',
    description: 'Design and implement databases that can handle petabytes of data.',
    icon: ScaleIcon,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Sharding strategies',
      'Replication',
      'Data partitioning',
      'Caching layers'
    ]
  },
  {
    name: 'Real-time Systems',
    description: 'Create applications that process and respond to data in real-time.',
    icon: RocketLaunchIcon,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'WebSocket integration',
      'Stream processing',
      'Real-time analytics',
      'Event streaming'
    ]
  }
]

const stats = [
  { id: 1, name: 'Applications Deployed', value: '1,000+' },
  { id: 2, name: 'Data Processed Daily', value: '1PB+' },
  { id: 3, name: 'Global Users', value: '10M+' },
  { id: 4, name: 'Uptime', value: '99.99%' },
]

export default function ApplicationsPage() {
  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
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
                Building Applications at Scale
              </h1>
              <p className="mt-3 text-lg leading-8 text-gray-300">
                Learn how to leverage modern computing resources to create powerful, scalable applications that can handle millions of users and petabytes of data.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Learning
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white/10 px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Resources <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Building applications at scale"
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
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by developers worldwide
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-800/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      {/* Applications Grid */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Application Types</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building for Scale
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore different types of large-scale applications and learn how to build them effectively.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {applications.map((application) => (
              <motion.div
                key={application.name}
                className="flex flex-col bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={application.image}
                    alt={application.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <application.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    {application.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{application.description}</p>
                    <ul className="mt-4 space-y-2">
                      {application.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-2 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
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
            Ready to build at scale?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Start learning how to create powerful, scalable applications that can handle millions of users.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#get-started"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-300">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 