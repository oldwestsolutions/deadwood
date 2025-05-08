import Link from 'next/link';
import Head from 'next/head';

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Community - Deadwood Software</title>
      </Head>
      <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-2xl p-8 border-4 border-blue-700">
          <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Community</h1>
          <p className="text-lg text-slate-300 mb-8 text-center">
            Join live discussions, ask questions, and network with top developers worldwide in the Deadwood Software community.
          </p>
          <div className="text-center">
            <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
          </div>
          {/* Add more community sections/components here */}
        </div>
      </div>
    </>
  );
} 