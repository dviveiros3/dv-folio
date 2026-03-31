"use client"

import { impactData } from "@/data/content"
import { AnimatedCounter } from "@/components/animated-counter"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { RefObject } from "react"

interface ImpactSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function ImpactSection({ isVisible, sectionRef }: ImpactSectionProps) {
    return (
        <section
            ref={sectionRef}
            id="impact"
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
                        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Impact</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                            Quantified Results
                        </h2>
                        <div className="line-accent max-w-xs" />
                    </motion.div>

                    {/* Metrics Grid - Broken Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactData.map((item, index) => {
                            const isFeatured = index === 0;
                            return (
                                <motion.div
                                    key={index}
                                    className={`
                      card-executive p-8 flex flex-col justify-between group
                      ${isFeatured ? 'md:col-span-2 bg-slate-900 border-slate-900 text-white' : ''}
                    `}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div>
                                        <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${isFeatured ? 'text-green-400' : 'text-slate-400'}`}>
                                            {item.category}
                                        </div>
                                        <div className={`font-bold tracking-tighter leading-none mb-4 ${isFeatured ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-4xl md:text-5xl text-slate-900'}`}>
                                            <AnimatedCounter target={item.metric} isVisible={isVisible} />
                                        </div>
                                    </div>

                                    <div className={`pt-8 border-t ${isFeatured ? 'border-white/10' : 'border-slate-100'}`}>
                                        <p className={`text-lg font-medium leading-relaxed ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

{/* Secondary CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-green-700 transition-colors"
          >
            See how I deliver these results
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
            </div>
        </section>
    )
}
