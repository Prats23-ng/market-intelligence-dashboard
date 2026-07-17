import { TrendingUp, AlertTriangle, Target, Sparkles, Gauge, Lightbulb } from "lucide-react"
import { executiveSummary, marketSentiment, soWhat } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function ExecutiveSummary() {
  const { themes, risk, opportunity } = executiveSummary
  const sentimentColor =
    marketSentiment.reading === "Bullish"
      ? "text-positive"
      : marketSentiment.reading === "Bearish"
        ? "text-negative"
        : "text-primary"
  const sentimentBar =
    marketSentiment.reading === "Bullish"
      ? "bg-positive"
      : marketSentiment.reading === "Bearish"
        ? "bg-negative"
        : "bg-primary"

  return (
    <section id="summary" className="scroll-mt-28">
      <SectionHeader
        index="01"
        title="Executive Summary"
        subtitle="The three things that matter, plus today's defining risk and opportunity."
        icon={<Sparkles className="size-4" />}
      />

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="mb-3 flex items-center gap-2">
            <Gauge className="size-4 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Market Sentiment</h3>
          </div>
          <div className="flex items-end justify-between gap-3">
            <p className={`text-2xl font-bold tracking-tight ${sentimentColor}`}>{marketSentiment.reading}</p>
            <p className="font-mono text-sm text-muted-foreground">{marketSentiment.score}/100</p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary" role="img" aria-label={`Sentiment score ${marketSentiment.score} of 100`}>
            <div className={`h-full rounded-full ${sentimentBar}`} style={{ width: `${marketSentiment.score}%` }} />
          </div>
          <div className="mt-1.5 flex justify-between font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
            <span>Bearish</span>
            <span>Neutral</span>
            <span>Bullish</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{marketSentiment.note}</p>
        </div>

        <div className="flex flex-col justify-center rounded-lg border border-primary/40 bg-primary/10 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="size-4 text-primary" aria-hidden="true" />
            <p className="font-mono text-[11px] tracking-wide text-primary uppercase">So what?</p>
          </div>
          <p className="text-lg font-semibold leading-snug text-foreground text-balance">{soWhat}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-5 lg:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="size-4 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Top 3 Themes</h3>
          </div>
          <ol className="space-y-4">
            {themes.map((theme, i) => (
              <li key={theme.title} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-secondary font-mono text-xs text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground text-pretty">{theme.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">{theme.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-4 lg:col-span-2">
          <div className="rounded-lg border border-negative/30 bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-negative/15 text-negative">
                <AlertTriangle className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium tracking-wide text-negative uppercase">Key Risk</p>
                <h3 className="text-base font-semibold text-foreground">{risk.title}</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{risk.detail}</p>
          </div>

          <div className="rounded-lg border border-positive/30 bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-positive/15 text-positive">
                <Target className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium tracking-wide text-positive uppercase">Key Opportunity</p>
                <h3 className="text-base font-semibold text-foreground">{opportunity.title}</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{opportunity.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
