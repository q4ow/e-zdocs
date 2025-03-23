"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div className="absolute right-4 top-4">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Clipboard className="w-4 h-4 text-purple-400" />
          )}
        </button>
      </div>
      <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
        <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
          {language}
        </div>
        <pre className="text-purple-400">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
}
