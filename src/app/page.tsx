import { ArrowRightIcon, CodeBracketIcon, ServerIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const categories = [
  {
    name: "Frontend Development",
    description: "Get help with React, Next.js, and other frontend technologies",
    icon: CodeBracketIcon,
    href: "/categories/frontend",
  },
  {
    name: "Backend Development",
    description: "Learn about Node.js, databases, and server-side programming",
    icon: ServerIcon,
    href: "/categories/backend",
  },
  {
    name: "DevOps & Infrastructure",
    description: "Questions about deployment, CI/CD, and cloud services",
    icon: WrenchScrewdriverIcon,
    href: "/categories/devops",
  },
  {
    name: "Networking & Security",
    description: "Get help with network configuration and security best practices",
    icon: ServerIcon,
    href: "/categories/networking",
  },
];

const resources = [
  {
    name: "Documentation",
    description: "Browse our comprehensive documentation",
    href: "/docs",
  },
  {
    name: "Code Examples",
    description: "View example code and solutions",
    href: "/examples",
  },
  {
    name: "Video Tutorials",
    description: "Watch step-by-step tutorials",
    href: "/tutorials",
  },
  {
    name: "Community Forums",
    description: "Join discussions with other developers",
    href: "/forums",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to Deadwood Help Desk
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Your one-stop destination for all development questions. Get help from experienced developers and share your knowledge with the community.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/ask"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Ask a Question
              </Link>
              <Link href="/browse" className="text-sm font-semibold leading-6 text-white">
                Browse Resources <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Categories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find Help in Your Area
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Browse through our categories to find the help you need. From frontend to backend, we&apos;ve got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <category.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {category.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{category.description}</p>
                  <p className="mt-6">
                    <Link href={category.href} className="text-sm font-semibold leading-6 text-blue-400">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Resources</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything You Need
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Access our comprehensive resources to help you learn and grow as a developer.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {resources.map((resource) => (
                <div key={resource.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    {resource.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                    <p className="flex-auto">{resource.description}</p>
                    <p className="mt-6">
                      <Link href={resource.href} className="text-sm font-semibold leading-6 text-blue-400">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
