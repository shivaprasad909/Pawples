import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "plum" | "gold" | "green" | "red" | "gray";
  className?: string;
}

const variants = {
  plum: "bg-plum/10 text-plum",
  gold: "bg-gold/15 text-gold-600",
  green: "bg-emerald-50 text-emerald-700",
  red: "bg-red-50 text-red-700",
  gray: "bg-bark/8 text-bark/60",
};

export default function Badge({ children, variant = "plum", className }: BadgeProps) {
  return (
    <span className={cn("badge", variants[variant], className)}>
      {children}
    </span>
  );
}
