"use client"

import { ArrowUpRight } from 'lucide-react'
import { motion } from "framer-motion"
import { RefObject } from "react"
import { CalendlyEmbed } from "@/components/calendly-embed"

interface EngageSectionProps {
  isVisible: boolean
  sectionRef: RefObject<HTMLElement | null>
}

export function EngageSection({ isVisible, sectionRef }: EngageSectionProps) {
  return (
    <section
      ref={sectionRef}
      id="engage"
      className="px-8 py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Contact</p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Let's Talk About Your Data Strategy
            </h2>
            <p className="text-xl text-slate-400 font-normal">
              Book a discovery call to discuss your data challenges and see if we're a good fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            <CalendlyEmbed url="https://calendly.com/daniel-viveiros/15min-intro">
              <motion.div
                className="col-span-1 md:col-span-2 lg:col-span-8 bg-slate-800 p-10 lg:p-12 flex flex-col justify-between group hover:bg-slate-700 transition-colors relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ArrowUpRight className="w-24 h-24" />
                </div>

                <div className="space-y-4 relative z-10">
                  <span className="inline-block px-3 py-1 bg-green-900/30 text-green-400 text-xs font-mono uppercase tracking-wider rounded-full border border-green-800/50">
                    Primary Channel
                  </span>
                  <h3 className="text-3xl font-semibold text-white">Book a Discovery Call</h3>
                  <p className="text-slate-400 max-w-md">
                    15 minutes to understand your situation. I'll share whether a data strategy audit makes sense for your stage.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  <span>Select a time</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            </CalendlyEmbed>

            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col gap-4">
              <a
                href="mailto:daniel@trajectorytutors.com"
                className="flex-1 bg-white border border-slate-200 p-8 flex flex-col justify-center gap-2 hover:border-slate-300 transition-colors text-slate-900"
              >
                <span className="text-sm font-mono text-slate-400 uppercase">Email</span>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Direct Message</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
              </a>

              <a
                href="https://linkedin.com/in/daniel-viveiros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#0077b5] p-8 flex flex-col justify-center gap-2 hover:bg-[#006396] transition-colors text-white"
              >
                <span className="text-sm font-mono text-white/60 uppercase">LinkedIn</span>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-white/60" />
                </div>
              </a>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2026 Daniel Viveiros</div>
            <div className="font-mono text-xs">Built with Next.js, Tailwind, and Framer Motion.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
