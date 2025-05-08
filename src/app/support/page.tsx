import Link from 'next/link';
import Head from 'next/head';
import { FaMagic, FaSmileBeam, FaQuestionCircle, FaRocket, FaHandsHelping, FaBookOpen } from 'react-icons/fa';

const supportTopics = [
  {
    icon: 'magic',
    title: 'Getting Started',
    desc: 'Begin your magical journey with our onboarding guides and tips!',
    color: 'from-pink-200 via-pink-100 to-yellow-100',
  },
  {
    icon: 'smile',
    title: 'Account Help',
    desc: 'Lost in the castle? We\'ll help you find your way back to your account.',
    color: 'from-yellow-200 via-yellow-100 to-pink-100',
  },
  {
    icon: 'question',
    title: 'FAQs',
    desc: 'Find answers to common questions from our enchanted library.',
    color: 'from-blue-200 via-blue-100 to-pink-100',
  },
  {
    icon: 'rocket',
    title: 'Product Tours',
    desc: 'Take a magic carpet ride through our features and tools!',
    color: 'from-purple-200 via-purple-100 to-blue-100',
  },
  {
    icon: 'hands',
    title: 'Contact Support',
    desc: 'Our friendly helpers are always here for you—just whistle!',
    color: 'from-green-200 via-green-100 to-blue-100',
  },
  {
    icon: 'book',
    title: 'Guides & Resources',
    desc: 'Unlock spellbooks and scrolls to master every challenge.',
    color: 'from-indigo-200 via-indigo-100 to-pink-100',
  },
];

function getIcon(icon: string) {
  switch (icon) {
    case 'magic': return <FaMagic className="text-pink-400 text-4xl mb-2" />;
    case 'smile': return <FaSmileBeam className="text-yellow-400 text-4xl mb-2" />;
    case 'question': return <FaQuestionCircle className="text-blue-400 text-4xl mb-2" />;
    case 'rocket': return <FaRocket className="text-purple-400 text-4xl mb-2" />;
    case 'hands': return <FaHandsHelping className="text-green-400 text-4xl mb-2" />;
    case 'book': return <FaBookOpen className="text-indigo-400 text-4xl mb-2" />;
    default: return null;
  }
}

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support - Deadwood Software</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-100 to-yellow-100 relative overflow-hidden">
        {/* Magical sparkles background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-[url('/magic-sparkles.png')] bg-repeat opacity-30" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-400 drop-shadow-lg font-[cursive]">Support Center</h1>
            <p className="mt-4 text-xl md:text-2xl text-blue-700 font-semibold drop-shadow-sm font-[cursive]">Welcome to the happiest help desk on earth! How can we make your day magical?</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportTopics.map((topic, idx) => (
              <div
                key={idx}
                className={`rounded-3xl shadow-xl p-8 flex flex-col items-center text-center bg-gradient-to-br ${topic.color} hover:scale-105 transition-transform duration-300 cursor-pointer border-4 border-white/40`}
              >
                {getIcon(topic.icon)}
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-[cursive]">{topic.title}</h2>
                <p className="text-blue-800 font-medium font-[cursive]">{topic.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-300 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform font-[cursive]">Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
} 