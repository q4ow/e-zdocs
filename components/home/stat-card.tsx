"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
  icon: ReactNode;
}

export function StatCard({ value, label, index, icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 6) }}
      className="rounded-2xl p-6 text-center"
    >
      <div className="flex justify-center items-center mb-2 text-blue-400">
        {icon}
      </div>
      <div className="text-3xl font-bold text-blue-400">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}
