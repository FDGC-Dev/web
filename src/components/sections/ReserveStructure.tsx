import Image from "next/image";

const RESERVE_IMAGE = "/images/reserve-openpit.png";

const bullets = [
  "Allocated gold reserves. No fractional backing.",
  "Third-party custodial partners with institutional-grade security.",
  "Reserve audits conducted on a defined schedule.",
  "Geographic diversification of storage facilities.",
];

export default function ReserveStructure() {
  return (
    <section id="reserve-structure" className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={RESERVE_IMAGE}
          alt="Open-pit mining operation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, #0A0F14 0%, #0A0F14 55%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-24 flex justify-end">
        <div className="max-w-xl ml-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
            Reserve-Backed. Custodial Safeguards.
          </h2>
          <p className="mt-8 text-zinc-400 leading-relaxed">
            Every FDGC token is backed by allocated physical gold held in
            accredited custodial facilities. Independent verification.
            Transparent allocation.
          </p>
          <ul className="mt-12 space-y-4">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300">
                <span className="text-fdgc-gold mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
