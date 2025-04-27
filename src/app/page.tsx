"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Star } from "lucide-react";
import { FeatureCard } from "@/components/home/feature-card";
import { StatCard } from "@/components/home/stat-card";
import { useRef, useState, useEffect, memo } from "react";
import { FloatingIcon } from "@/components/floating-icon";
import Link from "next/link";
import Image from "next/image";

import { features, showcaseImages, stats } from "@/data/home";

const Home = () => {
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const showcaseRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const showcaseInView = useInView(showcaseRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <div className="min-h-screen pl-[80px] lg:pl-[256px] -ml-[80px] lg:-ml-[256px] flex justify-center">
        <div className="max-w-6xl w-full px-4 py-12 sm:px-6 lg:px-8">
          <FloatingIcon />
          <div className="flex flex-col min-h-[200vh]">
            <motion.div
              className="text-center space-y-8 pt-16"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
                hidden: { opacity: 0 },
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-sm sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                  Welcome to{" "}
                </h1>
                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%"],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-transparent font-medium bg-clip-text bg-linear-to-r from-blue-500 via-blue-400 to-blue-300 glow-text-blue text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    E-Z Docs
                  </motion.span>
                </motion.span>
                <p className="text-xl sm:text-2xl leading-8 text-gray-300 max-w-3xl mx-auto glow-text-blue">
                  High-quality and easy to use web services. We strive to offer
                  the best experience possible for our users.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/docs/getting-started"
                    className="rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-xs bg-blue-600 flex items-center justify-center gap-2 glow-button-blue"
                    aria-label="Get Started"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/docs/api"
                    className="rounded-lg px-6 py-3 text-sm font-semibold text-blue-400 ring-1 ring-blue-400/20 flex items-center justify-center gap-2 hover:ring-blue-400/40"
                    aria-label="API Documentation"
                  >
                    API Documentation
                    <Code className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={statsRef}
              initial={{ y: 50, opacity: 0 }}
              animate={
                statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-32 sm:mt-48 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                    transition: { duration: 0.3 },
                  }}
                  className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-xs w-full border  bg-zinc-950"
                >
                  <StatCard {...stat} index={index} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              ref={showcaseRef}
              className="relative sm:mt-12 mb-48"
              initial={{ opacity: 0 }}
              animate={showcaseInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7 }}
              style={{ y }}
            >
              <motion.div className="relative flex justify-center items-center h-full">
                <motion.div
                  className="relative w-[420px] h-[240px]"
                  whileHover="expanded"
                  initial="stacked"
                >
                  {showcaseImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-[300px] h-[200px] rounded-xl overflow-hidden "
                      variants={{
                        stacked: {
                          x: -30 + index * 60,
                          y: index * 20,
                          rotate: -10 + index * 5,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                        },
                        expanded: {
                          x: (index - 1) * 320,
                          y: 0,
                          rotate: 0,
                          scale: 1.1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            delay: index * 0.1,
                          },
                        },
                      }}
                      style={{
                        zIndex: showcaseImages.length - index,
                      }}
                    >
                      {image.src ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      ) : null}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={featuresRef}
              className="my-24 sm:my-32"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={
                  featuresInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-3xl font-bold text-center mb-16"
              >
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-400 to-blue-300 glow-text-blue"
                  style={{ backgroundSize: "200% 100%" }}
                >
                  But why choose us?
                </motion.span>
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
                initial={{ opacity: 0 }}
                animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                {features.map((feature, index) => (
                  <FeatureCard {...feature} index={index} key={index} />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              ref={ctaRef}
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center space-y-8 rounded-2xl p-8 sm:p-12 mt-24 sm:mt-32  backdrop-blur-xs"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                  filter: [
                    "drop-shadow(0 0 0px #60A5FA)",
                    "drop-shadow(0 0 10px #60A5FA)",
                    "drop-shadow(0 0 0px #60A5FA)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Star className="w-12 h-12 text-blue-400 mx-auto glow-icon-blue" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white glow-text-blue">
                Ready to get started?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
                Join thousands of users who trust us to provide great services.
                <br />
                Get started today!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/docs/getting-started"
                  className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-xs bg-blue-600 glow-button-blue"
                  aria-label="Get Started"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
