import Image from "next/image";

const SECURITY_IMAGE = "/images/security-audit.png";

const fixes = [
  "Replay attack vector eliminated.",
  "Signature malleability addressed.",
  "Domain separator secured for cross-chain safety.",
  "Minting removed. Supply fixed.",
  "Fee cap limited to 5%. Centralization risk mitigated via governance plan.",
];

export default function SecurityAudit() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={SECURITY_IMAGE}
          alt="Aerial industrial excavation site"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0F14 0%, #0A0F14 60%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
            Audited. Hardened. Production-Ready.
          </h2>
          <p className="mt-8 text-zinc-400 leading-relaxed">
            Independent smart contract audit completed July 29, 2025. All
            identified findings remediated.
          </p>
          <ul className="mt-12 space-y-4">
            {fixes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300">
                <span className="text-fdgc-gold mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="/documents/FDGC-Smart-Contract-Audit-July-29-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] mt-12 px-6 sm:px-8 py-3.5 bg-fdgc-gold text-fdgc-bg-primary font-medium border border-transparent hover:border-fdgc-gold/50 hover:bg-fdgc-gold/90 transition-all duration-200"
          >
            Download Full Audit Report
          </a>
        </div>
      </div>
    </section>
  );
}
