import clsx from "clsx";

type Tone = "success" | "warning" | "danger" | "info" | "neutral" | "brand";

const TONE_MAP: Record<Tone, string> = {
  success: "bg-success/10 text-success ring-1 ring-inset ring-success/25",
  warning: "bg-amber/10 text-amber ring-1 ring-inset ring-amber/30",
  danger: "bg-danger/10 text-danger ring-1 ring-inset ring-danger/25",
  info: "bg-info/10 text-info ring-1 ring-inset ring-info/25",
  neutral: "bg-surface2 text-muted ring-1 ring-inset ring-border",
  brand: "bg-brand/10 text-brand-light ring-1 ring-inset ring-brand/25",
};

const STATUS_TONE: Record<string, Tone> = {
  Active: "success",
  Completed: "success",
  Confirmed: "success",
  Delivered: "success",
  "Ready to Pick": "success",
  "Ready to Ship": "success",
  Approved: "success",
  "In Progress": "info",
  Picking: "info",
  Packing: "info",
  Booked: "info",
  "In Transit": "info",
  Scheduled: "info",
  New: "brand",
  Draft: "neutral",
  Pending: "warning",
  "Awaiting Approval": "warning",
  "Partially Received": "warning",
  "Low Stock": "warning",
  "On Hold": "warning",
  Maintenance: "warning",
  Backordered: "danger",
  "Out of Stock": "danger",
  Inactive: "neutral",
  Shipped: "success",
};

export function statusTone(status: string): Tone {
  return STATUS_TONE[status] ?? "neutral";
}

export default function Badge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  const resolved = tone ?? (typeof children === "string" ? statusTone(children) : "neutral");
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        TONE_MAP[resolved]
      )}
    >
      {children}
    </span>
  );
}
