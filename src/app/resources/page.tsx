'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  BookOpenIcon,
  VideoCameraIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  UserGroupIcon,
  AcademicCapIcon,
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

const resources = [
  {
    name: 'Interactive Tutorials',
    description: 'Step-by-step guides with hands-on coding exercises and real-time feedback.',
    icon: BookOpenIcon,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Interactive code editor',
      'Progress tracking',
      'Instant feedback',
      'Project-based learning'
    ]
  },
  {
    name: 'Video Courses',
    description: 'Comprehensive video courses taught by industry experts.',
    icon: VideoCameraIcon,
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'HD quality videos',
      'Downloadable resources',
      'Course certificates',
      'Lifetime access'
    ]
  },
  {
    name: 'Code Examples',
    description: 'Real-world code examples and best practices for various technologies.',
    icon: CodeBracketIcon,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Production-ready code',
      'Multiple languages',
      'Best practices',
      'Performance tips'
    ]
  },
  {
    name: 'Documentation',
    description: 'Comprehensive documentation and API references.',
    icon: DocumentTextIcon,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'API references',
      'Integration guides',
      'Architecture docs',
      'Security best practices'
    ]
  },
  {
    name: 'Community Projects',
    description: 'Access to community-contributed projects and examples.',
    icon: UserGroupIcon,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Open source projects',
      'Code reviews',
      'Collaboration tools',
      'Project templates'
    ]
  },
  {
    name: 'Certification Paths',
    description: 'Structured learning paths leading to industry-recognized certifications.',
    icon: AcademicCapIcon,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Skill assessments',
      'Practice exams',
      'Expert mentorship',
      'Career guidance'
    ]
  }
]

const stats = [
  { id: 1, name: 'Learning Resources', value: '500+' },
  { id: 2, name: 'Video Hours', value: '1,000+' },
  { id: 3, name: 'Code Examples', value: '2,000+' },
  { id: 4, name: 'Success Rate', value: '95%' },
]

export default function ResourcesPage() {
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
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16">
            <div className="flex-1 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Unlimited Learning Resources
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Access comprehensive learning materials, tutorials, and resources to master software development and advance your career.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#explore"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Resources
                </a>
                <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 flex-1 lg:mt-0">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Learning resources"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
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
              Comprehensive Learning Materials
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

      {/* Resources Grid */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Learning Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need to Succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Access a wide range of learning materials designed to help you master software development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {resources.map((resource) => (
              <motion.div
                key={resource.name}
                className="flex flex-col bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <resource.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    {resource.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{resource.description}</p>
                    <ul className="mt-4 space-y-2">
                      {resource.features.map((feature) => (
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
            Start Learning Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Access our comprehensive learning resources and take your development skills to the next level.
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