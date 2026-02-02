// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} KNGO. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="/competitions" className="hover:text-white transition">
            Competitions
          </Link>
          <Link href="/winners" className="hover:text-white transition">
            Winners
          </Link>
          <Link href="/login" className="hover:text-white transition">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
