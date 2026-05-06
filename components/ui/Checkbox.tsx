"use client";

import { forwardRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className, id, ...props }, ref) => {
    const inputId = id ?? `checkbox-${Math.random().toString(36).slice(2, 7)}`;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className="sr-only peer"
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              "flex w-5 h-5 items-center justify-center rounded-md border-2 cursor-pointer transition-all duration-150",
              "peer-checked:bg-plum peer-checked:border-plum",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              "hover:border-plum",
              error ? "border-rose-400" : "border-bark/25",
              className
            )}
          >
            <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
          </label>
        </div>

        {(label || description) && (
          <div className="flex flex-col cursor-pointer" onClick={() => {
            const el = document.getElementById(inputId) as HTMLInputElement;
            if (el && !props.disabled) el.click();
          }}>
            {label && (
              <span className="text-sm font-semibold text-bark font-dm-sans leading-tight">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-bark/50 font-dm-sans mt-0.5">{description}</span>
            )}
          </div>
        )}

        {error && <p className="mt-1 text-xs text-rose-500 font-dm-sans">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
