"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Beaker, Zap, Shield, ChevronRight, Menu, X, ArrowRight } from "lucide-react"
import { LiveTelemetry } from "@/components/live-telemetry"
import Link from "next/link"
import Image from "next/image"

export default function TrinityStorefront() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const kits = [
    {
      id: "growth",
      name: "Growth Kit",
      status: "v0 / Hardening",
      description: "AI-powered operating module for founder-led B2B growth. Automate content and outbound engines.",
      tags: ["Content", "Outbound", "Sales Ops"],
      highlight: true
    },
    {
      id: "executive",
      name: "Executive Kit",
      status: "v0.5 / Proposed",
      description: "Decision support and reporting workflows for founder-operators and Chiefs of Staff.",
      tags: ["Reporting", "Strategy", "BI"],
      highlight: false
    },
    {
      id: "pe-intelligence",
      name: "PE Intelligence Kit",
      status: "v0.5 / Proposed",
      description: "Structured AI workflows for diligence, KPI extraction, and portfolio opportunity mapping.",
      tags: ["Diligence", "M&A", "Portfolio Ops"],
      highlight: false
    }
  ]

  const exhibits = [
    {
      id: "001",
      name: "Founder Growth Engine",
      status: "In-Progress / Proposed",
      hypothesis: "Founder perspective can be extracted via audio and transformed into a high-authority content engine with < 30 mins effort.",
      tag: "R&D"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Trinity Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold text-xs">T</div>
              <span className="font-bold tracking-tighter text-xl uppercase">Trinity</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("lab")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">The Lab</button>
              <button onClick={() => scrollToSection("forge")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">The Forge</button>
              <button onClick={() => scrollToSection("implementation")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">Services</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/daniel-viveiros/15min-intro"
              target="_blank"
              className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
            >
              Request Audit
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-8">
            <button onClick={() => scrollToSection("lab")} className="text-2xl font-bold uppercase tracking-tighter text-left">The Lab</button>
            <button onClick={() => scrollToSection("forge")} className="text-2xl font-bold uppercase tracking-tighter text-left">The Forge</button>
            <button onClick={() => scrollToSection("implementation")} className="text-2xl font-bold uppercase tracking-tighter text-left">Services</button>
            <a href="https://calendly.com/daniel-viveiros/15min-intro" target="_blank" className="bg-slate-900 text-white p-4 text-center font-bold uppercase tracking-widest">Request Audit</a>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-40 pb-24 px-6 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Applied AI Lab</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
                  Architecting the <br/>
                  <span className="text-slate-400 italic">AI-Powered</span> <br/>
                  Growth Engine
                </h1>
                <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                  Trinity is an applied AI lab and product storefront. We build the high-conviction workflows that turn technical leadership into business leverage.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => scrollToSection("forge")}
                    className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all group flex items-center gap-2"
                  >
                    Browse The Forge
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection("lab")}
                    className="bg-white border border-slate-200 text-slate-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    Enter The Lab
                    <Beaker className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <LiveTelemetry />
                <div className="p-6 border border-slate-200 bg-white space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Current Alpha</span>
                    <span className="text-[10px] font-mono text-green-600">Growth Kit v0.1</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 leading-relaxed">
                    Deploying modular AI skills for outbound prospecting and weekly content engines. Focus: Founder-led leverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Lab Section */}
        <section id="lab" className="py-24 px-6 bg-white border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">// R&D Exhibits</div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase">The Lab</h2>
                <p className="text-slate-500 max-w-md">Where we pressure-test hypotheses in applied AI. Raw experiments bridging the gap between hype and leverage.</p>
              </div>
              <Link href="/trinity/lab" className="text-sm font-bold uppercase tracking-widest border-b-2 border-slate-900 pb-1 flex items-center gap-2 hover:gap-4 transition-all">
                View All Exhibits
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exhibits.map(exhibit => (
                <div key={exhibit.id} className="group border border-slate-200 p-8 hover:border-slate-900 transition-colors bg-[#fafafa]">
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-xs font-mono text-slate-400">Exhibit_{exhibit.id}</div>
                    <div className="px-2 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-tighter">{exhibit.tag}</div>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-slate-600 transition-colors">{exhibit.name}</h3>
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Hypothesis</div>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      "{exhibit.hypothesis}"
                    </p>
                    <div className="pt-6 flex justify-between items-center border-t border-slate-200">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">{exhibit.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Forge Section */}
        <section id="forge" className="py-24 px-6 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">// Product Catalog</div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase">The Forge</h2>
                <p className="text-slate-500 max-w-md">Hardened, productized AI workflows. Buy operational capability, not just prompts.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kits.map(kit => (
                <div key={kit.id} className={`p-8 border ${kit.highlight ? 'border-slate-900 bg-white shadow-xl' : 'border-slate-200 bg-[#fafafa]'} flex flex-col justify-between`}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{kit.status}</div>
                      <Zap className={`w-4 h-4 ${kit.highlight ? 'text-slate-900' : 'text-slate-300'}`} />
                    </div>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter">{kit.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {kit.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {kit.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono border border-slate-200 px-2 py-0.5 text-slate-500 bg-white">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Access Restricted</span>
                    {/* Details links are intentionally disabled for v0 as kit-specific landing pages are still being hardened. */}
                    <button className="text-xs font-bold uppercase tracking-widest text-slate-300 cursor-not-allowed flex items-center gap-1" disabled>
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Services */}
        <section id="implementation" className="py-24 px-6 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">// Custom Forge</div>
                <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                  Need a Custom <br/>
                  <span className="text-slate-500">Implementation?</span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                  We install the future of your operations. From custom AI audits to full workflow engineering, we bridge the gap between model potential and business P&L.
                </p>
                <ul className="space-y-4">
                  {[
                    "Applied AI Systems & Strategy Audit",
                    "Custom Workflow Engineering",
                    "Fractional AI Leadership"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                      <Shield className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 lg:p-12 bg-white text-slate-900 space-y-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight">Request an Audit</h3>
                <p className="text-slate-600 leading-relaxed">
                  A 2-week deep dive into your operations, data stack, and AI opportunities. You walk away with a clear roadmap for turning AI into leverage.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://calendly.com/daniel-viveiros/15min-intro"
                    target="_blank"
                    className="w-full bg-slate-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    Book Discovery Call
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">Limited to 2 projects per quarter</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 flex items-center justify-center text-white font-bold text-[10px]">T</div>
            <span className="font-bold tracking-tighter text-sm uppercase">Trinity Lab &copy; 2026</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">Back to DanielViveiros.com</Link>
            <button
              onClick={() => {
                alert("The full Terms and Privacy policy is being finalized for Trinity Lab. All current work follows Daniel's standard professional services agreement.")
              }}
              className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors"
            >
              Terms
            </button>
            <button
              onClick={() => {
                alert("Privacy Policy: Trinity Lab does not collect personal data from visitors. For client implementations, we follow strict redaction and MNPI protocols as defined in our Implementation Guides.")
              }}
              className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors"
            >
              Privacy
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
          All metrics simulated unless explicitly labeled as verified.
        </div>
      </footer>
    </div>
  )
}
