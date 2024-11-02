'use client';

import { motion } from "framer-motion";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Getting Started | E-Z Documentation',
    description: 'Getting Started with E-Z Services and an overview of the platform',
    metadataBase: new URL('https://e-z.software'),
    openGraph: {
      title: 'Getting Started with E-Z',
      description: 'Getting Started with E-Z Services and an overview of the platform',
      images: ['/assets/og-image.png'],
    },
  };
}

export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold mb-4">Getting Started with E-Z Services</h1>
        <p className="text-gray-400 text-lg">
        E-Z Services is a platform that provides a range of web services to its users.
        We offer an image hosting service, for you to host your images on our platform.
        We also offer a bio page service, for you to host your bio page on our platform.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-blue-950/10 rounded-lg border border-blue-900/20 p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="/docs/getting-started/registration" className="block p-4 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 transition-colors">
            <h3 className="font-semibold mb-2">Registration</h3>
            <p className="text-sm text-gray-400">All you need to know when registering your account</p>
          </a>
          <a href="/docs/getting-started/dashboard" className="block p-4 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 transition-colors">
            <h3 className="font-semibold mb-2">Dashboard</h3>
            <p className="text-sm text-gray-400">Detailed overview of the E-Z user dashboard and its functionality</p>
          </a>
        </div>
      </motion.div>
    </div>
  );
}