"use client"

import { useState, useEffect, useRef } from "react"
import { TrinityHero } from "@/components/trinity/trinity-hero"
import { TrinityThesis } from "@/components/trinity/trinity-thesis"
import { TrinityCatalog } from "@/components/trinity/trinity-catalog"
import { TrinityExhibits } from "@/components/trinity/trinity-exhibits"
import { TrinityCTA } from "@/components/trinity/trinity-cta"
import { StickyHeader } from "@/components/sticky-header"

export default function TrinityPage() {
  const [activeSection, setActiveSection] = useState("trinity")

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    thesis: useRef<HTMLElement>(null),
    forge: useRef<HTMLElement>(null),
    lab: useRef<HTMLElement>(null),
    cta: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs)
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, ref] = sections[i]
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(id === 'hero' ? 'trinity' : id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      setActiveSection(sectionId === 'hero' ? 'trinity' : sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <StickyHeader scrollToSection={scrollToSection} activeSection={activeSection} />

      <main>
        <section id="hero" ref={sectionRefs.hero}>
          <TrinityHero />
        </section>

        <section id="thesis" ref={sectionRefs.thesis}>
          <TrinityThesis />
        </section>

        <section id="forge" ref={sectionRefs.forge}>
          <TrinityCatalog />
        </section>

        <section id="lab" ref={sectionRefs.lab}>
          <TrinityExhibits />
        </section>

        <section id="cta" ref={sectionRefs.cta}>
          <TrinityCTA />
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="font-bold tracking-tight text-slate-900">
              TRINITY LABS
            </span>
          </div>
          <div className="text-slate-400 text-xs font-mono">
            © {new Date().getFullYear()} Trinity Applied AI Lab. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a href="/" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Daniel Viveiros
            </a>
            <a href="#" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
