"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Activity, Zap } from 'lucide-react'
import Link from 'next/link'

export default function NeuroscienceInformationFlowPage() {
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
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                Research
              </span>
              <span className="text-sm text-slate-400">Computational Neuroscience • USF</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Information Flow in<br />
              <span className="text-slate-400">Neural Networks</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Applying information theory and signal processing to understand how the brain
              encodes, transmits, and processes sensory information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="px-8 py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Neural Coding", description: "How spike trains encode stimulus information" },
              { icon: Activity, title: "Information Transfer", description: "Quantifying bits/second across synapses" },
              { icon: Zap, title: "Efficiency Analysis", description: "Comparing biological vs. artificial networks" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-executive p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Research Context</p>
            <h2 className="text-3xl font-bold text-slate-900">
              The Brain as an Information Processor
            </h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              The brain processes vast amounts of sensory data in real-time with remarkable efficiency.
              Understanding the computational principles underlying this process has implications for
              both neuroscience and artificial intelligence.
            </p>
            <p>
              <strong>Key research questions addressed:</strong>
            </p>
            <ul>
              <li>How do neurons encode continuous stimuli into discrete spike patterns?</li>
              <li>What is the channel capacity of neural pathways?</li>
              <li>How does noise (biological variability) affect information transmission?</li>
              <li>Can we design more efficient AI architectures by mimicking neural coding?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-8 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Methodology</p>
            <h2 className="text-3xl font-bold text-slate-900">
              Computational Analysis Pipeline
            </h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Spike Train Analysis",
                description: "Applied information-theoretic measures (mutual information, entropy) to neural recordings from sensory cortex."
              },
              {
                title: "Transfer Entropy",
                description: "Quantified directed information flow between neuron populations to map effective connectivity."
              },
              {
                title: "Signal Processing",
                description: "Used spectral analysis and wavelet transforms to decompose neural signals across frequency bands."
              },
              {
                title: "Simulation Models",
                description: "Built spiking neural network models to test hypotheses about coding schemes and network dynamics."
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

      {/* Tech Stack */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Tools</p>
            <h2 className="text-3xl font-bold text-slate-900">Technical Stack</h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {["Python", "MATLAB", "NumPy", "SciPy", "TensorFlow", "Information Theory", "Signal Processing"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-8 py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Applying Research Rigor to Business Problems</h2>
          <p className="text-slate-400 text-lg">
            The same analytical frameworks that decode neural signals can optimize your data pipelines.
          </p>
          <Link
            href="https://calendly.com/daniel-viveiros/15min-intro"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 font-medium hover:bg-slate-100 transition-colors"
          >
            Let's Talk Data
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  )
}
