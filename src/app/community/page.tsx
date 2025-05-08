'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  BookOpenIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Developer Forums',
    description: 'Join discussions on programming languages, frameworks, and best practices.',
    icon: ChatBubbleLeftRightIcon,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Code Collaboration',
    description: 'Work together on projects, share code snippets, and get feedback.',
    icon: CodeBracketIcon,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Learning Groups',
    description: 'Form study groups and learn together with peers at your level.',
    icon: BookOpenIcon,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Project Showcase',
    description: 'Share your projects and get feedback from the community.',
    icon: RocketLaunchIcon,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mentorship Program',
    description: 'Connect with experienced developers for guidance and support.',
    icon: UserGroupIcon,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Community Events',
    description: 'Participate in hackathons, workshops, and networking events.',
    icon: SparklesIcon,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

const stats = [
  { id: 1, name: 'Active Members', value: '10,000+' },
  { id: 2, name: 'Daily Discussions', value: '500+' },
  { id: 3, name: 'Projects Shared', value: '2,000+' },
  { id: 4, name: 'Countries Represented', value: '50+' },
]

const recentDiscussions = [
  {
    id: 1,
    title: 'Best practices for React performance optimization',
    author: 'Sarah Chen',
    replies: 24,
    views: 156,
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'Getting started with Rust for web development',
    author: 'Alex Rivera',
    replies: 18,
    views: 98,
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Building scalable microservices architecture',
    author: 'Michael Park',
    replies: 32,
    views: 210,
    category: 'Architecture',
  },
]

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

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions')

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
                Join Our Developer Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Connect with fellow developers, share knowledge, and grow together in our vibrant community.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#join"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Now
                </a>
                <a href="#explore" className="text-sm font-semibold leading-6 text-gray-300">
                  Explore Community <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 flex-1 lg:mt-0">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Developer community collaboration"
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

      {/* Features Section */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Community Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to grow as a developer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our community provides the tools and support you need to advance your career in software development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>

      {/* Recent Discussions Section */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Community Activity</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Discussions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {recentDiscussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                className="flex flex-col bg-gray-800/50 shadow-lg rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`https://images.unsplash.com/photo-${discussion.id === 1 ? '1552664730-d307ca884978' : discussion.id === 2 ? '1555066931-4365d14bab8c' : '1522071820081-009f0129c71c'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={discussion.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{discussion.title}</h3>
                    <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400">
                      {discussion.category}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-400">
                    <span>By {discussion.author}</span>
                    <span className="mx-2">•</span>
                    <span>{discussion.replies} replies</span>
                    <span className="mx-2">•</span>
                    <span>{discussion.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Ready to join our community?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Connect with developers worldwide, share your knowledge, and grow your skills.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up now
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