"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))

      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      {/* Premium scroll progress bar */}
      <div
        className={`fixed top-0 left-0 w-full h-1 bg-slate-100/30 backdrop-blur-sm z-50 transition-all duration-300 ${isScrolling ? "opacity-100" : "opacity-60"}`}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 transition-all duration-150 ease-out relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-blue-600/50 blur-sm" />
        </div>
      </div>

      {/* Section indicators */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40 transition-all duration-300 ${isScrolling ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      >
        {["hero", "philosophy", "impact", "expertise", "timeline", "engage"].map((section, index) => {
          const sectionProgress = (index / 5) * 100
          const isActive = scrollProgress >= sectionProgress && scrollProgress < sectionProgress + 20
          return (
            <div
              key={section}
              className={`w-8 h-0.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-blue-600 scale-110" : "bg-slate-300"
              }`}
            />
          )
        })}
      </div>
    </>
  )
}
