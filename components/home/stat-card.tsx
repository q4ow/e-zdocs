'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatCard({ value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 6) }}
      className="bg-blue-950/10 rounded-2xl border border-blue-900/20 p-6 text-center"
    >
      <div className="text-3xl font-bold text-blue-400">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}