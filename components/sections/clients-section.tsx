"use client"

import { motion } from "framer-motion"
import { RefObject } from "react"
import { clientProof, educationCredentials } from "@/data/content"

interface ClientsSectionProps {
  isVisible: boolean
  sectionRef: RefObject<HTMLElement | null>
}

export function ClientsSection({ isVisible, sectionRef }: ClientsSectionProps) {
  return (
    <section ref={sectionRef} id="clients" className="px-8 py-24 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Proof</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Track Record
          </h2>
          <div className="line-accent max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {clientProof.map((client, index) => (
            <motion.div
              key={client.company}
              className="bg-slate-50 p-6 border border-slate-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900">{client.company}</h3>
                <span className="text-xs text-slate-400 font-mono">{client.context}</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">{client.outcome}</p>
              <p className="text-sm font-mono text-slate-900 bg-white p-2 border border-slate-100">
                {client.metric}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-slate-200 pt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">Credentials</p>
          <div className="flex flex-wrap gap-8">
            {educationCredentials.map((cred, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                  {cred.institution === "Massachusetts Institute of Technology" ? "MIT" : "HBS"}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{cred.degree}</p>
                  <p className="text-slate-500 text-xs">{cred.institution} • {cred.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
