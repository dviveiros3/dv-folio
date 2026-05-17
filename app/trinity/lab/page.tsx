import { Beaker, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LabIndex() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/trinity" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Storefront
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Beaker className="w-8 h-8 text-slate-900" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">The Lab</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Public experiments in applied AI. We bridge the gap between experimental hype and business leverage through high-velocity R&D.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-12">
          <div className="bg-[#fafafa] border border-slate-200 p-8 md:p-12 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-slate-400">Exhibit_001</span>
              <span className="px-2 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-tighter">In-Progress / Proposed</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Founder Growth Engine</h2>
            <p className="text-slate-600 leading-relaxed">
              Hypothesis: Founder perspective can be extracted via high-bandwidth audio and transformed into a multi-channel content engine and outbound prospecting system with &lt; 30 minutes of founder involvement per week.
            </p>
            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Stack:</span>
              <span className="text-[10px] font-mono text-slate-600 bg-white border border-slate-100 px-2 py-0.5">Whisper v3</span>
              <span className="text-[10px] font-mono text-slate-600 bg-white border border-slate-100 px-2 py-0.5">Claude 3.5 Sonnet</span>
              <span className="text-[10px] font-mono text-slate-600 bg-white border border-slate-100 px-2 py-0.5">GPT-4o</span>
            </div>
          </div>
        </div>

        <div className="pt-12 text-center border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">More Exhibits Coming Soon</p>
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-200 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
