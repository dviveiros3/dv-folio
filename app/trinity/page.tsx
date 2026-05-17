"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Shield,
  Zap,
  Menu,
  X,
  Beaker,
  Layers,
  Cpu,
  LineChart,
  Target,
  MessageSquare,
  Gift,
  RefreshCw
} from "lucide-react"
import Link from "next/link"

export default function TrinityStorefront() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const kits = [
    {
      id: "growth",
      name: "Growth Kit",
      status: "v0 / Hardening",
      description: "Distribution Mastery for Founders. An AI operating system for POV, proof, and high-signal conversations.",
      tags: ["Distribution OS", "POV", "Outbound"],
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

  const distributionOS = [
    { step: "01", name: "POV", icon: Target, desc: "Extract technical authority from raw founder insight." },
    { step: "02", name: "Proof", icon: Shield, desc: "Validate claims with automated, data-driven artifacts." },
    { step: "03", name: "Conversations", icon: MessageSquare, desc: "Personalized outreach that initiates technical dialogue." },
    { step: "04", name: "Offers", icon: Gift, desc: "Tailored proposals matched to prospect constraints." },
    { step: "05", name: "Conversion", icon: RefreshCw, desc: "High-priority pipeline for founder-led closing." },
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold text-sm">T</div>
            <span className="font-bold tracking-tighter text-xl uppercase">Trinity</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Lab", "Forge", "Implementation"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-slate-500 ${
                  activeSection === item.toLowerCase() ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {item}
              </button>
            ))}
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              Back to main
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-8 space-y-6 flex flex-col">
            {["Lab", "Forge", "Implementation"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-sm font-bold uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <Link href="/" className="text-left text-sm font-bold uppercase tracking-widest text-slate-400">
              Back to main
            </Link>
          </div>
        )}
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="py-24 px-6 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div className="inline-block px-3 py-1 border border-slate-900 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Status: Alpha_v0.1
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                  Applied AI <br/>
                  <span className="text-slate-400">Lab & Forge.</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  We don't sell prompts. We architect the AI-powered operating systems that turn founder expertise into scalable business leverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => scrollToSection('forge')}
                    className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    Browse the Forge
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection('lab')}
                    className="border border-slate-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                  >
                    Enter the Lab
                    <Beaker className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-square bg-white border border-slate-200 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                   {/* Grid Pattern */}
                   <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                </div>
                <div className="space-y-8 relative z-10 w-full max-w-sm">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white"><Cpu className="w-5 h-5"/></div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Processing Engine</div>
                      <div className="text-sm font-mono">Foundational_Model.v3</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-1 bg-slate-100 w-full rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 w-[75%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                      <span>R&D Velocity</span>
                      <span>High</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-slate-100 p-4 space-y-2">
                      <div className="text-2xl font-bold tracking-tighter uppercase">4.2M</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">ARR Identified</div>
                    </div>
                    <div className="border border-slate-100 p-4 space-y-2">
                      <div className="text-2xl font-bold tracking-tighter uppercase">40%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">CAC Optimization</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-center font-mono text-slate-400 uppercase tracking-widest">
                    Verified Performance Metrics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Kit Spotlight - Distribution OS */}
        <section id="distribution-os" className="py-24 px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-1 gap-4">
                  {distributionOS.map((item, i) => (
                    <div key={item.name} className="group flex items-center gap-6 p-6 border border-slate-100 hover:border-slate-900 transition-all bg-[#fafafa]">
                      <div className="text-xs font-mono text-slate-300 font-bold">{item.step}</div>
                      <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold uppercase tracking-tight">{item.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Connecting Line (simulated with CSS) */}
                <div className="hidden lg:block absolute -left-8 top-12 bottom-12 w-0.5 bg-slate-100 -z-10"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">// Core Engine</div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
                  Distribution <br/>
                  <span className="text-slate-400 text-3xl lg:text-5xl">As An Operating System.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Growth Kit isn't just a set of workflows. It's a premium 5-stage distribution engine designed for founders who refuse to settle for generic marketing automation.
                </p>
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                     <Shield className="w-5 h-5 text-slate-900 mt-1" />
                     <div>
                       <div className="text-sm font-bold uppercase tracking-tight">Technical Proof-Discipline</div>
                       <p className="text-xs text-slate-500 uppercase tracking-widest">Built to eliminate unverified outcomes and hallucinated claims.</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-3">
                     <Layers className="w-5 h-5 text-slate-900 mt-1" />
                     <div>
                       <div className="text-sm font-bold uppercase tracking-tight">Solopreneur Mastery</div>
                       <p className="text-xs text-slate-500 uppercase tracking-widest">Bridging the gap between founder insight and multi-channel scale.</p>
                     </div>
                   </div>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => scrollToSection('implementation')}
                    className="group text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-slate-900 pb-2 flex items-center gap-4 hover:gap-6 transition-all"
                  >
                    Request AI Systems Audit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Lab Section */}
        <section id="lab" className="py-24 px-6 bg-[#fafafa] border-b border-slate-200 overflow-hidden">
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
                <div key={exhibit.id} className="group border border-slate-200 p-8 hover:border-slate-900 transition-colors bg-white">
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
        <section id="forge" className="py-24 px-6 border-b border-slate-200 bg-white">
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
                <div key={kit.id} className={`p-8 border ${kit.highlight ? 'border-slate-900 bg-white shadow-2xl' : 'border-slate-200 bg-[#fafafa]'} flex flex-col justify-between`}>
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
                    <button className="text-xs font-bold uppercase tracking-widest text-slate-300 cursor-not-allowed flex items-center gap-1" disabled title="Coming soon - v0 hardening in progress">
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
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 flex items-center justify-center text-white font-bold text-[10px]">T</div>
            <span className="font-bold tracking-tighter text-sm uppercase">Trinity Lab &copy; 2026</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">Back to DanielViveiros.com</Link>
            <button className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">Terms</button>
            <button className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">Privacy</button>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
          All metrics simulated unless explicitly labeled as verified.
        </div>
      </footer>
    </div>
  )
}
