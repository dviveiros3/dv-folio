"use client"

import { useEffect, useState } from "react"

interface TimelineItem {
  year: string
  endYear?: string
  title: string
  organization: string
  type: "education" | "experience" | "certification" | "venture"
  current?: boolean
}

// Education & Certifications Timeline (Curated for maximum impact)
const educationData: TimelineItem[] = [
  {
    year: "2016",
    title: "Lean Six Sigma Green Belt",
    organization: "Process Excellence Institute",
    type: "certification",
  },
  {
    year: "2017",
    title: "Bachelor's Degree, Mathematics",
    organization: "University of South Florida",
    type: "education",
  },
  {
    year: "2018",
    title: "IBM Data Science Professional",
    organization: "IBM",
    type: "certification",
  },
  {
    year: "2021",
    title: "Executive Management Program",
    organization: "Harvard University",
    type: "education",
  },
  {
    year: "2024",
    title: "MicroMasters, Data, Economics, and Policy",
    organization: "Massachusetts Institute of Technology",
    type: "education",
  },
]

// Professional Timeline (Focused on executive progression)
const professionalData: TimelineItem[] = [
  {
    year: "2016",
    title: "Founder",
    organization: "One Home Installations",
    type: "venture",
    current: true,
  },
  {
    year: "2020",
    endYear: "2022",
    title: "BI Analyst & Operations Manager",
    organization: "Tenth Avenue Commerce",
    type: "experience",
  },
  {
    year: "2021",
    title: "Founder & Strategic Advisor",
    organization: "Portfolio Companies",
    type: "venture",
    current: true,
  },
  {
    year: "2022",
    title: "Business Intelligence & Advanced Analytics Manager",
    organization: "Connected Dealer Services",
    type: "experience",
    current: true,
  },
  {
    year: "2024",
    title: "VP & Treasurer",
    organization: "Trajectory Foundation",
    type: "venture",
    current: true,
  },
]

interface TimelineSectionProps {
  isVisible: boolean
}

export function TimelineSection({ isVisible }: TimelineSectionProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (isVisible) {
      // Animate education items first
      educationData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => new Set([...prev, `edu-${index}`]))
        }, index * 100)
      })

      // Then animate professional items
      professionalData.forEach((_, index) => {
        setTimeout(
          () => {
            setVisibleItems((prev) => new Set([...prev, `prof-${index}`]))
          },
          educationData.length * 100 + index * 200,
        )
      })
    } else {
      setVisibleItems(new Set())
    }
  }, [isVisible])

  const getTimelinePosition = (year: string) => {
    const startYear = 2016
    const endYear = 2024
    const currentYear = Number.parseInt(year)
    const totalYears = endYear - startYear
    const yearsSinceStart = currentYear - startYear
    return (yearsSinceStart / totalYears) * 60 + 20 // Even more margin for spacing (20% on each side)
  }

  return (
    <div className="space-y-12">
      <div
        className={`text-center space-y-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-sm font-medium text-blue-700 tracking-widest uppercase">Executive Journey</div>
        <div className="h-px w-24 bg-blue-600/30 mx-auto"></div>
        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
          Strategic progression combining elite education, advanced certifications, and executive leadership in
          data-driven organizations.
        </p>
      </div>

      {/* Dual-Track Timeline (Desktop) */}
      <div className="hidden lg:block relative max-w-7xl mx-auto space-y-16">
        {/* Education & Certifications Track */}
        <div className="relative h-32">
          <div className="flex items-center mb-8">
            <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              EDUCATION & CERTIFICATIONS
            </div>
            <div className="flex-1 h-px bg-blue-200 ml-4"></div>
          </div>

          <div className="absolute left-[20%] right-[20%] top-10 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>

          {educationData.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                visibleItems.has(`edu-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                left: `${getTimelinePosition(item.year)}%`,
                transform: "translateX(-50%)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex justify-center mb-3">
                <div
                  className={`w-3 h-3 rounded-full shadow-md ${
                    item.type === "education" ? "bg-blue-600 shadow-blue-600/30" : "bg-green-600 shadow-green-600/30"
                  }`}
                ></div>
              </div>
              <div className="text-center space-y-1 max-w-24">
                <div className="text-xs font-medium text-blue-700">{item.year}</div>
                <h4 className="text-xs font-semibold text-slate-800 leading-tight">{item.title}</h4>
                {item.type === "education" && <p className="text-xs text-blue-600 font-medium">{item.organization}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Experience Track */}
        <div className="relative h-40 mb-8">
          <div className="flex items-center mb-8">
            <div className="text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              EXECUTIVE LEADERSHIP
            </div>
            <div className="flex-1 h-px bg-slate-200 ml-4"></div>
          </div>

          <div className="absolute left-[20%] right-[20%] top-10 h-0.5 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200"></div>

          {professionalData.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                visibleItems.has(`prof-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                left: `${getTimelinePosition(item.year)}%`,
                transform: "translateX(-50%)",
                transitionDelay: `${educationData.length * 100 + index * 200}ms`,
              }}
            >
              <div className="flex justify-center mb-3">
                <div
                  className={`w-3 h-3 rounded-full shadow-md relative ${
                    item.type === "venture" ? "bg-amber-500 shadow-amber-500/30" : "bg-slate-600 shadow-slate-600/30"
                  }`}
                >
                  {item.current && (
                    <div className="absolute -inset-1 rounded-full border border-green-400 animate-pulse"></div>
                  )}
                </div>
              </div>
              <div className="text-center space-y-1 max-w-24">
                <div className="text-xs font-medium text-slate-700">
                  {item.endYear ? `${item.year}-${item.endYear}` : `${item.year}+`}
                </div>
                <h4 className="text-xs font-semibold text-slate-800 leading-tight">{item.title}</h4>
                <p className="text-xs text-slate-600">{item.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-12">
        {/* Education & Certifications */}
        <div>
          <h3 className="text-sm font-semibold text-blue-700 mb-6 text-center">EDUCATION & CERTIFICATIONS</h3>
          <div className="relative max-w-sm mx-auto">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-8 transition-all duration-700 ${
                    visibleItems.has(`edu-${index}`) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <div
                    className={`absolute left-1 w-2 h-2 rounded-full ${
                      item.type === "education" ? "bg-blue-600" : "bg-green-600"
                    }`}
                  />
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-blue-700">{item.year}</div>
                    <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                    {item.type === "education" && (
                      <p className="text-xs text-blue-600 font-medium">{item.organization}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Leadership */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-6 text-center">EXECUTIVE LEADERSHIP</h3>
          <div className="relative max-w-sm mx-auto">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-400 to-slate-200"></div>
            <div className="space-y-6">
              {professionalData.map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-8 transition-all duration-700 ${
                    visibleItems.has(`prof-${index}`) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <div
                    className={`absolute left-1 w-2 h-2 rounded-full ${
                      item.type === "venture" ? "bg-amber-500" : "bg-slate-600"
                    }`}
                  >
                    {item.current && (
                      <div className="absolute -inset-1 rounded-full border border-green-400 animate-pulse"></div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-slate-700">
                      {item.endYear ? `${item.year}-${item.endYear}` : `${item.year}-Present`}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-600">{item.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
