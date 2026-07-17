import { Grid3x3 } from "lucide-react"
import { sectors } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

// Map a percentage move to a heat style. Green for gains, red for losses,
// intensity scaling with magnitude.
function heatClasses(pct: number) {
  const abs = Math.abs(pct)
  const strong = abs >= 1
  if (pct >= 0) {
    return strong
      ? "border-positive/40 bg-positive/20 text-positive"
      : "border-positive/25 bg-positive/10 text-positive"
  }
  return strong ? "border-negative/40 bg-negative/20 text-negative" : "border-negative/25 bg-negative/10 text-negative"
}

export function SectorHeatmap() {
  return (
    <section id="sectors" className="scroll-mt-28">
      <SectionHeader
        index="05"
        title="Sector Heatmap"
        subtitle="Relative performance across the major NSE sector indices."
        icon={<Grid3x3 className="size-4" />}
      />

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {sectors.map((s) => {
          const positive = s.changePercent >= 0
          return (
            <div key={s.name} className={`flex flex-col justify-between rounded-lg border p-4 ${heatClasses(s.changePercent)}`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{s.name}</p>
              </div>
              <p className="mt-6 font-mono text-2xl font-semibold tracking-tight">
                {positive ? "+" : ""}
                {s.changePercent.toFixed(2)}%
              </p>
              <p className="mt-2 text-xs text-muted-foreground text-pretty">{s.leaders}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
