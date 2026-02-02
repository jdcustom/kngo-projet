import FeaturedCompetitionCard from "../components/FeaturedCompetitionCard";
import CompetitionCard from "../components/CompetitionCard";
import { competitions } from "./data";

export default function CompetitionsPage() {
  // FIRST competition is the featured one
  const [featured, ...rest] = competitions;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-32">
        {/* Header */}
        <header className="mb-20 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Competitions
          </h1>
          <p className="mt-4 text-white/70">
            Skill-based challenges. Real prizes. No luck involved.
          </p>
        </header>

        {/* Featured */}
        {featured && (
          <div className="mb-24">
            <FeaturedCompetitionCard competition={featured} />
          </div>
        )}

        {/* Divider */}
        <div className="mb-16 h-px w-full bg-white/10" />

        {/* Rest */}
        <section className="space-y-6">
          {rest.map((competition) => (
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
