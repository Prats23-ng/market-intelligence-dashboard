import { Landmark, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { getLiveBfsiStocks } from "@/lib/live-market-data"
import { SectionHeader } from "@/components/section-header"

export async function BfsiWatch() {
  const bfsi = await getLiveBfsiStocks()

  return (
    <section id="bfsi" className="scroll-mt-28">
      <SectionHeader
        index="04"
        title="BFSI Watch"
        subtitle="Banking & financial services leaders with the read-through that matters."
        icon={<Landmark className="size-4" />}
      />

      <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card">
        <div className="hidden grid-cols-12 gap-4 border-b border-border px-5 py-3 font-mono text-[11px] tracking-wide text-muted-foreground uppercase md:grid">
          <span className="col-span-3">Name</span>
          <span className="col-span-2">Price ₹</span>
          <span className="col-span-2">Change</span>
          <span className="col-span-5">Analyst note</span>
        </div>
        <ul>
          {bfsi.map((s) => {
            const positive = s.trend === "up"
            return (
              <li
                key={s.ticker}
                className="grid grid-cols-2 items-center gap-x-4 gap-y-2 border-b border-border px-5 py-4 transition-colors last:border-b-0 hover:bg-secondary/40 md:grid-cols-12"
              >
                <div className="col-span-2 md:col-span-3">
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{s.ticker}</p>
                </div>
                <p className="col-span-1 font-mono text-sm text-foreground md:col-span-2">{s.price}</p>
                <div className="col-span-1 md:col-span-2">
                  <span
                    className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-mono text-xs ${
                      positive ? "bg-positive/15 text-positive" : "bg-negative/15 text-negative"
                    }`}
                  >
                    {positive ? (
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    ) : (
                      <ArrowDownRight className="size-3" aria-hidden="true" />
                    )}
                    {s.change}
                  </span>
                </div>
                <p className="col-span-2 text-sm leading-relaxed text-muted-foreground text-pretty md:col-span-5">
                  {s.note}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
