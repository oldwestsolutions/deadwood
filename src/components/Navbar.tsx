'use client';

import Link from 'next/link';
import { CloudIcon, SunIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (and past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <div className="lofi-card p-2 mr-2">
                <ServerIcon className="h-6 w-6 text-white" />
              </div>
              Deadwood
            </Link>
            <div className="hidden md:flex ml-8 space-x-6">
              <Link href="/services/ipfs" className="text-gray-400 hover:text-white flex items-center">
                <CloudIcon className="h-4 w-4 mr-1" />
                IPFS
              </Link>
              <Link href="/services/solar-compute" className="text-gray-400 hover:text-white flex items-center">
                <SunIcon className="h-4 w-4 mr-1" />
                Solar Compute
              </Link>
              <Link href="/services/gpus" className="text-gray-400 hover:text-white flex items-center">
                <ServerIcon className="h-4 w-4 mr-1" />
                GPUs
              </Link>
              <Link href="/services/vpn" className="text-gray-400 hover:text-white flex items-center">
                <ShieldCheckIcon className="h-4 w-4 mr-1" />
                VPN
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/pricing" className="text-gray-400 hover:text-white">
              Pricing
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-white">
              Docs
            </Link>
            <Link
              href="/login"
              className="lofi-button px-4 py-2 text-base font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 