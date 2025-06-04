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
  title: "Daniel Viveiros - Advanced Analytics & AI Leader",
  description:
    "Advanced Analytics & BI Leader with nearly a decade of experience transforming data into strategic advantage through AI-driven analytics and intelligent automation. Aspiring Data Executive.",
  keywords:
    "data analytics, business intelligence, AI strategy, machine learning, data science leadership, predictive analytics",
  authors: [{ name: "Daniel Viveiros" }],
  creator: "Daniel Viveiros",
  openGraph: {
    title: "Daniel Viveiros - Advanced Analytics & AI Leader",
    description: "Transforming data into strategic advantage through AI-driven analytics and intelligent automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Viveiros - Advanced Analytics & AI Leader",
    description: "Transforming data into strategic advantage through AI-driven analytics and intelligent automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
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
