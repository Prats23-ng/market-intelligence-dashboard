import { ArrowUpRight, ArrowDownRight, LineChart } from "lucide-react"
import { getLiveTickers } from "@/lib/live-market-data"
import { SectionHeader } from "@/components/section-header"
import { Sparkline } from "@/components/sparkline"

export async function MarketDashboard() {
  const tickers = await getLiveTickers()

  return (
    <section id="markets" className="scroll-mt-28">
      <SectionHeader
        index="02"
        title="Market Dashboard"
        subtitle="Live snapshot across indices, currency, commodities and crypto."
        icon={<LineChart className="size-4" />}
      />

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {tickers.map((t) => {
          const positive = t.trend === "up"
          return (
            <div
              key={t.symbol}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-sm font-semibold text-foreground">{t.symbol}</p>
                  <p className="text-xs text-muted-foreground">{t.name}</p>
                </div>
                <span
                  className={`flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-mono text-xs ${
                    positive ? "bg-positive/15 text-positive" : "bg-negative/15 text-negative"
                  }`}
                >
                  {positive ? (
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3" aria-hidden="true" />
                  )}
                  {t.changePercent}
                </span>
              </div>

              <div className="mt-3 flex items-end justify-between gap-2">
                <div>
                  <p className="font-mono text-xl font-semibold tracking-tight text-foreground">{t.value}</p>
                  <p className={`font-mono text-xs ${positive ? "text-positive" : "text-negative"}`}>{t.change}</p>
                </div>
                <Sparkline data={t.spark} trend={t.trend} className="opacity-90" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
