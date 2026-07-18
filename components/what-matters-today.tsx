import { Newspaper, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { headlines } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function WhatMattersToday() {
  return (
    <section id="news" className="scroll-mt-28">
      <SectionHeader
        index="02"
        title="What Matters Today"
        subtitle="Top headlines decoded — why they matter and the likely market impact."
        icon={<Newspaper className="size-4" />}
      />

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {headlines.map((h) => {
          const positive = h.impactTrend === "up"
          return (
            <article
              key={h.title}
              className="flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-primary/15 px-2 py-0.5 font-mono text-[11px] font-medium tracking-wide text-primary uppercase">
                    {h.sourceBadge}
                  </span>
                  {h.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] tracking-wide text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs whitespace-nowrap text-muted-foreground">{h.time}</span>
              </div>

              <h3 className="mt-3 text-base font-semibold leading-snug text-foreground text-pretty">{h.title}</h3>

              <div className="mt-4 space-y-3 border-t border-border pt-4">
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-primary uppercase">Why it matters</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">{h.why}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-primary uppercase">Why it matters for India</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">{h.whyForIndia}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-md border border-border bg-secondary/40 p-2.5">
                    <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">Business Impact</p>
                    <p className="mt-1 text-xs leading-relaxed text-foreground text-pretty">{h.businessImpact}</p>
                  </div>
                  <div className="rounded-md border border-border bg-secondary/40 p-2.5">
                    <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">Interview Angle</p>
                    <p className="mt-1 text-xs leading-relaxed text-foreground text-pretty">{h.interviewAngle}</p>
                  </div>
                </div>
                <div
                  className={`flex items-start gap-2 rounded-md border p-2.5 ${
                    positive ? "border-positive/25 bg-positive/10" : "border-negative/25 bg-negative/10"
                  }`}
                >
                  {positive ? (
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-positive" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="mt-0.5 size-4 shrink-0 text-negative" aria-hidden="true" />
                  )}
                  <p className={`text-sm font-medium ${positive ? "text-positive" : "text-negative"}`}>{h.impact}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
