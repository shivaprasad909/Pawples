"use client";

import { cn } from "@/lib/utils";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export default function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = "md",
  className,
}: ToggleProps) {
  const trackSize = size === "sm" ? "w-8 h-4" : "w-11 h-6";
  const thumbSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  const thumbTranslate = size === "sm" ? "translate-x-4" : "translate-x-5";

  return (
    <label className={cn("flex items-start gap-3 cursor-pointer group", disabled && "opacity-50 cursor-not-allowed", className)}>
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
        />
        <div
          className={cn(
            "rounded-full transition-colors duration-200",
            trackSize,
            checked ? "bg-plum" : "bg-bark/20",
            !disabled && "group-hover:opacity-90"
          )}
        />
        <div
          className={cn(
            "absolute top-1 left-1 bg-white rounded-full shadow-sm transition-transform duration-200",
            thumbSize,
            checked ? thumbTranslate : "translate-x-0"
          )}
        />
      </div>

      {(label || description) && (
        <div>
          {label && <p className="text-sm font-semibold text-bark font-dm-sans leading-tight">{label}</p>}
          {description && <p className="text-xs text-bark/50 font-dm-sans mt-0.5">{description}</p>}
        </div>
      )}
    </label>
  );
}
