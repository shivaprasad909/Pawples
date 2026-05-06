"use client";

import { useState } from "react";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  items: number;
  highlights: string[];
  color: string;
  borderColor: string;
  accentColor: string;
  buttonVariant: "primary" | "secondary" | "outline";
  popular: boolean;
}

export default function PricingToggle({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  return (
    <>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-5 py-2.5 rounded-full font-nunito font-bold text-sm transition-all ${
            billing === "monthly"
              ? "bg-plum text-white shadow-md"
              : "bg-bark/8 text-bark/60 hover:bg-bark/12"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("quarterly")}
          className={`px-5 py-2.5 rounded-full font-nunito font-bold text-sm transition-all flex items-center gap-2 ${
            billing === "quarterly"
              ? "bg-plum text-white shadow-md"
              : "bg-bark/8 text-bark/60 hover:bg-bark/12"
          }`}
        >
          Quarterly
          <span className="bg-gold text-bark text-[10px] font-extrabold px-1.5 py-0.5 rounded-full leading-none">
            Save 10%
          </span>
        </button>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const price = billing === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;
          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl border-2 p-8 flex flex-col ${plan.color} ${plan.borderColor} ${
                plan.popular ? "shadow-xl scale-[1.02] ring-2 ring-plum/30" : "shadow-sm"
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-plum text-white text-xs font-nunito font-black px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{plan.emoji}</span>
                <div>
                  <h3 className="font-nunito font-extrabold text-bark text-xl leading-tight">{plan.name}</h3>
                  <p className="text-bark/55 text-xs font-dm-sans mt-0.5">{plan.tagline}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-nunito font-black text-4xl text-bark">₹{price}</span>
                  <span className="text-bark/50 font-dm-sans text-sm">/{billing === "monthly" ? "mo" : "mo*"}</span>
                </div>
                {billing === "quarterly" && (
                  <p className="text-xs text-bark/50 font-dm-sans mt-0.5">*Billed every 3 months</p>
                )}
                <span className={`text-sm font-semibold font-dm-sans ${plan.accentColor} mt-1 block`}>
                  {plan.items} handpicked items inside
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm font-dm-sans text-bark/75">
                    <svg className={`w-4 h-4 shrink-0 ${plan.accentColor}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={`/subscribe/choose?plan=${plan.id}&billing=${billing}`}
                className={`w-full text-center py-3.5 rounded-full font-nunito font-extrabold text-sm transition-all duration-200 active:scale-95 ${
                  plan.buttonVariant === "primary"
                    ? "bg-plum text-white hover:bg-plum-600 shadow-md hover:shadow-lg"
                    : plan.buttonVariant === "secondary"
                    ? "bg-gold text-bark hover:bg-gold-500 shadow-md hover:shadow-lg"
                    : "border-2 border-plum text-plum hover:bg-plum hover:text-white"
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
