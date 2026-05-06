"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-bark mb-1.5 font-dm-sans">
            {label}
            {props.required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-sm font-dm-sans text-bark resize-y min-h-[100px]",
            "placeholder:text-bark/35 outline-none transition-all duration-150",
            "focus:ring-2 focus:ring-plum/20 focus:border-plum",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-ivory",
            error ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : "border-bark/15",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-rose-500 font-dm-sans">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-xs text-bark/45 font-dm-sans">{hint}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
