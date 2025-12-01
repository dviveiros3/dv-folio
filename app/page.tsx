"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Linkedin, Mail } from "lucide-react"
import { SoundManager } from "@/components/sound-manager"
import { MagneticCursor } from "@/components/magnetic-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { TimelineSection } from "@/components/timeline-section"
import Image from "next/image"
import { MetricTile } from "@/components/metric-tile"

export default function ExecutiveBrandSite() {
  const [activeSection, setActiveSection] = useState("hero")
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const lastScrollY = useRef(0)
  const [isVisible, setIsVisible] = useState(false)

  const fullText = "Transforming data into strategic advantage through AI-driven analytics."

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    proof: useRef<HTMLElement>(null),
    impact: useRef<HTMLElement>(null),
    timeline: useRef<HTMLElement>(null),
    expertise: useRef<HTMLElement>(null),
    philosophy: useRef<HTMLElement>(null),
    engage: useRef<HTMLElement>(null),
  }

  // Scroll position tracking with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Detect scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      lastScrollY.current = currentScrollY

      // Update active section based on scroll position
      const sections = Object.entries(sectionRefs)
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, ref] = sections[i]
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          // Adjusted threshold for better centering
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionRefs])

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      let index = 0
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(timer)
        }
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isTyping])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
            if (entry.target.id === "hero" && !isTyping) {
              setTimeout(() => setIsTyping(true), 1000)
            }
          } else {
            // Remove sections from visibility when they go out of view (reverse scroll animation)
            setVisibleSections((prev) => {
              const newSet = new Set(prev)
              newSet.delete(entry.target.id)
              return newSet
            })
          }
        })
      },
      { threshold: 0.2, rootMargin: "-10% 0px -10% 0px" },
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [isTyping, sectionRefs])

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset to center the section better
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2

      window.scrollTo({
        top: middle,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  const impactData = [
    {
      metric: "$8.2M",
      description:
        "Additional revenue attributed through advanced customer segmentation and predictive analytics models",
      year: "2022-2024",
      category: "Revenue Growth",
    },
    {
      metric: "65%",
      description: "Reduction in manual reporting time through automated BI dashboards and self-service analytics",
      year: "2021-2024",
      category: "Operational Efficiency",
    },
    {
      metric: "150+",
      description: "Business stakeholders enabled with data literacy training and self-service analytics tools",
      year: "2020-2024",
      category: "Team Enablement",
    },
    {
      metric: "92%",
      description: "Forecast accuracy achieved in sales and operational planning through ML-enhanced models",
      year: "2023-2024",
      category: "Decision Quality",
    },
  ]

  const expertiseAreas = [
    {
      category: "Strategy & Leadership",
      skills: ["AI Strategy & Implementation", "Data Science Leadership"],
    },
    {
      category: "Analytics & Intelligence",
      skills: ["Advanced Analytics & ML", "Business Intelligence Architecture"],
    },
    {
      category: "Automation & Systems",
      skills: ["Automated Decision Systems", "Self-Service Analytics"],
    },
    {
      category: "Modeling & Forecasting",
      skills: ["Predictive Modeling", "Cross-functional Collaboration"],
    },
  ]

  const AnimatedCounter = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
    const [count, setCount] = useState(() => {
      if (target.includes("$")) return "$0.0M"
      if (target.includes("%")) return "0%"
      if (target.includes("+")) return "0+"
      return "0"
    })
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      if (visibleSections.has("impact") && !hasAnimated) {
        setHasAnimated(true)

        // Handle different metric types
        if (target.includes("$")) {
          // For dollar amounts like $8.2M
          const numericValue = Number.parseFloat(target.replace(/[^0-9.]/g, ""))
          let start = 0
          const increment = numericValue / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= numericValue) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(`$${start.toFixed(1)}M`)
            }
          }, 16)

          return () => clearInterval(timer)
        } else if (target.includes("%")) {
          // For percentages like 65%
          const numericValue = Number.parseFloat(target.replace(/[^0-9.]/g, ""))
          let start = 0
          const increment = numericValue / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= numericValue) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(`${Math.floor(start)}%`)
            }
          }, 16)

          return () => clearInterval(timer)
        } else if (target.includes("+")) {
          // For numbers with + like 150+
          const numericValue = Number.parseFloat(target.replace(/[^0-9.]/g, ""))
          let start = 0
          const increment = numericValue / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= numericValue) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(`${Math.floor(start)}+`)
            }
          }, 16)

          return () => clearInterval(timer)
        } else {
          // For plain numbers
          const numericValue = Number.parseFloat(target)
          let start = 0
          const increment = numericValue / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= numericValue) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start).toString())
            }
          }, 16)

          return () => clearInterval(timer)
        }
      }
    }, [visibleSections, target, duration, hasAnimated])

    return <span>{count}</span>
  }

  // Minimal floating elements
  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-[0.03]"
          style={{
            left: `${20 + ((i * 13) % 60)}%`,
            top: `${15 + ((i * 17) % 70)}%`,
            transform: `translateY(${scrollY * (0.02 + (i % 2) * 0.01)}px) rotate(${scrollY * 0.02 + i * 20}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="w-0.5 h-0.5 bg-blue-400 rounded-full" />
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-50 text-slate-900 overflow-x-hidden">
      {/* New components */}
      <SoundManager visibleSections={visibleSections} activeSection={activeSection} />
      <MagneticCursor />
      <ScrollProgress />

      {/* Minimal floating elements */}
      <FloatingElements />

      {/* Clean Navigation */}
      <nav className="fixed top-8 right-8 z-50 flex flex-col gap-3">
        {["hero", "proof", "impact", "timeline", "expertise", "philosophy", "engage"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-500 relative group ${
              activeSection === section
                ? "bg-blue-600 scale-125 shadow-lg shadow-blue-600/30"
                : "bg-slate-300 hover:bg-slate-400 hover:scale-110"
            }`}
            aria-label={`Navigate to ${section}`}
          >
            {/* Premium glow effect for active state */}
            {activeSection === section && (
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
            )}
            {/* Hover tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} id="hero" className="min-h-screen flex items-center justify-center relative px-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-light tracking-tight leading-none text-slate-900">
                  Daniel
                  <span className="block text-slate-600 font-extralight">Viveiros</span>
                </h1>
                <div className="h-px w-24 bg-blue-600 ml-1"></div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <MetricTile
                  value="+$4.2 M"
                  caption="Annual revenue lift"
                  subCaption="achieved through AI-driven customer segmentation and predictive forecasting models."
                />
                <MetricTile
                  value="-32 %"
                  caption="Snowflake spend cut"
                  subCaption="via implementing a comprehensive cost-governance framework and query optimization."
                />
                <MetricTile
                  value="10×"
                  caption="Deploy speed"
                  subCaption="for analytics solutions by adopting CI/CD pipelines and modular design."
                />
              </div>

              {/* CTA Button */}
              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <a
                  href="https://calendly.com/daniel-viveiros/15min-intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book 15-min intro
                </a>
              </div>
            </div>

            {/* Right Column - Headshot */}
            <div
              className={`flex justify-center md:justify-end transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Daniel Viveiros - Director of Analytics"
                  width={160}
                  height={160}
                  className="rounded-full shadow-lg"
                  priority
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("proof")}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-all duration-500 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </section>

      {/* Flagship Proof Section */}
      <section
        ref={sectionRefs.proof}
        id="proof"
        className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12"
      >
        <div className="max-w-4xl w-full space-y-8">
          <div
            className={`text-center space-y-4 transition-all duration-1000 ${visibleSections.has("proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-2xl font-bold mb-2 text-slate-900">Snowflake Cost-Governance Framework</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Reduced data warehouse costs by 32% while scaling operations at Connected Dealer Services.
            </p>
          </div>

          {/* Video Embed - Using Vimeo as alternative to Loom */}
          <div
            className={`w-full max-w-3xl mx-auto transition-all duration-1000 delay-200 ${visibleSections.has("proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for video - you can replace with actual embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold text-lg">3-min Case Study Walkthrough</p>
                    <p className="text-sm text-slate-500">Snowflake Cost Optimization Framework</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Watch Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Description */}
          <div
            className={`text-center transition-all duration-1000 delay-400 ${visibleSections.has("proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">🎯 Challenge</h4>
                  <p className="text-sm text-slate-600">
                    Spiraling Snowflake costs (reaching $45K/month with 2TB daily processing) lacked visibility and
                    governance, threatening budget overruns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">⚡ Solution</h4>
                  <p className="text-sm text-slate-600">
                    Implemented an automated cost governance framework using Snowflake&apos;s resource monitors, usage
                    dashboards (built with a BI tool), query optimization techniques (e.g., clustering, materialized
                    views), and scheduled scaling of warehouses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">📈 Impact</h4>
                  <p className="text-sm text-slate-600">
                    Achieved a 32% sustained cost reduction ($180K annual savings), maintained 99.9% data platform
                    uptime, and improved overall query performance, enabling scalable growth.
                  </p>
                </div>
              </div>
              <div className="mt-4 text-left">
                <h4 className="font-semibold text-slate-900 mb-1">🛠️ Tech Stack Used:</h4>
                <p className="text-sm text-slate-600">Snowflake, BI Tool (Looker/Tableau), Python/SQL</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${visibleSections.has("proof") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <a
              href="/portfolio/snowflake-cost-governance-playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Full Playbook
            </a>
            <a
              href="https://github.com/dviveiros3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section - Better centered */}
      <section
        ref={sectionRefs.impact}
        id="impact"
        className="min-h-screen flex items-center px-8 py-32 bg-slate-50/50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-16">
            <div
              className={`text-center space-y-4 transition-all duration-1000 ${visibleSections.has("impact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-sm font-medium text-blue-700 tracking-widest uppercase">Quantified Impact</div>
              <div className="h-px w-16 bg-slate-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {impactData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative p-8 hover:bg-white/80 transition-all duration-500 rounded-sm border-l-2 border-transparent hover:border-blue-600 ${
                    visibleSections.has("impact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="text-5xl lg:text-6xl font-extralight text-slate-900 group-hover:text-blue-700 transition-colors duration-500 tracking-tight">
                          <AnimatedCounter target={item.metric} />
                        </div>
                        <div className="text-xs font-medium text-blue-700 tracking-widest uppercase opacity-70">
                          {item.category}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 font-light bg-slate-100/50 px-3 py-1 rounded-full">
                        {item.year}
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-light text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Timeline Section */}
      <section
        ref={sectionRefs.timeline}
        id="timeline"
        className="min-h-screen flex items-center px-8 py-20 bg-gradient-to-br from-slate-50 to-blue-50/30"
      >
        <div className="max-w-6xl mx-auto w-full">
          <TimelineSection isVisible={visibleSections.has("timeline")} />
        </div>
      </section>

      {/* Balanced Expertise Section */}
      <section ref={sectionRefs.expertise} id="expertise" className="min-h-screen flex items-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-20">
            <div className="grid grid-cols-12 gap-8">
              <div
                className={`col-span-12 lg:col-span-4 transition-all duration-1000 ${visibleSections.has("expertise") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <div className="space-y-6 lg:sticky lg:top-20">
                  <div className="text-sm font-medium text-blue-700 tracking-widest uppercase">Core Expertise</div>
                  <div className="h-px w-16 bg-slate-300"></div>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    Full-stack analytics capabilities spanning strategy, engineering, and leadership—developed through
                    nearly a decade of transforming data into business value across diverse industries and functions.
                  </p>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {expertiseAreas.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className={`space-y-4 transition-all duration-1000 ${
                        visibleSections.has("expertise") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                    >
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-slate-800 tracking-wide">{category.category}</h3>
                        <div className="h-px w-12 bg-blue-600/30"></div>
                      </div>

                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="group p-4 border border-slate-200/50 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-md rounded-lg"
                          >
                            <span className="text-slate-700 font-light group-hover:text-blue-800 transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        ref={sectionRefs.philosophy}
        id="philosophy"
        className="min-h-screen flex items-center px-8 py-20 relative"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4">
              <div
                className={`space-y-8 transition-all duration-1000 ${visibleSections.has("philosophy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <div className="space-y-4">
                  <div className="text-sm font-medium text-blue-700 tracking-widest uppercase">
                    About Me & My Philosophy
                  </div>
                  <div className="h-px w-16 bg-slate-300"></div>
                </div>

                <div className="space-y-6">
                  <p className="text-2xl lg:text-3xl font-light leading-relaxed text-slate-800">
                    Data becomes powerful when{" "}
                    <em className="text-blue-700 not-italic font-medium">analytical rigor</em> meets
                    <em className="text-blue-700 not-italic font-medium"> business strategy</em>.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    I&apos;m driven by the challenge of uncovering hidden patterns in data and translating these insights
                    into tangible business value and innovative solutions that push the boundaries of what&apos;s possible.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    I believe in democratizing data access while maintaining governance excellence. By bridging the gap
                    between complex analytics and business outcomes, I transform data into strategic assets that drive
                    measurable growth, operational efficiency, and competitive advantage across diverse industries. My
                    goal is to empower organizations to make smarter decisions and to lead data initiatives that not
                    only meet current needs but also anticipate future trends. I am particularly excited by
                    opportunities to spearhead data strategy in dynamic environments, build and mentor high-performing
                    analytics teams, and apply cutting-edge AI to solve impactful business problems.
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="/res.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage Section */}
      <section
        ref={sectionRefs.engage}
        id="engage"
        className="min-h-screen flex items-center px-8 py-20 bg-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div
              className={`col-span-12 lg:col-span-8 lg:col-start-3 text-center transition-all duration-1000 ${visibleSections.has("engage") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                    Ready to transform your organization&apos;s
                    <span className="text-blue-400"> data strategy</span>?
                  </h2>
                  <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
                    Let&apos;s discuss how strategic analytics leadership can drive measurable business outcomes and
                    competitive advantage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="https://linkedin.com/in/daniel-viveiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-8 py-4 border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-light">Connect on LinkedIn</span>
                  </a>

                  <a
                    href="mailto:daniel@trajectorytutors.com"
                    className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white hover:scale-105 hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-light">Direct Contact</span>
                  </a>
                  <a
                    href="/res.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-8 py-4 border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:scale-105"
                  >
                    {/* Consider adding an icon for resume if desired */}
                    <span className="font-light">Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="py-6 text-center text-sm text-slate-500 bg-white border-t border-slate-100">
        <div className="space-x-4">
          <a href="mailto:daniel@trajectorytutors.com" className="hover:text-slate-700 transition-colors">
            email
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/daniel-viveiros"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="/res.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </footer>
    </div>
  )
}
