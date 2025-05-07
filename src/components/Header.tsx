import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [search, setSearch] = useState("");

  return (
    <header className="bg-slate-900 shadow-md sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4" aria-label="Global">
        <div className="flex items-center gap-x-8">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Deadwood
          </Link>
          {/* Search Bar in nav */}
          <form className="relative ml-4">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="rounded-md bg-slate-800 text-white px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-slate-400">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
          </form>
        </div>
        <div className="flex items-center gap-x-6">
          <Link href="/newsletter" className="text-base font-semibold leading-6 text-white">
            Newsletter <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
} 