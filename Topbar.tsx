"use client";

import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-surface/85 px-4 backdrop-blur sm:px-6">
      <button
        onClick={onMenuClick}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-surface2 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          placeholder="Search SKU, order, location..."
          className="w-full rounded-lg border border-border bg-surface2 py-2 pl-8 pr-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-light/40"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success md:flex">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-success" />
          All systems normal
        </div>

        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:bg-surface2 hover:text-ink"
          aria-label="Notifications"
        >
          <Bell size={16} />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber text-[9px] font-bold text-brand-dark">
            3
          </span>
        </button>

        <ThemeToggle />

        <button className="flex items-center gap-2 rounded-lg border border-border bg-surface py-1.5 pl-1.5 pr-2.5 hover:bg-surface2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-semibold text-white">
            NA
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-xs font-medium text-ink">Nguyen An</span>
            <span className="block text-[11px] text-muted">Warehouse Manager</span>
          </span>
          <ChevronDown size={13} className="hidden text-muted sm:block" />
        </button>
      </div>
    </header>
  );
}
