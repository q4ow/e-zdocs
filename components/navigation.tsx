"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Settings, ExternalLink, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ezLogo from "../public/assets/e-z.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "Getting Started",
    href: "/docs/getting-started",
    icon: BookOpen,
    subItems: [
      { name: "Quick Start", href: "/docs/getting-started/quick-start" },
      { name: "Installation", href: "/docs/getting-started/installation" },
    ],
  },
  {
    name: "API Reference",
    href: "/docs/api",
    icon: Code2,
    subItems: [
      { name: "Authentication", href: "/docs/api/authentication" },
      { name: "Endpoints", href: "/docs/api/endpoints" },
    ],
  },
  {
    name: "Configuration",
    href: "/docs/config",
    icon: Settings,
    subItems: [
      { name: "Basic Setup", href: "/docs/config/basic-setup" },
      { name: "Advanced", href: "/docs/config/advanced" },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <nav
      className={cn(
        "relative bg-zinc-950 border-r border-blue-900/20 p-4 space-y-8 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors"
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.div>
      </button>

      <div className="flex items-center gap-2 px-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
            {!isCollapsed && (
            <Link href="/" className="w-12 h-12 rounded-lg flex items-center justify-center">
              <Image src={ezLogo} alt="" />
            </Link>
            )}
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={cn("text-xl font-bold text-white", isCollapsed && "hidden")}
        >
          E-Z Docs
        </motion.div>
      </div>

      <div className="space-y-1">
        {menuItems.map((item, index) => {
          const isActive = pathname.startsWith(item.href);
          const isOpen = openSection === item.name;
          const Icon = item.icon;

          return (
            <div key={item.href}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all cursor-pointer",
                  isActive
                    ? "bg-blue-600/10 text-blue-500"
                    : "text-gray-400 hover:text-white hover:bg-blue-600/5"
                )}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                </Link>
                {!isCollapsed && (
                  <span 
                    className="flex-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenSection(isOpen ? null : item.name);
                    }}
                  >
                    {item.name}
                  </span>
                )}
              </motion.div>

              {!isCollapsed && isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-6 mt-1 space-y-1"
                >
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className={cn(
                          "px-3 py-1.5 text-sm rounded-md transition-colors",
                          pathname === subItem.href
                            ? "text-blue-500 bg-blue-600/5"
                            : "text-gray-400 hover:text-white hover:bg-blue-600/5"
                        )}
                      >
                        {subItem.name}
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-blue-900/20">
        <motion.a
          whileHover={{ x: 4 }}
          href="https://e-z.gg"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-blue-600/5",
            isCollapsed && "justify-center"
          )}
        >
          <ExternalLink className="w-4 h-4" />
          {!isCollapsed && "Visit E-Z.gg"}
        </motion.a>
      </div>
    </nav>
  );
}