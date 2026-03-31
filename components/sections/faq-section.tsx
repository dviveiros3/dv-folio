"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from 'lucide-react'
import { useState, RefObject } from "react"
import { faqs } from "@/data/content"

interface FAQSectionProps {
  isVisible: boolean
  sectionRef: RefObject<HTMLElement | null>
}

export function FAQSection({ isVisible, sectionRef }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={sectionRef} id="faq" className="px-8 py-24 bg-white">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Clarity</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Common Questions
          </h2>
          <div className="line-accent max-w-xs" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 border border-slate-200 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
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
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
