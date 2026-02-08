"use client"

import { problemsSolved } from "@/data/content"
import { motion } from "framer-motion"
import { RefObject } from "react"
import { Check } from 'lucide-react'

interface ProblemsSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function ProblemsSection({ isVisible, sectionRef }: ProblemsSectionProps) {
    return (
        <section
            ref={sectionRef}
            id="problems"
            className="min-h-screen flex items-center px-8 py-32 bg-white"
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="space-y-16">
                    {/* Header */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">The Problem</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
                            Why Founders<br />Call Me
                        </h2>
                        <div className="w-12 h-1 bg-slate-900 mb-6" />
                    </motion.div>

                    {/* Problem/Solution Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {problemsSolved.map((item, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 p-10 card-executive group"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {/* Problem Side */}
                                <div className="md:text-right space-y-2">
                                    <h3 className="text-xl font-medium text-slate-400 group-hover:text-slate-500 transition-colors">"{item.problem}"</h3>
                                </div>

                                {/* Divider/Icon */}
                                <div className="hidden md:flex justify-center">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:border-slate-300 transition-all shadow-sm">
                                        <Check className="w-5 h-5 text-slate-300 group-hover:text-green-600 transition-colors" />
                                    </div>
                                </div>

                                {/* Solution Side */}
                                <div className="space-y-2">
                                    <p className="text-lg text-slate-900 font-medium leading-relaxed">{item.solution}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
