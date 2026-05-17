import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link href="/trinity" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Storefront
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-slate-900" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Terms of Service</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            The full Terms of Service for Trinity Lab are being finalized.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-12 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight">1. Professional Services</h2>
            <p className="text-slate-600 leading-relaxed">
              All current Trinity Lab implementations and audit engagements follow Daniel Viveiros' standard professional services agreement. This agreement covers scope of work, intellectual property ownership, and confidentiality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight">2. Product Kits (The Forge)</h2>
            <p className="text-slate-600 leading-relaxed">
              Trinity Catalog kits are provided as operational templates. They are designed to be deployed within a client's own secure infrastructure. Use of these kits is subject to the licensing terms provided at the time of purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight">3. AI Compliance</h2>
            <p className="text-slate-600 leading-relaxed">
              Clients are responsible for ensuring that their use of AI-generated content complies with the terms of their LLM providers (e.g., Anthropic, OpenAI).
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
