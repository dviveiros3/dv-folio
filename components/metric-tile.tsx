interface MetricTileProps {
  value: string
  caption: string
  subCaption?: string
  className?: string
}

export function MetricTile({ value, caption, subCaption, className = "" }: MetricTileProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-semibold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600 leading-tight">{caption}</div>
      {subCaption && <div className="text-xs text-slate-500 mt-2 font-light">{subCaption}</div>}
    </div>
  )
}
