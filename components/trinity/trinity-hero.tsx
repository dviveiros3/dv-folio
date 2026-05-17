"use client"

import { ArrowUpRight } from "lucide-react"
import { trinityHero } from "@/data/trinity"

export function TrinityHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] uppercase tracking-widest font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            {trinityHero.announcement}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl">
            {trinityHero.headline}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
            {trinityHero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-800 transition-colors group">
              Browse The Forge
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 px-8 py-4 rounded-sm font-medium hover:bg-slate-50 transition-colors">
              Enter The Lab
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
