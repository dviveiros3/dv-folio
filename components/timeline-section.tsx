"use client"

import { motion } from "framer-motion"
import { professionalData, educationData } from "@/data/content"

interface TimelineSectionProps {
  isVisible: boolean
}

interface ProfessionalEntry {
  company: string
  role: string
  year: string
  endYear: string | null
  current: boolean
  description: string
}

interface EducationEntry {
  institution: string
  degree: string
  year: string
  description: string
}

export function TimelineSection({ isVisible }: TimelineSectionProps) {
  const formatYear = (year: string, endYear: string | null, current: boolean) => {
    if (current) return `${year}–Present`
    if (endYear) return `${year}–${endYear}`
    return year
  }

  const professional = professionalData
  const education = educationData

  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">// Journey</p>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
          Professional Timeline
        </h2>
        <div className="line-accent max-w-xs" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Column */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest pl-2">
            Experience
          </h3>
          <div className="space-y-4">
            {professional.map((item, index) => (
              <motion.div
                key={index}
                className="card-executive p-6 sm:p-8 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Mobile: Stack year above role; Desktop: Side by side */}
                <div className="flex flex-col gap-2 mb-4">
                  {/* Year badge - on top for mobile */}
                  <div className="flex items-center gap-3 order-first sm:order-last sm:absolute sm:relative">
                    <div className="font-mono-data text-xs sm:text-sm text-slate-400 tabular-nums bg-slate-50 px-2 sm:px-3 py-1 rounded-full w-fit">
                      {formatYear(item.year, item.endYear, item.current)}
                    </div>
                    {item.current && <span className="status-dot-pro sm:hidden" />}
                  </div>

                  {/* Role and company */}
                  <div className="flex items-center gap-3">
                    {item.current && <span className="status-dot-pro hidden sm:block" />}
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">{item.title}</h4>
                  </div>
                </div>

                <div className="text-sm sm:text-base text-slate-600 font-medium pb-3 sm:pb-4 border-b border-slate-100 mb-3 sm:mb-4">
                  {item.organization}
                </div>

                <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest pl-2">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="card-executive p-6 sm:p-8 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Mobile: Stack year above degree; Desktop: Side by side */}
                <div className="flex flex-col gap-2 mb-2">
                  <div className="font-mono-data text-xs sm:text-sm text-slate-400 tabular-nums bg-slate-50 px-2 sm:px-3 py-1 rounded-full w-fit">
                    {item.year}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">{item.title}</h4>
                </div>
                <div className="text-sm sm:text-base text-slate-500 font-medium">
                  {item.organization}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

