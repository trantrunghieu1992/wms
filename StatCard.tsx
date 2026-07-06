import clsx from "clsx";
import { type LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";

type Tone = "brand" | "amber" | "success" | "danger" | "info";

const TONE_BG: Record<Tone, string> = {
  brand: "bg-brand/10 text-brand-light",
  amber: "bg-amber/10 text-amber",
  success: "bg-success/10 text-success",
  danger: "bg-danger/10 text-danger",
  info: "bg-info/10 text-info",
};

export default function StatCard({
  label,
  value,
  unit,
  icon: Icon,
  tone = "brand",
  trend,
  helper,
}: {
  label: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  tone?: Tone;
  trend?: { value: string; direction: "up" | "down"; good?: boolean };
  helper?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl2 border border-border bg-surface p-4 shadow-card transition-shadow hover:shadow-pop">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
        <span className={clsx("flex h-8 w-8 items-center justify-center rounded-lg", TONE_BG[tone])}>
          <Icon size={16} strokeWidth={2} />
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-[1.75rem] font-semibold leading-none tabular-nums text-ink">
          {value}
        </span>
        {unit && <span className="text-sm text-muted">{unit}</span>}
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-xs">
        {trend && (
          <span
            className={clsx(
              "inline-flex items-center gap-0.5 font-medium",
              trend.good === false
                ? "text-danger"
                : trend.direction === "up"
                ? "text-success"
                : "text-danger"
            )}
          >
            {trend.direction === "up" ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
            {trend.value}
          </span>
        )}
        {helper && <span className="text-muted">{helper}</span>}
      </div>
      <span
        className={clsx(
          "absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
          tone === "brand" && "bg-brand-light",
          tone === "amber" && "bg-amber",
          tone === "success" && "bg-success",
          tone === "danger" && "bg-danger",
          tone === "info" && "bg-info"
        )}
      />
    </div>
  );
}
