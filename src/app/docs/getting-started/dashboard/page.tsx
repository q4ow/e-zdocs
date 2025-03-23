"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { sections, quickTips } from "@/data/dashboard";

export default function DashboardGuide() {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Dashboard Guide
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about navigating and utilizing the E-Z
            dashboard effectively
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-12"
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-500/10 p-3 rounded-lg">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <p className="text-gray-400">{section.description}</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {section.screenshot && (
                  <motion.div
                    className="relative aspect-video rounded-lg overflow-hidden border border-gray-800"
                    whileHover={{
                      scale: 1.05,
                      zIndex: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image
                      src={section.screenshot}
                      alt={`${section.title} interface`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </motion.div>
                )}
              </div>
            </motion.section>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 border border-indigo-500/20"
        >
          <h3 className="text-2xl font-semibold mb-8">
            Quick Tips & Shortcuts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-gray-900/30 p-4 rounded-lg"
              >
                <div className="bg-indigo-500/10 p-2 rounded-lg shrink-0">
                  {tip.icon}
                </div>
                <p className="text-gray-300">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 border border-indigo-500/20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our Discord community to get instant help from our staff and
            other users. We&apos;re here to ensure you get the most out of your
            E-Z experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
