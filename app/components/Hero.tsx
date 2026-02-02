import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/70 p-10 rounded-xl max-w-3xl">
        <p className="text-yellow-400 uppercase tracking-widest text-sm mb-4">
          Irish-owned competition platform
        </p>

        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          Win Tech & Cash
        </h1>

        <p className="text-gray-300 mb-8">
          Skill-based competitions. Real winners. Transparent prizes.
        </p>

        <Link
          href="/competitions"
          className="inline-block bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
        >
          Enter Now →
        </Link>
      </div>
    </section>
  );
}
