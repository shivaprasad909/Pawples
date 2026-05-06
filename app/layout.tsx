import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pawples — Because they're family",
    template: "%s | Pawples",
  },
  description:
    "India's most loved pet subscription box. Curated treats, toys & essentials delivered to your door every month. Because they're family.",
  keywords: [
    "pet subscription box india",
    "dog treats india",
    "cat treats india",
    "pet box india",
    "monthly pet box",
    "pawples",
  ],
  metadataBase: new URL("https://thepawples.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thepawples.com",
    siteName: "Pawples",
    title: "Pawples — Because they're family",
    description:
      "India's most loved pet subscription box. Curated treats, toys & essentials delivered monthly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pawples — India's Premier Pet Subscription Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawples — Because they're family",
    description: "India's most loved pet subscription box.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans bg-ivory text-bark antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
