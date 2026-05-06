import Link from "next/link";
import PawplesLogo from "@/components/layout/PawplesLogo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <header className="flex justify-center pt-8 pb-4">
        <Link href="/" aria-label="Pawples Home">
          <PawplesLogo size="md" />
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {children}
      </main>
      <footer className="text-center py-6 text-xs text-bark/40 font-dm-sans">
        © {new Date().getFullYear()} Pawples · Because they&apos;re family
      </footer>
    </div>
  );
}
