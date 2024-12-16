import { motion } from "framer-motion";

export const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      animate={{ opacity: 0, display: "none" }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="relative flex">
        <motion.div
          className="h-32 w-32 rounded-full border-4 border-blue-500"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderWidth: ["4px", "2px", "4px"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 h-32 w-32 rounded-full border-4 border-teal-400"
          animate={{
            rotate: [360, 0],
            scale: [0.8, 1, 0.8],
            borderWidth: ["2px", "4px", "2px"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 h-32 w-32 rounded-full border-4 border-purple-500"
          animate={{
            rotate: [0, -360],
            scale: [1.2, 0.8, 1.2],
            borderWidth: ["4px", "2px", "4px"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};
