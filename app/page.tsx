// app/page.tsx
import Link from "next/link";

const stats = {
  openCompetitions: 2,
  closedCompetitions: 1,
  winnersPaid: 14,
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black" />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="block">Skill wins.</span>
            <span className="block text-white/60">Not luck.</span>
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            KNGO is a skill-based competition platform where ability decides the
            outcome. Compete, climb the leaderboard, and win real prizes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/competitions"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-black font-semibold hover:bg-white/90 transition"
            >
              Enter Competitions
            </Link>

            <Link
              href="/winners"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white hover:text-black transition"
            >
              View Winners
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* Live stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          <StatCard label="Open competitions" value={stats.openCompetitions} />
          <StatCard
            label="Closed competitions"
            value={stats.closedCompetitions}
          />
          <StatCard label="Winners paid" value={stats.winnersPaid} />
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            title="Skill-Based"
            text="Every competition is designed so skill — not chance — determines the winner."
          />
          <ValueCard
            title="Transparent"
            text="Clear rules, visible leaderboards, and verified results."
          />
          <ValueCard
            title="Real Prizes"
            text="Cash, tech, and exclusive rewards — earned, not gambled."
          />
        </div>
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-wide text-white/50">
        {label}
      </p>
      <p className="mt-3 text-4xl font-extrabold">{value}</p>
    </div>
  );
}

function ValueCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
