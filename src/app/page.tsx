import { ArrowRightIcon, CodeBracketIcon, ServerIcon, WrenchScrewdriverIcon, BookOpenIcon } from "@heroicons/react/24/outline";
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
    image: "/devopss.png",
  },
  {
    name: "Networking & Security",
    description: "Level up your network configuration, security best practices, and power-user connectivity.",
    icon: ServerIcon,
    href: "/categories/networking",
    image: "/networkings.png",
  },
];

const resources = [
  {
    name: "Downloads",
    description: "Browse our ever-growing, in-depth downloads for every major technology and tool.",
    href: "/downloads",
  },
  {
    name: "Applications",
    description: "Explore real code samples, reusable snippets, and full-stack solutions.",
    href: "/applications",
  },
  {
    name: "Resources",
    description: "Access comprehensive learning materials and guides.",
    href: "/resources",
    icon: BookOpenIcon,
  },
  {
    name: "Community",
    description: "Join live discussions, ask questions, and network with top developers worldwide.",
    href: "/community",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-8 sm:pb-24 lg:flex lg:px-8 lg:py-32 items-center flex-col-reverse lg:flex-row">
          {/* Right column: image (move to top on mobile, much larger on desktop) */}
          <div className="w-full flex justify-center items-center mt-8 mb-4 lg:mt-0 lg:ml-16 order-1 lg:order-2">
            <Image
              src="/nftart.jpeg"
              alt="NFT Art"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl object-cover border-4 border-blue-500 max-w-full h-auto lg:w-[700px] lg:h-[500px] w-[90vw] h-[40vw] min-h-[220px]"
              priority
            />
          </div>
          {/* Left column: text, buttons, etc. */}
          <div className="w-full max-w-2xl flex-shrink-0 mx-auto lg:mx-0 lg:max-w-xl lg:pt-8 text-white text-center lg:text-left order-2 lg:order-1">
            <h1 className="mt-8 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Deadwood Developer Community
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-6 text-slate-300">
              Unlock unlimited resources to learn coding, data science, and analysis. Connect instantly with top developers, access powerful networking, and leverage Snap Chat-style collaboration—all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 justify-center lg:justify-start">
              <Link
                href="/join"
                className="rounded-md bg-blue-600 px-5 py-3 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full sm:w-auto text-center"
              >
                Become a Member
              </Link>
              <Link href="/newsletter" className="text-base sm:text-lg font-semibold leading-6 text-white w-full sm:w-auto text-center">
                Newsletter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col gap-12 sm:gap-16">
          {categories.map((category, idx) => (
            <section key={category.name} className={`flex flex-col md:flex-row items-stretch bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-700 min-h-[320px] ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image side (half section) */}
              <div className="relative w-full md:w-1/2 h-56 md:h-auto flex-shrink-0">
                <Image
                  src={category.image}
                  alt={category.name + ' image'}
                  fill
                  className="object-cover w-full h-full"
                  style={{ zIndex: 0 }}
                />
                {/* Gradient fade overlay (direction depends on card order) */}
                <div className={`absolute inset-0 pointer-events-none ${idx % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-slate-800/0 via-slate-800/60 to-slate-800`}></div>
              </div>
              {/* Text side */}
              <div className="flex-1 flex flex-col items-start justify-center p-6 sm:p-10 text-center md:text-left">
                <category.icon className="h-10 w-10 sm:h-14 sm:w-14 text-blue-400 mb-4 sm:mb-6 mx-auto md:mx-0" aria-hidden="true" />
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 sm:mb-4">{category.name}</h3>
                <p className="text-lg sm:text-2xl text-slate-300 mb-4 sm:mb-8">{category.description}</p>
                <Link href={category.href} className="inline-flex items-center text-blue-400 font-bold hover:underline text-lg sm:text-2xl">
                  Learn more <ArrowRightIcon className="ml-2 sm:ml-3 h-5 w-5 sm:h-7 sm:w-7" />
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Resources</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Unlimited Developer Resources
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-slate-300">
              Access documentation, code examples, video tutorials, and community forums to accelerate your learning and connect with the best in tech.
            </p>
          </div>
          <div className="mx-auto mt-10 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-2">
              {resources.map((resource) => (
                <div key={resource.name} className="flex flex-col">
                  <dt className="text-base sm:text-lg font-semibold leading-7 text-white">
                    {resource.name}
                  </dt>
                  <dd className="mt-2 sm:mt-4 flex flex-auto flex-col text-base sm:text-lg leading-7 text-slate-300">
                    <p className="flex-auto">
                      {resource.name === "Downloads" && "Browse our ever-growing, in-depth downloads for every major technology and tool."}
                      {resource.name === "Applications" && "Explore real code samples, reusable snippets, and full-stack solutions."}
                      {resource.name === "Resources" && "Access comprehensive learning materials and guides to master new skills."}
                      {resource.name === "Community" && "Join live discussions, ask questions, and network with top developers worldwide."}
                    </p>
                    <p className="mt-4 sm:mt-6">
                      <Link href={resource.href} className="text-sm sm:text-base font-semibold leading-6 text-blue-400">
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
