"use client"

import { ArrowRight, Box } from "lucide-react"
import { productCatalog } from "@/data/trinity"

export function TrinityCatalog() {
  return (
    <section id="forge" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">The Forge</h2>
            <p className="text-slate-600">
              A marketplace for production-ready AI "kits" and workflows. These are not templates; they are operational modules designed to be deployed.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400 uppercase tracking-widest">
            <Box className="w-4 h-4" />
            Product Catalog
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productCatalog.map((product, index) => (
            <div
              key={product.id}
              className="group border border-slate-200 p-8 rounded-sm hover:border-slate-900 transition-colors flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded-full border ${
                  product.status === 'Available'
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'bg-slate-50 text-slate-400 border-slate-200'
                }`}>
                  {product.status}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`flex items-center justify-between w-full p-4 rounded-sm font-medium transition-all ${
                product.status === 'Available'
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}>
                <span>{product.status === 'Available' ? 'View Details' : 'Coming Soon'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
