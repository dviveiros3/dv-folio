"use client"

import { services } from "@/data/content"
import { motion } from "framer-motion"
import { RefObject } from "react"

interface ServicesSectionProps {
  isVisible: boolean
  sectionRef: RefObject<HTMLElement | null>
}

export function ServicesSection({ isVisible, sectionRef }: ServicesSectionProps) {
  return (
    <section ref={sectionRef} id="services" className="px-8 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Services</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            How I Help
          </h2>
          <div className="line-accent max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 p-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <p className="text-sm text-slate-500 italic mb-6">{service.differentiator}</p>
              <ul className="space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-slate-400 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
