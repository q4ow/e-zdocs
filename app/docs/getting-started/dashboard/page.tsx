'use client';

import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Link,
  Settings, 
  Images,
  Terminal,
  Users,
  ScrollText,
  FileUp,
  Link2,
  Code
} from 'lucide-react';

export default function DashboardGuide() {
  const sections = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
      title: "Overview",
      description: "The main dashboard view provides a short summary of your stats. Here you'll find:",
      features: [
        "Total Uploads",
        "Storage Used",
        "Invited Users",
        "Daily Uploads"
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-indigo-400" />,
      title: "Settings",
      description: "Configure your settings to personalise E-Z to your needs. Features include:",
      features: [
        "Dedicated upload tools",
        "URL settings",
        "Embed editor",
        "Image border settings",
        "Time settings"
      ]
    },
    {
      icon: <Link className="w-6 h-6 text-indigo-400" />,
      title: "Domains",
      description: "View all public domains along with managing your own donated domains.",
      features: [
        "Domain list",
        "Add your own",
        "User count for each domain"
      ]
    },
    {
      icon: <Images className="w-6 h-6 text-indigo-400" />,
      title: "Gallery",
      description: "The gallery allows you to access all your uploaded files.",
      features: [
        "Manage your files",
        "Copy the file URL",
        "Delete your files at any time",
        "Filter by file type"
      ]
    },
    {
      icon: <FileUp className="w-6 h-6 text-indigo-400" />,
      title: "Uploader",
      description: "Upload any files directly to E-Z with the uploader tool.",
      features: [
        "25MB file limit per upload",
        "100MB file limit for premium users",
        "Images, videos and audio supported",
        "ShareX compatible"
      ]
    },
    {
      icon: <Link2 className="w-6 h-6 text-indigo-400" />,
      title: "URL Shortener",
      description: "Shorten URLs using any of our domains.",
      features: [
        "Choose from 180+ domains",
        "ShareX compatible",
        "Copy/Delete your shortened URLs"
      ]
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      title: "Pastes",
      description: "Create pastes using any programming/markdown language or plain text.",
      features: [
        "Syntax highlighting",
        "Custom URLs",
        "ShareX compatible",
        "Text file uploads"
      ]
    },
  ];

  const quickTips = [
    {
      icon: <ScrollText className="w-5 h-5 text-indigo-400" />,
      tip: "You can use supported parameters to customise your embeds dynamically"
    },
    {
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      tip: "You can use most of our services via documented, RESTful API endpoints"
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      tip: "Communicate with other users and staff in our Discord server for help and to chat"
    },
    {
      icon: <Settings className="w-5 h-5 text-indigo-400" />,
      tip: "Our services are highly configurable while being usable out of the box"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Dashboard Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your complete guide to navigating and utilizing the E-Z dashboard effectively
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-8"
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/70 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="bg-indigo-500/10 p-3 rounded-lg">
                  {section.icon}
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p className="text-gray-400">{section.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6">Quick Tips & Shortcuts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-indigo-500/10 p-2 rounded-lg">
                  {tip.icon}
                </div>
                <p className="text-gray-300">{tip.tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 border border-indigo-500/20"
        >
          <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
          <p className="text-gray-400">
            If you are registered with our service, you will already be in our Discord server.
            This is your go-to place for help, support and general chat with other users and staff.
          </p>
        </motion.div>
      </div>
    </div>
  );
}