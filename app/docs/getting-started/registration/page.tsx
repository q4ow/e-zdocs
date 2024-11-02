'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clipboard, CircleHelp, CircleDollarSign } from 'lucide-react';

export default function RegistrationGuide() {
  const steps = [
    {
      icon: <CircleDollarSign className="w-6 h-6 text-blue-400" />,
      title: "Invite code",
      description: "Start by purchasing an invite code from our store."
    },
    {
      icon: <CircleHelp className="w-6 h-6 text-blue-400" />,
      title: "Discord",
      description: "You need a valid discord account to access our services."
    },
    {
      icon: <Clipboard className="w-6 h-6 text-blue-400" />,
      title: "TOS",
      description: "Accepting our terms of service is required to access the site."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
      title: "That's it!",
      description: "Fill in your account details and you're ready to go."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-8"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Registration Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Follow our simple registration process to create your account and get started with our services.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-blue-600/5 border border-blue-500/20 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Make sure to use a valid email address.
                  It will be necessary if you wish to reset your password</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Two-factor authentication and using a strong password is highly recommended</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>If you need any support, open a ticket in the Discord server</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
    )};