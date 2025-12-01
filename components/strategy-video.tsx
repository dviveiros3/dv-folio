"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

interface Slide {
  title: string
  subtitle?: string
  content: string[]
  highlight?: string
  visual?: "chart" | "process" | "metrics" | "tech" | "financial"
}

const slides: Slide[] = [
  {
    title: "AI-Enhanced Financial Analytics Platform",
    subtitle: "Connected Dealer Services • 2022-2024",
    content: [
      "Challenge: Manual financial reporting across multiple revenue streams",
      "Fragmented data sources hindering real-time financial insights",
      "Need for predictive cash flow and revenue recognition automation"
    ],
    visual: "financial"
  },
  {
    title: "Strategic AI Architecture",
    subtitle: "End-to-End Financial Intelligence System",
    content: [
      "ML-powered revenue recognition with 99.2% accuracy",
      "Automated anomaly detection for financial transactions",
      "Predictive cash flow modeling using ensemble methods",
      "Real-time financial dashboard with AI-driven insights"
    ],
    visual: "process"
  },
  {
    title: "Technical Implementation",
    subtitle: "Modern Data Stack + AI/ML Pipeline",
    content: [
      "Snowflake data warehouse with dbt transformations",
      "Python + TensorFlow for predictive financial models",
      "Apache Airflow orchestrating ML workflows",
      "Looker dashboards with embedded ML predictions"
    ],
    visual: "tech"
  },
  {
    title: "Business Impact",
    subtitle: "Transformational Financial Operations",
    content: [
      "Reduced month-end close time from 15 days to 3 days",
      "99.2% accuracy in automated revenue recognition",
      "Identified $2.1M in revenue optimization opportunities",
      "Enabled real-time financial decision making for C-suite"
    ],
    highlight: "$2.1M revenue optimization",
    visual: "chart"
  },
  {
    title: "Strategic Outcomes",
    subtitle: "AI-First Financial Operations",
    content: [
      "Established foundation for scalable financial analytics",
      "Created competitive advantage through predictive insights",
      "Enabled data-driven financial strategy and planning",
      "Built reusable ML framework for future applications"
    ],
    visual: "metrics"
  }
]

interface StrategyVideoProps {
  isVisible: boolean
}

export function StrategyVideo({ isVisible }: StrategyVideoProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying && isVisible) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Move to next slide
            setCurrentSlide((current) => {
              const next = current + 1
              if (next >= slides.length) {
                setIsPlaying(false)
                return 0
              }
              return next
            })
            return 0
          }
          return prev + 1
        })
      }, 50) // Update every 50ms for smooth progress
    }

    return () => clearInterval(interval)
  }, [isPlaying, isVisible])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setProgress(0)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
    setIsPlaying(false)
  }

  const renderVisual = (visual?: string) => {
    switch (visual) {
      case "financial":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-blue-200 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">AI</div>
                  <div className="text-xs text-slate-600">Finance</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">$</span>
              </div>
            </div>
          </div>
        )
      case "chart":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="flex items-end gap-2">
              {[30, 45, 60, 85, 70, 95].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="bg-gradient-to-t from-blue-600 to-blue-400 w-8 rounded-t transition-all duration-1000"
                    style={{ 
                      height: `${height}px`,
                      animationDelay: `${i * 200}ms`
                    }}
                  />
                  <div className="text-xs text-slate-500">Q{i+1}</div>
                </div>
              ))}
            </div>
          </div>
        )
      case "process":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="flex items-center gap-3">
              {["Collect", "Process", "Predict", "Act"].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-blue-700">{step}</div>
                    </div>
                  </div>
                  {i < 3 && <div className="w-4 h-0.5 bg-blue-300" />}
                </div>
              ))}
            </div>
          </div>
        )
      case "tech":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Snowflake", color: "bg-blue-100 text-blue-700" },
                { name: "TensorFlow", color: "bg-orange-100 text-orange-700" },
                { name: "dbt", color: "bg-green-100 text-green-700" },
                { name: "Looker", color: "bg-purple-100 text-purple-700" }
              ].map((tech, i) => (
                <div key={i} className={`${tech.color} px-3 py-2 rounded-lg text-xs font-medium text-center border`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        )
      case "metrics":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">3 days</div>
                <div className="text-xs text-slate-600">Close Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">99.2%</div>
                <div className="text-xs text-slate-600">Accuracy</div>
              </div>
            </div>
          </div>
        )
      default:
        return <div className="h-32" />
    }
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200">
        {/* Video Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-900/80 to-transparent p-4 z-10">
          <div className="flex items-center justify-between text-white">
            <div className="text-sm font-medium">AI Strategy Deep Dive</div>
            <div className="text-xs opacity-75">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full flex flex-col justify-center p-8 pt-16">
          {/* Visual Element */}
          <div className="mb-6">
            {renderVisual(currentSlideData.visual)}
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {currentSlideData.title}
            </h3>
            {currentSlideData.subtitle && (
              <p className="text-sm text-blue-600 font-medium">
                {currentSlideData.subtitle}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-2 mb-6">
            {currentSlideData.content.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-slate-700"
                style={{
                  animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Highlight */}
          {currentSlideData.highlight && (
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg px-4 py-2">
                <span className="text-blue-700 font-semibold text-lg">
                  {currentSlideData.highlight}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-75 ease-linear"
            style={{ width: `${((currentSlide * 100) + progress) / slides.length}%` }}
          />
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={togglePlay}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="mt-4 text-center">
        <p className="text-slate-600 text-sm">
          Interactive AI strategy walkthrough • Click play or navigate manually
        </p>
      </div>
    </div>
  )
}
