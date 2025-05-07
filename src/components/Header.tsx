import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-slate-800/50 border-b border-slate-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">Deadwood</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Link href="/auth/signin" className="text-sm font-semibold leading-6 text-white">
            Sign in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
} 