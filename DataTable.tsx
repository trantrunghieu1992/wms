"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import Badge, { statusTone } from "./Badge";

export type Column<T> = {
  key: keyof T;
  header: string;
  align?: "left" | "right" | "center";
  mono?: boolean;
  render?: (row: T) => React.ReactNode;
  isStatus?: boolean;
};

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
  searchKeys,
  pageSize = 6,
}: {
  columns: Column<T>[];
  data: T[];
  searchKeys?: (keyof T)[];
  pageSize?: number;
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!query || !searchKeys?.length) return data;
    const q = query.toLowerCase();
    return data.filter((row) =>
      searchKeys.some((key) => String(row[key] ?? "").toLowerCase().includes(q))
    );
  }, [data, query, searchKeys]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="overflow-hidden rounded-xl2 border border-border bg-surface shadow-card">
      <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
        {searchKeys?.length ? (
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(0);
              }}
              placeholder="Search..."
              className="w-full rounded-lg border border-border bg-surface2 py-2 pl-8 pr-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-light/40"
            />
          </div>
        ) : (
          <div />
        )}
        <button className="inline-flex items-center gap-1.5 self-start rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted hover:bg-surface2 sm:self-auto">
          <SlidersHorizontal size={13} /> Filters
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface2/60 text-left text-xs font-semibold uppercase tracking-wide text-muted">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="whitespace-nowrap px-4 py-3"
                  style={{ textAlign: col.align ?? "left" }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border/70 last:border-0 hover:bg-surface2/50"
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={`px-4 py-3 text-ink ${col.mono ? "font-mono text-[13px]" : ""}`}
                    style={{ textAlign: col.align ?? "left" }}
                  >
                    {col.isStatus ? (
                      <Badge tone={statusTone(String(row[col.key]))}>
                        {String(row[col.key])}
                      </Badge>
                    ) : col.render ? (
                      col.render(row)
                    ) : (
                      String(row[col.key] ?? "")
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {paged.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-10 text-center text-sm text-muted">
                  No records match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs text-muted">
        <span>
          Showing {paged.length === 0 ? 0 : page * pageSize + 1}–
          {Math.min(filtered.length, page * pageSize + pageSize)} of {filtered.length}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border disabled:opacity-40 hover:bg-surface2"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="px-1 tabular-nums">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-border disabled:opacity-40 hover:bg-surface2"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
