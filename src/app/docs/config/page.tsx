"use client";

import { motion } from "framer-motion";

export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold mb-4">Configuration</h1>
        <p className="text-gray-400 text-lg">
          Our services are all highly configurable to fit your needs. We aim to
          provide a wide range of customization options to ensure that your
          experience is tailored to your preferences.
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
          <a
            href="/docs/config/sharex"
            className="block p-4 rounded-lg bg-blue-600/5 hover:bg-blue-600/10 transition-colors"
          >
            <h3 className="font-semibold mb-2">ShareX</h3>
            <p className="text-sm text-gray-400">
              How to use our ShareX integrations
            </p>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
