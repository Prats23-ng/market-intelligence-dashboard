import { Landmark, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { indiaMacro } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function IndiaMacroDashboard() {
  return (
    <section id="macro" className="scroll-mt-28">
      <SectionHeader
        index="09"
        title="India Macro Dashboard"
        subtitle="The core macro vitals of the Indian economy, with trend and interpretation."
        icon={<Landmark className="size-4" />}
      />

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {indiaMacro.map((m) => {
          const up = m.trend === "up"
          return (
            <article key={m.name} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-muted-foreground">{m.name}</p>
                <span
                  className={`flex items-center gap-1 font-mono text-[11px] ${up ? "text-positive" : "text-negative"}`}
                >
                  {up ? (
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3.5" aria-hidden="true" />
                  )}
                  {m.delta}
                </span>
              </div>
              <p className="mt-1 text-2xl font-bold tracking-tight text-foreground tabular-nums">{m.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground text-pretty">{m.interpretation}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
