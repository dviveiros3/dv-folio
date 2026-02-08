"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Menu, X } from 'lucide-react'

interface StickyHeaderProps {
    scrollToSection: (sectionId: string) => void
    activeSection: string
}

export function StickyHeader({ scrollToSection, activeSection }: StickyHeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { id: "problems", label: "Problems" },
        { id: "impact", label: "Impact" },
        { id: "services", label: "Services" },
        { id: "expertise", label: "Expertise" },
        { id: "philosophy", label: "Philosophy" },
    ]

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId)
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
                    {/* Logo / Home */}
                    <button
                        onClick={() => handleNavClick("hero")}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold text-sm">
                            DV
                        </div>
                        <span className={`font-semibold tracking-tight transition-colors hidden sm:block ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                            Daniel Viveiros
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors hover:text-slate-900 ${activeSection === item.id ? "text-slate-900" : "text-slate-500"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA + Mobile Menu Toggle */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scrollToSection("engage")}
                            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors"
                        >
                            <span className="hidden sm:inline">Book Triage Call</span>
                            <span className="sm:hidden">Book Call</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-sm transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-slate-200 md:hidden"
                    >
                        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`text-left px-4 py-3 rounded-sm transition-colors ${activeSection === item.id
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
