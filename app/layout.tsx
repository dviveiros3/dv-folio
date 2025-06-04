import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Alexandra Chen - Executive Leader",
  description:
    "Chief Executive Officer & Strategic Advisor driving sustainable growth in complex global markets through transformational leadership and operational excellence.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
