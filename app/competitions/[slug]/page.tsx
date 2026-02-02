// app/competitions/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

type Competition = {
  slug: string;
  title: string;
  description: string;
  rules: string[];
  prize: string;
  closesAt: string;
};

type LeaderboardEntry = {
  position: number;
  name: string;
  score: string;
};

const competitions: Competition[] = [
  {
    slug: "nearest-the-pin",
    title: "Nearest the Pin",
    description:
      "Take one shot. The closest distance to the pin wins the prize.",
    prize: "€500 Cash",
    closesAt: "2026-02-05T20:00:00Z",
    rules: [
      "One entry per person",
      "Distance measured digitally",
      "Closest valid shot wins",
    ],
  },
  {
    slug: "crossbar-challenge",
    title: "Crossbar Challenge",
    description:
      "Hit the crossbar from outside the box. Pure skill, no luck.",
    prize: "PlayStation 5",
    closesAt: "2026-02-01T20:00:00Z",
    rules: [
      "Five attempts per entry",
      "Must strike the bar clean",
      "Video submission required",
    ],
  },
  {
    slug: "darts-accuracy",
    title: "Darts Accuracy",
    description:
      "Throw three darts. Nearest dart to bullseye takes it all.",
    prize: "€250 Cash",
    closesAt: "2026-02-10T20:00:00Z",
    rules: [
      "Standard dartboard",
      "Three darts only",
      "Closest single dart counts",
    ],
  },
];

const leaderboard: LeaderboardEntry[] = [
  { position: 1, name: "A. Murphy", score: "1.2 cm" },
  { position: 2, name: "J. O’Connor", score: "2.8 cm" },
  { position: 3, name: "S. Kelly", score: "4.1 cm" },
  { position: 4, name: "L. Byrne", score: "6.3 cm" },
];

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { hours, minutes };
}

export default function CompetitionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const competition = competitions.find(
    (c) => c.slug === params.slug
  );

  if (!competition) {
    notFound();
  }

  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
  } | null>(null);

  useEffect(() => {
    const target = new Date(competition.closesAt);

    const update = () => {
      setTimeLeft(getTimeLeft(target));
    };

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, [competition.closesAt]);

  const isOpen = timeLeft !== null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/competitions"
        className="text-sm text-white/60 hover:text-white transition"
      >
        ← Back to competitions
      </Link>

      {/* Header */}
      <header className="mt-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            {competition.title}
          </h1>

          <span
            className={`text-xs font-medium px-3 py-1 rounded ${
              isOpen
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {isOpen ? "Open" : "Closed"}
          </span>
        </div>

        <p className="mt-4 text-white/70">
          {competition.description}
        </p>

        {isOpen && timeLeft && (
          <p className="mt-2 text-sm text-white/60">
            Closes in {timeLeft.hours}h {timeLeft.minutes}m
          </p>
        )}
      </header>

      {/* Prize */}
      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-white/60">Prize</p>
        <p className="mt-1 text-xl font-semibold">
          {competition.prize}
        </p>
      </div>

      {/* Rules */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Rules</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-white/70">
          {competition.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Leaderboard */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">
          Leaderboard
        </h2>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full border-collapse">
            <thead className="bg-white/5 text-left text-sm uppercase tracking-wide text-white/60">
              <tr>
                <th className="px-6 py-4">Pos</th>
                <th className="px-6 py-4">Player</th>
                <th className="px-6 py-4">Result</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr
                  key={entry.position}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-4 font-medium">
                    #{entry.position}
                  </td>
                  <td className="px-6 py-4 text-white/80">
                    {entry.name}
                  </td>
                  <td className="px-6 py-4 text-white/80">
                    {entry.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <button
        disabled={!isOpen}
        className={`mt-12 w-full rounded-md px-6 py-3 font-medium transition ${
          isOpen
            ? "bg-white text-black hover:bg-white/90"
            : "bg-white/20 text-white/50 cursor-not-allowed"
        }`}
      >
        {isOpen ? "Enter Competition" : "Competition Closed"}
      </button>
    </section>
  );
}
