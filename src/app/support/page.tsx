'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SupportTopic = {
  title: string;
  desc: string;
  details: string;
};

const supportTopics: SupportTopic[] = [
  {
    title: 'Getting Started',
    desc: 'Begin your journey with onboarding guides and tips.',
    details: 'Our Getting Started section walks you through account creation, initial setup, and the first steps to using Deadwood Software. You\'ll find step-by-step instructions, screenshots, and video walkthroughs to help you get up and running quickly.',
  },
  {
    title: 'Account Help',
    desc: 'Help with login, account settings, and security.',
    details: 'If you\'re having trouble logging in, resetting your password, or updating your account information, this section provides troubleshooting steps and contact options for further assistance.',
  },
  {
    title: 'FAQs',
    desc: 'Find answers to common questions about our platform.',
    details: 'Browse frequently asked questions about features, billing, integrations, and more. Save time by finding quick answers to the most common issues.',
  },
  {
    title: 'Product Tours',
    desc: 'Explore features and tools with guided tours.',
    details: 'Take interactive tours of our platform\'s key features and tools. Learn how to make the most of Deadwood Software with step-by-step guides.',
  },
  {
    title: 'Contact Support',
    desc: 'Reach out to our team for personalized help.',
    details: 'Can\'t find what you need? Contact our support team directly for fast, friendly, and personalized assistance.',
  },
  {
    title: 'Guides & Resources',
    desc: 'Access documentation, tutorials, and best practices.',
    details: 'Dive into our library of guides, tutorials, and best practices to become a Deadwood Software power user.',
  },
];

export default function SupportPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<SupportTopic | null>(null);

  const openModal = (topic: SupportTopic) => {
    setActiveTopic(topic);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTopic(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Support</h1>
        <p className="text-lg text-slate-300 mb-12 text-center max-w-2xl mx-auto">
          Find help, resources, and answers to your questions. Browse our support topics or reach out for personalized assistance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportTopics.map((topic, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-800 rounded-2xl shadow-xl border-2 border-blue-700 p-6 flex flex-col justify-between cursor-pointer"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => openModal(topic)}
            >
              <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
              <p className="text-slate-300 mb-4 flex-1">{topic.desc}</p>
              <span className="mt-auto text-blue-400 font-semibold hover:underline text-left">Learn more</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-500 transition">Back to Home</Link>
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {modalOpen && activeTopic && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-500 hover:text-blue-600 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-3xl font-extrabold text-blue-700 mb-4">{activeTopic.title}</h2>
              <p className="text-slate-700 text-lg mb-2">{activeTopic.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 