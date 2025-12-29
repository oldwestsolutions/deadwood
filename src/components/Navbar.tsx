'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Deadwood<span className="text-neutral-500">.software</span>
            </Link>
            <div className="hidden md:flex ml-12 space-x-8">
              <Link href="#use-cases" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wide">
                Use Cases
              </Link>
              <Link href="#technology" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wide">
                Technology
              </Link>
              <Link href="#enterprise" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wide">
                Enterprise
              </Link>
              <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wide">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
