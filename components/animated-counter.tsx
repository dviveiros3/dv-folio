"use client"

import { useState, useEffect, useCallback } from "react"

interface AnimatedCounterProps {
    target: string
    duration?: number
    isVisible: boolean
}

// Parse a metric string into components: prefix, number, suffix, and sign
function parseMetric(target: string): { prefix: string; value: number; suffix: string; isNegative: boolean; decimals: number } {
    // Handle negative values (e.g., "-32%")
    const isNegative = target.startsWith("-")
    const cleanTarget = isNegative ? target.slice(1) : target

    // Extract prefix (non-numeric leading chars like "$" or "+")
    const prefixMatch = cleanTarget.match(/^[^0-9.-]*/)
    const prefix = prefixMatch ? prefixMatch[0] : ""

    // Extract suffix (non-numeric trailing chars like "%", "M", "×", "x")
    const suffixMatch = cleanTarget.match(/[^0-9.]+$/)
    let suffix = suffixMatch ? suffixMatch[0] : ""

    // Normalize "x" to "×" for multipliers
    if (suffix.toLowerCase() === "x") suffix = "×"

    // Extract the numeric value
    const numericMatch = cleanTarget.match(/[0-9.]+/)
    const value = numericMatch ? parseFloat(numericMatch[0]) : 0

    // Count decimal places
    const decimalMatch = numericMatch ? numericMatch[0].split(".")[1] : null
    const decimals = decimalMatch ? decimalMatch.length : 0

    return { prefix, value, suffix, isNegative, decimals }
}

// Format a number back into the metric string
function formatMetric(current: number, parsed: { prefix: string; suffix: string; isNegative: boolean; decimals: number }): string {
    const sign = parsed.isNegative ? "-" : ""
    const formattedNumber = parsed.decimals > 0 ? current.toFixed(parsed.decimals) : Math.floor(current).toString()
    return `${sign}${parsed.prefix}${formattedNumber}${parsed.suffix}`
}

// Get initial display value
function getInitialValue(parsed: { prefix: string; suffix: string; isNegative: boolean; decimals: number }): string {
    const sign = parsed.isNegative ? "-" : ""
    const initialNumber = parsed.decimals > 0 ? "0." + "0".repeat(parsed.decimals) : "0"
    return `${sign}${parsed.prefix}${initialNumber}${parsed.suffix}`
}

export const AnimatedCounter = ({ target, duration = 2000, isVisible }: AnimatedCounterProps) => {
    const parsed = parseMetric(target)
    const [count, setCount] = useState(() => getInitialValue(parsed))
    const [hasAnimated, setHasAnimated] = useState(false)

    const animate = useCallback(() => {
        const frames = duration / 16 // ~60fps
        const increment = parsed.value / frames
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= parsed.value) {
                setCount(target) // Use exact target at end
                clearInterval(timer)
            } else {
                setCount(formatMetric(current, parsed))
            }
        }, 16)

        return timer
    }, [target, duration, parsed])

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true)
            const timer = animate()
            return () => clearInterval(timer)
        } else if (!isVisible) {
            // Reset when scrolled out of view
            setHasAnimated(false)
            setCount(getInitialValue(parsed))
        }
    }, [isVisible, hasAnimated, animate, parsed])

    return <span>{count}</span>
}
