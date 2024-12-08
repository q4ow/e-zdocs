"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/dist/client/components/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import {
  Menu,
  ChevronLeft,
  ChevronDown,
  Code2,
  Settings,
  Users,
  HelpCircle,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const menuItems = [
  {
    name: "Getting Started",
    icon: BookOpen,
    subItems: [
      { name: "Overview", href: "/docs/getting-started" },
      { name: "Dashboard", href: "/docs/getting-started/dashboard" },
      { name: "Registration", href: "/docs/getting-started/registration" },
    ],
  },
  {
    name: "API Reference",
    icon: Code2,
    subItems: [{ name: "Overview", href: "/docs/api" }],
  },
  {
    name: "Configuration",
    icon: Settings,
    subItems: [{ name: "Overview", href: "/docs/config" }],
  },
];

const quickLinks = [
  {
    name: "E-Z Bio",
    href: "/docs/bio",
    icon: Users,
  },
  {
    name: "FAQ",
    href: "/faq",
    icon: HelpCircle,
  },
  {
    name: "Discord",
    href: "/discord",
    icon: FaDiscord,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-zinc-800/90 text-zinc-100"
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
      </button>

      <nav
        className={cn(
          "fixed lg:relative flex flex-col h-screen bg-zinc-950/95 backdrop-blur-sm border-r border-zinc-500/20 transition-all duration-300 ease-in-out z-40",
          isCollapsed ? "w-20" : "w-64",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-[60px] items-center justify-between px-4 border-b border-zinc-800/50">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 font-semibold text-zinc-100",
                isCollapsed && "justify-center",
              )}
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/assets/e-z.svg"
                  alt="E-Z Docs Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <AnimatePresence mode="wait">
                {!isCollapsed && (
                  <motion.span
                    className="text-lg whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                  >
                    E-Z Docs
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-zinc-800/50 lg:flex hidden"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronLeft
                className={cn(
                  "h-5 w-5 transition-transform",
                  isCollapsed && "rotate-180",
                )}
              />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>

          <ScrollArea className="flex-1 py-4">
            <div className="space-y-1 px-3">
              {!isCollapsed && (
                <h2 className="px-3 mb-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Documentation
                </h2>
              )}

              {menuItems.map((item) => {
                const isActive = item.subItems.some((subItem) =>
                  pathname.startsWith(subItem.href),
                );
                const Icon = item.icon;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isExpanded = openSection === item.name;

                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => {
                        if (hasSubItems) {
                          toggleSection(item.name);
                        }
                      }}
                      className="w-full"
                    >
                      <div
                        className={cn(
                          "w-full h-10 flex items-center gap-3 px-3 relative group rounded-md transition-colors",
                          isActive || isExpanded
                            ? "bg-blue-500/10 text-blue-400 font-medium"
                            : "hover:bg-zinc-800/50 hover:text-zinc-100",
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-5 h-5 flex-shrink-0",
                            isActive || isExpanded
                              ? "text-blue-400"
                              : "text-zinc-400 group-hover:text-zinc-100",
                          )}
                        />
                        {!isCollapsed && (
                          <>
                            <span className="truncate flex-1 text-left">
                              {item.name}
                            </span>
                            {hasSubItems && (
                              <ChevronDown
                                className={cn(
                                  "w-4 h-4 transition-transform",
                                  isExpanded && "rotate-180",
                                  isActive || isExpanded
                                    ? "text-blue-400"
                                    : "text-zinc-400 group-hover:text-zinc-100",
                                )}
                              />
                            )}
                          </>
                        )}
                        {(isActive || isExpanded) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 w-1 h-full bg-blue-500 rounded-r-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </button>

                    {!isCollapsed && hasSubItems && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-1 space-y-1 border-l-2 border-zinc-800/50"
                          >
                            {item.subItems.map((subItem) => (
                              <Link key={subItem.href} href={subItem.href}>
                                <div
                                  className={cn(
                                    "flex items-center w-full h-8 pl-4 rounded-md transition-colors",
                                    pathname === subItem.href
                                      ? "text-blue-400 bg-blue-500/5 font-medium"
                                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50",
                                  )}
                                >
                                  <span className="text-sm">
                                    {subItem.name}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}

              {!isCollapsed && (
                <h2 className="px-3 mb-4 pt-4 pb-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Quick Links
                </h2>
              )}

              {quickLinks.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link key={item.name} href={item.href}>
                    <div
                      className={cn(
                        "w-full h-10 flex items-center gap-3 px-3 relative group rounded-md transition-colors",
                        isActive
                          ? "bg-blue-500/10 text-blue-400 font-medium"
                          : "hover:bg-zinc-800/50 hover:text-zinc-100",
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 flex-shrink-0",
                          isActive
                            ? "text-blue-400"
                            : "text-zinc-400 group-hover:text-zinc-100",
                        )}
                      />
                      {!isCollapsed && (
                        <span className="truncate flex-1 text-left">
                          {item.name}
                        </span>
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 w-1 h-full bg-blue-500 rounded-r-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>

          <div className="mt-auto p-4 border-t border-zinc-800/50">
            <a
              href="https://e-z.gg"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-800/50",
                isCollapsed && "justify-center px-2",
              )}
            >
              <ExternalLink className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>Visit E-Z.gg</span>}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
