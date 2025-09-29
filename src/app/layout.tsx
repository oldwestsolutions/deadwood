import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deadwood - DeFi Compute Infrastructure',
  description: 'Decentralized, solar-powered compute infrastructure for IPFS, virtual machines, and VPN services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} h-full bg-black text-white`}>
        <AuthProvider>
          <div className="min-h-screen bg-black">
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
