import { type LucideIcon } from "lucide-react";

export default function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  action,
}: {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
            {eyebrow}
          </p>
        )}
        <div className="flex items-center gap-2.5">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand-light">
              <Icon size={18} strokeWidth={2} />
            </span>
          )}
          <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {title}
          </h1>
        </div>
        {description && (
          <p className="mt-1.5 text-sm text-muted">{description}</p>
        )}
      </div>
      {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </div>
  );
}
