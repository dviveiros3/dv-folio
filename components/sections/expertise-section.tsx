"use client"

import { expertiseAreas } from "@/data/content"
import { motion } from "framer-motion"
import { RefObject } from "react"

interface ExpertiseSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function ExpertiseSection({ isVisible, sectionRef }: ExpertiseSectionProps) {
    return (
        <section ref={sectionRef} id="expertise" className="min-h-screen flex items-center px-8 py-24 bg-slate-50 bg-grid">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-12 gap-16">
                    {/* Sidebar */}
                    <motion.div
                        className="col-span-12 lg:col-span-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Capabilities</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                                Core Expertise
                            </h2>
                            <div className="line-accent max-w-xs" />
                            <p className="text-slate-600 leading-relaxed">
                                Full-stack analytics capabilities spanning strategy, engineering, and leadership.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {expertiseAreas.map((category, categoryIndex) => (
                                <motion.div
                                    key={categoryIndex}
                                    className="space-y-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                                >
                                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">
                                        {category.category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="text-slate-700 font-medium flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 bg-green-500 rounded-full" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
