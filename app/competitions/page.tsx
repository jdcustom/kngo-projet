import CompetitionCard from "../components/CompetitionCard";
import { competitions } from "./data";

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
        {/* Page header */}
        <header className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Live Competitions
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Three games. One week. Skill decides everything.
          </p>
        </header>

        {/* Status bar */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Games Live
            </p>
            <p className="mt-1 text-3xl font-bold">3</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Week
            </p>
            <p className="mt-1 text-3xl font-bold">Active</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Entry
            </p>
            <p className="mt-1 text-3xl font-bold">Open</p>
          </div>
        </div>

        {/* Competitions grid */}
        <section className="grid gap-8 md:grid-cols-3">
          {competitions.map((competition) => (
            <CompetitionCard
              key={competition.slug}
              competition={competition}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
