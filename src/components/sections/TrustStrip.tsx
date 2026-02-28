import Image from "next/image";

const TRUST_IMAGE =
  "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=80";

export default function TrustStrip() {
  return (
    <section className="relative h-[50vh] min-h-[320px] sm:min-h-[400px] sm:h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={TRUST_IMAGE}
          alt="Stacked gold bars vault cinematic"
          fill
          className="object-cover brightness-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-8 sm:py-0">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Reserve-Backed. Audited. Settlement-Ready.
        </h2>
        <p className="mt-6 text-sm text-zinc-500 max-w-xl mx-auto">
          Fixed supply of 315,000 FDGC. Allocated gold reserves. Smart
          contract audited July 2025. All findings remediated.
        </p>
      </div>
    </section>
  );
}
