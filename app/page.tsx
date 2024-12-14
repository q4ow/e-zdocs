"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Users,
  Code,
  Star,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "@/components/home/feature-card";
import { StatCard } from "@/components/home/stat-card";
import { useRef, Suspense } from "react";
import Typewriter from "@/components/typewriter";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built using the Fastify node framework, we're optimized for efficiency and minimal latency",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description:
        "We pride ourselves on our privacy and security! Read our privacy policy for more info.",
    },
    {
      icon: Globe,
      title: "E-Z = Easy",
      description:
        "As is our brand, our services are famously simple and intuitive for our users.",
    },
    {
      icon: Users,
      title: "Growing Community",
      description:
        "Join thousands of users who trust E-Z Services to provide a great user experience.",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description:
        "Comprehensive API documentation and we offer pastes to help you store your code snippets.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "The team at e-z has a burning passion for creating the best user experience. We love what we do!",
    },
  ];

  const stats = [
    { value: "18K+", label: "Active Users" },
    { value: "2M+", label: "Unique Views" },
    { value: "4.6M+", label: "Uploads" },
    { value: "24/7", label: "Support" },
  ];

  const showcaseImages = [
    { src: "/assets/home/dashboard.png", alt: "Dashboard Example" },
    { src: "/assets/home/e-zhost.png", alt: "E-Z.host homepage" },
    { src: "/assets/home/e-zbio.png", alt: "E-Z.bio homepage" },
  ];

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

  const LoadingSpinner = () => {
    return (
      <motion.div 
        className="flex justify-center items-center h-[240px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pl-[80px] lg:pl-[256px] -ml-[80px] lg:-ml-[256px] flex justify-center">
      <div className="max-w-6xl w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col min-h-[200vh]">
          <motion.div
            className="text-center space-y-8 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
                    className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 glow-text-blue text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    <Typewriter
                      options={{
                        strings: ["E-Z Docs", "E-Z Host", "E-Z Bio"],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 1,
                      }}
                    />
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
                  className="rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm bg-blue-600 flex items-center justify-center gap-2 glow-button-blue"
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
            animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-32 mb-40"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                }}
                className="relative overflow-hidden rounded-lg p-6 backdrop-blur-sm border glow-card"
              >
                <StatCard {...stat} index={index} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            ref={showcaseRef}
            className="relative sm:mt-32 mb-96"
            initial={{ opacity: 0 }}
            animate={showcaseInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{ y }}
          >
             <Suspense fallback={<LoadingSpinner />}>
              <motion.div className="relative flex justify-center items-center h-full">
                <motion.div
                  className="relative w-[420px] h-[240px]"
                  whileHover="expanded"
                  initial="stacked"
                >
                {showcaseImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-[300px] h-[200px] rounded-xl overflow-hidden glow-card"
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
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            </Suspense>
          </motion.div>

          <motion.div
            ref={featuresRef}
            className="mt-24 sm:mt-32"
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
              className="text-2xl sm:text-3xl font-bold text-center mb-16"
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 glow-text-blue"
                style={{ backgroundSize: "200% 100%" }}
              >
                But why choose us?
              </motion.span>
            </motion.h2>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={
                featuresInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <FeatureCard {...feature} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-8 rounded-2xl p-8 sm:p-12 mt-24 sm:mt-32 glow-card"
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm bg-blue-600 glow-button-blue"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
