// Static illustrative market intelligence data for the dashboard.
// All figures are representative samples for a portfolio demo, not live data.

export type Trend = "up" | "down"

export interface CardDetail {
  expandedAnalysis: string
  secondOrder: string[]
  stakeholders: string[]
  winners: string[]
  losers: string[]
  interviewPoints: string[]
}

export interface MarketTicker {
  symbol: string
  name: string
  value: string
  change: string
  changePercent: string
  trend: Trend
  spark: number[]
}

export interface Headline {
  title: string
  source: string
  sourceBadge: string
  time: string
  why: string
  whyForIndia: string
  businessImpact: string
  interviewAngle: string
  impact: string
  impactTrend: Trend
  tags: string[]
  detail: CardDetail
}

export interface BfsiStock {
  name: string
  ticker: string
  price: string
  change: string
  trend: Trend
  note: string
}

export interface Sector {
  name: string
  changePercent: number
  leaders: string
}

export interface RiskItem {
  title: string
  level: "Low" | "Elevated" | "High"
  summary: string
  indicator: string
}

export const lastUpdated = "17 Jun 2026 · 09:42 IST"

export type Sentiment = "Bullish" | "Neutral" | "Bearish"

export const marketSentiment: { reading: Sentiment; score: number; note: string } = {
  reading: "Bullish",
  score: 68,
  note: "Breadth improving, FIIs turning buyers and volatility compressing — risk appetite is constructive but not euphoric.",
}

export const soWhat =
  "Markets are increasingly pricing a soft-landing scenario, creating asymmetric opportunities in rate-sensitive financials and quality NBFCs."

export const executiveSummary = {
  themes: [
    {
      title: "Rate-cut optimism powers financials",
      detail:
        "Softening domestic CPI and dovish Fed commentary are repricing the BFSI complex higher, with private banks leading the tape.",
    },
    {
      title: "Crude cools, easing inflation overhang",
      detail:
        "Brent slipping toward the low $70s relieves pressure on India's import bill and supports the rupee at the margin.",
    },
    {
      title: "IT rotation on AI capex narrative",
      detail:
        "Large-cap IT catches a bid as global enterprises ringfence AI/automation budgets, offsetting discretionary weakness.",
    },
  ],
  risk: {
    title: "Geopolitical premium in energy",
    detail:
      "Any escalation in the Middle East could spike crude and reverse the disinflation trade, hitting margins and the currency simultaneously.",
  },
  opportunity: {
    title: "Quality NBFCs into the easing cycle",
    detail:
      "Well-capitalised lenders with strong liability franchises are positioned to compound as funding costs roll over.",
  },
}

export const tickers: MarketTicker[] = [
  {
    symbol: "NIFTY 50",
    name: "NSE Benchmark",
    value: "24,318.40",
    change: "+186.25",
    changePercent: "+0.77%",
    trend: "up",
    spark: [21, 23, 22, 25, 28, 27, 31, 33, 32, 36, 39, 41],
  },
  {
    symbol: "SENSEX",
    name: "BSE Benchmark",
    value: "79,842.11",
    change: "+602.40",
    changePercent: "+0.76%",
    trend: "up",
    spark: [60, 62, 61, 64, 67, 66, 70, 72, 71, 75, 78, 80],
  },
  {
    symbol: "BANK NIFTY",
    name: "Banking Index",
    value: "52,164.85",
    change: "+498.10",
    changePercent: "+0.96%",
    trend: "up",
    spark: [40, 42, 44, 43, 46, 49, 48, 51, 53, 52, 55, 58],
  },
  {
    symbol: "INDIA VIX",
    name: "Volatility Index",
    value: "12.84",
    change: "-0.62",
    changePercent: "-4.61%",
    trend: "down",
    spark: [18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13, 12],
  },
  {
    symbol: "USD / INR",
    name: "Rupee Spot",
    value: "83.41",
    change: "-0.12",
    changePercent: "-0.14%",
    trend: "down",
    spark: [84, 84, 83, 83, 83, 84, 83, 83, 83, 83, 83, 83],
  },
  {
    symbol: "GOLD",
    name: "MCX ₹/10g",
    value: "71,640",
    change: "+318",
    changePercent: "+0.45%",
    trend: "up",
    spark: [66, 67, 68, 67, 69, 70, 69, 70, 71, 70, 71, 71],
  },
  {
    symbol: "BRENT CRUDE",
    name: "USD / bbl",
    value: "72.18",
    change: "-1.34",
    changePercent: "-1.82%",
    trend: "down",
    spark: [82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 73, 72],
  },
  {
    symbol: "BITCOIN",
    name: "USD Spot",
    value: "68,410",
    change: "+1,205",
    changePercent: "+1.79%",
    trend: "up",
    spark: [60, 58, 61, 63, 62, 64, 66, 65, 67, 66, 68, 68],
  },
]

export const headlines: Headline[] = [
  {
    title: "RBI holds repo rate, signals data-dependent easing path",
    source: "Monetary Policy",
    sourceBadge: "RBI",
    time: "1h ago",
    why: "A neutral stance with a dovish tilt keeps the door open for cuts in H2, supporting rate-sensitive sectors and bond duration.",
    whyForIndia:
      "Stable rates protect household and corporate borrowers while the dovish signal lowers the cost of capital across the credit-hungry Indian economy.",
    businessImpact: "Cheaper funding revives credit growth for banks, NBFCs, real estate and auto financiers.",
    interviewAngle: "Be ready to explain the MPC's stance vs. action distinction and how forward guidance anchors expectations.",
    impact: "Positive for banks, NBFCs, real estate and autos",
    impactTrend: "up",
    tags: ["Macro", "Rates"],
  },
  {
    title: "India CPI eases to 4.1%, lowest in eleven months",
    source: "Inflation Print",
    sourceBadge: "Mint",
    time: "3h ago",
    why: "Cooling food inflation strengthens the disinflation narrative and raises real rates, improving the case for policy easing.",
    whyForIndia:
      "Lower inflation lifts real incomes for India's vast consumption base and gives the RBI room to prioritise growth.",
    businessImpact: "Supports discretionary consumption with a lag; positive for FMCG volume recovery and duration plays.",
    interviewAngle: "Know the CPI basket weights (food ~46%) and why food inflation drives the headline print in India.",
    impact: "Positive for consumption and duration plays",
    impactTrend: "up",
    tags: ["Macro", "CPI"],
  },
  {
    title: "FIIs turn net buyers after three weeks of outflows",
    source: "Flows",
    sourceBadge: "Economic Times",
    time: "5h ago",
    why: "A reversal in foreign flows tends to broaden the rally beyond domestic-led buying and lifts large-cap leadership.",
    whyForIndia:
      "FII inflows strengthen the rupee, deepen market liquidity and signal renewed global confidence in the India growth story.",
    businessImpact: "Improves large-cap valuations and primary-market appetite for IPOs and QIPs.",
    interviewAngle: "Discuss FII vs. DII dynamics and how domestic SIP flows have structurally cushioned outflows.",
    impact: "Positive for large-cap liquidity",
    impactTrend: "up",
    tags: ["Flows", "Equity"],
  },
  {
    title: "Brent slips below $73 on demand-growth concerns",
    source: "Commodities",
    sourceBadge: "Reuters",
    time: "6h ago",
    why: "Lower crude eases the import bill and inflation expectations, but signals softening global demand for cyclicals.",
    whyForIndia:
      "As a major crude importer, lower oil narrows India's trade deficit, eases inflation and reduces fuel-subsidy pressure.",
    businessImpact: "Positive for OMCs, paints, aviation and logistics; negative for upstream explorers like ONGC.",
    interviewAngle: "Quantify the rule of thumb: a $10/bbl move shifts India's CAD by roughly 0.4% of GDP.",
    impact: "Mixed — positive macro, negative for upstream energy",
    impactTrend: "down",
    tags: ["Energy", "Macro"],
  },
]

export const bfsi: BfsiStock[] = [
  {
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    price: "1,684.30",
    change: "+1.42%",
    trend: "up",
    note: "Deposit growth re-accelerating post-merger; NIM stabilising.",
  },
  {
    name: "ICICI Bank",
    ticker: "ICICIBANK",
    price: "1,196.75",
    change: "+1.08%",
    trend: "up",
    note: "Best-in-class return ratios; steady retail and SME momentum.",
  },
  {
    name: "Kotak Mahindra",
    ticker: "KOTAKBANK",
    price: "1,742.10",
    change: "-0.34%",
    trend: "down",
    note: "Digital embargo overhang lingers; valuation now less demanding.",
  },
  {
    name: "Angel One",
    ticker: "ANGELONE",
    price: "2,615.40",
    change: "+2.96%",
    trend: "up",
    note: "Discount-broking volumes strong; F&O regulation a watch item.",
  },
  {
    name: "Jio Financial",
    ticker: "JIOFIN",
    price: "352.85",
    change: "+0.74%",
    trend: "up",
    note: "Scaling lending and payments; optionality on AMC/insurance JV.",
  },
]

export const sectors: Sector[] = [
  { name: "Banking", changePercent: 1.42, leaders: "ICICI, Axis, SBI" },
  { name: "IT", changePercent: 0.86, leaders: "TCS, Infosys" },
  { name: "Pharma", changePercent: 0.21, leaders: "Sun, Cipla" },
  { name: "Auto", changePercent: -0.58, leaders: "M&M, Maruti" },
  { name: "FMCG", changePercent: -1.12, leaders: "HUL, ITC" },
]

export const consultantLens = {
  observation:
    "The market is rewarding rate-sensitivity. Capital is rotating out of defensives (FMCG, pharma) and into financials and rate-geared cyclicals as the easing cycle is pulled forward.",
  implications: [
    "Cheaper funding compresses NBFC cost of capital, reviving credit-led growth and M&A appetite.",
    "A softer rupee-plus-lower-crude combination is net positive for margins across import-heavy manufacturers.",
    "Discretionary consumption recovers with a 2–3 quarter lag as real incomes improve on disinflation.",
  ],
  winners: ["Private banks", "Quality NBFCs", "Real estate", "Auto financiers"],
  losers: ["Upstream energy", "Defensive FMCG", "USD-debt-heavy names"],
}

export const risks: RiskItem[] = [
  {
    title: "Oil",
    level: "Elevated",
    summary:
      "Brent sensitive to OPEC+ supply discipline and Middle East headlines; a supply shock reverses the disinflation trade.",
    indicator: "Brent $72 · watching $80 trigger",
  },
  {
    title: "US Federal Reserve",
    level: "Low",
    summary:
      "Market pricing two cuts into year-end; sticky core services inflation is the main risk to the dovish path.",
    indicator: "Implied: ~50bps of cuts in 2026",
  },
  {
    title: "US–China",
    level: "Elevated",
    summary:
      "Tariff and tech-export frictions keep supply chains in focus; China + 1 remains a structural tailwind for India.",
    indicator: "Tech-export controls expanding",
  },
  {
    title: "Middle East",
    level: "High",
    summary:
      "Escalation risk in shipping lanes threatens energy supply and freight costs, with second-order inflation effects.",
    indicator: "Freight premia elevated",
  },
]

export const professionalDevelopment = {
  currentAffairs: {
    label: "Current Affairs",
    prompt: "Why did the RBI hold rates despite cooling inflation?",
    answer:
      "The MPC is balancing a credible disinflation trend against global uncertainty (crude, Fed path, currency). Holding while signalling a dovish bias preserves optionality — it anchors expectations without committing prematurely to an easing cycle that could reverse on an external shock.",
  },
  financeConcept: {
    label: "Finance Concept",
    prompt: "What is Net Interest Margin (NIM) and why does it matter for banks?",
    answer:
      "NIM is the spread between interest earned on assets and interest paid on liabilities, scaled by earning assets. It is the core profitability lever for lenders — in a falling-rate environment, banks with low-cost deposit franchises (CASA) defend NIMs better than wholesale-funded peers.",
  },
  framework: {
    label: "Consulting Framework",
    prompt: "Apply Porter's Five Forces to Indian retail broking.",
    answer:
      "Rivalry is intense (discount brokers compressed fees toward zero), buyer power is high (low switching costs), threat of entry is moderate (tech + compliance barriers), substitutes include direct MF and PMS platforms, and supplier power (exchanges, data) is structurally rising. Differentiation now hinges on product breadth and trust, not price.",
  },
  recruiterQuestion: {
    label: "Recruiter Question",
    prompt: "How do lower interest rates impact bank profitability?",
    answer:
      "It's nuanced. Lower rates compress asset yields and can squeeze NIMs in the short run, but they also reduce funding costs (especially for deposit-rich banks), spur credit demand, lower provisioning as asset quality improves, and lift treasury gains on the bond book. Net impact depends on the bank's asset-liability mix and deposit franchise.",
  },
}

export interface WatchlistEvent {
  event: string
  date: string
  why: string
  category: string
}

export const watchlist: WatchlistEvent[] = [
  {
    event: "RBI Governor Speech",
    date: "Tomorrow · 11:00 IST",
    why: "Tone on the easing path and liquidity guidance will set direction for banks and the bond market.",
    category: "Policy",
  },
  {
    event: "US CPI Print",
    date: "Tomorrow · 18:00 IST",
    why: "A soft read cements global rate-cut bets, supporting EM flows and the rupee.",
    category: "Global Macro",
  },
  {
    event: "Fed Minutes",
    date: "Tomorrow · 23:30 IST",
    why: "Detail on the committee's reaction function will refine the 2026 cut trajectory.",
    category: "Global Macro",
  },
  {
    event: "TCS Q1 Earnings",
    date: "Tomorrow · Post-market",
    why: "First read on IT demand and AI deal pipeline; sets the tone for the sector's results season.",
    category: "Earnings",
  },
  {
    event: "EIA Oil Inventory",
    date: "Tomorrow · 20:00 IST",
    why: "A larger build pressures crude lower, reinforcing the disinflation and import-bill relief trade.",
    category: "Commodities",
  },
]

export interface MacroIndicator {
  name: string
  value: string
  trend: Trend
  delta: string
  interpretation: string
}

export const indiaMacro: MacroIndicator[] = [
  {
    name: "Repo Rate",
    value: "6.50%",
    trend: "down",
    delta: "Hold (easing bias)",
    interpretation: "Peak rates likely behind us; first cut expected in H2 as disinflation holds.",
  },
  {
    name: "CPI Inflation",
    value: "4.10%",
    trend: "down",
    delta: "-0.6pp MoM",
    interpretation: "Now within the RBI's tolerance band and below the 4% glide-path stress zone.",
  },
  {
    name: "GDP Growth",
    value: "7.2%",
    trend: "up",
    delta: "FY26 est.",
    interpretation: "Fastest-growing major economy; capex and services lead the expansion.",
  },
  {
    name: "Fiscal Deficit",
    value: "4.9%",
    trend: "down",
    delta: "of GDP, FY26",
    interpretation: "Consolidation on track; quality of spend tilting toward capex.",
  },
  {
    name: "10Y G-Sec Yield",
    value: "6.78%",
    trend: "down",
    delta: "-8 bps",
    interpretation: "Softening on rate-cut hopes and index-inclusion flows; positive for duration.",
  },
  {
    name: "Current Account",
    value: "-1.1%",
    trend: "up",
    delta: "of GDP, narrowing",
    interpretation: "Lower crude and strong services exports keep the external position comfortable.",
  },
]

export interface CapitalMarketItem {
  metric: string
  value: string
  trend: Trend
  note: string
}

export const capitalMarkets: CapitalMarketItem[] = [
  {
    metric: "NSE Cash Volumes",
    value: "₹1.18L cr/day",
    trend: "up",
    note: "Turnover firming as breadth improves; midcap participation broadening.",
  },
  {
    metric: "BSE Volumes",
    value: "₹9,420 cr/day",
    trend: "up",
    note: "Derivatives migration aside, cash engagement is resilient.",
  },
  {
    metric: "IPO Pipeline",
    value: "28 filings",
    trend: "up",
    note: "Strong DRHP queue across new-age tech, manufacturing and financials.",
  },
  {
    metric: "MF Net Inflows",
    value: "₹34,200 cr",
    trend: "up",
    note: "SIP book at record highs — a structural domestic liquidity anchor.",
  },
  {
    metric: "Retail Participation",
    value: "19.2 cr demat",
    trend: "up",
    note: "Account additions steady; F&O curbs may temper speculative churn.",
  },
  {
    metric: "Wealth Management",
    value: "AUM +18% YoY",
    trend: "up",
    note: "Financialisation of savings driving HNI/affluent advisory growth.",
  },
]

export const companyFocus = {
  name: "Bajaj Finance",
  ticker: "BAJFINANCE",
  sector: "NBFC · Diversified Lending",
  businessModel:
    "A diversified NBFC monetising a vast customer franchise (~90mn) across consumer durables, personal loans, SME and mortgages, increasingly cross-selling via its app-led ecosystem.",
  catalyst:
    "A falling-rate cycle lowers cost of funds while AUM compounds at 25%+, with the digital platform (Bajaj Finserv app) opening fee-income optionality.",
  keyRisk:
    "Asset-quality normalisation in unsecured lending and regulatory scrutiny on customer-facing practices could pressure growth and credit costs.",
  interviewAngle:
    "A textbook case to discuss operating leverage in lending, the cost-of-funds advantage of scale, and how NBFCs differ from banks on liability access.",
}

export interface DebateTopic {
  question: string
  bull: string
  bear: string
  view: string
}

export const debates: DebateTopic[] = [
  {
    question: "Should the RBI cut rates now?",
    bull: "Inflation is within band, real rates are restrictive, and a pre-emptive cut would support growth and investment.",
    bear: "Premature easing risks reigniting inflation if crude spikes or the rupee weakens; the Fed hasn't fully pivoted.",
    view: "Hold one more meeting, then cut — guidance should stay dovish to keep the bond market constructive without front-running global risk.",
  },
  {
    question: "Should India privatise more PSUs?",
    bull: "Privatisation improves capital allocation, unlocks value, and lets the state redeploy proceeds into infrastructure.",
    bear: "Strategic sectors and employment concerns warrant caution; execution and valuation timing are politically fraught.",
    view: "Yes, selectively — exit non-strategic assets while professionalising the rest; the goal is efficiency, not ideology.",
  },
  {
    question: "Should SEBI tighten F&O regulations?",
    bull: "Curbing retail speculation protects households from outsized losses and reduces systemic froth.",
    bear: "Over-regulation hurts liquidity, price discovery and exchange revenues, pushing activity to informal venues.",
    view: "Calibrated tightening — higher lot sizes and suitability checks beat blunt bans; protect retail without killing depth.",
  },
]
