import Link from 'next/link';
import { adminDb } from '@/lib/firebase-admin';
import {
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  BookOpenIcon,
  CodeBracketIcon,
  VideoCameraIcon,
  CommandLineIcon,
  ServerIcon,
  ShieldCheckIcon,
  BeakerIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ClockIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

type Question = {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
  tags: string[];
  createdAt: Date;
  answerCount: number;
  voteCount: number;
};

type Tag = {
  id: string;
  name: string;
  questionCount: number;
};

type User = {
  id: string;
  name: string;
  reputation: number;
  questionCount: number;
  answerCount: number;
};

const categories = [
  {
    name: 'Frontend Development',
    icon: CommandLineIcon,
    description: 'HTML, CSS, JavaScript, React, Vue, Angular',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'Backend Development',
    icon: ServerIcon,
    description: 'Node.js, Python, Java, Databases, APIs',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'DevOps & Infrastructure',
    icon: ShieldCheckIcon,
    description: 'Docker, Kubernetes, CI/CD, Cloud Services',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Networking & Security',
    icon: ShieldCheckIcon,
    description: 'Network Protocols, Security, Authentication',
    color: 'from-emerald-500 to-teal-500',
  },
];

const resources = [
  {
    name: 'Documentation',
    icon: BookOpenIcon,
    description: 'Comprehensive guides and tutorials',
    link: '/docs',
  },
  {
    name: 'Code Examples',
    icon: CodeBracketIcon,
    description: 'Ready-to-use code snippets',
    link: '/examples',
  },
  {
    name: 'Video Tutorials',
    icon: VideoCameraIcon,
    description: 'Step-by-step video guides',
    link: '/tutorials',
  },
  {
    name: 'Community Forums',
    icon: UserGroupIcon,
    description: 'Connect with other developers',
    link: '/forums',
  },
];

const stats = [
  { name: 'Active Users', value: '10K+' },
  { name: 'Questions Answered', value: '50K+' },
  { name: 'Expert Contributors', value: '1K+' },
  { name: 'Success Rate', value: '98%' },
];

const featuredTopics = [
  {
    name: 'React Development',
    description: 'Master modern React patterns and best practices',
    icon: BeakerIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Cloud Architecture',
    description: 'Design scalable cloud solutions',
    icon: CloudArrowUpIcon,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'AI & Machine Learning',
    description: 'Explore AI development and ML models',
    icon: CpuChipIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Web Security',
    description: 'Secure your applications and data',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-orange-500',
  },
];

const learningPaths = [
  {
    name: 'Frontend Developer',
    description: 'Master modern web development',
    duration: '6 months',
    level: 'Beginner to Advanced',
    icon: CommandLineIcon,
  },
  {
    name: 'Backend Engineer',
    description: 'Build scalable server applications',
    duration: '8 months',
    level: 'Intermediate to Advanced',
    icon: ServerIcon,
  },
  {
    name: 'DevOps Engineer',
    description: 'Deploy and maintain infrastructure',
    duration: '6 months',
    level: 'Intermediate',
    icon: CommandLineIcon,
  },
  {
    name: 'Full Stack Developer',
    description: 'End-to-end application development',
    duration: '12 months',
    level: 'Advanced',
    icon: GlobeAltIcon,
  },
];

async function getFeaturedQuestions() {
  const questionsSnapshot = await adminDb
    .collection('questions')
    .orderBy('createdAt', 'desc')
    .limit(5)
    .get();

  const questions = await Promise.all(
    questionsSnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const authorDoc = await adminDb.collection('users').doc(data.authorId).get();
      const author = authorDoc.data();

      const answersSnapshot = await adminDb
        .collection('answers')
        .where('questionId', '==', doc.id)
        .get();

      const votesSnapshot = await adminDb
        .collection('votes')
        .where('questionId', '==', doc.id)
        .get();

      return {
        id: doc.id,
        title: data.title,
        content: data.content,
        author: {
          id: author?.id,
          name: author?.name,
          email: author?.email,
        },
        tags: data.tags || [],
        createdAt: data.createdAt.toDate(),
        answerCount: answersSnapshot.size,
        voteCount: votesSnapshot.size,
      };
    })
  );

  return questions;
}

async function getPopularTags() {
  const tagsSnapshot = await adminDb
    .collection('tags')
    .orderBy('questionCount', 'desc')
    .limit(10)
    .get();

  return tagsSnapshot.docs.map(doc => ({
    id: doc.id,
    name: doc.data().name,
    questionCount: doc.data().questionCount,
  }));
}

async function getTopUsers() {
  const usersSnapshot = await adminDb
    .collection('users')
    .orderBy('reputation', 'desc')
    .limit(5)
    .get();

  return usersSnapshot.docs.map(doc => ({
    id: doc.id,
    name: doc.data().name,
    reputation: doc.data().reputation,
    questionCount: doc.data().questionCount,
    answerCount: doc.data().answerCount,
  }));
}

export default async function Home() {
  const [questions, tags, users] = await Promise.all([
    getFeaturedQuestions(),
    getPopularTags(),
    getTopUsers(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  Latest Updates
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span>New features available</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Deadwood Help Desk
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your comprehensive platform for development support, knowledge sharing, and community collaboration.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/questions/ask"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Ask a Question
              </Link>
              <Link href="/resources" className="text-sm font-semibold leading-6 text-white">
                Browse Resources <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by developers worldwide
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-slate-800/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Featured Topics */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Featured Topics</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trending in Development
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {featuredTopics.map((topic) => (
            <div
              key={topic.name}
              className="flex flex-col justify-between rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 xl:p-10"
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <topic.icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-8 text-white">{topic.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="bg-slate-800/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Learning Paths</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Structured Learning Journeys
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {learningPaths.map((path) => (
              <div
                key={path.name}
                className="flex flex-col justify-between rounded-2xl bg-slate-800 p-8 ring-1 ring-slate-700"
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    <path.icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
                    <h3 className="text-lg font-semibold leading-8 text-white">{path.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">{path.description}</p>
                  <div className="mt-6 flex items-center gap-x-4 text-sm text-gray-400">
                    <ClockIcon className="h-5 w-5" />
                    <span>{path.duration}</span>
                    <span>•</span>
                    <span>{path.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Categories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore Development Topics
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col justify-between rounded-2xl bg-slate-800/50 p-8 ring-1 ring-slate-700 xl:p-10"
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <category.icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-8 text-white">{category.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-slate-800/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Resources</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Learning Materials
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {resources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.link}
                className="flex flex-col justify-between rounded-2xl bg-slate-800 p-8 ring-1 ring-slate-700 hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    <resource.icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
                    <h3 className="text-lg font-semibold leading-8 text-white">{resource.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {/* Latest Questions */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-slate-800/50 ring-1 ring-slate-700">
              <div className="px-4 py-5 sm:px-6 border-b border-slate-700">
                <h2 className="text-lg font-semibold leading-8 text-white">Latest Questions</h2>
              </div>
              <div className="divide-y divide-slate-700">
                {questions.map((question) => (
                  <div key={question.id} className="p-6 hover:bg-slate-700/50 transition-colors duration-200">
                    <Link href={`/questions/${question.id}`} className="block">
                      <h3 className="text-lg font-semibold text-blue-400 hover:text-blue-300">
                        {question.title}
                      </h3>
                      <div className="mt-2 text-sm text-gray-300">
                        <p>{question.content.substring(0, 200)}...</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-400">
                            <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500 mr-1.5" />
                            {question.answerCount} answers
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <ArrowTrendingUpIcon className="h-5 w-5 text-gray-500 mr-1.5" />
                            {question.voteCount} votes
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">
                          Asked by {question.author.name}
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {question.tags.map((tag: string) => (
                          <Link
                            key={tag}
                            href={`/tags/${tag}`}
                            className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-slate-600"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Tags */}
            <div className="rounded-2xl bg-slate-800/50 ring-1 ring-slate-700">
              <div className="px-4 py-5 sm:px-6 border-b border-slate-700">
                <h2 className="text-lg font-semibold leading-8 text-white">Popular Tags</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/tags/${tag.name}`}
                      className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-sm font-medium text-gray-300 hover:bg-slate-600"
                    >
                      {tag.name}
                      <span className="ml-1 text-gray-400">({tag.questionCount})</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="rounded-2xl bg-slate-800/50 ring-1 ring-slate-700">
              <div className="px-4 py-5 sm:px-6 border-b border-slate-700">
                <h2 className="text-lg font-semibold leading-8 text-white">Top Contributors</h2>
              </div>
              <div className="divide-y divide-slate-700">
                {users.map((user) => (
                  <div key={user.id} className="p-6">
                    <Link href={`/users/${user.id}`} className="block">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.reputation} reputation</p>
                        </div>
                        <div className="text-sm text-gray-400">
                          <p>{user.questionCount} questions</p>
                          <p>{user.answerCount} answers</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
