import type { Metadata } from "next"
import TrinityPage from "./page-client"

export const metadata: Metadata = {
  title: "Trinity | Applied AI Lab & Product Forge",
  description: "Trinity is an applied AI lab that converts technical engineering taste into business leverage through high-conviction product builds.",
  openGraph: {
    title: "Trinity | Applied AI Lab & Product Forge",
    description: "Where engineering taste meets business leverage. Browse the Forge or enter the Lab.",
    type: "website",
  },
}

export default function Page() {
  return <TrinityPage />
}
