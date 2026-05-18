"use client"

import { useState, type ReactNode } from "react"
import {
  ArrowUpRight,
  Beaker,
  Zap,
  Shield,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Target,
  MessageSquare,
  Gift,
  RefreshCw,
  Eye,
  FileText,
} from "lucide-react"
import { LiveTelemetry } from "@/components/live-telemetry"
import Link from "next/link"

const GROWTH_AUDIT_SAMPLE = (
  <div className="space-y-6 text-sm">
    <div className="p-4 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest mb-4">
      Simulated Data // Fictional Example
    </div>

    <section className="space-y-2">
      <h4 className="font-bold uppercase tracking-tight text-slate-900 underline decoration-slate-200 underline-offset-4">1. Executive Summary</h4>
      <p className="text-slate-600 leading-relaxed">
        Acme has a strong "Proof Loop" (pending source verification) but a broken "Conversation Loop." Content feels like a portfolio, not a conversation starter.
      </p>
    </section>

    <section className="space-y-2">
      <h4 className="font-bold uppercase tracking-tight text-slate-900 underline decoration-slate-200 underline-offset-4">2. POV & Thesis Audit</h4>
      <ul className="list-disc pl-4 space-y-1 text-slate-600">
        <li>Current POV: "We help e-commerce brands scale with data." (Generic)</li>
        <li>Recommendation: "Attribution is a lie; focus on the Incremental Margin Loop."</li>
      </ul>
    </section>

    <section className="space-y-2">
      <h4 className="font-bold uppercase tracking-tight text-slate-900 underline decoration-slate-200 underline-offset-4">3. Distribution OS Mapping</h4>
      <div className="border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Loop</th>
              <th className="p-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="p-2 font-mono text-[10px]">POV</td>
              <td className="p-2 text-red-600 font-bold text-[10px]">WEAK</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="p-2 font-mono text-[10px]">Proof</td>
              <td className="p-2 text-green-600 font-bold text-[10px]">STRONG</td>
            </tr>
            <tr>
              <td className="p-2 font-mono text-[10px]">Conversations</td>
              <td className="p-2 text-red-600 font-bold text-[10px]">BROKEN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className="space-y-2">
      <h4 className="font-bold uppercase tracking-tight text-slate-900 underline decoration-slate-200 underline-offset-4">4. 90-Day Roadmap</h4>
      <div className="space-y-3">
        <div className="pl-3 border-l-2 border-slate-200">
          <div className="text-[10px] font-bold uppercase text-slate-400">Day 1-30</div>
          <p className="text-slate-600">Operationalize the Weekly Content Engine.</p>
        </div>
        <div className="pl-3 border-l-2 border-slate-200">
          <div className="text-[10px] font-bold uppercase text-slate-400">Day 31-60</div>
          <p className="text-slate-600">Deploy the Buyer Signal Scanner for 50 high-intent targets/week.</p>
        </div>
      </div>
    </section>

    <div className="pt-6 border-t border-slate-100 text-[10px] italic text-slate-400">
      *This is a simulated diagnostic report. All company names and metrics are fictional examples of the Trinity AI Growth Audit output.
    </div>
  </div>
)

const WEEK_1_CONTENT = (
  <div className="space-y-8 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Week 1 Publishing Packet
    </div>
    <div className="space-y-6">
      {[
        {
          type: "LinkedIn POV",
          hook: "AI will not save a founder who cannot distribute.",
          body: "Every day, I see founders looking for the 'magic button' to automate their growth. But if you haven't mastered the five loops of distribution, AI just makes you loud and invisible."
        },
        {
          type: "Short-form Thesis",
          hook: "Most 'AI Content' is just high-speed noise.",
          body: "If a human wouldn't defend the take in public, a model shouldn't publish it. Use AI to atomize your best insights, not generate generic slop."
        },
        {
          type: "Proof Artifact",
          hook: "Stop telling people you're an expert. Show them the artifacts.",
          body: "Authority isn't what you say in your bio. It’s what you produce in your lab. Today, I'm introducing the Trinity Distribution OS."
        }
      ].map((post, i) => (
        <div key={i} className="p-4 border border-slate-200 space-y-3 bg-[#fafafa]">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{post.type}</div>
          <div className="font-bold text-slate-900 underline decoration-slate-200 underline-offset-4">{post.hook}</div>
          <p className="text-slate-600 text-xs leading-relaxed">{post.body}</p>
        </div>
      ))}
    </div>
  </div>
)

const WEEK_1_OUTBOUND = (
  <div className="space-y-8 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Week 1 Warm Outbound Pack
    </div>
    <div className="space-y-4 font-mono text-[11px] leading-relaxed">
      <div className="p-4 border border-slate-200 bg-white">
        <div className="text-slate-400 mb-2 uppercase tracking-widest text-[10px] font-bold">// Opener: The Bottleneck Inquiry</div>
        "Hey [Name], I've been thinking about the five loops of distribution (POV, Proof, Conversations, Offers, Conversion). I’ve noticed a lot of founders have the Proof but lack the Conversation loop. Where do you feel the biggest leak is in your own engine right now?"
      </div>
      <div className="p-4 border border-slate-200 bg-white">
        <div className="text-slate-400 mb-2 uppercase tracking-widest text-[10px] font-bold">// Opener: The Taste vs. Automation Wedge</div>
        "[Name], I've been seeing a lot of 'AI content' slop lately and it's making me double down on the idea that AI should scale founder judgment, not replace it. Would love to get your operator's take on whether 'scaling taste' is on your radar?"
      </div>
    </div>
    <div className="p-4 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest">
      Guardrails: No Fake Urgency // No Outcome Promises // Human-to-Human Tone
    </div>
  </div>
)

const WEEK_2_CONTENT = (
  <div className="space-y-8 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Week 2 Publishing Packet
    </div>
    <div className="space-y-6">
      <div className="p-4 border border-slate-200 bg-[#fafafa] space-y-3">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Thesis</div>
        <div className="text-lg font-bold tracking-tight text-slate-900 leading-tight uppercase">
          Stop buying AI "Strategy." <br/>
          Start buying AI Workflows.
        </div>
        <p className="text-slate-600 text-xs leading-relaxed">
          The Growth Audit isn't a consulting deck. It's an engineering diagnostic. We don't just tell you that you need more content; we identify which loop is leaking.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 border border-slate-100 bg-white space-y-2">
          <div className="text-[9px] font-bold uppercase text-slate-400">POV Loop</div>
          <div className="text-[11px] font-bold">Thesis Sharpness</div>
        </div>
        <div className="p-3 border border-slate-100 bg-white space-y-2">
          <div className="text-[9px] font-bold uppercase text-slate-400">Proof Loop</div>
          <div className="text-[11px] font-bold">Asset Accessibility</div>
        </div>
      </div>
    </div>
  </div>
)

const OBJECTION_BANK = (
  <div className="space-y-6 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Objection Bank
    </div>
    <div className="space-y-4">
      {[
        {
          objection: "I don't want to ruin my brand with AI slop.",
          response: "We don't use AI to generate; we use AI to extract. We automate atomization, not thinking."
        },
        {
          objection: "Is this just a bunch of ChatGPT prompts?",
          response: "Prompts are commodities. This is a diagnostic of your distribution architecture and custom skill design."
        },
        {
          objection: "Can you guarantee 10 new leads a month?",
          response: "No. The audit is designed to improve the system and capture market signal; it does not guarantee market outcomes."
        }
      ].map((item, i) => (
        <div key={i} className="p-4 border-l-2 border-slate-200 space-y-2 bg-white">
          <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Objection:</div>
          <div className="text-xs font-bold text-slate-900 italic">"{item.objection}"</div>
          <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mt-2">Response:</div>
          <div className="text-xs text-slate-600">{item.response}</div>
        </div>
      ))}
    </div>
  </div>
)

const OPERATING_LOG = (
  <div className="space-y-6 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Proof Capture Log
    </div>
    <div className="border border-slate-200 overflow-hidden">
      <table className="w-full text-left border-collapse text-[10px]">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200 font-mono">
            <th className="p-2 text-slate-400 uppercase">Date</th>
            <th className="p-2 text-slate-400 uppercase">Artifact Proof</th>
            <th className="p-2 text-slate-400 uppercase">Confidence</th>
          </tr>
        </thead>
        <tbody className="font-mono">
          <tr className="border-b border-slate-100">
            <td className="p-2">05-17</td>
            <td className="p-2">Distribution OS Spec</td>
            <td className="p-2">Observed</td>
          </tr>
          <tr className="border-b border-slate-100 bg-slate-50">
            <td className="p-2">05-18</td>
            <td className="p-2">Growth Audit Sample</td>
            <td className="p-2">Hypothesis</td>
          </tr>
          <tr>
            <td className="p-2">05-22</td>
            <td className="p-2">Weekly Review #1</td>
            <td className="p-2">Planned</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="p-4 bg-slate-900 text-slate-400 font-mono text-[10px] leading-relaxed">
      // CAPTURING_SIGNAL...<br/>
      // REFINING_PROOF_CLAIMS
    </div>
  </div>
)

const OFFER_REVIEW_SAMPLE = (
  <div className="space-y-6 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Weekly Offer Review
    </div>
    <div className="space-y-4">
      <div className="p-4 border border-slate-200 bg-white space-y-2">
        <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Week Ending: 2026-05-22</div>
        <div className="text-xs font-bold text-slate-900">Theme: Distribution as a founder constraint</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-slate-50 border border-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-400">Signals</div>
          <div className="text-[11px] font-bold">Objections Logged</div>
        </div>
        <div className="p-3 bg-slate-50 border border-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-400">Decision</div>
          <div className="text-[11px] font-bold">Iterate Intake</div>
        </div>
      </div>
      <div className="p-4 bg-green-50 border border-green-100 text-green-800 text-[10px] font-mono">
        &gt; REVIEWING_SIGNAL...<br/>
        &gt; UPDATING_OFFER_LANGUAGE
      </div>
    </div>
  </div>
)

const OUTREACH_WORKSHEET = (
  <div className="space-y-6 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Beta Outreach Worksheet
    </div>
    <div className="space-y-4">
      <div className="p-4 bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest">
        Proof-Safe Rule: Do not log targets as "leads" until a real reply or two-way conversation starts.
      </div>
      <div className="border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse text-[10px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 font-mono">
              <th className="p-2 text-slate-400 uppercase">Target Segment</th>
              <th className="p-2 text-slate-400 uppercase">Likely Loop Leak</th>
              <th className="p-2 text-slate-400 uppercase">Angle</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            <tr className="border-b border-slate-100">
              <td className="p-2 text-slate-600">Technical Founder</td>
              <td className="p-2 text-slate-600">Conversation Loop</td>
              <td className="p-2 text-slate-600">Random Acts</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="p-2 text-slate-600">SME</td>
              <td className="p-2 text-slate-600">POV Loop</td>
              <td className="p-2 text-slate-600">Ghost Town</td>
            </tr>
            <tr>
              <td className="p-2 text-slate-600">Operator</td>
              <td className="p-2 text-slate-600">Proof Loop</td>
              <td className="p-2 text-slate-600">Manual Friction</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="space-y-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Research Checklist</div>
        <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
          <li className="flex gap-2"><span>[ ]</span> Proof Verification (Specific Artifact)</li>
          <li className="flex gap-2"><span>[ ]</span> Loop Leak Identification</li>
          <li className="flex gap-2"><span>[ ]</span> Context Alignment (Not generic)</li>
        </ul>
      </div>
    </div>
  </div>
)

const CONVERSATION_TRACKER = (
  <div className="space-y-6 text-sm">
    <div className="p-4 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
      Lab Artifact // Beta Conversation Tracker
    </div>
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Verified", desc: "Source evidence confirmed" },
          { label: "Observed", desc: "Directly witnessed" },
          { label: "Anecdotal", desc: "Recalled/Reported" },
          { label: "Hypothesis", desc: "Assumption being tested" }
        ].map((item) => (
          <div key={item.label} className="p-2 border border-slate-100 bg-white">
            <div className="text-[9px] font-bold uppercase text-slate-400">{item.label}</div>
            <div className="text-[10px] text-slate-600 leading-tight">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse text-[10px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 font-mono">
              <th className="p-2 text-slate-400 uppercase">Buyer Profile</th>
              <th className="p-2 text-slate-400 uppercase">Objection</th>
              <th className="p-2 text-slate-400 uppercase">Confidence</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            <tr className="border-b border-slate-100">
              <td className="p-2 text-slate-600">SME / AI Skeptic</td>
              <td className="p-2 text-slate-600">"Is this just prompts?"</td>
              <td className="p-2 text-slate-600 font-bold text-amber-600">Observed</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="p-2 text-slate-600">Founder</td>
              <td className="p-2 text-slate-600">"Can you guarantee leads?"</td>
              <td className="p-2 text-slate-600 font-bold text-green-600">Verified</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

const DISTRIBUTION_OS_SPEC = (
  <div className="space-y-8 text-sm">
    <div className="p-4 bg-slate-900 text-slate-400 font-mono text-[10px] leading-relaxed">
      // SYSTEM_ARCHITECTURE_SPEC_V1<br/>
      // STATUS: HARDENING_IN_LAB
    </div>

    <div className="grid gap-6">
      {[
        { title: "POV Loop", desc: "Scale Your Taste. Extract a defensible market thesis from founder insight." },
        { title: "Proof Loop", desc: "Show the Work. Turn builds and experiments into inspectable artifacts." },
        { title: "Conversation Loop", desc: "Listen for Signal. Convert audience signals into qualified DMs." },
        { title: "Offer Loop", desc: "Productize Pain. Translate repeated pain into productized audits." },
        { title: "Conversion Loop", desc: "Close the Circuit. Feed market signal back into the system." }
      ].map((item, i) => (
        <div key={i} className="flex gap-4 items-start">
          <div className="w-8 h-8 flex-shrink-0 bg-slate-100 flex items-center justify-center font-mono text-xs font-bold">{i+1}</div>
          <div className="space-y-1">
            <div className="font-bold uppercase tracking-tight text-slate-900">{item.title}</div>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="p-6 border border-dashed border-slate-300 bg-slate-50 space-y-4">
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Strategic Intent</div>
      <p className="text-xs text-slate-500 leading-relaxed">
        Distribution for founders isn't about "posting more." It's about building an engine that compounds. Move from generic advice to a clear market thesis. Move from "trust me" to "inspect this."
      </p>
    </div>
  </div>
)

export default function TrinityStorefront() {
  const [activeSection, setActiveSection] = useState("hero")
  const [modalContent, setModalContent] = useState<{ title: string, content: ReactNode } | null>(null)

  const openModal = (title: string, content: ReactNode) => {
    setModalContent({ title, content })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalContent(null)
    document.body.style.overflow = 'auto'
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const kits = [
    {
      id: "growth",
      name: "Growth Kit",
      status: "v0 / Hardening",
      description: "The implementation path for mastering founder-led distribution. Deploy the Distribution OS after an AI Growth Audit.",
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

  const distributionLoops = [
    {
      step: "01",
      name: "Point of View",
      icon: Target,
      description: "Extract a defensible market thesis from founder insight, buyer pain, and technical taste.",
    },
    {
      step: "02",
      name: "Proof",
      icon: Shield,
      description: "Turn builds, experiments, teardowns, and lessons into artifacts that make the authority visible.",
    },
    {
      step: "03",
      name: "Conversations",
      icon: MessageSquare,
      description: "Convert audience signals and target-account triggers into qualified buyer conversations.",
    },
    {
      step: "04",
      name: "Offers",
      icon: Gift,
      description: "Translate repeated pain into audits, kits, workflows, and implementation packages.",
    },
    {
      step: "05",
      name: "Conversion",
      icon: RefreshCw,
      description: "Feed replies, objections, and calls back into sharper positioning and productized services.",
    },
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
              <button onClick={() => scrollToSection("distribution")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">Distribution</button>
              <button onClick={() => scrollToSection("loop")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">The Loop</button>
              <button onClick={() => scrollToSection("growth-audit")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">Audit</button>
              <button onClick={() => scrollToSection("implementation")} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">Services</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("growth-audit")}
              className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors"
            >
              Request Audit
              <ArrowUpRight className="w-3 h-3" />
            </button>
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
            <button onClick={() => scrollToSection("distribution")} className="text-2xl font-bold uppercase tracking-tighter text-left">Distribution</button>
            <button onClick={() => scrollToSection("loop")} className="text-2xl font-bold uppercase tracking-tighter text-left">The Loop</button>
            <button onClick={() => scrollToSection("growth-audit")} className="text-2xl font-bold uppercase tracking-tighter text-left">Audit</button>
            <button onClick={() => scrollToSection("implementation")} className="text-2xl font-bold uppercase tracking-tighter text-left">Services</button>
            <button onClick={() => scrollToSection("growth-audit")} className="bg-slate-900 text-white p-4 text-center font-bold uppercase tracking-widest">Request Audit</button>
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
                  Trinity is Daniel Viveiros' applied AI lab and product engine. We build the high-conviction workflows that turn technical leadership into business leverage.
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
                    Deploying modular AI skills for founder distribution: POV, proof, conversations, offers, and conversion.
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

        {/* Distribution OS Section */}
        <section id="distribution" className="py-24 px-6 bg-slate-950 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">// Growth Kit Core</div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.95]">
                  Distribution Is the Constraint.
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  The Growth Kit is the implementation path for mastering founder-led distribution. It is a systematic Distribution OS for turning expertise into visible authority, qualified conversations, and productized offers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection("growth-audit")}
                    className="inline-flex items-center gap-2 bg-white text-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors"
                  >
                    Request Growth Audit
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openModal("Distribution OS Visual Spec", DISTRIBUTION_OS_SPEC)}
                    className="inline-flex items-center gap-2 border border-slate-700 text-slate-300 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors"
                  >
                    Review Visual Spec
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
                {distributionLoops.map((loop) => {
                  const Icon = loop.icon
                  return (
                    <div key={loop.step} className="border border-slate-800 bg-slate-900/50 p-6 space-y-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-500">{loop.step}</span>
                        <Icon className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold uppercase tracking-tight">{loop.name}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{loop.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Growth Audit Section */}
        <section id="growth-audit" className="py-24 px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">// Entry Offer</div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 w-fit">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Paid Beta // Manual-First</span>
                  </div>
                </div>
                <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                  AI Growth <br/>
                  <span className="text-slate-400">Audit</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  The high-conviction wedge into the Trinity Distribution OS. A 1-week engineering-grade diagnostic designed to roadmap your distribution architecture and identify high-leverage AI workflows.
                </p>

                <div className="space-y-4 flex flex-col items-start">
                  <button
                    onClick={() => openModal("Growth Audit: Sample Diagnostic", GROWTH_AUDIT_SAMPLE)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all"
                  >
                    Inspect Sample Deliverable
                    <FileText className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("loop")}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b-2 border-slate-400 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all"
                  >
                    Inspect Beta Operating Artifacts
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed pt-2">
                    The entry point to the Trinity monetizable loop:<br/>
                    Trinity Page → Growth Kit → Growth Audit → Publishing → Proof Capture
                  </p>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">The Requirements</div>
                    <ul className="space-y-2">
                      {[
                        "15-minute founder context brief",
                        "Previous successful content samples",
                        "Overview of current sales/marketing stack"
                      ].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-slate-900" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "POV & Thesis Audit",
                    desc: "A critical review of your market positioning to sharpen it for AI extraction and authority signaling."
                  },
                  {
                    title: "Loop Diagnostic",
                    desc: "Mapping your Proof, Conversation, and Offer loops to identify and solve the primary bottleneck."
                  },
                  {
                    title: "Custom AI Skill Design",
                    desc: "Architectural design for your first 2 core AI skills, tailored to your specific voice and market."
                  },
                  {
                    title: "90-Day Roadmap",
                    desc: "A prioritized sequence for deploying Growth Kit modules, starting with the highest-leverage loop."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-200 bg-[#fafafa] space-y-4">
                    <div className="text-xs font-mono text-slate-400">Deliverable_0{idx + 1}</div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}

                <div className="md:col-span-2 p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold uppercase tracking-tight">Interested in the Paid Beta?</div>
                    <p className="text-slate-400 text-sm">Start with a serious Growth Audit conversation.</p>
                  </div>
                  <a
                    href="https://calendly.com/daniel-viveiros/15min-intro"
                    target="_blank"
                    className="bg-white text-slate-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2"
                  >
                    Book Call
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Operating Loop Section */}
        <section id="loop" className="py-24 px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">// Beta Operating Artifacts</div>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase">The Operating Loop</h2>
                <p className="text-slate-500 max-w-md">Our active Growth Distribution Sprint is manual-first and proof-disciplined. Inspect the live artifacts below.</p>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400 pt-2">
                  <span>Publishing</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Conversations</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Objections</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Proof Capture</span>
                  <ArrowRight className="w-3 h-3" />
                  <span className="text-slate-900 font-bold">Offer Improvement</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Week 1 Publishing",
                  desc: "Establishing the Trinity POV and introducing the Distribution OS.",
                  content: WEEK_1_CONTENT,
                  tag: "Publishing"
                },
                {
                  title: "Beta Outreach Worksheet",
                  desc: "Manual research and research-backed openers for the first 10 beta accounts.",
                  content: OUTREACH_WORKSHEET,
                  tag: "Conversations"
                },
                {
                  title: "Warm Outbound Pack",
                  desc: "Qualified DMs designed to transition from POV to conversation.",
                  content: WEEK_1_OUTBOUND,
                  tag: "Conversations"
                },
                {
                  title: "Conversation Tracker",
                  desc: "Capturing exact buyer language and mapping loop leaks in real-time.",
                  content: CONVERSATION_TRACKER,
                  tag: "Conversations"
                },
                {
                  title: "Week 2 Publishing",
                  desc: "Positioning the Growth Audit as a high-signal diagnostic.",
                  content: WEEK_2_CONTENT,
                  tag: "Publishing"
                },
                {
                  title: "Objection Bank",
                  desc: "10 proof-safe responses to common founder skepticism.",
                  content: OBJECTION_BANK,
                  tag: "Objections"
                },
                {
                  title: "Proof Capture Log",
                  desc: "The central repository for tracking published artifacts and market signal.",
                  content: OPERATING_LOG,
                  tag: "Proof Capture"
                },
                {
                  title: "Weekly Offer Review",
                  desc: "The Friday ritual for improving the Growth Audit from market signal.",
                  content: OFFER_REVIEW_SAMPLE,
                  tag: "Offer Improvement"
                }
              ].map((artifact, i) => (
                <div key={i} className="p-8 border border-slate-200 bg-[#fafafa] flex flex-col justify-between hover:border-slate-400 transition-colors">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{artifact.tag}</div>
                      <FileText className="w-4 h-4 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">{artifact.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {artifact.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => openModal(artifact.title, artifact.content)}
                      className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Inspect Artifact <Eye className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border border-dashed border-slate-300 bg-slate-50 text-center">
              <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
                Trinity is built in public. These are inspectable artifacts from the active, manual-first Growth Distribution Sprint, demonstrating how we publish, converse, capture proof, and improve the offer weekly with strict proof discipline.
              </p>
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
                <h3 className="text-2xl font-bold uppercase tracking-tight">Systems & Strategy Audit</h3>
                <p className="text-slate-600 leading-relaxed">
                  While the 1-week **AI Growth Audit** focuses on distribution, this 2-week comprehensive engagement is a deep dive into your full operations, data stack, and AI product opportunities.
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

      {/* Artifact Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold uppercase tracking-tighter">{modalContent.title}</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              {modalContent.content}
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button onClick={closeModal} className="bg-slate-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
