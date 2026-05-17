"use client"

import { Check, X } from "lucide-react"
import { labThesis } from "@/data/trinity"

export function TrinityThesis() {
  const positives = labThesis.filter(p => p.type === "positive")
  const negatives = labThesis.filter(p => p.type === "negative")

  return (
    <section id="thesis" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">What Trinity Is</h2>
            <div className="space-y-8">
              {positives.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{point.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">What Trinity Is Not</h2>
            <div className="space-y-8">
              {negatives.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                    <X className="w-3 h-3" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-400 mb-1">{point.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
