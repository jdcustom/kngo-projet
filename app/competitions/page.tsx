// app/competitions/page.tsx
import CompetitionCard from "../components/CompetitionCard";

const competitions = [
  {
    id: "nearest-pin",
    slug: "nearest-the-pin",
    title: "Nearest the Pin",
    description: "Closest shot wins the prize.",
    closesAt: "2026-02-05T20:00:00Z",
  },
  {
    id: "crossbar",
    slug: "crossbar-challenge",
    title: "Crossbar Challenge",
    description: "Hit the bar. No luck, just skill.",
    closesAt: "2026-02-01T20:00:00Z", // closed
  },
  {
    id: "darts",
    slug: "darts-accuracy",
    title: "Darts Accuracy",
    description: "Nearest dart takes it all.",
    closesAt: "2026-02-10T20:00:00Z",
  },
];

export default function CompetitionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Competitions
        </h1>
        <p className="mt-2 text-white/70">
          Enter skill-based competitions and prove it.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {competitions.map((competition) => (
          <CompetitionCard
            key={competition.id}
            title={competition.title}
            description={competition.description}
            slug={competition.slug}
            closesAt={competition.closesAt}
          />
        ))}
      </div>
    </section>
  );
}
