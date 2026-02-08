"use client"

import { endorsements } from "@/data/content"
import { motion } from "framer-motion"
import { RefObject } from "react"

interface EndorsementsSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function EndorsementsSection({ isVisible, sectionRef }: EndorsementsSectionProps) {
    return (
        <section
            ref={sectionRef}
            id="endorsements"
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
                        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Endorsements</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                            Peer Review
                        </h2>
                        <div className="line-accent max-w-xs" />
                    </motion.div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {endorsements.map((item, index) => (
                            <motion.article
                                key={index}
                                className="flex flex-col justify-between p-8 card-tech"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <blockquote className="text-slate-700 leading-relaxed text-lg mb-8">
                                    "{item.quote}"
                                </blockquote>
                                <div className="border-t border-slate-100 pt-6">
                                    <div className="text-sm text-slate-900 font-semibold">{item.title}</div>
                                    <div className="text-sm text-slate-500">{item.company} · {item.year}</div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
