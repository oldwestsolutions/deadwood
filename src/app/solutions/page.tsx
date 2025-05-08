'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CodeBracketIcon,
  CpuChipIcon,
  CubeIcon,
  BeakerIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  ServerIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const categories = [
  {
    name: 'Programming Languages',
    icon: CodeBracketIcon,
    items: [
      {
        name: 'Frontend Languages',
        technologies: [
          { name: 'JavaScript/TypeScript', description: 'Core web development languages' },
          { name: 'HTML5/CSS3', description: 'Web structure and styling' },
          { name: 'React', description: 'UI library for building interactive applications' },
          { name: 'Vue.js', description: 'Progressive JavaScript framework' },
          { name: 'Angular', description: 'Platform for building web applications' },
        ]
      },
      {
        name: 'Backend Languages',
        technologies: [
          { name: 'Python', description: 'Versatile language for web, data science, and AI' },
          { name: 'Java', description: 'Enterprise-grade application development' },
          { name: 'Node.js', description: 'JavaScript runtime for server-side applications' },
          { name: 'Go', description: 'Efficient language for cloud-native applications' },
          { name: 'Rust', description: 'Systems programming with memory safety' },
        ]
      },
      {
        name: 'Mobile Development',
        technologies: [
          { name: 'Swift', description: 'iOS and macOS development' },
          { name: 'Kotlin', description: 'Android development' },
          { name: 'Flutter', description: 'Cross-platform mobile framework' },
          { name: 'React Native', description: 'Native apps with React' },
        ]
      }
    ]
  },
  {
    name: 'Hardware & Systems',
    icon: CpuChipIcon,
    items: [
      {
        name: 'Computer Architecture',
        technologies: [
          { name: 'CPU Architecture', description: 'Processor design and optimization' },
          { name: 'Memory Systems', description: 'RAM, cache, and storage hierarchies' },
          { name: 'GPU Computing', description: 'Parallel processing and graphics' },
          { name: 'Quantum Computing', description: 'Quantum bits and algorithms' },
        ]
      },
      {
        name: 'Embedded Systems',
        technologies: [
          { name: 'Microcontrollers', description: 'Arduino, Raspberry Pi, ESP32' },
          { name: 'IoT Devices', description: 'Connected device development' },
          { name: 'Real-time Systems', description: 'Time-critical applications' },
        ]
      }
    ]
  },
  {
    name: 'Physics & Simulation',
    icon: BeakerIcon,
    items: [
      {
        name: 'Game Physics',
        technologies: [
          { name: 'Unity Physics', description: '3D physics simulation engine' },
          { name: 'Unreal Engine Physics', description: 'Advanced physics simulation' },
          { name: 'Box2D', description: '2D physics engine' },
          { name: 'Havok', description: 'Commercial physics middleware' },
        ]
      },
      {
        name: 'Scientific Computing',
        technologies: [
          { name: 'Quantum Physics', description: 'Quantum mechanics simulation' },
          { name: 'Particle Systems', description: 'Particle simulation and effects' },
          { name: 'Fluid Dynamics', description: 'Liquid and gas simulation' },
        ]
      }
    ]
  },
  {
    name: 'Game Engines',
    icon: CubeIcon,
    items: [
      {
        name: 'Commercial Engines',
        technologies: [
          { name: 'Unity', description: 'Cross-platform game engine' },
          { name: 'Unreal Engine', description: 'High-end game development' },
          { name: 'Godot', description: 'Open-source game engine' },
          { name: 'CryEngine', description: 'Advanced graphics engine' },
        ]
      },
      {
        name: 'Specialized Tools',
        technologies: [
          { name: 'Autodesk Maya', description: '3D modeling and animation' },
          { name: 'Blender', description: 'Open-source 3D creation suite' },
          { name: 'Substance Painter', description: '3D texturing software' },
        ]
      }
    ]
  },
  {
    name: 'Enterprise Software',
    icon: ServerIcon,
    items: [
      {
        name: 'Business Solutions',
        technologies: [
          { name: 'Guidewire', description: 'Insurance platform development' },
          { name: 'Salesforce', description: 'CRM and business applications' },
          { name: 'SAP', description: 'Enterprise resource planning' },
          { name: 'Oracle', description: 'Database and business applications' },
        ]
      },
      {
        name: 'Cloud Platforms',
        technologies: [
          { name: 'AWS', description: 'Amazon Web Services' },
          { name: 'Azure', description: 'Microsoft Cloud Platform' },
          { name: 'Google Cloud', description: 'Google Cloud Platform' },
          { name: 'IBM Cloud', description: 'Enterprise cloud solutions' },
        ]
      }
    ]
  },
  {
    name: 'Development Tools',
    icon: WrenchScrewdriverIcon,
    items: [
      {
        name: 'Version Control',
        technologies: [
          { name: 'Git', description: 'Distributed version control' },
          { name: 'GitHub', description: 'Code hosting and collaboration' },
          { name: 'GitLab', description: 'DevOps platform' },
        ]
      },
      {
        name: 'Development Environments',
        technologies: [
          { name: 'VS Code', description: 'Lightweight code editor' },
          { name: 'IntelliJ IDEA', description: 'Java IDE' },
          { name: 'PyCharm', description: 'Python IDE' },
          { name: 'Eclipse', description: 'Open-source IDE' },
        ]
      }
    ]
  }
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
              Software Development Resources
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive guide to programming languages, tools, frameworks, and technologies for modern software development.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category.name
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`space-y-8 ${activeCategory === category.name ? 'block' : 'hidden'}`}
          >
            <div className="flex items-center space-x-3">
              <category.icon className="h-8 w-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-white">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div key={item.name} className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{item.name}</h3>
                  <div className="space-y-4">
                    {item.technologies.map((tech) => (
                      <div key={tech.name} className="bg-slate-700/50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-purple-400">{tech.name}</h4>
                        <p className="mt-1 text-slate-300">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Start Learning?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Explore our comprehensive learning resources and start your development journey today.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/products/academy"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Start Learning
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 