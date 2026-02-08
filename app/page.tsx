"use client"

import { useState, useEffect, useRef } from "react"
import { TimelineSection } from "@/components/timeline-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemsSection } from "@/components/sections/problems-section"
import { StrategyVideo } from "@/components/strategy-video"
import { ImpactSection } from "@/components/sections/impact-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { FAQSection } from "@/components/sections/faq-section"
import { EndorsementsSection } from "@/components/sections/endorsements-section"
import { EngageSection } from "@/components/sections/engage-section"
import { StickyHeader } from "@/components/sticky-header"

export default function ExecutiveBrandSite() {
  const [activeSection, setActiveSection] = useState("hero")
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isVisible, setIsVisible] = useState(false)

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    problems: useRef<HTMLElement>(null),
    impact: useRef<HTMLElement>(null),
    strategy: useRef<HTMLElement>(null),
    timeline: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    expertise: useRef<HTMLElement>(null),
    philosophy: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    endorsements: useRef<HTMLElement>(null),
    engage: useRef<HTMLElement>(null),
  }

  // Scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs)
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, ref] = sections[i]
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 },
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      setActiveSection(sectionId)
    }
  }

  const sections = ["hero", "problems", "impact", "timeline", "services", "philosophy", "faq", "endorsements", "engage"]

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Navigation - Minimal */}
      <StickyHeader scrollToSection={scrollToSection} activeSection={activeSection} />

      <HeroSection
        isVisible={isVisible}
        scrollToSection={scrollToSection}
        isTyping={false}
        sectionRef={sectionRefs.hero}
      />

      <ProblemsSection
        isVisible={visibleSections.has("problems")}
        sectionRef={sectionRefs.problems}
      />

      <ImpactSection
        isVisible={visibleSections.has("impact")}
        sectionRef={sectionRefs.impact}
      />

      <section
        ref={sectionRefs.strategy}
        id="strategy"
        className="min-h-screen flex items-center px-8 py-32 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto w-full space-y-16">
          <div className="space-y-4">
            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Strategy</p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              How We Get There
            </h2>
            <div className="line-accent max-w-xs" />
          </div>
          <StrategyVideo isVisible={visibleSections.has("strategy")} />
        </div>
      </section>

      <section
        ref={sectionRefs.timeline}
        id="timeline"
        className="min-h-screen flex items-center px-8 py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto w-full">
          <TimelineSection isVisible={visibleSections.has("timeline")} />
        </div>
      </section>

      <ServicesSection
        isVisible={visibleSections.has("services")}
        sectionRef={sectionRefs.services}
      />

      <ExpertiseSection
        isVisible={visibleSections.has("expertise")}
        sectionRef={sectionRefs.expertise}
      />

      <PhilosophySection
        isVisible={visibleSections.has("philosophy")}
        sectionRef={sectionRefs.philosophy}
      />

      <FAQSection
        isVisible={visibleSections.has("faq")}
        sectionRef={sectionRefs.faq}
      />

      <EndorsementsSection
        isVisible={visibleSections.has("endorsements")}
        sectionRef={sectionRefs.endorsements}
      />

      <EngageSection
        isVisible={visibleSections.has("engage")}
        sectionRef={sectionRefs.engage}
      />
    </div>
  )
}
