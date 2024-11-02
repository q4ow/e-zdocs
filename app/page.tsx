'use client';

import { motion } from "framer-motion";
import { Metadata } from 'next';
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home | E-Z Documentation',
    description: 'API documentation and guides for E-Z Services',
    openGraph: {
      title: 'E-Z Documentation',
      description: 'API documentation and guides for E-Z Services',
      images: ['/assets/og-image.png'],
    },
  };
}

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built using the Fastify node framework, we're optimised for efficiency and minimal latency",
    },
    {
      icon: Shield,
      title: "Privacy focused",
      description: "We pride ourself on our privacy! Read our privacy policy for more info.",
    },
    {
      icon: Globe,
      title: "E-Z = Easy",
      description: "As is our brand, our services are famously simple and intuitive for our users.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                E-Z Docs
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            High-quality and easy to use web services. We strive to offer the best experience possible for our users.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            <Link
              href="/docs/getting-started"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                  className="relative p-6 bg-blue-950/10 rounded-2xl border border-blue-900/20 backdrop-blur-sm"
                >
                  <div className="absolute -top-4 left-4">
                    <div className="rounded-lg bg-blue-600/10 p-3 ring-1 ring-blue-600/25">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}