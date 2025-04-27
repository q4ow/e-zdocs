"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/api/code-block";
import { Code, AlertCircle, Lock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PasteApiDocs() {
  const [selectedLanguage, setSelectedLanguage] = useState("bash");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const renderCodeExample = () => {
    switch (selectedLanguage) {
      case "python":
        return (
          <CodeBlock
            language="python"
            code={`import requests\n\nurl = 'https://api.e-z.host/paste'\nheaders = {\n  'Content-Type': 'application/json',\n  'key': 'YOUR_API_KEY'\n}\ndata = {\n  'text': 'contents of the paste',\n  'title': 'title of the paste',\n  'description': 'description for the paste',\n  'language': 'python'\n}\nresponse = requests.post(url, headers=headers, json=data)\nprint(response.json())`}
          />
        );
      case "javascript":
        return (
          <CodeBlock
            language="javascript"
            code={`fetch('https://api.e-z.host/paste', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'key': 'YOUR_API_KEY'\n  },\n  body: JSON.stringify({\n    text: 'contents of the paste',\n    title: 'title of the paste',\n    description: 'description for the paste',\n    language: 'javascript'\n  })\n})\n.then(response => response.json())\n.then(data => console.log(data));`}
          />
        );
      case "powershell":
        return (
          <CodeBlock
            language="powershell"
            code={`$url = 'https://api.e-z.host/paste'\n$headers = @{\n  'Content-Type' = 'application/json'\n  'key' = 'YOUR_API_KEY'\n}\n$body = @{\n  text = 'contents of the paste'\n  title = 'title of the paste'\n  description = 'description for the paste'\n  language = 'powershell'\n} | ConvertTo-Json\n\nInvoke-RestMethod -Uri $url -Method Post -Headers $headers -Body $body -ContentType 'application/json'`}
          />
        );
      default:
        return (
          <CodeBlock
            language="bash"
            code={`curl -X POST https://api.e-z.host/paste \\
  -H 'Content-Type: application/json' \\
  -H 'key: YOUR_API_KEY' \\
  -d '{
    "text":"contents of the paste",
    "title":"title of the paste",
    "description":"description for the paste",
    "language":"bash"
  }'`}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-white p-8">
      <motion.div
        className="max-w-6xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.header
          variants={itemVariants}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent glow-text-purple">
            Paste API Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how to create pastes using our API
          </p>
        </motion.header>

        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-400 glow-icon-purple" />
            Endpoint: /paste/
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-lg font-medium px-2 py-1 rounded-md">
              POST
            </span>
            <span className="text-lg font-medium text-gray-300">
              Create pastes with the E-Z.host API
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Lock className="w-4 h-4 glow-icon-purple" />
              Auth Required
            </div>
          </div>
        </motion.div>

        <motion.h3 className="text-xl font-semibold" variants={itemVariants}>
          Headers
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
        >
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
            <tbody className="divide-y divide-gray-800">
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
                  YOUR_API_KEY
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  Your API key for authentication.
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.h3 className="text-xl font-semibold" variants={itemVariants}>
          Request Body
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6"
        >
          <CodeBlock
            language="json"
            code={`{
  "text": "contents of the paste",
  "title": "title of the paste",
  "description": "description for the paste",
  "language": "any supported language"
}`}
          />
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-xl font-semibold">
          Example Requests
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6"
        >
          <div className="flex mb-4 space-x-2">
            <button
              onClick={() => setSelectedLanguage("bash")}
              className={`px-3 py-1 rounded-md ${
                selectedLanguage === "bash"
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              Curl
            </button>
            <button
              onClick={() => setSelectedLanguage("javascript")}
              className={`px-3 py-1 rounded-md ${
                selectedLanguage === "javascript"
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              JavaScript
            </button>
            <button
              onClick={() => setSelectedLanguage("python")}
              className={`px-3 py-1 rounded-md ${
                selectedLanguage === "python"
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setSelectedLanguage("powershell")}
              className={`px-3 py-1 rounded-md ${
                selectedLanguage === "powershell"
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              PowerShell
            </button>
          </div>
          {renderCodeExample()}
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-xl font-semibold">
          Response
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6"
        >
          <p className="text-gray-300 mb-2">Successful response example:</p>
          <CodeBlock
            language="json"
            code={`{
  "success": true,
  "message": "Paste Created",
  "pasteUrl": "https://i.e-z.gg/p/xyz123",
  "rawUrl": "https://i.e-z.gg/p/raw/xyz123",
  "deletionUrl": "https://api.e-z.host/paste/delete?key=random-deletion-key"
}`}
          />
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-xl font-semibold">
          Error Handling
        </motion.h3>

        <motion.div
          variants={itemVariants}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6"
        >
          <p className="text-gray-300 mb-4">
            Possible error responses include:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-red-400">400 Bad Request</strong>: Invalid
              input format.
            </li>
            <li>
              <strong className="text-red-400">401 Unauthorized</strong>:
              Invalid API key.
            </li>
            <li>
              <strong className="text-red-400">422 Unprocessable Entity</strong>
              : Validation error due to missing or invalid parameters.
            </li>
            <li>
              <strong className="text-red-400">429 Too Many Requests</strong>:
              Rate limit exceeded.
            </li>
          </ul>
        </motion.div>

        <motion.section
          variants={itemVariants}
          className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20"
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
      </motion.div>
    </div>
  );
}
