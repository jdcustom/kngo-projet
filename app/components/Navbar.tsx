import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-yellow-400 font-bold text-xl">
          KNGO
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-white">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link
            href="/competitions"
            className="hover:text-yellow-400 transition"
          >
            Competitions
          </Link>
        </nav>
      </div>
    </header>
  );
}
