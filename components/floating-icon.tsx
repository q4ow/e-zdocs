"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2 } from "lucide-react";

export function FloatingIcon() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <motion.div
      style={{ y, rotate }}
      className="fixed right-8 top-8 opacity-10 pointer-events-none"
    >
      <Code2 className="w-48 h-48 text-blue-500" />
    </motion.div>
  );
}