import { ArrowRightIcon, CodeBracketIcon, ServerIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from 'next/image';

const categories = [
  {
    name: "Frontend Development",
    description: "Master React, Next.js, and the latest frontend frameworks with hands-on help and real-world projects.",
    icon: CodeBracketIcon,
    href: "/categories/frontend",
    image: "/frontend.png",
  },
  {
    name: "Backend Development",
    description: "Build robust APIs, work with databases, and learn server-side programming from industry experts.",
    icon: ServerIcon,
    href: "/categories/backend",
    image: "/backend.png",
  },
  {
    name: "DevOps & Infrastructure",
    description: "Automate deployments, manage cloud infrastructure, and streamline your CI/CD pipelines.",
    icon: WrenchScrewdriverIcon,
    href: "/categories/devops",
    image: "/devops.jpg",
  },
  {
    name: "Networking & Security",
    description: "Level up your network configuration, security best practices, and power-user connectivity.",
    icon: ServerIcon,
    href: "/categories/networking",
    image: "/networking.jpg",
  },
];

const resources = [
  {
    name: "Documentation",
    description: "Browse our ever-growing, in-depth documentation for every major technology and tool.",
    href: "/docs",
  },
  {
    name: "Code Examples",
    description: "Explore real code samples, reusable snippets, and full-stack solutions.",
    href: "/examples",
  },
  {
    name: "Video Tutorials",
    description: "Watch step-by-step video guides and master new skills visually.",
    href: "/tutorials",
  },
  {
    name: "Community Forums",
    description: "Join live discussions, ask questions, and network with top developers worldwide.",
    href: "/forums",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 items-center">
          {/* Left column: text, buttons, etc. */}
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 text-white">
            <h1 className="mt-10 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              Deadwood Developer Community
            </h1>
            <p className="mt-6 text-2xl leading-9 text-slate-300">
              Unlock unlimited resources to learn coding, data science, and analysis. Connect instantly with top developers, access powerful networking, and leverage Snap Chat-style collaboration—all in one place.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/join"
                className="rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Become a Member
              </Link>
              <Link href="/newsletter" className="text-lg font-semibold leading-6 text-white">
                Newsletter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          {/* Right column: image */}
          <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 lg:ml-16">
            <Image
              src="/nftart.jpeg"
              alt="NFT Art"
              width={800}
              height={540}
              className="rounded-3xl shadow-2xl object-cover border-4 border-blue-500 max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col gap-20">
          {categories.map((category, idx) => (
            <section key={category.name} className={`flex flex-col-reverse md:flex-row items-center bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-700 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Left: Icon, Title, Description, Link */}
              <div className="flex-1 p-16 flex flex-col items-start justify-center">
                <category.icon className="h-14 w-14 text-blue-400 mb-6" aria-hidden="true" />
                <h3 className="text-4xl font-extrabold text-white mb-4">{category.name}</h3>
                <p className="text-2xl text-slate-300 mb-8">{category.description}</p>
                <Link href={category.href} className="inline-flex items-center text-blue-400 font-bold hover:underline text-2xl">
                  Learn more <ArrowRightIcon className="ml-3 h-7 w-7" />
                </Link>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center items-center p-12">
                <Image
                  src={category.image}
                  alt={category.name + ' image'}
                  width={520}
                  height={340}
                  className="rounded-2xl shadow-2xl object-cover max-w-full h-auto border-4 border-blue-500"
                />
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Resources</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Unlimited Developer Resources
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Access documentation, code examples, video tutorials, and community forums to accelerate your learning and connect with the best in tech.
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
                    <p className="flex-auto">
                      {resource.name === "Documentation" && "Browse our ever-growing, in-depth documentation for every major technology and tool."}
                      {resource.name === "Code Examples" && "Explore real code samples, reusable snippets, and full-stack solutions."}
                      {resource.name === "Video Tutorials" && "Watch step-by-step video guides and master new skills visually."}
                      {resource.name === "Community Forums" && "Join live discussions, ask questions, and network with top developers worldwide."}
                    </p>
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
