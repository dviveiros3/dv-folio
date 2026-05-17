"use client"

import { FlaskConical, Terminal } from "lucide-react"
import { labExhibits } from "@/data/trinity"

export function TrinityExhibits() {
  return (
    <section id="lab" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-1/2 -z-0"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              <FlaskConical className="w-4 h-4" />
              The Lab
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Active R&D Exhibits</h2>
            <p className="text-slate-400">
              Where we pressure-test hypotheses and build experimental primitives. These exhibits showcase the raw engineering behind our products.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {labExhibits.map((exhibit, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 p-8 rounded-sm hover:border-amber-400/50 transition-all"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-amber-400 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    STATUS: {exhibit.status}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-mono text-white">{exhibit.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {exhibit.stack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-500 bg-slate-900/50 px-2 py-1 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="bg-slate-900/50 p-6 rounded-sm border border-slate-800 font-mono text-sm text-slate-400 leading-relaxed relative">
                    <Terminal className="w-4 h-4 absolute top-4 right-4 text-slate-700" />
                    <p>{exhibit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-mono italic">
            Interested in the technical setup of these exhibits? Contact for lab access.
          </p>
        </div>
      </div>
    </section>
  )
}
