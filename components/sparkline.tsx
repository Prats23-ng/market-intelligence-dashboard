interface SparklineProps {
  data: number[]
  trend: "up" | "down"
  className?: string
}

export function Sparkline({ data, trend, className }: SparklineProps) {
  const width = 120
  const height = 36
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width
    const y = height - ((value - min) / range) * height
    return `${x.toFixed(2)},${y.toFixed(2)}`
  })

  const stroke = trend === "up" ? "var(--color-positive)" : "var(--color-negative)"
  const gradientId = `spark-${trend}-${data.join("")}`.replace(/[^a-zA-Z0-9-]/g, "")

  const areaPoints = `0,${height} ${points.join(" ")} ${width},${height}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId})`} />
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
