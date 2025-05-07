import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deadwood Help Desk',
  description: 'Your comprehensive platform for development support and knowledge sharing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-slate-900">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <Navbar />
            <main className="relative">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
