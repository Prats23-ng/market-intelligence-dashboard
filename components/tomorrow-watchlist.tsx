import { CalendarClock } from "lucide-react"
import { watchlist } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

export function TomorrowWatchlist() {
  return (
    <section id="watchlist" className="scroll-mt-28">
      <SectionHeader
        index="08"
        title="Tomorrow's Watchlist"
        subtitle="The events that will move markets next — and why they matter."
        icon={<CalendarClock className="size-4" />}
      />

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {watchlist.map((item) => (
          <article
            key={item.event}
            className="flex flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                {item.category}
              </span>
            </div>
            <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground text-pretty">{item.event}</h3>
            <p className="mt-1 font-mono text-xs text-primary">{item.date}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{item.why}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
