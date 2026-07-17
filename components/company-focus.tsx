import { Building2, Rocket, AlertTriangle, MessageSquareQuote } from "lucide-react"
import { companyFocus } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function CompanyFocus() {
  const c = companyFocus
  return (
    <section id="company" className="scroll-mt-28">
      <SectionHeader
        index="11"
        title="Company Focus"
        subtitle="One company in depth — model, catalyst, risk and the angle to discuss in interviews."
        icon={<Building2 className="size-4" />}
      />

      <div className="mt-5 rounded-lg border border-border bg-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground">{c.name}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{c.sector}</p>
          </div>
          <span className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-primary">{c.ticker}</span>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-wide text-primary uppercase">Business Model</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">{c.businessModel}</p>
          </div>
          <div className="rounded-md border border-positive/25 bg-positive/10 p-3">
            <div className="flex items-center gap-2">
              <Rocket className="size-4 text-positive" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-wide text-positive uppercase">Catalyst</p>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground text-pretty">{c.catalyst}</p>
          </div>
          <div className="rounded-md border border-negative/25 bg-negative/10 p-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="size-4 text-negative" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-wide text-negative uppercase">Key Risk</p>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground text-pretty">{c.keyRisk}</p>
          </div>
          <div className="rounded-md border border-border bg-secondary/40 p-3">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="size-4 text-primary" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-wide text-primary uppercase">Interview Angle</p>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground text-pretty">{c.interviewAngle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
