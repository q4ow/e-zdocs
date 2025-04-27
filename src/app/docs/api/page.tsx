"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/api/code-block";
import { Key, Lock, AlertCircle, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

import { endpoints } from "@/data/api";

export default function ApiDocs() {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text-purple">
            API Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how to utilize our API to maximize your productivity
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Key className="w-6 h-6 text-purple-400 glow-icon-purple" />
            Authentication
          </h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 mb-4">
              All API requests must include your API key in the key header:
            </p>
            <CodeBlock
              language="Authorization Header"
              code="key: YOUR_API_KEY"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Terminal className="w-6 h-6 text-purple-400 glow-icon-purple" />
            Endpoints
          </h2>

          {endpoints.map((endpoint, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-6 "
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        endpoint.method === "GET"
                          ? "bg-green-500/20 text-green-400"
                          : endpoint.method === "POST"
                            ? "bg-blue-500/20 text-blue-400"
                            : endpoint.method === "PUT"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-purple-400">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-400">{endpoint.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {endpoint.authentication && (
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Lock className="w-4 h-4 glow-icon-purple" />
                      Auth Required
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Examples</h4>

                <div className="space-y-4">
                  <CodeBlock language="curl" code={endpoint.examples.curl} />

                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">
                      Response
                    </h5>
                    <CodeBlock
                      language="json"
                      code={endpoint.examples.response}
                    />
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ opacity: 0.5 }}
                whileTap={{ opacity: 0.25 }}
                className="mt-4"
              >
                <Link
                  href={endpoint.link}
                  className="inline-flex items-center px-4 py-2 rounded-md text-white transition-colors"
                >
                  {endpoint.icon}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20 "
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-purple-400 shrink-0 glow-icon-purple" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-400">
                If you need assistance with our API, feel free to:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-300">
                  • Ask our{" "}
                  <a
                    href="https://discord.gg/ez"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Discord
                  </a>{" "}
                  community and staff
                </li>
                <li className="text-gray-300">
                  • Email us at{" "}
                  <a
                    href="mailto:support@e-z.gg"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    support@e-z.gg
                  </a>
                </li>
                <li className="text-gray-300">
                  • Check our{" "}
                  <Link
                    href="/faq"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
