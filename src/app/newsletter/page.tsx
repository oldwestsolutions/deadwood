'use client';

import { useState } from 'react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your newsletter logic here
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-800 p-8 rounded-2xl shadow-2xl">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white">Subscribe to our Newsletter</h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Get the latest updates, tips, and resources from Deadwood delivered to your inbox.
          </p>
        </div>
        {submitted ? (
          <div className="text-center text-green-400 font-semibold py-8">Thank you for subscribing!</div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 bg-slate-800 placeholder-slate-400 text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 