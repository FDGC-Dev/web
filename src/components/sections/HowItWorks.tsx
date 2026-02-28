import Image from "next/image";

const HOW_IMAGE = "/images/how-it-works.png";

const steps = [
  {
    title: "Reserve Allocation",
    description:
      "Physical gold is allocated and custodied in accredited facilities. Independent verification confirms reserve coverage before any token issuance.",
  },
  {
    title: "Token Issuance",
    description:
      "FDGC tokens are issued on BSC against verified reserves. ERC-20 standard ensures compatibility with wallets, exchanges, and institutional custody infrastructure.",
  },
  {
    title: "Custody & Settlement",
    description:
      "Tokens move through standard settlement rails. Programmable gold enables instant transfer, custody integration, and transparent on-chain accounting.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HOW_IMAGE}
          alt="Snow-covered open-pit mine aerial"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-fdgc-bg-primary/93" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-24">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
          Three-Step Institutional Model.
        </h2>
        <p className="mt-6 text-zinc-400 max-w-2xl">
          Reserve allocation. Token issuance. Custody and settlement.
        </p>
        <div className="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="border-b border-white/10 pb-8">
              <p className="text-fdgc-gold text-sm uppercase tracking-wider">
                Step {i + 1}
              </p>
              <h3 className="font-serif text-2xl text-white mt-4">{step.title}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
