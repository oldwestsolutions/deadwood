'use client';
import Link from 'next/link';

const articles = [
  {
    title: 'AI Revolutionizes Software Development',
    summary: 'How artificial intelligence is changing the way we build and ship code.',
    image: '/featured1.jpg',
    featured: true,
  },
  {
    title: 'The Future of Cloud Infrastructure',
    summary: 'A look at the next generation of scalable, secure cloud platforms.',
    image: '/featured2.jpg',
    featured: true,
  },
  {
    title: 'Open Source: Powering Innovation',
    summary: 'Why open source is the backbone of modern technology.',
    image: '/featured3.jpg',
    featured: true,
  },
  {
    title: 'How to Build a Modern Web App',
    summary: 'A step-by-step guide to building scalable web applications.',
    image: '',
    featured: false,
  },
  {
    title: 'Understanding TypeScript',
    summary: 'Why TypeScript is essential for large-scale JavaScript projects.',
    image: '',
    featured: false,
  },
  {
    title: 'Security Best Practices',
    summary: 'Keep your applications and data safe with these tips.',
    image: '',
    featured: false,
  },
  {
    title: 'The Rise of Serverless',
    summary: 'How serverless architecture is changing the cloud landscape.',
    image: '',
    featured: false,
  },
  {
    title: 'UI/UX Trends in 2024',
    summary: 'What designers and developers need to know this year.',
    image: '',
    featured: false,
  },
  {
    title: 'DevOps for Startups',
    summary: 'How small teams can leverage DevOps for rapid growth.',
    image: '',
    featured: false,
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-8 text-center font-serif tracking-tight">Research</h1>
        {/* NYT-style Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured articles: span 2 columns on desktop */}
          {articles.filter(a => a.featured).map((article, idx) => (
            <div
              key={article.title}
              className="relative bg-white rounded-2xl shadow-xl border-2 border-blue-700 p-8 flex flex-col justify-between md:col-span-2 min-h-[320px] md:min-h-[400px] overflow-hidden"
            >
              {article.image && (
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 via-white to-slate-200 opacity-60 absolute" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-2xl opacity-40"
                  />
                </div>
              )}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif drop-shadow-lg">{article.title}</h2>
                <p className="text-lg text-slate-700 mb-4 font-serif drop-shadow-sm">{article.summary}</p>
                <span className="mt-auto text-blue-600 font-semibold hover:underline text-left cursor-pointer">Read more</span>
              </div>
            </div>
          ))}
          {/* Regular articles: single column */}
          {articles.filter(a => !a.featured).map((article, idx) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl shadow-xl border-2 border-blue-700 p-6 flex flex-col justify-between min-h-[220px] hover:border-blue-400 transition"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{article.title}</h3>
              <p className="text-slate-700 mb-4 flex-1 font-serif">{article.summary}</p>
              <span className="mt-auto text-blue-600 font-semibold hover:underline text-left cursor-pointer">Read more</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-500 transition">Back to Home</Link>
        </div>
      </div>
    </div>
  );
} 