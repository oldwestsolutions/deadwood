'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-800/50 border-b border-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Deadwood
            </Link>
          </div>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/questions/ask"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Ask Question
                </Link>
                <div className="relative">
                  <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white"
                  >
                    <UserCircleIcon className="h-8 w-8" />
                    <span>{session.user?.name}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 