"use client"

import { useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

export interface DetailContent {
  eyebrow: string
  title: string
  subtitle?: string
  expandedAnalysis: string
  secondOrder: string[]
  stakeholders: string[]
  winners: string[]
  losers: string[]
  interviewPoints: string[]
}

interface DetailPanelProps {
  open: boolean
  onClose: () => void
  content: DetailContent | null
}

function ListBlock({
  label,
  items,
  tone = "neutral",
}: {
  label: string
  items: string[]
  tone?: "neutral" | "positive" | "negative"
}) {
  const dot =
    tone === "positive" ? "bg-positive" : tone === "negative" ? "bg-negative" : "bg-primary"
  return (
    <div>
      <p className="font-mono text-[11px] tracking-wide text-primary uppercase">{label}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
            <span className="text-pretty">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DetailPanel({ open, onClose, content }: DetailPanelProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (typeof document === "undefined") return null

  return createPortal(
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={content?.title ?? "Details"}
        className={`absolute inset-y-0 right-0 flex w-full max-w-lg flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {content ? (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-border p-5">
              <div>
                <p className="font-mono text-[11px] tracking-wide text-primary uppercase">{content.eyebrow}</p>
                <h2 className="mt-1.5 text-lg font-bold leading-snug tracking-tight text-foreground text-balance">
                  {content.title}
                </h2>
                {content.subtitle ? (
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">{content.subtitle}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-5">
              <div>
                <p className="font-mono text-[11px] tracking-wide text-primary uppercase">Expanded Analysis</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {content.expandedAnalysis}
                </p>
              </div>

              <ListBlock label="Second-Order Implications" items={content.secondOrder} />
              <ListBlock label="Key Stakeholders Affected" items={content.stakeholders} />

              <div className="grid gap-5 sm:grid-cols-2">
                <ListBlock label="Potential Winners" items={content.winners} tone="positive" />
                <ListBlock label="Potential Losers" items={content.losers} tone="negative" />
              </div>

              <div className="rounded-md border border-primary/30 bg-primary/10 p-4">
                <ListBlock label="Interview Discussion Points" items={content.interviewPoints} />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>,
    document.body,
  )
}
