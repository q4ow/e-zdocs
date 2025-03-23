import {
  LayoutDashboard,
  Settings,
  Link,
  Images,
  FileUp,
  Link2,
  Code,
  ScrollText,
  Terminal,
  Users,
} from "lucide-react";

export const sections = [
  {
    icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
    title: "Overview",
    description:
      "The main dashboard view provides a comprehensive summary of your account statistics and recent activity.",
    features: [
      "Total Uploads & Storage Analytics",
      "Message of the Day",
      "User ID",
      "Invite statistics",
      "Daily Upload and Login Statistics",
    ],
    screenshot: "/assets/dashboard/dashboard.png",
  },
  {
    icon: <Settings className="w-6 h-6 text-indigo-400" />,
    title: "Settings",
    description:
      "Customize every aspect of your E-Z experience with our powerful settings panel.",
    features: [
      "Custom Upload Tools Configuration",
      "Domain & URL Preferences",
      "Embed Customization Options",
      "Image Border Customization",
    ],
    screenshot: "/assets/dashboard/settings.png",
  },
  {
    icon: <Link className="w-6 h-6 text-indigo-400" />,
    title: "Domains",
    description:
      "View all public domains along with managing your own donated domains.",
    features: ["Domain list", "Add your own", "User count for each domain"],
    screenshot: "/assets/dashboard/domains.png",
  },
  {
    icon: <Images className="w-6 h-6 text-indigo-400" />,
    title: "Gallery",
    description:
      "Browse, manage, and organize all your uploaded content in one place.",
    features: [
      "Grid view of all uploaded files",
      "Filter by MIME type",
      "Convenient Pagination",
      "Quick Copy & Delete Buttons",
    ],
    screenshot: "/assets/dashboard/gallery.png",
  },
  {
    icon: <FileUp className="w-6 h-6 text-indigo-400" />,
    title: "Uploader",
    description:
      "Fast and reliable file uploads with support for various file types and sizes.",
    features: [
      "25MB Standard Upload Limit",
      "100MB Premium User Limit",
      "Easily Copy Share Links",
      "Image/Video/Audio files allowed",
    ],
    screenshot: "/assets/dashboard/uploader.png",
  },
  {
    icon: <Link2 className="w-6 h-6 text-indigo-400" />,
    title: "URL Shortener",
    description: "Shorten URLs using any of our domains.",
    features: [
      "Choose from 180+ domains",
      "ShareX compatible",
      "Copy/Delete your shortened URLs",
    ],
    screenshot: "/assets/dashboard/shortener.png",
  },
  {
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    title: "Pastes",
    description:
      "Create pastes using any programming/markdown language or plain text.",
    features: [
      "Syntax highlighting",
      "Custom URLs",
      "ShareX compatible",
      "Many programming languages supported",
    ],
    screenshot: "/assets/dashboard/pastes.png",
  },
];

export const quickTips = [
  {
    icon: <ScrollText className="w-5 h-5 text-indigo-400" />,
    tip: "You can use supported parameters to customise your embeds dynamically",
  },
  {
    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    tip: "You can use most of our services via documented, RESTful API endpoints",
  },
  {
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    tip: "Communicate with other users and staff in our Discord for help and chat",
  },
  {
    icon: <Settings className="w-5 h-5 text-indigo-400" />,
    tip: "Our services are highly configurable while being usable out of the box",
  },
];
