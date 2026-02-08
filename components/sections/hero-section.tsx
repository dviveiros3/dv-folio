"use client"

import { heroContent } from "@/data/content"
import { ChevronDown } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { RefObject } from "react"
import { AnimatedCounter } from "@/components/animated-counter"

interface HeroSectionProps {
    isVisible: boolean
    scrollToSection: (sectionId: string) => void
    isTyping: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function HeroSection({ isVisible, scrollToSection, isTyping, sectionRef }: HeroSectionProps) {
    return (
        <section ref={sectionRef} id="hero" className="min-h-screen flex items-center relative px-8 py-20 bg-grid">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-12 gap-8 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        className="col-span-12 lg:col-span-8 space-y-12"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {/* Header Block */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="status-dot-pro" />
                                <span className="text-sm font-medium text-slate-600 tracking-tight">Limited Availability for Q1 2026</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05] text-balance">
                                {heroContent.headline}
                                <span className="text-slate-500 block mt-2">{heroContent.subheadline}</span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-slate-600 font-normal leading-relaxed max-w-2xl text-balance">
                                {heroContent.valueProp}
                            </p>

                            <div className="flex flex-col gap-2 pt-4">
                                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Designed For</p>
                                <p className="text-base text-slate-700 font-medium">
                                    {heroContent.targetAudience}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Coached leaders at</p>
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                                    <span className="text-sm font-bold text-slate-900">Connected Dealer Services</span>
                                    <span className="text-sm font-bold text-slate-900">Tenth Avenue Commerce</span>
                                    <span className="text-sm font-bold text-slate-900">Trajectory Tutors</span>
                                </div>
                            </div>
                        </div>
                        {/* Divider */}
                        <div className="line-accent" />

                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { value: "50+", label: "Leaders Coached" },
                                { value: "95%", label: "Retention Rate" },
                                { value: "12+", label: "Unicorn Exits" },
                            ].map((metric, i) => (
                                <motion.div
                                    key={i}
                                    className="space-y-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                >
                                    <div className="font-mono text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900">
                                        <AnimatedCounter target={metric.value} isVisible={isVisible} />
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <a
                                href="https://calendly.com/daniel-viveiros/15min-intro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 transition-colors duration-200"
                            >
                                Apply for Strategy Call
                                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Headshot */}
                    <motion.div
                        className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=280&width=280"
                                alt="Daniel Viveiros"
                                width={280}
                                height={280}
                                className="grayscale filter contrast-125"
                                priority
                            />
                            {/* Simple border frame */}
                            <div className="absolute -inset-4 border border-slate-200 -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <button
                onClick={() => scrollToSection("problems")}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-900 transition-colors duration-200"
            >
                <ChevronDown className="w-6 h-6" />
            </button>
        </section>
    )
}
