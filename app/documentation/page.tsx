export const metadata = {
  title: "Documentation | FDGC",
  description: "FDGC institutional documentation and technical specifications.",
};

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-fdgc-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="font-serif text-5xl lg:text-6xl text-white tracking-tight">
          Documentation.
        </h1>
        <p className="mt-8 text-zinc-400 max-w-2xl leading-relaxed">
          Technical specifications, governance framework, and institutional
          documentation for FDGC. Reserve-backed. Settlement-grade.
        </p>
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-white">Token Specification</h2>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>Blockchain: BSC</li>
              <li>Standard: ERC-20</li>
              <li>Decimals: 6</li>
              <li>Total Supply: 315,000 FDGC</li>
              <li>Minting: Removed</li>
              <li>Max Fee Cap: 5%</li>
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-white">Audit</h2>
            <p className="mt-4 text-zinc-400">
              Smart contract audited July 29, 2025. All findings remediated.
            </p>
            <a
              href="/documents/FDGC-Smart-Contract-Audit-July-29-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3.5 bg-fdgc-gold text-fdgc-bg-primary font-medium border border-transparent hover:border-fdgc-gold/50 transition-all duration-200"
            >
              Download Audit Report
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
