import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Underground gold mine tunnel cinematic"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0F14 0%, #0A0F14 50%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl">
          Programmable Gold. Settlement-Grade Infrastructure.
        </h1>
        <p className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed">
          FDGC is a reserve-backed digital asset tokenized on BSC. Fixed
          supply. Audited smart contract. Built for institutional custody and
          settlement.
        </p>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 [&>*]:w-full sm:[&>*]:w-auto">
          <LinkButton href="#token-architecture" variant="primary">
            View Token Architecture
          </LinkButton>
          <LinkButton
            href="/documents/FDGC-Smart-Contract-Audit-July-29-2025.pdf"
            external
            variant="secondary"
          >
            Read Audit Report
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
