"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ezLogo from "@/public/assets/e-z.svg";

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
      style={{ y, rotate, zIndex: 999 }}
      animate={animation.animate}
      className="fixed right-8 top-8 opacity-10 pointer-events-none"
    >
      <Image
        src={ezLogo}
        alt="E-Z Logo"
        width={128}
        height={128}
        className="text-blue-500"
      />
    </motion.div>
  );
}
