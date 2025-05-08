'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  DocumentTextIcon, 
  AcademicCapIcon,
  ComputerDesktopIcon,
  BookmarkIcon,
  ArrowDownTrayIcon
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
    id: 1,
    name: 'Coursera Courses',
    description: 'Access to premium Coursera courses in programming, data science, and software development.',
    icon: AcademicCapIcon,
    category: 'Courses',
    items: [
      { name: 'Machine Learning Specialization', size: '2.4 GB', format: 'MP4' },
      { name: 'Full Stack Web Development', size: '3.1 GB', format: 'MP4' },
      { name: 'Data Science Fundamentals', size: '1.8 GB', format: 'MP4' }
    ]
  },
  {
    id: 2,
    name: 'Udemy Classes',
    description: 'Complete Udemy courses covering various programming languages and frameworks.',
    icon: ComputerDesktopIcon,
    category: 'Courses',
    items: [
      { name: 'React Masterclass 2024', size: '4.2 GB', format: 'MP4' },
      { name: 'Python for Data Science', size: '3.5 GB', format: 'MP4' },
      { name: 'DevOps Bootcamp', size: '5.1 GB', format: 'MP4' }
    ]
  },
  {
    id: 3,
    name: 'Programming Books',
    description: 'Comprehensive e-books covering various programming topics and best practices.',
    icon: BookOpenIcon,
    category: 'Books',
    items: [
      { name: 'Clean Code by Robert Martin', size: '15 MB', format: 'PDF' },
      { name: 'Design Patterns', size: '12 MB', format: 'PDF' },
      { name: 'System Design Interview', size: '18 MB', format: 'PDF' }
    ]
  },
  {
    id: 4,
    name: 'Code Templates',
    description: 'Ready-to-use code templates and boilerplates for various frameworks.',
    icon: CodeBracketIcon,
    category: 'Code',
    items: [
      { name: 'React Boilerplate', size: '45 MB', format: 'ZIP' },
      { name: 'Node.js API Template', size: '32 MB', format: 'ZIP' },
      { name: 'Next.js Starter Kit', size: '28 MB', format: 'ZIP' }
    ]
  },
  {
    id: 5,
    name: 'Development Tools',
    description: 'Essential software and tools for developers.',
    icon: ComputerDesktopIcon,
    category: 'Software',
    items: [
      { name: 'VS Code Extensions Pack', size: '120 MB', format: 'VSIX' },
      { name: 'Development Environment Setup', size: '250 MB', format: 'EXE' },
      { name: 'Database Management Tools', size: '180 MB', format: 'DMG' }
    ]
  },
  {
    id: 6,
    name: 'Documentation',
    description: 'Comprehensive documentation and guides for various technologies.',
    icon: DocumentTextIcon,
    category: 'Docs',
    items: [
      { name: 'API Documentation', size: '8 MB', format: 'PDF' },
      { name: 'System Architecture Guide', size: '12 MB', format: 'PDF' },
      { name: 'Security Best Practices', size: '6 MB', format: 'PDF' }
    ]
  }
]

const categories = [
  { name: 'All', count: resources.length },
  { name: 'Courses', count: resources.filter(r => r.category === 'Courses').length },
  { name: 'Books', count: resources.filter(r => r.category === 'Books').length },
  { name: 'Code', count: resources.filter(r => r.category === 'Code').length },
  { name: 'Software', count: resources.filter(r => r.category === 'Software').length },
  { name: 'Docs', count: resources.filter(r => r.category === 'Docs').length }
]

export default function DownloadsPage() {
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
                Download Resources
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Access premium courses, books, code templates, and development tools. Everything you need to accelerate your learning and development journey.
              </p>
            </div>
            <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Learning resources"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={sectionVariants}
      >
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-indigo-600 transition-colors"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </motion.div>

      {/* Resources Grid */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              className="group relative bg-gray-800/50 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <resource.icon className="h-8 w-8 text-indigo-400" />
                  <h3 className="text-lg font-semibold text-white">{resource.name}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-300">{resource.description}</p>
                <div className="mt-4 space-y-3">
                  {resource.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <BookmarkIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400">{item.size}</span>
                        <span className="text-gray-400">{item.format}</span>
                        <button className="text-indigo-400 hover:text-indigo-300">
                          <ArrowDownTrayIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
            Need More Resources?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Join our community to get access to exclusive content and early releases.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="/join"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join Now
            </a>
            <a href="/community" className="text-sm font-semibold leading-6 text-gray-300">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 