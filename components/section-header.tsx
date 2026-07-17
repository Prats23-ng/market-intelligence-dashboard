import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  icon?: ReactNode
  className?: string
}

export function SectionHeader({ index, title, subtitle, icon, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between gap-4 border-b border-border pb-3", className)}>
      <div className="flex items-center gap-3">
        {icon ? (
          <span className="flex size-9 items-center justify-center rounded-md border border-border bg-secondary text-primary">
            {icon}
          </span>
        ) : null}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary">{index}</span>
            <h2 className="text-lg font-semibold tracking-tight text-foreground text-balance">{title}</h2>
          </div>
          {subtitle ? <p className="mt-0.5 text-sm text-muted-foreground text-pretty">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  )
}
