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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookOpen,
  ChevronLeft,
  Code2,
  ExternalLink,
  Settings,
  Users,
  HelpCircle,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const menuItems = [
  {
    name: "Getting Started",
    href: "/docs/getting-started",
    icon: BookOpen,
    subItems: [
      { name: "Dashboard", href: "/docs/getting-started/dashboard" },
      { name: "Registration", href: "/docs/getting-started/registration" },
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
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [openSection, setOpenSection] = React.useState<string | null>(null);
  const [isDiscordHovered, setIsDiscordHovered] = React.useState(false);

  return (
    <nav
      className={cn(
        "relative flex flex-col h-screen bg-zinc-950 backdrop-blur-sm border-r border-zinc-500/20 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-[60px] items-center justify-between px-4">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-semibold text-zinc-100 mt-2",
              isCollapsed && "justify-center",
            )}
          >
            <div className="relative w-8 h-8">
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
                  className="text-lg origin-left"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                    transition: {
                      opacity: { delay: 0.2, duration: 0.2 },
                      width: { duration: 0.2 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                    transition: {
                      opacity: { duration: 0.1 },
                      width: { delay: 0.1, duration: 0.2 },
                    },
                  }}
                >
                  E-Z Docs
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:bg-zinc-800/50"
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
            </CollapsibleTrigger>
          </Collapsible>
        </div>

        <div className="flex flex-col items-center py-3">
          <motion.div
            className="relative flex w-full items-center justify-center"
            onHoverStart={() => setIsDiscordHovered(true)}
            onHoverEnd={() => setIsDiscordHovered(false)}
          >
            <motion.div
              className="flex items-center"
              animate={{
                x: isDiscordHovered && !isCollapsed ? -20 : 0,
              }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.div>
        </div>

        <ScrollArea className="flex-1 py-2">
          <div className="space-y-1 px-2">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <Collapsible
                  key={item.href}
                  open={openSection === item.name}
                  onOpenChange={() =>
                    setOpenSection(openSection === item.name ? null : item.name)
                  }
                >
                  <div
                    className={cn(
                      "flex items-center",
                      isCollapsed && "justify-center",
                    )}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={item.href}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className={cn(
                                "h-10 w-10 transition-all duration-300",
                                isActive && "bg-blue-500/10 text-blue-400",
                                !isActive &&
                                  "hover:bg-zinc-800/50 hover:text-zinc-100",
                                isCollapsed ? "mx-auto" : "",
                              )}
                            >
                              <Icon className="w-5 h-5" />
                            </Button>
                          </Link>
                        </TooltipTrigger>
                        {isCollapsed && (
                          <TooltipContent
                            side="right"
                            className="bg-zinc-900/90 text-zinc-100"
                          >
                            {item.name}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                    {!isCollapsed &&
                      (item.subItems ? (
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "flex-1 justify-start pl-2 h-10 transition-all duration-300",
                              isActive && "bg-blue-500/10 text-blue-400",
                              !isActive &&
                                "hover:bg-zinc-800/50 hover:text-zinc-100",
                            )}
                          >
                            <span>{item.name}</span>
                          </Button>
                        </CollapsibleTrigger>
                      ) : (
                        <Link href={item.href} className="flex-1">
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start pl-2 h-10 transition-all duration-300",
                              isActive && "bg-blue-500/10 text-blue-400",
                              !isActive &&
                                "hover:bg-zinc-800/50 hover:text-zinc-100",
                            )}
                          >
                            <span>{item.name}</span>
                          </Button>
                        </Link>
                      ))}
                  </div>
                  <AnimatePresence>
                    {!isCollapsed && item.subItems && (
                      <CollapsibleContent>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-10 mt-1 space-y-1"
                        >
                          {item.subItems.map((subItem) => (
                            <Link key={subItem.href} href={subItem.href}>
                              <Button
                                variant="ghost"
                                className={cn(
                                  "w-full justify-start h-8 text-sm transition-colors",
                                  pathname === subItem.href
                                    ? "text-blue-400 bg-blue-500/5"
                                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50",
                                )}
                              >
                                {subItem.name}
                              </Button>
                            </Link>
                          ))}
                        </motion.div>
                      </CollapsibleContent>
                    )}
                  </AnimatePresence>
                </Collapsible>
              );
            })}
          </div>
        </ScrollArea>

        <div
          className={cn(
            "p-4 border-t border-zinc-800",
            isCollapsed && "flex justify-center",
          )}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://e-z.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-800/50",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  <ExternalLink className="w-4 h-4" />
                  {!isCollapsed && "Visit E-Z.gg"}
                </Link>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent
                  side="right"
                  className="bg-zinc-900/90 text-zinc-100"
                >
                  Visit E-Z.gg
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </nav>
  );
}
