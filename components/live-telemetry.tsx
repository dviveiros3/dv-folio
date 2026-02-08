"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function LiveTelemetry() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [hoveredPoint, setHoveredPoint] = useState<{ x: number, y: number, value: number } | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        const points: number[] = []
        const maxPoints = 100
        const height = 160
        let width = canvas.width

        // Initialize points with some randomness but smoothing
        let lastVal = 50
        for (let i = 0; i < maxPoints; i++) {
            const change = (Math.random() - 0.5) * 10
            lastVal = Math.max(20, Math.min(height - 20, lastVal + change))
            points.push(lastVal)
        }

        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 800
            canvas.height = height
            width = canvas.width
        }
        window.addEventListener('resize', resize)
        resize()

        const render = () => {
            // Update data - simulate live stream
            if (Math.random() > 0.8) {
                points.shift()
                const change = (Math.random() - 0.5) * 15
                const newVal = Math.max(20, Math.min(height - 20, points[points.length - 1] + change))
                points.push(newVal)
            }

            ctx.clearRect(0, 0, width, height)

            // Draw grid
            ctx.strokeStyle = "rgba(0,0,0,0.05)"
            ctx.lineWidth = 1
            ctx.beginPath()
            for (let i = 0; i < width; i += 40) { ctx.moveTo(i, 0); ctx.lineTo(i, height); }
            for (let i = 0; i < height; i += 40) { ctx.moveTo(0, i); ctx.lineTo(width, i); }
            ctx.stroke()

            // Draw Line
            ctx.strokeStyle = "#22c55e" // Green-500
            ctx.lineWidth = 2
            ctx.beginPath()
            const xStep = width / (maxPoints - 1)

            ctx.moveTo(0, points[0])
            for (let i = 1; i < points.length; i++) {
                // Cubic bezier for smoothness
                const x = i * xStep
                const prevX = (i - 1) * xStep
                const y = points[i]
                const prevY = points[i - 1]
                const cp1x = prevX + xStep / 2
                const cp1y = prevY
                const cp2x = x - xStep / 2
                const cp2y = y
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
            }
            ctx.stroke()

            // Fill gradient
            ctx.lineTo(width, height)
            ctx.lineTo(0, height)
            ctx.fillStyle = "rgba(34, 197, 94, 0.05)"
            ctx.fill()

            // Draw active point
            const lastX = (points.length - 1) * xStep
            const lastY = points[points.length - 1]

            ctx.beginPath()
            ctx.arc(lastX, lastY, 4, 0, Math.PI * 2)
            ctx.fillStyle = "#22c55e"
            ctx.fill()

            // Pulse ring
            ctx.beginPath()
            ctx.arc(lastX, lastY, 12, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.4 + Math.sin(Date.now() / 200) * 0.2})`
            ctx.stroke()

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="relative w-full h-[160px] border border-slate-200 bg-slate-50/50 rounded overflow-hidden">
            <div className="absolute top-2 left-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live Revenue Optimization Stream
            </div>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    )
}
