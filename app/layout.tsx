import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Daniel Viveiros – Director of Analytics",
  description:
    "Director of Analytics who lifted ARR +$4.2M through data-driven strategies. EdTech, CivicTech, and Social-impact SaaS expertise with proven cost optimization results.",
  keywords:
    "director of analytics, data analytics, ARR growth, snowflake optimization, edtech analytics, civictech data, social impact saas",
  authors: [{ name: "Daniel Viveiros" }],
  creator: "Daniel Viveiros",
  openGraph: {
    title: "Daniel Viveiros – Director of Analytics",
    description:
      "Director of Analytics who lifted ARR +$4.2M through data-driven strategies in EdTech, CivicTech, and Social-impact SaaS.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Daniel Viveiros - Director of Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Viveiros – Director of Analytics",
    description: "Director of Analytics who lifted ARR +$4.2M through data-driven strategies.",
    images: ["/og.png"],
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
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
