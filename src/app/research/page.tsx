'use client';
import Link from 'next/link';

const articles = [
  {
    title: 'AI Revolutionizes Software Development',
    summary: 'How artificial intelligence is changing the way we build and ship code.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    lead: true,
  },
  {
    title: 'The Future of Cloud Infrastructure',
    summary: 'A look at the next generation of scalable, secure cloud platforms.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    secondary: true,
  },
  {
    title: 'Open Source: Powering Innovation',
    summary: 'Why open source is the backbone of modern technology.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    secondary: true,
  },
  {
    title: 'How to Build a Modern Web App',
    summary: 'A step-by-step guide to building scalable web applications.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Understanding TypeScript',
    summary: 'Why TypeScript is essential for large-scale JavaScript projects.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Security Best Practices',
    summary: 'Keep your applications and data safe with these tips.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The Rise of Serverless',
    summary: 'How serverless architecture is changing the cloud landscape.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'UI/UX Trends in 2024',
    summary: 'What designers and developers need to know this year.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'DevOps for Startups',
    summary: 'How small teams can leverage DevOps for rapid growth.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ResearchPage() {
  const lead = articles.find(a => a.lead);
  const secondary = articles.filter(a => a.secondary);
  const rest = articles.filter(a => !a.lead && !a.secondary);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center font-serif tracking-tight">Research</h1>
        {/* Lead Story */}
        {lead && (
          <div className="w-full mb-12">
            <div className="relative flex flex-col md:flex-row gap-0 md:gap-8 items-stretch">
              <img src={lead.image} alt={lead.title} className="w-full md:w-2/3 h-72 md:h-[28rem] object-cover rounded-2xl shadow-lg" />
              <div className="flex-1 flex flex-col justify-center py-6 md:py-0 md:pl-8">
                <h2 className="text-4xl font-bold text-white mb-2 font-serif leading-tight">{lead.title}</h2>
                <p className="text-lg text-slate-200 mb-4 font-serif leading-relaxed">{lead.summary}</p>
                <span className="mt-auto text-blue-400 font-semibold hover:underline text-left cursor-pointer">Read more</span>
              </div>
            </div>
          </div>
        )}
        {/* Secondary Stories Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {secondary.map(article => (
            <div key={article.title} className="flex flex-col md:flex-row gap-0 md:gap-6 items-stretch">
              <img src={article.image} alt={article.title} className="w-full md:w-1/2 h-48 md:h-56 object-cover rounded-2xl shadow" />
              <div className="flex-1 flex flex-col justify-center py-4 md:py-0 md:pl-4">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif leading-tight">{article.title}</h3>
                <p className="text-slate-200 mb-4 font-serif leading-relaxed">{article.summary}</p>
                <span className="mt-auto text-blue-400 font-semibold hover:underline text-left cursor-pointer">Read more</span>
              </div>
            </div>
          ))}
        </div>
        {/* Rest of the News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {rest.map(article => (
            <div key={article.title} className="flex flex-col gap-4">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-xl shadow" />
              <h4 className="text-xl font-bold text-white font-serif leading-tight">{article.title}</h4>
              <p className="text-slate-200 font-serif leading-relaxed">{article.summary}</p>
              <span className="mt-auto text-blue-400 font-semibold hover:underline text-left cursor-pointer">Read more</span>
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