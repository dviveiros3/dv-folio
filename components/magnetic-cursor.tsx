"use client"

import { useEffect, useRef, useState } from "react"

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Hide cursor after 2 seconds of inactivity
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll("button, a, [data-magnetic]")

    magneticElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Refined outer cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-150" : "scale-100"}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-8 h-8 rounded-full border border-blue-400/30 backdrop-blur-sm transition-all duration-300" />
      </div>

      {/* Refined inner cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-50 transition-all duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
      </div>
    </>
  )
}
