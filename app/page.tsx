// app/page.tsx
import Link from "next/link";

const stats = {
  openCompetitions: 2,
  closedCompetitions: 1,
  winnersPaid: 14,
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Skill wins.
          <br />
          Not luck.
        </h1>

        <p className="mt-6 text-lg text-white/70">
          KNGO is a skill-based competition platform where ability decides the
          outcome. Compete, climb the leaderboard, and win real prizes.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/competitions"
            className="rounded-md bg-white px-6 py-3 text-black font-medium hover:bg-white/90 transition"
          >
            View Competitions
          </Link>

          <Link
            href="/winners"
            className="rounded-md border border-white/20 px-6 py-3 font-medium hover:bg-white hover:text-black transition"
          >
            Recent Winners
          </Link>
        </div>
      </div>

      {/* Live stats */}
      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60">Open competitions</p>
          <p className="mt-2 text-3xl font-bold">
            {stats.openCompetitions}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60">Closed competitions</p>
          <p className="mt-2 text-3xl font-bold">
            {stats.closedCompetitions}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60">Winners paid</p>
          <p className="mt-2 text-3xl font-bold">
            {stats.winnersPaid}
          </p>
        </div>
      </div>

      {/* Value props */}
      <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Skill-Based</h3>
          <p className="mt-2 text-sm text-white/70">
            Every competition is designed so skill — not chance — determines the
            winner.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Transparent</h3>
          <p className="mt-2 text-sm text-white/70">
            Clear rules, visible leaderboards, and verified results.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Real Prizes</h3>
          <p className="mt-2 text-sm text-white/70">
            Cash, tech, and exclusive rewards — earned, not gambled.
          </p>
        </div>
      </div>
    </section>
  );
}
