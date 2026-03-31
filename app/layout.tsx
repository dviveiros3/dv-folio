import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { StickyCTA } from "@/components/sticky-cta"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dv-folio.vercel.app"),
  title: "Turn Your Data Team Into a Revenue Engine | Daniel Viveiros",
  description: "Strategic data leadership for founders. I build the metrics, team, and culture that turn data into revenue. Data Strategy Audit, AI Readiness Assessment, Fractional Leadership.",
  keywords: "fractional head of data, data strategy, revenue operations, startup advisor, series b metrics, analytics engineering, data audit",
  authors: [{ name: "Daniel Viveiros" }],
  creator: "Daniel Viveiros",
  openGraph: {
    title: "Turn Your Data Team Into a Revenue Engine | Daniel Viveiros",
    description: "Strategic data leadership for founders who need answers, not just dashboards.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Daniel Viveiros - Fractional Head of Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Your Data Team Into a Revenue Engine | Daniel Viveiros",
    description: "Strategic data leadership for founders who need answers, not just dashboards.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://dv-folio.vercel.app/#service",
      "name": "Daniel Viveiros - Fractional Head of Data",
      "image": "https://dv-folio.vercel.app/og.png",
      "description": "Strategic data leadership for founders. Data Strategy Audit, AI Readiness Assessment, and Fractional Data Leadership for Series A-C startups.",
      "priceRange": "$$$",
      "areaServed": "Worldwide",
      "serviceType": ["Data Strategy Consulting", "Revenue Operations", "Analytics Engineering", "Fractional Executive"],
      "provider": { "@id": "https://dv-folio.vercel.app/#person" },
      "url": "https://dv-folio.vercel.app",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressCountry": "US"
      }
    },
    {
      "@type": "Person",
      "@id": "https://dv-folio.vercel.app/#person",
      "name": "Daniel Viveiros",
      "jobTitle": "Fractional Head of Data",
      "description": "Strategic data leadership for founders. Building metrics, team, and culture that turn data into revenue.",
      "url": "https://dv-folio.vercel.app",
      "sameAs": [
        "https://linkedin.com/in/daniel-viveiros"
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Massachusetts Institute of Technology",
          "sameAs": "https://www.mit.edu"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Harvard University",
          "sameAs": "https://www.harvard.edu"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "University of South Florida"
        }
      ],
      "knowsAbout": [
        "Business Intelligence",
        "Revenue Operations",
        "Data Strategy",
        "Analytics Engineering",
        "Machine Learning",
        "Financial Analytics"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MicroMasters in Data, Economics, and Policy",
          "credentialCategory": "certificate",
          "recognizedBy": { "@type": "Organization", "name": "Massachusetts Institute of Technology" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Executive Management Program",
          "credentialCategory": "certificate",
          "recognizedBy": { "@type": "Organization", "name": "Harvard University" }
        }
      ]
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  )
}
