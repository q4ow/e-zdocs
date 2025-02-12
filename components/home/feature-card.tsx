"use client";

import { motion, MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps extends MotionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
  initial,
  animate,
  transition,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="relative p-6 bg-blue-950/10 rounded-2xl border border-blue-900/20 backdrop-blur-sm group hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
    >
      <div className="absolute -top-4 left-4">
        <div className="rounded-lg bg-blue-600/10 p-3 ring-1 ring-blue-600/25 group-hover:bg-blue-600/20 transition-colors">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  );
}
