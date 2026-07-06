import clsx from "clsx";
import { type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  children,
  variant = "secondary",
  icon: Icon,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  icon?: LucideIcon;
}) {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light",
        variant === "primary" &&
          "bg-brand text-white hover:bg-brand-dark shadow-card",
        variant === "secondary" &&
          "border border-border bg-surface text-ink hover:bg-surface2",
        variant === "ghost" && "text-muted hover:bg-surface2 hover:text-ink",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </button>
  );
}
