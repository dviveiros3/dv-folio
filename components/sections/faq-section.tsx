"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from 'lucide-react'
import { useState, RefObject } from "react"

interface FAQSectionProps {
    isVisible: boolean
    sectionRef: RefObject<HTMLElement | null>
}

const faqs = [
    {
        question: "Why hire a Fractional Head of Data instead of a full-time leader?",
        answer: "Most Series A/B startups don't need a full-time, $250k+ executive yet. They need strategy and architecture, which I provide at a fraction of the cost. You get senior experience without the overhead, usually transitioning to a full-time hire when you hit Series C."
    },
    {
        question: "Do you also do individual contributor (IC) work?",
        answer: "Yes. I am 'player-coach' by default. I don't just make slide decks; I write dbt models, optimize SQL queries, and set up your Cloud infrastructure. I build the foundation so your future team can scale on top of it."
    },
    {
        question: "How quickly can we start?",
        answer: "I limit my active partners to ensure focus. If I have availability, we can start with a 15-minute audit call this week and begin the engagement within 48 hours. No lengthy HR onboarding required."
    },
    {
        question: "What is your typical engagement model?",
        answer: "Retainer-based, usually month-to-month. This keeps incentives aligned—I have to deliver value every single month to keep your business. Most partners stay for 12-18 months."
    }
]

export function FAQSection({ isVisible, sectionRef }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section ref={sectionRef} id="faq" className="min-h-screen flex items-center px-8 py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto w-full">
                <div className="space-y-16">
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Clarity</p>
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                            Common Questions
                        </h2>
                        <div className="line-accent max-w-xs" />
                    </motion.div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-slate-200 overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-slate-400" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-slate-400" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
