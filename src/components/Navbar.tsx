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
          </div>
        </div>
      </div>
    </nav>
  );
} 