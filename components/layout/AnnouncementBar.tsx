"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  text?: string;
  enabled?: boolean;
  className?: string;
}

export default function AnnouncementBar({
  text = "🚀 Free shipping on orders above ₹499 · Use code PAWFIRST for 10% off your first box",
  enabled = true,
  className,
}: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!enabled || dismissed) return null;

  return (
    <div className={cn("relative bg-plum text-white text-center overflow-hidden", className)}>
      {/* Scrolling marquee for long text on mobile */}
      <div className="flex items-center justify-center px-8 py-2 min-h-[36px]">
        <p className="text-xs sm:text-sm font-dm-sans font-medium whitespace-nowrap">
          {text}
        </p>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
