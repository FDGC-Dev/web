import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-fdgc-bg-primary flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-6xl lg:text-8xl text-white tracking-tight">
          404
        </h1>
        <p className="mt-6 text-zinc-400 text-lg">
          Page not found.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 px-8 py-3.5 bg-fdgc-gold text-fdgc-bg-primary font-medium border border-transparent hover:border-fdgc-gold/50 hover:bg-fdgc-gold/90 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
