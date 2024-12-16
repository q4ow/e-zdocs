"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const animation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function FloatingIcon() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <motion.div
      style={{ y, rotate, zIndex: 5 }}
      animate={animation.animate}
      className="fixed right-8 top-8 opacity-50 pointer-events-none"
    >
      <Image
        src="/assets/e-z.svg"
        alt="E-Z Logo"
        width={128}
        height={128}
        className="text-blue-500"
      />
    </motion.div>
  );
}
