import { Scale, ThumbsUp, ThumbsDown, Quote } from "lucide-react"
import { debates } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function TodaysDebate() {
  return (
    <section id="debate" className="scroll-mt-28">
      <SectionHeader
        index="12"
        title="Today's Debate"
        subtitle="Sharpen both sides of the argument — then take a view."
        icon={<Scale className="size-4" />}
      />

      <div className="mt-5 grid gap-3 lg:max-w-2xl">
        {debates.slice(0, 1).map((d) => (
          <article key={d.question} className="flex flex-col rounded-lg border border-border bg-card p-5">
            <h3 className="text-base font-semibold leading-snug text-foreground text-pretty">{d.question}</h3>

            <div className="mt-4 space-y-3">
              <div className="rounded-md border border-positive/25 bg-positive/10 p-3">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="size-3.5 text-positive" aria-hidden="true" />
                  <p className="font-mono text-[10px] tracking-wide text-positive uppercase">Bull Case</p>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground text-pretty">{d.bull}</p>
              </div>
              <div className="rounded-md border border-negative/25 bg-negative/10 p-3">
                <div className="flex items-center gap-2">
                  <ThumbsDown className="size-3.5 text-negative" aria-hidden="true" />
                  <p className="font-mono text-[10px] tracking-wide text-negative uppercase">Bear Case</p>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground text-pretty">{d.bear}</p>
              </div>
            </div>

            <div className="mt-3 rounded-md border border-primary/30 bg-primary/10 p-3">
              <div className="flex items-center gap-2">
                <Quote className="size-3.5 text-primary" aria-hidden="true" />
                <p className="font-mono text-[10px] tracking-wide text-primary uppercase">My View</p>
              </div>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground text-pretty">{d.view}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
