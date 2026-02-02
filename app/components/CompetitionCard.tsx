// app/components/CompetitionCard.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CompetitionCardProps = {
  title: string;
  description: string;
  slug: string;
  closesAt: string; // ISO date string
};

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { hours, minutes };
}

export default function CompetitionCard({
  title,
  description,
  slug,
  closesAt,
}: CompetitionCardProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
  } | null>(null);

  useEffect(() => {
    const target = new Date(closesAt);

    const update = () => {
      setTimeLeft(getTimeLeft(target));
    };

    update();
    const interval = setInterval(update, 60_000);

    return () => clearInterval(interval);
  }, [closesAt]);

  const isOpen = timeLeft !== null;

  return (
    <Link
      href={`/competitions/${slug}`}
      className="group rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
    >
      {/* Status */}
      <div className="mb-2 flex items-center justify-between">
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${
            isOpen
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {isOpen ? "Open" : "Closed"}
        </span>

        {isOpen && timeLeft && (
          <span className="text-xs text-white/60">
            {timeLeft.hours}h {timeLeft.minutes}m left
          </span>
        )}
      </div>

      <h2 className="text-lg font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-2 text-sm text-white/70 flex-grow">
        {description}
      </p>

      <span
        className={`mt-4 inline-block w-full rounded-md px-4 py-2 text-center font-medium transition ${
          isOpen
            ? "bg-white text-black group-hover:bg-white/90"
            : "bg-white/20 text-white/50 cursor-not-allowed"
        }`}
      >
        {isOpen ? "Enter" : "Closed"}
      </span>
    </Link>
  );
}
