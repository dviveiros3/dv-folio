"use client"

import { motion } from "framer-motion"
import { RefObject } from "react"
import { pricingTiers } from "@/data/content"
import { ArrowUpRight } from "lucide-react"

interface PricingSectionProps {
  isVisible: boolean
  sectionRef: RefObject<HTMLElement | null>
}

export function PricingSection({ isVisible, sectionRef }: PricingSectionProps) {
  return (
    <section ref={sectionRef} id="pricing" className="px-8 py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Investment</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Clear Pricing, Clear Deliverables
          </h2>
          <div className="line-accent max-w-xs" />
        </motion.div>

        <div className="grid gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`bg-white border ${tier.highlighted ? "border-slate-900" : "border-slate-200"} p-8`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-900">{tier.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{tier.description}</p>
                </div>
                <div className="lg:text-right">
                  <div className="text-4xl font-bold text-slate-900 font-mono">{tier.price}</div>
                  <p className="text-sm text-slate-500 mt-1">one-time investment</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Timeline</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {tier.timeline.map((week, i) => (
                    <div key={i} className="space-y-2">
                      <p className="font-semibold text-slate-900">{week.week}</p>
                      <ul className="space-y-1">
                        {week.activities.map((activity, j) => (
                          <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">You walk away with</p>
                <ul className="space-y-2">
                  {tier.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span className="text-slate-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">What's included</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-slate-900 mt-0.5">→</span>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <a
                  href="https://calendly.com/daniel-viveiros/15min-intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-medium px-6 py-3 transition-colors duration-200 ${
                    tier.highlighted
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-300"
                  }`}
                >
                  {tier.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Need ongoing support? Let's discuss fractional leadership during our call.
        </motion.p>
      </div>
    </section>
  )
}
