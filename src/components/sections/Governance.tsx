import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const GOVERNANCE_IMAGE = "/images/governance.png";

const points = [
  "Multi-signature controls on critical operations.",
  "Governance plan for progressive decentralization.",
  "Reserve verification schedule published.",
  "Fee structure capped and disclosed.",
  "Incident response and upgrade procedures documented.",
];

export default function Governance() {
  return (
    <section id="governance" className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={GOVERNANCE_IMAGE}
          alt="Mine tunnel with golden light"
          fill
          className="object-cover brightness-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F14]/95 via-[#0A0F14]/85 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-24">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
            Governance. Risk Controls. Transparency.
          </h2>
          <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
            A defined governance framework addresses operational, technical, and
            reserve-related risks. Centralization mitigations documented and
            planned.
          </p>
          <ul className="mt-12 space-y-4">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300">
                <span className="text-fdgc-gold mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <LinkButton href="/documentation" variant="secondary">
              View Documentation
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
