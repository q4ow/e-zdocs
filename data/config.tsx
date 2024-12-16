import { FileUp, Link2, Code } from "lucide-react";

export const configTypes = [
  {
    icon: <FileUp className="w-6 h-6 text-blue-400" />,
    title: "File Uploader",
    description:
      "Upload files quickly and easily with our custom ShareX configuration.",
    features: [
      "Supports various file types",
      "Automatic file naming",
      "Custom upload endpoints",
    ],
    screenshot: "/assets/config/sharex-upload.png",
    downloadLink: "https://e-z.gg/dash/settings",
  },
  {
    icon: <Link2 className="w-6 h-6 text-green-400" />,
    title: "URL Shortener",
    description:
      "Shorten URLs using our custom ShareX configuration for quick sharing.",
    features: [
      "Custom short URL generation",
      "Multiple domain options",
      "Analytics tracking",
    ],
    screenshot: "/assets/config/sharex-shortener.png",
    downloadLink: "https://e-z.gg/dash/tools/shortener",
  },
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Paste Uploader",
    description:
      "Share code snippets and text easily with our ShareX paste configuration.",
    features: [
      "Syntax highlighting",
      "Custom paste URLs",
      "Expiration options",
    ],
    screenshot: "/assets/config/sharex-pastes.png",
    downloadLink: "https://e-z.gg/dash/tools/pastes",
  },
];
