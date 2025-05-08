'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-800/50 border-b border-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Deadwood
            </Link>
            <form className="relative ml-4 hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-md bg-slate-700 text-white px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-slate-400">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              </span>
            </form>
          </div>
          <div className="flex items-center">
            <Link
              href="/login"
              className="rounded-md bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 