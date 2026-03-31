"use client"

import { useState, useEffect, useRef } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemsSection } from "@/components/sections/problems-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ClientsSection } from "@/components/sections/clients-section"
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
    services: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    clients: useRef<HTMLElement>(null),
    engage: useRef<HTMLElement>(null),
  }

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
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

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <StickyHeader scrollToSection={scrollToSection} activeSection={activeSection} />

      <HeroSection
        isVisible={isVisible}
        scrollToSection={scrollToSection}
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

      <ServicesSection
        isVisible={visibleSections.has("services")}
        sectionRef={sectionRefs.services}
      />

      <PricingSection
        isVisible={visibleSections.has("pricing")}
        sectionRef={sectionRefs.pricing}
      />

      <FAQSection
        isVisible={visibleSections.has("faq")}
        sectionRef={sectionRefs.faq}
      />

      <ClientsSection
        isVisible={visibleSections.has("clients")}
        sectionRef={sectionRefs.clients}
      />

      <EngageSection
        isVisible={visibleSections.has("engage")}
        sectionRef={sectionRefs.engage}
      />
    </div>
  )
}
