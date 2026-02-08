"use client"

import { motion } from "framer-motion"
import { RefObject } from "react"

interface ProofSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

export function ProofSection({ isVisible, sectionRef }: ProofSectionProps) {
    const caseStudies = [
        {
            title: "AI-Enhanced Financial Analytics Platform",
            company: "Connected Dealer Services",
            year: "2022-2024",
            impact: "$2.1M revenue optimization",
            description: "End-to-end financial intelligence system with ML-powered revenue recognition and predictive cash flow modeling.",
        },
        {
            title: "Self-Service Analytics Infrastructure",
            company: "Tenth Avenue Commerce",
            year: "2020-2022",
            impact: "65% reduction in reporting time",
            description: "Automated BI dashboards replacing manual reporting, enabling 150+ stakeholders with data literacy.",
        },
    ]

    return (
        <section
            ref={sectionRef}
            id="proof"
            className="min-h-screen flex items-center px-8 py-32 bg-slate-50 bg-grid"
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
                        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Case Studies</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                            Proof of Work
                        </h2>
                        <div className="line-accent max-w-xs" />
                    </motion.div>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((cs, index) => (
                            <motion.article
                                key={index}
                                className="card-tech p-8 space-y-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-wider">
                                    <span>{cs.company}</span>
                                    <span>{cs.year}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">{cs.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{cs.description}</p>
                                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                                    <span className="status-dot" />
                                    <span className="font-mono text-sm font-medium text-green-700">{cs.impact}</span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
