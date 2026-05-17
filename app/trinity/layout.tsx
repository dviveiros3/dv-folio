import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trinity | Applied AI Lab & Product Storefront",
  description: "Architecting the AI-Powered Growth Engine. High-conviction workflows and productized AI kits for founders and operators.",
  openGraph: {
    title: "Trinity | Applied AI Lab & Product Storefront",
    description: "Architecting the AI-Powered Growth Engine.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Trinity Applied AI Lab",
      },
    ],
  },
}

export default function TrinityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
