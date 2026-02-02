"use client";

import Link from "next/link";

type Competition = {
  slug: string;
  title: string;
  description: string;
  status: "open" | "closed";
  endsAt: string;
};

export default function FeaturedCompetitionCard({
  competition,
}: {
  competition: Competition;
}) {
  const isOpen = competition.status === "open";

  return (
    <div
      className="
        relative overflow-hidden rounded-3xl
        border border-white/20
        bg-gradient-to-br from-purple-500/20 via-black to-cyan-500/20
        p-8 sm:p-12
        shadow-[0_0_80px_rgba(168,85,247,0.35)]
      "
    >
      {/* Glow pulse */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/30 via-transparent to-cyan-500/30 opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold tracking-widest text-white/80">
          MAIN EVENT
        </span>

        <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">
          {competition.title}
        </h2>

        <p className="mt-6 text-lg text-white/80 leading-relaxed">
          {competition.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          {isOpen ? (
            <Link
              href={`/competitions/${competition.slug}`}
              className="
                inline-flex items-center gap-2
                rounded-md bg-white px-8 py-4
                text-black font-bold
                transition hover:bg-white/90
              "
            >
              Enter Main Event
              <span className="text-lg">→</span>
            </Link>
          ) : (
            <span className="rounded-md border border-white/20 px-8 py-4 text-white/50 font-semibold">
              Closed
            </span>
          )}

          <span className="text-sm text-white/60">
            Ends {competition.endsAt}
          </span>
        </div>
      </div>
    </div>
  );
}
