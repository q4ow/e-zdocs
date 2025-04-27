"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FAQCardProps {
  id: string;
  question: string;
  shortAnswer: string;
  category: string;
  index: number;
}

export function FAQCard({
  id,
  question,
  shortAnswer,
  category,
  index,
}: FAQCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="min-h-[12rem] w-full"
    >
      <Link href={`/faq/${id}`}>
        <div className="group relative overflow-hidden rounded-lg border border-zinc-500/20 bg-zinc-950/50 p-6 hover:bg-zinc-950/80 transition-colors h-full">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-400">{category}</span>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                {question}
              </h3>
              <p className="text-md text-zinc-400 line-clamp-3">
                {shortAnswer}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
