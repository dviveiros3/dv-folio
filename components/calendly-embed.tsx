"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2 } from 'lucide-react'

interface CalendlyEmbedProps {
    url: string
    buttonText?: string
    buttonClassName?: string
    children?: React.ReactNode
}

export function CalendlyEmbed({
    url,
    buttonText = "Book Strategy Audit",
    buttonClassName,
    children
}: CalendlyEmbedProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [shouldPreload, setShouldPreload] = useState(false)

    // Preload Calendly widget script after 3 seconds for performance
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldPreload(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    // Preload the script in the background
    useEffect(() => {
        if (shouldPreload && !isLoaded) {
            const script = document.createElement('script')
            script.src = 'https://assets.calendly.com/assets/external/widget.js'
            script.async = true
            script.onload = () => setIsLoaded(true)
            document.head.appendChild(script)
        }
    }, [shouldPreload, isLoaded])

    const openCalendly = useCallback(() => {
        setIsOpen(true)
        // If script not preloaded yet, load it now
        if (!isLoaded) {
            const existingScript = document.querySelector('script[src*="calendly"]')
            if (!existingScript) {
                const script = document.createElement('script')
                script.src = 'https://assets.calendly.com/assets/external/widget.js'
                script.async = true
                script.onload = () => setIsLoaded(true)
                document.head.appendChild(script)
            }
        }
    }, [isLoaded])

    const closeCalendly = useCallback(() => {
        setIsOpen(false)
    }, [])

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeCalendly()
        }
        if (isOpen) {
            window.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            window.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, closeCalendly])

    return (
        <>
            {/* Trigger button */}
            {children ? (
                <div onClick={openCalendly} className="cursor-pointer">
                    {children}
                </div>
            ) : (
                <button
                    onClick={openCalendly}
                    className={buttonClassName}
                >
                    {buttonText}
                </button>
            )}

            {/* Modal overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCalendly}
                    >
                        <motion.div
                            className="relative w-full max-w-2xl h-[700px] max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeCalendly}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-slate-600" />
                            </button>

                            {/* Loading state */}
                            {!isLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white">
                                    <div className="flex flex-col items-center gap-3">
                                        <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
                                        <span className="text-sm text-slate-500">Loading scheduler...</span>
                                    </div>
                                </div>
                            )}

                            {/* Calendly inline widget */}
                            <div
                                className="calendly-inline-widget w-full h-full"
                                data-url={`${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=1e293b&primary_color=0f172a`}
                                style={{ minWidth: '320px', height: '100%' }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
