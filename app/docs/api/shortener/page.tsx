"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/api/code-block";
import { Link2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ShortenerApiDocs() {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent glow-text-blue">
            Shortener API Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how to shorten URLs using our API
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Link2 className="w-6 h-6 text-blue-400 glow-icon-blue" />
            Endpoint: /shortener/
          </h2>
          <div className="flex items-center gap-4">
            <span className="bg-blue-500/20 text-blue-400 text-lg font-medium px-2 py-1 rounded-md">
              POST
            </span>
            <span className="text-lg font-medium text-gray-300">
              Shorten URLs with the E-Z.host API
            </span>
          </div>

          <h3 className="text-xl font-semibold">Headers</h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glow-card">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    Content-Type
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    application/json
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    The type of the request body.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    key
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    Your API key
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    Your API key for authentication.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold">Request Body</h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glow-card">
            <CodeBlock
              language="json"
              code={`{
  "url": "https://example.com"
}`}
            />
          </div>

          <h3 className="text-xl font-semibold">Example Request</h3>
          <CodeBlock
            language="bash"
            code={`curl -X POST https://api.e-z.host/shortener \\
  -H "Content-Type: application/json" \\
  -H "key: YOUR_API_KEY" \\
  -d '{"url": "https://example.com"}'`}
          />

          <h3 className="text-xl font-semibold">Response</h3>
          <p className="text-gray-300">Successful response example:</p>
          <CodeBlock
            language="json"
            code={`{
  "success": true,
  "message": "URL Shortened",
  "shortenedUrl": "https://i.e-z.gg/s/xyz123",
  "deletionUrl": "https://i.e-z.gg/shortener/delete?key=random-deletion-key"
}`}
          />

          <h3 className="text-xl font-semibold">Error Handling</h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 glow-card">
            <p className="text-gray-300 mb-4">
              Possible error responses include:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-red-400">400 Bad Request</strong>:
                Invalid URL format.
              </li>
              <li>
                <strong className="text-red-400">401 Unauthorized</strong>:
                Invalid API key.
              </li>
              <li>
                <strong className="text-red-400">
                  422 Unprocessable Entity
                </strong>
                : Validation error due to missing or invalid parameters.
              </li>
              <li>
                <strong className="text-red-400">429 Too Many Requests</strong>:
                Rate limit exceeded.
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20 glow-card"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 glow-icon-blue" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-400">
                If you need assistance with our Shortener API, feel free to:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-300">
                  • Ask our{" "}
                  <a
                    href="https://discord.gg/ez"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Discord
                  </a>{" "}
                  community and staff
                </li>
                <li className="text-gray-300">
                  • Email us at{" "}
                  <a
                    href="mailto:support@e-z.gg"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    support@e-z.gg
                  </a>
                </li>
                <li className="text-gray-300">
                  • Check our{" "}
                  <Link
                    href="/faq"
                    className="text-blue-400 hover:text-blue-300"
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
