import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Deadwood
            </Link>
            <div className="ml-10 space-x-8">
              <Link href="/browse" className="text-base font-medium text-white hover:text-blue-400">
                Browse
              </Link>
              <Link href="/ask" className="text-base font-medium text-white hover:text-blue-400">
                Ask Question
              </Link>
              <Link href="/tags" className="text-base font-medium text-white hover:text-blue-400">
                Tags
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="text-base font-medium text-white hover:text-blue-400"
                >
                  {session.user?.name}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-base font-medium text-white hover:text-blue-400"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 