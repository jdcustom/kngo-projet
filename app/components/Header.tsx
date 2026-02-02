// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-wide">
          KNGO
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/competitions" className="hover:text-white/80">
            Competitions
          </Link>
          <Link href="/winners" className="hover:text-white/80">
            Winners
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
