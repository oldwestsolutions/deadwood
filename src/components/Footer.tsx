import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Deadwood</h3>
          <p className="text-sm mb-2">A modern developer community for learning, networking, and sharing knowledge.</p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Deadwood. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            <Link href="/resources" className="hover:text-indigo-400 transition-colors">Resources</Link>
          </h3>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">
            <Link href="/community" className="hover:text-indigo-400 transition-colors">Community</Link>
          </h3>
          <ul className="space-y-2">
            <li><Link href="/support" className="hover:underline">Support Center</Link></li>
            <li><Link href="/research" className="hover:underline">Research</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 