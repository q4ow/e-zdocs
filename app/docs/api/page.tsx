"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/api/code-block";
import {
  Key,
  Lock,
  AlertCircle,
  Terminal,
  ArrowRight,
  FileUp,
  Link2,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function ApiDocs() {
  const endpoints = [
    {
      method: "POST",
      path: "/files/",
      description: "Upload files to the E-Z.host API",
      icon: <FileUp className="w-5 h-5" />,
      link: "/docs/api/upload",
      authentication: true,
      examples: {
        curl: `curl -X POST 'https://api.e-z.host/files' \\
  -H 'key: YOUR_API_KEY' \\
  -F 'file=@/path/to/file'`,
        response: `{
  "success": true,
  "message": "File Uploaded",
  "imageUrl": "https://i.e-z.host/file.jpg",
  "rawUrl": "https://r2.e-z.host/uuid/file.jpg",
  "deletionUrl": "https://api.e-z.host/files/delete?key=random-deletion-key"
}`,
      },
    },
    {
      method: "POST",
      path: "/shortener/",
      description: "Shorten links with the E-Z.host API",
      icon: <Link2 className="w-5 h-5" />,
      link: "/docs/api/shortener",
      authentication: true,
      examples: {
        curl: `curl -X POST https://api.e-z.host/shortener \\
  -H "Content-Type: application/json" \\
  -H "key: YOUR_API_KEY" \\
  -d '{"url": "https://example.com"}'`,
        response: `{
  "success": true,
  "message": "URL Shortened",
  "shortenedUrl": "https://i.e-z.gg/s/xyz123",
  "deletionUrl": "https://i.e-z.gg/shortener/delete?key=random-deletion-key"
}`,
      },
    },
    {
      method: "POST",
      path: "/paste/",
      description: "Create pastes with the E-Z.host API",
      icon: <Code className="w-5 h-5" />,
      link: "/docs/api/paste",
      authentication: true,
      examples: {
        curl: `curl -X POST https://api.e-z.host/paste \\
  -H 'key: YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "text":"contents of the paste",
    "title":"title of the paste",
    "description":"description for the paste",
    "language":"any supported language"
  }'`,
        response: `{
  "success": true,
  "message": "Paste Created",
  "pasteUrl": "https://i.e-z.gg/p/xyz123",
  "rawUrl": "https://i.e-z.gg/p/raw/xyz123",
  "deletionUrl": "https://api.e-z.host/paste/delete?key=random-deletion-key"
}`,
      },
    },
  ];

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text-purple">
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
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glow-card">
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
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-6 glow-card"
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
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20 glow-card"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-purple-400 flex-shrink-0 glow-icon-purple" />
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
