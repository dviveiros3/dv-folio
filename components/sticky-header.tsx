"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface StickyHeaderProps {
  scrollToSection: (sectionId: string) => void
  activeSection: string
}

export function StickyHeader({ scrollToSection, activeSection }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "impact", label: "Impact", href: "/#impact" },
    { id: "services", label: "Services", href: "/#services" },
    { id: "pricing", label: "Pricing", href: "/#pricing" },
    { id: "faq", label: "FAQ", href: "/#faq" },
    { id: "trinity", label: "Trinity", href: "/trinity" },
  ]

  const handleNavClick = (item: { id: string; href: string }) => {
    setIsMobileMenuOpen(false)

    if (pathname === "/" && item.href.startsWith("/#")) {
      scrollToSection(item.id)
    } else if (pathname === "/trinity" && item.href === "/trinity") {
      scrollToSection("hero")
    } else {
      router.push(item.href)
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold text-sm">
              DV
            </div>
            <span className={`font-semibold tracking-tight transition-colors hidden sm:block ${
              isScrolled ? "text-slate-900" : "text-slate-900"
            }`}>
              Daniel Viveiros
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                  activeSection === item.id ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick({ id: "pricing", href: "/#pricing" })}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors"
            >
              <span className="hidden sm:inline">Book Call</span>
              <span className="sm:hidden">Book</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-sm transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white border-b border-slate-200 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 rounded-sm transition-colors ${
                    activeSection === item.id
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
