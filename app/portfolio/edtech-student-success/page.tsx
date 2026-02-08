"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function EdTechStudentSuccessPage() {
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
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                Case Study
              </span>
              <span className="text-sm text-slate-400">EdTech • 2020-2023</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Predictive Student Success<br />
              <span className="text-slate-400">& Retention Engine</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              How I built a machine learning system that identified at-risk students 3 weeks before failure,
              driving a 22% improvement in retention and $180K in preserved revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-8 py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, metric: "+22%", label: "Student Retention", color: "text-green-600" },
              { icon: Users, metric: "3 weeks", label: "Early Warning Time", color: "text-blue-600" },
              { icon: DollarSign, metric: "$180K", label: "Preserved ARR", color: "text-emerald-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-executive p-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className={`w-8 h-8 mx-auto mb-4 ${item.color}`} />
                <div className="text-4xl font-bold text-slate-900 mb-2">{item.metric}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">The Problem</p>
            <h2 className="text-3xl font-bold text-slate-900">
              Reactive Support Was Killing Revenue
            </h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              The tutoring company was losing students at alarming rates. By the time tutors noticed a student
              was struggling, it was often too late—they had already disengaged and churned.
            </p>
            <p>
              <strong>The core questions I needed to answer:</strong>
            </p>
            <ul>
              <li>Which students are at risk of failing before their grades reflect it?</li>
              <li>What behavioral signals precede academic decline?</li>
              <li>How can we intervene early without overwhelming tutors with false positives?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-8 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">The Solution</p>
            <h2 className="text-3xl font-bold text-slate-900">
              Predictive ML Pipeline + Tutor Alerting System
            </h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Feature Engineering",
                description: "Combined 40+ signals: session frequency, assignment completion velocity, quiz score trends, and engagement decay patterns."
              },
              {
                title: "Model Selection",
                description: "Ensemble of Gradient Boosting and Logistic Regression for interpretability. 87% precision on at-risk classification."
              },
              {
                title: "Alerting Dashboard",
                description: "Built real-time Tableau dashboard pushing weekly priority lists to tutors with specific intervention recommendations."
              },
              {
                title: "Feedback Loop",
                description: "Tutor actions fed back into the model, improving accuracy by 12% over 6 months through active learning."
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
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
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
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Tech Stack</p>
            <h2 className="text-3xl font-bold text-slate-900">Tools & Technologies</h2>
            <div className="w-12 h-1 bg-slate-900" />
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {["Python", "Scikit-learn", "PostgreSQL", "Pandas", "Tableau", "dbt", "Airflow"].map((tech) => (
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
          <h2 className="text-3xl font-bold">Want similar results?</h2>
          <p className="text-slate-400 text-lg">
            Let's discuss how predictive analytics can reduce churn and protect your revenue.
          </p>
          <Link
            href="https://calendly.com/daniel-viveiros/15min-intro"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 font-medium hover:bg-slate-100 transition-colors"
          >
            Book a Strategy Call
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  )
}
