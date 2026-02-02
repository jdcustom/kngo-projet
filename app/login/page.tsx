// app/login/page.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-2xl font-bold tracking-tight">
          Login
        </h1>

        <p className="mt-2 text-sm text-white/70">
          Welcome back to KNGO.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-white/20 bg-black px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-white/20 bg-black px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-white px-4 py-2 text-black font-medium hover:bg-white/90 transition"
          >
            Login (coming soon)
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/70">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-white underline hover:text-white/80"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
