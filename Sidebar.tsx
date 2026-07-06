"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronDown, Boxes } from "lucide-react";
import { NAV, isSection } from "@/lib/nav";

export default function Sidebar({
  mobileOpen,
  onCloseMobile,
  collapsed,
  setCollapsed,
}: {
  mobileOpen: boolean;
  onCloseMobile: () => void;
  collapsed: boolean;
  setCollapsed: (fn: (c: boolean) => boolean) => void;
}) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Master Data": true,
    Inbound: true,
    Inventory: true,
    Outbound: true,
  });

  const toggleCollapsed = () => {
    setCollapsed((c) => {
      window.localStorage.setItem("wms-sidebar-collapsed", c ? "0" : "1");
      return !c;
    });
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-surface transition-all duration-200",
          collapsed ? "w-[76px]" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-border px-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-amber">
            <Boxes size={19} strokeWidth={2.25} />
          </span>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate font-display text-[15px] font-semibold leading-tight text-ink">
                Kho Việt WMS
              </p>
              <p className="truncate text-[11px] text-muted">Warehouse Management</p>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto px-2.5 py-3">
          <ul className="flex flex-col gap-0.5">
            {NAV.map((entry) => {
              if (!isSection(entry)) {
                const Icon = entry.icon;
                const active = isActive(entry.href);
                return (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      onClick={onCloseMobile}
                      className={clsx(
                        "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-brand/10 text-brand-light"
                          : "text-muted hover:bg-surface2 hover:text-ink"
                      )}
                    >
                      {active && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-amber" />
                      )}
                      <Icon size={17} strokeWidth={2} className="shrink-0" />
                      {!collapsed && <span className="truncate">{entry.label}</span>}
                    </Link>
                  </li>
                );
              }

              const SectionIcon = entry.icon;
              const sectionActive = entry.items.some((i) => isActive(i.href));
              const open = collapsed ? true : openSections[entry.label];

              return (
                <li key={entry.label} className="mt-1 first:mt-0">
                  {!collapsed && (
                    <button
                      onClick={() =>
                        setOpenSections((s) => ({ ...s, [entry.label]: !s[entry.label] }))
                      }
                      className={clsx(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                        sectionActive ? "text-brand-light" : "text-muted hover:text-ink"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <SectionIcon size={14} />
                        {entry.label}
                      </span>
                      <ChevronDown
                        size={13}
                        className={clsx("transition-transform", open && "rotate-180")}
                      />
                    </button>
                  )}
                  {collapsed && (
                    <div className="my-2 flex justify-center">
                      <SectionIcon size={16} className="text-muted" />
                    </div>
                  )}
                  {open && (
                    <ul className="mt-0.5 flex flex-col gap-0.5">
                      {entry.items.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onCloseMobile}
                              title={collapsed ? item.label : undefined}
                              className={clsx(
                                "relative flex items-center gap-3 rounded-lg py-2 text-sm font-medium transition-colors",
                                collapsed ? "justify-center px-2" : "px-3 pl-8",
                                active
                                  ? "bg-brand/10 text-brand-light"
                                  : "text-muted hover:bg-surface2 hover:text-ink"
                              )}
                            >
                              {active && (
                                <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-amber" />
                              )}
                              <Icon size={16} strokeWidth={2} className="shrink-0" />
                              {!collapsed && <span className="truncate">{item.label}</span>}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-2.5">
          <button
            onClick={toggleCollapsed}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium text-muted hover:bg-surface2 hover:text-ink"
          >
            <ChevronLeft
              size={15}
              className={clsx("transition-transform", collapsed && "rotate-180")}
            />
            {!collapsed && "Collapse"}
          </button>
        </div>
      </aside>
    </>
  );
}
