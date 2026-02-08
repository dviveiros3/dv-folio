"use client"

import { services } from "@/data/content"
import { motion } from "framer-motion"
import { RefObject } from "react"
import { ArrowUpRight } from 'lucide-react'

interface ServicesSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function ServicesSection({ isVisible, sectionRef }: ServicesSectionProps) {
    return (
        <section ref={sectionRef} id="services" className="min-h-screen flex items-center px-8 py-24 bg-slate-50 bg-grid">
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
                            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">The Offer</p>
                            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                                Fractional<br />Leadership
                            </h2>
                            <div className="w-12 h-1 bg-slate-900 mb-6" />
                            <p className="text-lg text-slate-600 leading-relaxed max-w-sm">
                                Strategic data capability inserted directly into your org chart. Immediate impact, no onboarding lag.
                            </p>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="grid grid-cols-1 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="card-executive p-10 group cursor-pointer"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200 px-3 py-1 rounded-full">
                                            {service.audience}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
