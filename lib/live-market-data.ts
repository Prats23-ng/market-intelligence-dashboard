// Live market data fetcher.
//
// Strategy: fetch from Yahoo Finance's public quote endpoint (no API key needed),
// using Next.js's built-in fetch cache with a 15-minute revalidation window.
// This means:
//   - Nobody visiting the site ever waits on a live network call.
//   - Next.js serves the cached response instantly, and refreshes it in the
//     background at most once every 15 minutes (stale-while-revalidate).
//   - If Yahoo's endpoint is ever down or rate-limits us, we fall back to the
//     static `tickers` / `bfsi` arrays so the dashboard never breaks.
//
// If Yahoo's unofficial endpoint becomes unreliable, swap BASE_URL for a paid
// provider like Twelve Data (https://twelvedata.com) — the shape returned by
// `mapToTickers` / `getLiveBfsiStocks` is the only thing that would need updating.

import type { MarketTicker, BfsiStock } from "@/lib/dashboard-data"
import { tickers as staticTickers, bfsi as staticBfsi } from "@/lib/dashboard-data"

const YAHOO_SYMBOLS: { symbol: string; name: string; yahooTicker: string }[] = [
  { symbol: "NIFTY 50", name: "NSE Benchmark", yahooTicker: "^NSEI" },
  { symbol: "SENSEX", name: "BSE Benchmark", yahooTicker: "^BSESN" },
  { symbol: "BANK NIFTY", name: "Banking Index", yahooTicker: "^NSEBANK" },
  { symbol: "INDIA VIX", name: "Volatility Index", yahooTicker: "^INDIAVIX" },
  { symbol: "USD / INR", name: "Rupee Spot", yahooTicker: "USDINR=X" },
]

// NSE-listed equities use the ".NS" suffix on Yahoo Finance.
const BFSI_YAHOO_SYMBOLS: { name: string; ticker: string; yahooTicker: string; note: string }[] = [
  {
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    yahooTicker: "HDFCBANK.NS",
    note: "Deposit growth re-accelerating post-merger; NIM stabilising.",
  },
  {
    name: "ICICI Bank",
    ticker: "ICICIBANK",
    yahooTicker: "ICICIBANK.NS",
    note: "Best-in-class return ratios; steady retail and SME momentum.",
  },
  {
    name: "Kotak Mahindra",
    ticker: "KOTAKBANK",
    yahooTicker: "KOTAKBANK.NS",
    note: "Digital embargo overhang lingers; valuation now less demanding.",
  },
  {
    name: "Angel One",
    ticker: "ANGELONE",
    yahooTicker: "ANGELONE.NS",
    note: "Discount-broking volumes strong; F&O regulation a watch item.",
  },
  {
    name: "Jio Financial",
    ticker: "JIOFIN",
    yahooTicker: "JIOFIN.NS",
    note: "Scaling lending and payments; optionality on AMC/insurance JV.",
  },
]

const YAHOO_BASE_URL = "https://query1.finance.yahoo.com/v8/finance/chart/"

async function fetchOneQuote(yahooTicker: string) {
  const res = await fetch(`${YAHOO_BASE_URL}${encodeURIComponent(yahooTicker)}?range=5d&interval=1d`, {
    // Cache for 15 minutes at the edge; Next.js serves stale data instantly
    // while revalidating in the background, so page loads never block on this.
    next: { revalidate: 900 },
    headers: {
      // A basic UA header avoids some default blocking on Yahoo's endpoint.
      "User-Agent": "Mozilla/5.0 (compatible; MarketIntelligenceTerminal/1.0)",
    },
  })

  if (!res.ok) throw new Error(`Yahoo Finance request failed: ${res.status}`)

  const json = await res.json()
  const result = json?.chart?.result?.[0]
  if (!result) throw new Error("Unexpected Yahoo Finance response shape")

  const meta = result.meta
  const closes: number[] = result.indicators?.quote?.[0]?.close?.filter((v: number | null) => v != null) ?? []

  const price = meta.regularMarketPrice as number
  const prevClose = meta.previousClose ?? meta.chartPreviousClose
  const change = price - prevClose
  const changePercent = (change / prevClose) * 100

  // Build a light 12-point sparkline from whatever daily closes we have.
  const spark = closes.length > 0 ? normalizeSpark(closes.slice(-12)) : []

  return { price, change, changePercent, spark }
}

function normalizeSpark(values: number[]): number[] {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  return values.map((v) => Math.round(((v - min) / range) * 80) + 10) // scale to ~10-90
}

function formatValue(price: number, symbol: string): string {
  if (symbol === "USD / INR" || symbol === "INDIA VIX") return price.toFixed(2)
  return price.toLocaleString("en-IN", { maximumFractionDigits: 2 })
}

export function getLiveTimestamp(): string {
  const formatted = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  })
  return `${formatted} IST`
}

export async function getLiveTickers(): Promise<MarketTicker[]> {
  try {
    const results = await Promise.all(
      YAHOO_SYMBOLS.map(async ({ symbol, name, yahooTicker }) => {
        const quote = await fetchOneQuote(yahooTicker)
        const trend: "up" | "down" = quote.change >= 0 ? "up" : "down"
        const sign = quote.change >= 0 ? "+" : ""

        return {
          symbol,
          name,
          value: formatValue(quote.price, symbol),
          change: `${sign}${quote.change.toFixed(2)}`,
          changePercent: `${sign}${quote.changePercent.toFixed(2)}%`,
          trend,
          spark: quote.spark.length > 0 ? quote.spark : staticTickers.find((t) => t.symbol === symbol)?.spark ?? [],
        } satisfies MarketTicker
      }),
    )
    return results
  } catch (err) {
    // Any failure (network, rate limit, malformed response) — fall back to
    // the static illustrative data rather than showing a broken dashboard.
    console.error("[live-market-data] Falling back to static tickers:", err)
    return staticTickers
  }
}

export async function getLiveBfsiStocks(): Promise<BfsiStock[]> {
  try {
    const results = await Promise.all(
      BFSI_YAHOO_SYMBOLS.map(async ({ name, ticker, yahooTicker, note }) => {
        const quote = await fetchOneQuote(yahooTicker)
        const trend: "up" | "down" = quote.change >= 0 ? "up" : "down"
        const sign = quote.change >= 0 ? "+" : ""

        return {
          name,
          ticker,
          price: quote.price.toLocaleString("en-IN", { maximumFractionDigits: 2 }),
          change: `${sign}${quote.changePercent.toFixed(2)}%`,
          trend,
          note,
        } satisfies BfsiStock
      }),
    )
    return results
  } catch (err) {
    console.error("[live-market-data] Falling back to static BFSI stocks:", err)
    return staticBfsi
  }
}
