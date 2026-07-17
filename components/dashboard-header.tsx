import { Activity } from "lucide-react"
import { tickers, lastUpdated } from "@/lib/dashboard-data"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
            MIT
          </span>
          <div className="leading-tight">
            <p className="font-mono text-sm font-semibold tracking-tight text-foreground">
              MIT<span className="text-primary">.</span>
            </p>
            <p className="text-xs text-muted-foreground">Market Intelligence Terminal</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          <a className="transition-colors hover:text-foreground" href="#summary">
            Summary
          </a>
          <a className="transition-colors hover:text-foreground" href="#markets">
            Markets
          </a>
          <a className="transition-colors hover:text-foreground" href="#macro">
            Macro
          </a>
          <a className="transition-colors hover:text-foreground" href="#bfsi">
            BFSI
          </a>
          <a className="transition-colors hover:text-foreground" href="#capital">
            Capital
          </a>
          <a className="transition-colors hover:text-foreground" href="#debate">
            Debate
          </a>
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5">
          <Activity className="size-3.5 text-positive" aria-hidden="true" />
          <span className="font-mono text-xs text-muted-foreground">
            <span className="hidden sm:inline">Updated </span>
            {lastUpdated}
          </span>
        </div>
      </div>

      <div className="overflow-hidden border-t border-border bg-card/60">
        <div className="ticker-track flex w-max items-center gap-8 px-4 py-1.5">
          {[...tickers, ...tickers].map((t, i) => (
            <span key={`${t.symbol}-${i}`} className="flex items-center gap-2 font-mono text-xs whitespace-nowrap">
              <span className="text-muted-foreground">{t.symbol}</span>
              <span className="text-foreground">{t.value}</span>
              <span className={t.trend === "up" ? "text-positive" : "text-negative"}>{t.changePercent}</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
