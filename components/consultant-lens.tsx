import { Compass, ArrowRight, TrendingUp, TrendingDown } from "lucide-react"
import { consultantLens } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function ConsultantLens() {
  const { observation, implications, winners, losers } = consultantLens

  return (
    <section id="lens" className="scroll-mt-28">
      <SectionHeader
        index="06"
        title="The Analyst's Take"
        subtitle="What's happening, why it matters next, and who wins or loses from here."
        icon={<Compass className="size-4" />}
      />

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="font-mono text-[11px] tracking-wide text-primary uppercase">Observation</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground text-pretty">{observation}</p>

          <p className="mt-5 font-mono text-[11px] tracking-wide text-primary uppercase">Second-order implications</p>
          <ul className="mt-2 space-y-2.5">
            {implications.map((item) => (
              <li key={item} className="flex gap-2.5">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-muted-foreground text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-positive/30 bg-card p-5">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-positive" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-wide text-positive uppercase">Winners</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {winners.map((w) => (
                <span
                  key={w}
                  className="rounded-md border border-positive/30 bg-positive/10 px-2.5 py-1 text-sm text-foreground"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-negative/30 bg-card p-5">
            <div className="flex items-center gap-2">
              <TrendingDown className="size-4 text-negative" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-wide text-negative uppercase">Losers</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {losers.map((l) => (
                <span
                  key={l}
                  className="rounded-md border border-negative/30 bg-negative/10 px-2.5 py-1 text-sm text-foreground"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
