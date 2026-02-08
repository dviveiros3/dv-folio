"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Calendar } from 'lucide-react'
import { useEffect, useState } from "react"

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 600px)
            if (window.scrollY > 600) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Desktop: Floating pill */}
                    <motion.div
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 overflow-hidden hidden md:block"
                        initial={{ y: 100, opacity: 0, x: "-50%" }}
                        animate={{ y: 0, opacity: 1, x: "-50%" }}
                        exit={{ y: 100, opacity: 0, x: "-50%" }}
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href="https://calendly.com/daniel-viveiros/15min-intro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 transition-all duration-300 border border-slate-700/50"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium text-sm whitespace-nowrap">Book Strategy Audit</span>
                            <ArrowUpRight className="w-4 h-4 text-slate-400" />
                        </a>
                    </motion.div>

                    {/* Mobile: Full-width sticky footer */}
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-slate-900 border-t border-slate-700/50 px-4 py-3 safe-area-inset-bottom">
                            <a
                                href="https://calendly.com/daniel-viveiros/15min-intro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-3 rounded-lg font-medium text-sm shadow-lg active:scale-[0.98] transition-transform"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Book 15-min Intro</span>
                                <ArrowUpRight className="w-4 h-4 text-slate-400" />
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

