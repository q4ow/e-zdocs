'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { BookOpen, ChevronLeft, Code2, ExternalLink, Settings, Users } from 'lucide-react'

const menuItems = [
  {
    name: 'Getting Started',
    href: '/docs/getting-started',
    icon: BookOpen,
    subItems: [
      { name: 'Dashboard', href: '/docs/getting-started/dashboard' },
      { name: 'Registration', href: '/docs/getting-started/registration' },
    ],
  },
  {
    name: 'API Reference',
    href: '/docs/api',
    icon: Code2,
    subItems: [
      { name: 'Authentication', href: '/docs/api/authentication' },
      { name: 'Endpoints', href: '/docs/api/endpoints' },
    ],
  },
  {
    name: 'Configuration',
    href: '/docs/config',
    icon: Settings,
    subItems: [
      { name: 'Basic Setup', href: '/docs/config/basic-setup' },
      { name: 'Advanced', href: '/docs/config/advanced' },
    ],
  },
  {
    name: 'E-Z Bio',
    href: '/docs/bio',
    icon: Users,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const [openSection, setOpenSection] = React.useState<string | null>(null)

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative flex flex-col h-screen bg-zinc-950 backdrop-blur-sm border-r border-zinc-500/20 transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="block w-12 h-12">
            <Image src="/assets/e-z.svg" alt="E-Z Logo" width={48} height={48} />
          </Link>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold text-white"
              >
                E-Z Docs
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute -right-4 top-6 bg-zinc-950/90 hover:bg-zinc-900/90 border-2 border-dotted border-zinc-500/20"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="w-4 h-4 text-blue-500" />
          </motion.div>
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Collapsible
              key={item.href}
              open={openSection === item.name}
              onOpenChange={() => setOpenSection(openSection === item.name ? null : item.name)}
            >
              <div className="flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={cn(
                            'h-10 w-10',
                            isActive && 'bg-blue-600/10 text-blue-500'
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    {isCollapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                  </Tooltip>
                </TooltipProvider>
                {!isCollapsed && (
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        'flex-1 justify-start pl-2 h-10',
                        isActive && 'bg-blue-600/10 text-blue-500'
                      )}
                    >
                      <span>{item.name}</span>
                    </Button>
                  </CollapsibleTrigger>
                )}
              </div>
              <AnimatePresence>
                {!isCollapsed && item.subItems && (
                  <CollapsibleContent>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-10 mt-1 space-y-1"
                    >
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href}>
                        <Button
                          variant="ghost"
                          className={cn(
                            'w-full justify-start h-8 text-sm',
                            pathname === subItem.href ? 'text-blue-500 bg-blue-600/5' : 'text-zinc-400'
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
          )
        })}
      </div>

      <div className="p-4 border-t border-zinc-500/20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://e-z.gg"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-blue-600/5',
                  isCollapsed && 'justify-center'
                )}
              >
                <ExternalLink className="w-4 h-4" />
                {!isCollapsed && 'Visit E-Z.gg'}
              </Link>
            </TooltipTrigger>
            {isCollapsed && <TooltipContent side="right">Visit E-Z.gg</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.nav>
  )
}