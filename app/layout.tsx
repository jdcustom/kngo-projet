// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KNGO",
  description: "Skill-based competitions platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
