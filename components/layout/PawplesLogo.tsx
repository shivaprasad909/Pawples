import Link from "next/link";
import { cn } from "@/lib/utils";

interface PawplesLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const sizes = {
  sm: { mark: 32, text: "text-lg" },
  md: { mark: 40, text: "text-xl" },
  lg: { mark: 52, text: "text-2xl" },
};

export default function PawplesLogo({
  className,
  showWordmark = true,
  size = "md",
  variant = "default",
}: PawplesLogoProps) {
  const { mark, text } = sizes[size];
  const textColor = variant === "white" ? "text-white" : "text-bark";

  return (
    <Link href="/" className={cn("flex items-center gap-2 select-none group", className)}>
      {/* Plum oval mark with two gold nostrils */}
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Pawples logo mark"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        {/* Outer plum oval (nose shape) */}
        <ellipse cx="20" cy="20" rx="18" ry="15" fill="#5B2D8E" />

        {/* Left nostril — gold teardrop */}
        <ellipse
          cx="13.5"
          cy="20.5"
          rx="4"
          ry="5.5"
          fill="#F5A623"
          transform="rotate(-10 13.5 20.5)"
        />

        {/* Right nostril — gold teardrop */}
        <ellipse
          cx="26.5"
          cy="20.5"
          rx="4"
          ry="5.5"
          fill="#F5A623"
          transform="rotate(10 26.5 20.5)"
        />

        {/* Subtle highlight on the oval */}
        <ellipse cx="14" cy="11" rx="5" ry="3" fill="white" fillOpacity="0.12" />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "font-nunito font-extrabold tracking-tight leading-none",
            text,
            textColor
          )}
        >
          Pawples
        </span>
      )}
    </Link>
  );
}
