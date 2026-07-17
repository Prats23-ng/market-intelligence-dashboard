import { BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { capitalMarkets } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function CapitalMarketsMonitor() {
  return (
    <section id="capital" className="scroll-mt-28">
      <SectionHeader
        index="10"
        title="Capital Markets Monitor"
        subtitle="Flows, volumes and structural trends — read through a capital-markets consulting lens."
        icon={<BarChart3 className="size-4" />}
      />

      <div className="mt-5 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-card">
            <tr className="border-b border-border font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              <th scope="col" className="px-4 py-3 font-medium">Metric</th>
              <th scope="col" className="px-4 py-3 font-medium">Reading</th>
              <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">Analyst Note</th>
            </tr>
          </thead>
          <tbody>
            {capitalMarkets.map((c) => {
              const up = c.trend === "up"
              return (
                <tr key={c.metric} className="border-b border-border last:border-0 transition-colors hover:bg-card/60">
                  <td className="px-4 py-3 font-medium text-foreground">{c.metric}</td>
                  <td className="px-4 py-3">
                    <span className={`flex items-center gap-1.5 font-mono ${up ? "text-positive" : "text-negative"}`}>
                      {up ? (
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      ) : (
                        <ArrowDownRight className="size-3.5" aria-hidden="true" />
                      )}
                      {c.value}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground text-pretty sm:table-cell">{c.note}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
