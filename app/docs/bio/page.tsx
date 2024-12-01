"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Image as ImageIcon,
  Layout,
  Palette,
  Link as LinkIcon,
  Shield,
  Star,
  Code,
  CheckCircle,
  Mail,
  MessageCircle,
  FileText,
  ExternalLink,
  Terminal,
  Eye,
} from "lucide-react";

export default function BioDocs() {
  const features = [
    {
      icon: <ImageIcon className="w-6 h-6 text-purple-400" />,
      title: "Customizable",
      description:
        "Create a beautiful, customizable profile page to showcase your online presence",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Shareable bio link",
      description:
        "Easily share your bio page link with anyone, anywhere using your very own bio link",
    },
  ];

  const featuredBios = [
    {
      username: "Aiden",
      image: "https://arch-linux.xyz/oxzn20ru.png",
      bioLink: "https://e-z.bio/aiden",
      socialCount: "22918",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Nado",
      image: "https://arch-linux.xyz/c9qhakma.png",
      bioLink: "https://e-z.bio/vx",
      socialCount: "2050",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Always",
      image: "https://arch-linux.xyz/t1zkap63.png",
      bioLink: "https://e-z.bio/az",
      socialCount: "2034",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Eva",
      image: "https://arch-linux.xyz/jd4fkwjs.png",
      bioLink: "https://e-z.bio/eva",
      socialCount: "1754",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Kyuiki",
      image: "https://arch-linux.xyz/jld517td.png",
      bioLink: "https://e-z.bio/ky",
      socialCount: "1218",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Loud",
      image: "https://arch-linux.xyz/imk3oqi3.png",
      bioLink: "https://e-z.bio/loud",
      socialCount: "1066",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "not_noob",
      image: "https://arch-linux.xyz/es9ddfjw.png",
      bioLink: "https://e-z.bio/ffs",
      socialCount: "750",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Karan",
      image: "https://arch-linux.xyz/95mufzns.png",
      bioLink: "https://e-z.bio/dma",
      socialCount: "603",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Keiran",
      image: "https://arch-linux.xyz/3cssfo64.png",
      bioLink: "https://e-z.bio/anon",
      socialCount: "524",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Bran",
      image: "https://arch-linux.xyz/3zh7wdcw.png",
      bioLink: "https://e-z.bio/glaive",
      socialCount: "490",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "Linqfy",
      image: "https://arch-linux.xyz/6xz6kcto.png",
      bioLink: "https://e-z.bio/qq",
      socialCount: "167",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
    {
      username: "entity",
      image: "https://arch-linux.xyz/zt88b00o.png",
      bioLink: "https://e-z.bio/entity",
      socialCount: "14",
      primaryPlatform: <Eye className="w-4 h-4" />,
    },
  ];

  const customizationOptions = [
    {
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      title: "Choose your style",
      description: "Almost every aspect of your bio is wholly customizable",
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      title: "Layout",
      description:
        "We have two distinct layouts to choose from to best suit your style",
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-purple-400" />,
      title: "Social links",
      description:
        "Add your social links with any supported platforms or add your own",
    },
  ];

  const premiumFeatures = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Secondary bio alias",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Use unicode in your bio alias",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Donator badge on your bio",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Increased upload limit",
    },
  ];

  const supportChannels = [
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      href: "mailto:support@e-z.gg",
      title: "Email Support",
      description: "Our support email is support@e-z.gg",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
      href: "https://discord.gg/ez",
      title: "Discord",
      description: "Get staff and community support in our Discord",
    },
    {
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      href: "/docs/faq",
      title: "FAQ",
      description: "Browse some of our common questions",
    },
  ];

  const bestPractices = [
    "Regularly update your bio page content",
    "Use high-quality images",
    "Organize links by importance",
    "Monitor your analytics",
    "Keep your profile information current",
  ];

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            E-Z.bio Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your comprehensive guide to creating a stunning bio page
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/70 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Bios
            </h2>
            <p className="text-gray-400">
              Get inspired by some of our amazing users&apos; bio pages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBios.map((bio, index) => (
              <motion.a
                key={index}
                href={bio.bioLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative block overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={bio.image}
                    alt={bio.username}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">
                          @{bio.username}
                        </p>
                        <div className="flex items-center gap-1 text-gray-300">
                          {bio.primaryPlatform}
                          <span className="text-sm">{bio.socialCount}</span>
                        </div>
                      </div>
                      <div className="bg-purple-500/20 p-2 rounded-lg backdrop-blur-sm">
                        <ExternalLink className="w-4 h-4 text-purple-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {customizationOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all"
            >
              <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-400">{option.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20"
        >
          <h2 className="text-2xl font-semibold mb-6">Premium Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  {feature.icon}
                </div>
                <span className="text-gray-300">{feature.title}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">API Access</h2>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">Example API request</span>
            </div>
            <code className="text-purple-400">
              curl -X POST &apos;https://api.e-z.host/files&apos; \<br />
              &nbsp;&nbsp;&nbsp;&nbsp;-H &apos;key: YOUR_API_KEY&apos; \<br />
              &nbsp;&nbsp;&nbsp;&nbsp;-F &apos;file=@/path/to/file&apos;
            </code>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-400" />
            <a
              href="/docs/api"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              View full API documentation
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {supportChannels.map((channel, index) => (
            <Link href={channel.href} key={index} className="block h-full">
              <div className="flex flex-col h-full bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
                <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-gray-400 flex-grow">{channel.description}</p>
              </div>
            </Link>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{practice}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 pt-8"
        >
          <p className="text-gray-400">
            Need additional help? Our support team is always here to assist you.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/terms" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="/privacy"
              className="text-purple-400 hover:text-purple-300"
            >
              Privacy Policy
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
