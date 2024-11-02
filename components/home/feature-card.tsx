'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
      className="relative p-6 bg-blue-950/10 rounded-2xl border border-blue-900/20 backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="absolute -top-4 left-4">
        <div className="rounded-lg bg-blue-600/10 p-3 ring-1 ring-blue-600/25 group-hover:bg-blue-600/20 transition-colors">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  );
}