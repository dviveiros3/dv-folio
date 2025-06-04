"use client"

import { useEffect, useRef, useState } from "react"

interface SoundManagerProps {
  visibleSections: Set<string>
  activeSection: string
}

export function SoundManager({ visibleSections, activeSection }: SoundManagerProps) {
  const audioContextRef = useRef<AudioContext | null>(null)
  const lastSectionRef = useRef<string>("")
  const [soundEnabled, setSoundEnabled] = useState(false)

  useEffect(() => {
    // Initialize Web Audio Context on first user interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
    }

    document.addEventListener("click", initAudio, { once: true })
    document.addEventListener("scroll", initAudio, { once: true })

    return () => {
      document.removeEventListener("click", initAudio)
      document.removeEventListener("scroll", initAudio)
    }
  }, [])

  // Subtle section transition sound
  useEffect(() => {
    if (activeSection !== lastSectionRef.current && audioContextRef.current && soundEnabled) {
      playTransitionSound()
      lastSectionRef.current = activeSection
    }
  }, [activeSection, soundEnabled])

  const playTransitionSound = () => {
    if (!audioContextRef.current) return

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    // Much more subtle, sophisticated tone
    oscillator.frequency.setValueAtTime(600, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1)

    gainNode.gain.setValueAtTime(0, ctx.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.01) // Much lower volume
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.1)
  }

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className={`p-2 rounded-full transition-all duration-300 ${
          soundEnabled ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
        }`}
        title={soundEnabled ? "Disable sound" : "Enable sound"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {soundEnabled ? (
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </>
          ) : (
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </>
          )}
        </svg>
      </button>
    </div>
  )
}
