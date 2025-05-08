'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpenIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

const learningPaths = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with modern technologies.',
    duration: '6 months',
    level: 'Intermediate',
    topics: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: CodeBracketIcon,
  },
  {
    id: 2,
    title: 'Cloud Architecture',
    description: 'Learn to design and deploy scalable cloud solutions.',
    duration: '4 months',
    level: 'Advanced',
    topics: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    icon: RocketLaunchIcon,
  },
  {
    id: 3,
    title: 'Data Science',
    description: 'Explore data analysis, machine learning, and AI fundamentals.',
    duration: '5 months',
    level: 'Intermediate',
    topics: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    icon: ChartBarIcon,
  },
]

const featuredCourses = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Learn the basics of React and build your first application.',
    duration: '4 weeks',
    level: 'Beginner',
    instructor: 'Sarah Chen',
    students: 1200,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Advanced TypeScript',
    description: 'Master TypeScript and build type-safe applications.',
    duration: '6 weeks',
    level: 'Advanced',
    instructor: 'Michael Park',
    students: 850,
    rating: 4.9,
  },
  {
    id: 3,
    title: 'System Design',
    description: 'Learn to design scalable and maintainable systems.',
    duration: '8 weeks',
    level: 'Advanced',
    instructor: 'Alex Rivera',
    students: 650,
    rating: 4.7,
  },
]

const stats = [
  { id: 1, name: 'Active Students', value: '25,000+' },
  { id: 2, name: 'Course Hours', value: '500+' },
  { id: 3, name: 'Expert Instructors', value: '50+' },
  { id: 4, name: 'Success Rate', value: '95%' },
]

export default function TutorialsPage() {
  const [selectedPath, setSelectedPath] = useState(null)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Master Software Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive tutorials and learning paths to help you become a professional software developer.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#start-learning"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Learning
              </a>
              <a href="#explore" className="text-sm font-semibold leading-6 text-gray-900">
                Explore Courses <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by developers worldwide
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Learning Paths Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Learning Paths</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Structured Learning Programs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow our comprehensive learning paths to master specific areas of software development.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {learningPaths.map((path) => (
              <motion.div
                key={path.id}
                className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <path.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">{path.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{path.description}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2">{path.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{path.level}</span>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <a
                    href={`#path-${path.id}`}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Start Learning <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Featured Courses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Courses
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2">{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">Instructor: {course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">{course.students} students</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-gray-500">{course.rating} rating</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <a
                    href={`#course-${course.id}`}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Enroll Now <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Your Learning Journey Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of developers who have transformed their careers with our comprehensive tutorials.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#enroll"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enroll Now
            </a>
            <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 