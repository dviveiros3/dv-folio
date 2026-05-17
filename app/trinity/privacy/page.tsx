import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Privacy Policy</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            The full Privacy Policy for Trinity Lab is being finalized.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-12 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight">1. Data Collection</h2>
            <p className="text-slate-600 leading-relaxed">
              Trinity Lab does not collect personal data from visitors to this storefront. We do not use third-party tracking cookies or sell visitor data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight">2. Client Data Protocols</h2>
            <p className="text-slate-600 leading-relaxed">
              For client implementations and audits, we follow strict redaction and MNPI (Material Non-Public Information) protocols. We advocate for the use of enterprise-grade AI environments with clear data-zero-retention policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight">3. Security</h2>
            <p className="text-slate-600 leading-relaxed">
              Our workflows are designed to be deployed within your secure infrastructure. We provide guidance on maintaining data sovereignty while leveraging modern LLM capabilities.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
