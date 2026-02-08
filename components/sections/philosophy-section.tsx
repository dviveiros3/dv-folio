"use client"

import { motion } from "framer-motion"
import { endorsements } from "@/data/content"
import { RefObject } from "react"

interface PhilosophySectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function PhilosophySection({ isVisible, sectionRef }: PhilosophySectionProps) {
    return (
        <section
            ref={sectionRef}
            id="philosophy"
            className="min-h-screen flex items-center px-8 py-32 bg-slate-50"
        >
            <div className="max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Manifesto Header */}
                    <motion.div
                        className="col-span-12 lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">The Philosophy</p>
                        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                            Talent is the<br />Only Moat.
                        </h2>
                        <div className="w-12 h-1 bg-slate-900" />

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Technology is a commodity. Your competitive advantage is your people.
                            </p>
                            <p>
                                <span className="text-slate-900 font-medium">I stop you from making expensive hiring mistakes.</span>
                            </p>
                            <p>
                                From technical screening to culture fit, I help you build a data organization that delivers value from day one. No more bad hires, no more wasted cycles.
                            </p>
                        </div>
                    </motion.div>

                    {/* Quote Card */}
                    <motion.div
                        className="col-span-12 lg:col-span-7"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="card-executive p-12 relative overflow-hidden">
                            <span className="absolute top-0 left-0 text-[180px] leading-none font-serif text-slate-100 -translate-y-16 translate-x-4 select-none">"</span>

                            <blockquote className="relative z-10 text-2xl lg:text-3xl font-medium text-slate-900 leading-relaxed mb-8">
                                "{endorsements[0].quote}"
                            </blockquote>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                    {/* Placeholder for Executive Image */}
                                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{endorsements[0].title}</div>
                                    <div className="text-sm text-slate-500">{endorsements[0].company}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
