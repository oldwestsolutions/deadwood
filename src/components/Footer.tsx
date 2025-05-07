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
          <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/docs" className="hover:underline">Documentation</Link></li>
            <li><Link href="/examples" className="hover:underline">Code Examples</Link></li>
            <li><Link href="/tutorials" className="hover:underline">Video Tutorials</Link></li>
            <li><Link href="/newsletter" className="hover:underline">Newsletter</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Community</h3>
          <ul className="space-y-2">
            <li><Link href="/forums" className="hover:underline">Forums</Link></li>
            <li><Link href="/join" className="hover:underline">Become a Member</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
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