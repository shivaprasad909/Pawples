"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-bark mb-1.5 font-dm-sans">
            {label}
            {props.required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              "w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm font-dm-sans text-bark",
              "outline-none transition-all duration-150 cursor-pointer",
              "focus:ring-2 focus:ring-plum/20 focus:border-plum",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-ivory",
              error ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : "border-bark/15",
              className
            )}
            {...props}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bark/40 pointer-events-none" />
        </div>
        {error && <p className="mt-1.5 text-xs text-rose-500 font-dm-sans">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-bark/45 font-dm-sans">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
