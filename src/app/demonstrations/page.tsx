import Link from 'next/link';

export default function DemonstrationsPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-2xl p-8 border-4 border-blue-700">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Demonstrations</h1>
        <p className="text-lg text-slate-300 mb-8 text-center">
          Explore real code samples, reusable snippets, and full-stack solutions to accelerate your learning with Deadwood Software.
        </p>
        <div className="text-center">
          <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
        {/* Add more demonstration sections/components here */}
      </div>
    </div>
  );
} 