"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, Scale, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function GameTheoryPolicyImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <nav className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center px-8 pt-32 pb-16 bg-slate-50">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                White Paper
              </span>
              <span className="text-sm text-slate-400">Policy Analysis • MIT DEDP</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Game Theory in<br />
              <span className="text-slate-400">Public Policy Design</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              How strategic interaction modeling can anticipate stakeholder responses
              and design policies that align individual incentives with collective outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="px-8 py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: "Mechanism Design", description: "Creating incentive structures that produce desired outcomes" },
              { icon: Target, title: "Nash Equilibrium", description: "Identifying stable states where no player benefits from deviation" },
              { icon: Lightbulb, title: "Strategic Foresight", description: "Anticipating multi-agent responses before policy deployment" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-executive p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Abstract</p>
            <h2 className="text-3xl font-bold text-slate-900">
              Beyond Naive Policy Assumptions
            </h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              Traditional policy analysis often assumes passive stakeholder responses. Economic agents—individuals,
              firms, and nations—are strategic actors who optimize based on expected behaviors of others.
            </p>
            <p>
              <strong>Game theory provides a framework to:</strong>
            </p>
            <ul>
              <li>Model strategic interactions between multiple stakeholders</li>
              <li>Predict equilibrium outcomes under different policy designs</li>
              <li>Design mechanisms that align individual incentives with collective welfare</li>
              <li>Anticipate unintended consequences before policy deployment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Example */}
      <section className="px-8 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Application</p>
            <h2 className="text-3xl font-bold text-slate-900">
              Emissions Reduction Policy Design
            </h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Identify the Game",
                description: "Players: Industrial firms, regulators, consumers. Strategies: Invest in green tech, pay carbon tax, lobby for exemptions."
              },
              {
                title: "Model Payoffs",
                description: "Firms maximize profit. Government minimizes emissions at minimal economic cost. Consumers prefer low prices."
              },
              {
                title: "Find Equilibrium",
                description: "Without intervention, 'pollute and pay' dominates. This is the Tragedy of the Commons—a suboptimal Nash Equilibrium."
              },
              {
                title: "Design Mechanism",
                description: "Cap-and-trade creates a permit market. Firms that can cheaply abate will sell permits to those who can't."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-executive p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-8 py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Strategic Analysis for Your Organization</h2>
          <p className="text-slate-400 text-lg">
            Apply game-theoretic thinking to competitive strategy, pricing, and stakeholder management.
          </p>
          <Link
            href="https://calendly.com/daniel-viveiros/15min-intro"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 font-medium hover:bg-slate-100 transition-colors"
          >
            Discuss Strategy
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  )
}
