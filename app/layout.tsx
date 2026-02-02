import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "KNGO",
  description: "Skill-based competitions. No luck involved.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Global background effects */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* Radial glow */}
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

          {/* Subtle vertical gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black" />

          {/* Grain overlay (optional but 🔥) */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')",
            }}
          />
        </div>

        {/* App content */}
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
