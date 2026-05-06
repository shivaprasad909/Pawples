"use client";

import Link from "next/link";
import { useState } from "react";
import PawplesLogo from "./PawplesLogo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/90 backdrop-blur-md border-b border-plum/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <PawplesLogo size="md" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-bark/70 hover:text-plum font-dm-sans font-medium text-sm transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/search"
              aria-label="Search"
              className="p-2 rounded-full text-bark/60 hover:text-plum hover:bg-plum/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7 7 0 1110 3a7 7 0 016.65 13.65z" />
              </svg>
            </Link>
            <Link
              href="/account"
              aria-label="Account"
              className="p-2 rounded-full text-bark/60 hover:text-plum hover:bg-plum/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative p-2 rounded-full text-bark/60 hover:text-plum hover:bg-plum/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-bark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                0
              </span>
            </Link>
            <Link href="/subscribe" className="btn-primary text-sm py-2 px-4">
              Get a Box
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-bark/70 hover:text-plum transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-plum/10",
        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-4 bg-ivory flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-bark/70 hover:text-plum font-dm-sans font-medium py-2 border-b border-plum/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <Link href="/account" className="flex-1 text-center py-2 rounded-full border border-plum text-plum font-nunito font-bold text-sm hover:bg-plum hover:text-white transition-all">
              Account
            </Link>
            <Link href="/subscribe" className="flex-1 text-center btn-primary text-sm py-2 justify-center">
              Get a Box
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
