import Link from "next/link";

export const metadata = { title: "Terms of Service | FDGC" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-fdgc-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="font-serif text-5xl text-white">Terms of Service</h1>
        <p className="mt-8 text-zinc-400">Terms of service content.</p>
        <Link href="/" className="mt-8 inline-block text-fdgc-gold hover:underline">← Back</Link>
      </div>
    </main>
  );
}
