"use client"

import { ArrowUpRight, Cpu } from "lucide-react"

export function TrinityCTA() {
  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div
          className="bg-slate-900 text-white p-12 md:p-20 rounded-sm relative overflow-hidden"
        >
          {/* Abstract Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-amber-400 text-slate-900 mb-8">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need a Custom Forge?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              We partner with selected companies to build proprietary AI-native systems. From data pipelines to autonomous workflows, we provide the technical leadership to ensure your investment ships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-sm font-bold hover:bg-slate-100 transition-colors">
                Request Implementation
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 border border-slate-700 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-800 transition-colors">
                View Lab Whitepapers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
