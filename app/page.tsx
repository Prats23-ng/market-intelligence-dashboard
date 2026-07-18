import { DashboardHeader } from "@/components/dashboard-header"
import { ExecutiveSummary } from "@/components/executive-summary"
import { MarketDashboard } from "@/components/market-dashboard"
import { WhatMattersToday } from "@/components/what-matters-today"
import { BfsiWatch } from "@/components/bfsi-watch"
import { SectorHeatmap } from "@/components/sector-heatmap"
import { ConsultantLens } from "@/components/consultant-lens"
import { GlobalRiskMonitor } from "@/components/global-risk-monitor"
import { TomorrowWatchlist } from "@/components/tomorrow-watchlist"
import { IndiaMacroDashboard } from "@/components/india-macro-dashboard"
import { CapitalMarketsMonitor } from "@/components/capital-markets-monitor"
import { CompanyFocus } from "@/components/company-focus"
import { TodaysDebate } from "@/components/todays-debate"
import { getLiveTimestamp } from "@/lib/live-market-data"

export default function Page() {
  const lastUpdated = getLiveTimestamp()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-8">
          <p className="font-mono text-xs tracking-wide text-primary uppercase">Daily Briefing</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Market Intelligence Terminal
          </h1>
          <p className="mt-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
            Markets <span className="text-primary">•</span> Macro <span className="text-primary">•</span> BFSI{" "}
            <span className="text-primary">•</span> Regulatory
          </p>
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
            Daily Indian BFSI and capital markets news — aggregated and explained, so you don't have to read six
            sources to understand one story.
          </p>
        </div>

        <div className="space-y-12">
          <ExecutiveSummary />
          <WhatMattersToday />
          <MarketDashboard />
          <BfsiWatch />
          <SectorHeatmap />
          <ConsultantLens />
          <GlobalRiskMonitor />
          <TomorrowWatchlist />
          <IndiaMacroDashboard />
          <CapitalMarketsMonitor />
          <CompanyFocus />
          <TodaysDebate />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <p>
            <span className="font-mono text-foreground">MARKET INTELLIGENCE TERMINAL</span> · Markets • Macro • BFSI •
            Regulatory. Illustrative data for demonstration purposes only — not investment advice.
          </p>
          <p className="font-mono">Last updated {lastUpdated}</p>
        </div>
      </footer>
    </div>
  )
}
