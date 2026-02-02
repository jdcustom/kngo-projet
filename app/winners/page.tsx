// app/winners/page.tsx

type Winner = {
  id: string;
  competition: string;
  winner: string;
  prize: string;
};

const winners: Winner[] = [
  {
    id: "w1",
    competition: "Nearest the Pin",
    winner: "A. Murphy",
    prize: "€500",
  },
  {
    id: "w2",
    competition: "Crossbar Challenge",
    winner: "J. O’Connor",
    prize: "PlayStation 5",
  },
  {
    id: "w3",
    competition: "Darts Accuracy",
    winner: "S. Kelly",
    prize: "€250",
  },
];

export default function WinnersPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Winners
        </h1>
        <p className="mt-2 text-white/70">
          Recent competition winners on KNGO.
        </p>
      </header>

      {/* Winners list */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full border-collapse">
          <thead className="bg-white/5 text-left text-sm uppercase tracking-wide text-white/60">
            <tr>
              <th className="px-6 py-4">Competition</th>
              <th className="px-6 py-4">Winner</th>
              <th className="px-6 py-4">Prize</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((item) => (
              <tr
                key={item.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {item.competition}
                </td>
                <td className="px-6 py-4 text-white/80">
                  {item.winner}
                </td>
                <td className="px-6 py-4 text-white/80">
                  {item.prize}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
