import Link from 'next/link';
import { CloudIcon, SunIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="lofi-card p-2 mr-2">
                <ServerIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Deadwood</h3>
            </div>
            <p className="text-sm mb-2 text-gray-400">Decentralized, solar-powered compute infrastructure for the future of DeFi.</p>
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Deadwood. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ipfs" className="hover:text-white flex items-center"><CloudIcon className="h-4 w-4 mr-1" />IPFS Storage</Link></li>
              <li><Link href="/services/solar-compute" className="hover:text-white flex items-center"><SunIcon className="h-4 w-4 mr-1" />Solar Compute</Link></li>
              <li><Link href="/services/virtual-machines" className="hover:text-white flex items-center"><ServerIcon className="h-4 w-4 mr-1" />Virtual Machines</Link></li>
              <li><Link href="/services/vpn" className="hover:text-white flex items-center"><ShieldCheckIcon className="h-4 w-4 mr-1" />VPN Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
              <li><Link href="/status" className="hover:text-white">Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-600">
            Powered by renewable energy • Built for decentralization • Privacy first
          </p>
        </div>
      </div>
    </footer>
  );
} 