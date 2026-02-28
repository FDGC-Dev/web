import Link from "next/link";

export const metadata = { title: "Cookie Policy | FDGC" };

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-fdgc-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="font-serif text-5xl text-white">Cookie Policy</h1>
        <p className="mt-8 text-zinc-400">Cookie policy content.</p>
        <Link href="/" className="mt-8 inline-block text-fdgc-gold hover:underline">← Back</Link>
      </div>
    </main>
  );
}
