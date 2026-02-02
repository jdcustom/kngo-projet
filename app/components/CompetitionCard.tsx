import Link from "next/link";

type Competition = {
  slug: string;
  title: string;
  description: string;
  status?: "open" | "closed"; // ← optional on purpose
  endsAt?: string;
};

export default function CompetitionCard({
  competition,
}: {
  competition: Competition;
}) {
  const status = competition.status ?? "closed";
  const isOpen = status === "open";

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{competition.title}</h3>

          <span
            className={`text-xs px-3 py-1 rounded-full ${
              isOpen
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>

        <p className="text-sm text-white/70 mb-6">
          {competition.description}
        </p>

        {competition.endsAt && (
          <p className="text-xs text-white/50">
            Ends: {new Date(competition.endsAt).toLocaleString()}
          </p>
        )}
      </div>

      <div className="mt-6">
        {isOpen ? (
          <Link
            href={`/competitions/${competition.slug}`}
            className="inline-block w-full text-center rounded-md bg-white px-4 py-2 text-black font-medium hover:bg-white/90 transition"
          >
            Enter
          </Link>
        ) : (
          <span className="inline-block w-full text-center rounded-md border border-white/20 px-4 py-2 text-white/50 cursor-not-allowed">
            Closed
          </span>
        )}
      </div>
    </div>
  );
}
