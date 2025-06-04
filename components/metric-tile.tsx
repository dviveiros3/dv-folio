interface MetricTileProps {
  value: string
  caption: string
  className?: string
}

export function MetricTile({ value, caption, className = "" }: MetricTileProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-semibold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600 leading-tight">{caption}</div>
    </div>
  )
}
