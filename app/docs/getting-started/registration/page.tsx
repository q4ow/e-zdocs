"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Clipboard,
  CircleHelp,
  CircleDollarSign,
  Shield,
  Key,
  Mail,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function RegistrationGuide() {
  const steps = [
    {
      icon: <CircleDollarSign className="w-6 h-6 text-blue-400" />,
      title: "Purchase an Invite Code",
      description: "Get started by acquiring an invite code from our store.",
      details: [
        "Visit our store at e-zhost.mysellix.io",
        "Purchase a $3 invite code",
        "We accept PayPal, card and crypto",
        "Codes are delivered swiftly to your email",
      ],
      image: "/assets/registration/store.png",
    },
    {
      icon: <CircleHelp className="w-6 h-6 text-blue-400" />,
      title: "Link Discord Account",
      description:
        "Connect your Discord account for community access and support.",
      details: [
        "This step is necessary to use the service",
        "You are automatically added to our server",
        "Please read the rules carefully",
        "Check our announcement channels",
      ],
      image: "/assets/registration/discord.png",
    },
    {
      icon: <Clipboard className="w-6 h-6 text-blue-400" />,
      title: "Review Terms of Service",
      description: "Carefully read and accept our terms of service.",
      details: [
        "No sharing or reselling of accounts",
        "Respect upload guidelines we have set",
        "You will be blacklisted if you don't",
        "No crime >:c",
      ],
      image: "/assets/registration/tos.png",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: "Complete Registration",
      description: "Set up your account with secure credentials.",
      details: [
        "Choose a unique username",
        "Set a strong password",
        "Add a VALID email",
        "Enter your invite code",
      ],
      image: "/assets/registration/register.png",
    },
  ];

  const securityTips = [
    {
      icon: <Key className="w-5 h-5 text-blue-400" />,
      title: "Strong Password",
      tip: "Use a combination of letters, numbers, and symbols.",
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      title: "Two-Factor Authentication",
      tip: "Enable 2FA through a dedicated authenticator app.",
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      title: "Recovery Email",
      tip: "Add a valid email address to recover your account if needed.",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
      title: "Account Privacy",
      tip: "Never share your account credentials and code.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Registration
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow our step-by-step registration process to create your
              account and join our exclusive community of users.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm text-blue-400 font-medium">
                          Step {index + 1}
                        </span>
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-lg">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {step.image && (
                    <motion.div
                      className="relative aspect-video rounded-lg overflow-hidden border border-gray-800"
                      whileHover={{
                        scale: 1.05,
                        zIndex: 10,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Image
                        src={step.image}
                        alt={`${step.title} visualization`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-blue-600/5 border border-blue-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Security Best Practices
              </h2>
              <div className="space-y-6">
                {securityTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 bg-blue-500/5 p-4 rounded-lg"
                  >
                    <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{tip.title}</h3>
                      <p className="text-gray-400 text-sm">{tip.tip}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600/5 border border-blue-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Need Help?</h2>
              <div className="space-y-6">
                <p className="text-gray-400">
                  Having trouble with registration? Our support team is here to
                  help you.
                </p>
                <div className="space-y-4">
                  <Link
                    href="https://discord.com/invite/ez"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Join our Discord community</span>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Check our FAQ page</span>
                  </Link>
                  <Link
                    href="mailto:support@e-z.gg"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Contact support via email</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
