import { motion } from "framer-motion";
import EZLogo from "@/public/assets/e-z.svg";

export const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      animate={{ opacity: 0, display: "none" }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <motion.div className="relative flex">
        <motion.div
          className="h-32 w-32 rounded-full border-4 border-blue-500"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["50%", "50%", "50%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.8, 1],
          }}
        >
          <EZLogo className="h-16 w-16" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
