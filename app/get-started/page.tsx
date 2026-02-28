import Link from "next/link";

export const metadata = {
  title: "Get Started | FDGC",
  description: "Institutional onboarding and integration for FDGC.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-fdgc-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="font-serif text-5xl lg:text-6xl text-white tracking-tight">
          Get Started.
        </h1>
        <p className="mt-8 text-zinc-400 max-w-2xl leading-relaxed">
          Institutional onboarding, integration procedures, and contact for
          FDGC. Reserve-backed programmable gold on BSC.
        </p>
        <div className="mt-16 space-y-8">
          <div className="border border-white/10 p-8">
            <h2 className="font-serif text-xl text-white">Institutional Contact</h2>
            <p className="mt-4 text-zinc-400">
              For institutional inquiries, custody integration, and partnership
              opportunities, contact the FDGC institutional relations team.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/#token-architecture"
              className="px-8 py-3.5 bg-fdgc-gold text-fdgc-bg-primary font-medium border border-transparent hover:border-fdgc-gold/50 transition-all duration-200"
            >
              View Token Architecture
            </Link>
            <Link
              href="/documentation"
              className="px-8 py-3.5 border border-white/30 text-white hover:bg-white/5 hover:border-fdgc-gold/50 transition-all duration-200"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
