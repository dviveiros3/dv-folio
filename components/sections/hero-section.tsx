"use client"

import { heroContent } from "@/data/content"
import { ChevronDown } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { RefObject } from "react"
import { AnimatedCounter } from "@/components/animated-counter"

interface HeroSectionProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
  sectionRef: RefObject<HTMLElement | null>
}

export function HeroSection({ isVisible, scrollToSection, sectionRef }: HeroSectionProps) {
  return (
    <section ref={sectionRef} id="hero" className="min-h-screen flex items-center relative px-8 py-20 bg-grid">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
<motion.div
          className="col-span-12 lg:col-span-8 space-y-12"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="status-dot-pro" />
                <span className="text-sm font-medium text-slate-600 tracking-tight">Limited Availability for Q2 2026</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05] text-balance">
                {heroContent.headline}
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 font-normal leading-relaxed max-w-2xl text-balance">
                {heroContent.subheadline}
              </p>

              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                {heroContent.valueProp}
              </p>

              <p className="text-base text-slate-900 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-300 pl-4">
                {heroContent.bridgeLine}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {heroContent.credentials.map((cred, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium">
                    <span className="w-2 h-2 bg-slate-900 rounded-full" />
                    {cred}
                  </span>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Results delivered at</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-80">
                  <span className="text-sm font-semibold text-slate-900">Connected Dealer Services</span>
                  <span className="text-sm font-semibold text-slate-900">Tenth Avenue Commerce</span>
                  <span className="text-sm font-semibold text-slate-900">Trajectory Tutors</span>
                </div>
              </div>
            </div>

            <div className="line-accent" />

            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "$4.2M", label: "ARR Generated" },
                { value: "40%", label: "CAC Reduction" },
                { value: "150+", label: "Users Enabled" },
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  className="space-y-1"
initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                >
                  <div className="font-mono text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900">
                    <AnimatedCounter target={metric.value} isVisible={true} />
                  </div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://calendly.com/daniel-viveiros/15min-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 transition-colors duration-200"
              >
                Book Discovery Call
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=280&width=280"
                alt="Daniel Viveiros"
                width={280}
                height={280}
                className="grayscale filter contrast-125"
                priority
              />
              <div className="absolute -inset-4 border border-slate-200 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("problems")}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-900 transition-colors duration-200"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
