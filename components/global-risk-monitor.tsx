import { Globe2 } from "lucide-react"
import { risks } from "@/lib/dashboard-data"
import { SectionHeader } from "@/components/section-header"

function levelStyle(level: "Low" | "Elevated" | "High") {
  switch (level) {
    case "High":
      return "border-negative/40 bg-negative/15 text-negative"
    case "Elevated":
      return "border-primary/40 bg-primary/15 text-primary"
    default:
      return "border-positive/40 bg-positive/15 text-positive"
  }
}

function levelDots(level: "Low" | "Elevated" | "High") {
  const active = level === "High" ? 3 : level === "Elevated" ? 2 : 1
  return [0, 1, 2].map((i) => i < active)
}

export function GlobalRiskMonitor() {
  return (
    <section id="risk" className="scroll-mt-28">
      <SectionHeader
        index="07"
        title="Global Risk Monitor"
        subtitle="The external variables that could reprice domestic markets."
        icon={<Globe2 className="size-4" />}
      />

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {risks.map((r) => (
          <div key={r.title} className="flex flex-col rounded-lg border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
              <div className="flex items-center gap-1" aria-hidden="true">
                {levelDots(r.level).map((on, i) => (
                  <span
                    key={i}
                    className={`size-1.5 rounded-full ${
                      on
                        ? r.level === "High"
                          ? "bg-negative"
                          : r.level === "Elevated"
                            ? "bg-primary"
                            : "bg-positive"
                        : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            <span
              className={`mt-3 w-fit rounded-md border px-2 py-0.5 font-mono text-[11px] tracking-wide uppercase ${levelStyle(
                r.level,
              )}`}
            >
              {r.level}
            </span>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">{r.summary}</p>
            <p className="mt-4 border-t border-border pt-3 font-mono text-xs text-muted-foreground">{r.indicator}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
