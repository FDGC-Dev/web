import Image from "next/image";
import SectionContainer from "../ui/SectionContainer";

const TOKEN_IMAGE = "/images/token-architecture.png";

const specs = [
  { label: "Blockchain", value: "BSC" },
  { label: "Standard", value: "ERC-20" },
  { label: "Decimals", value: "6" },
  { label: "Total Supply", value: "315,000 FDGC" },
  { label: "Minting", value: "Removed" },
  { label: "Max Fee Cap", value: "5%" },
];

export default function TokenArchitecture() {
  return (
    <section id="token-architecture" className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={TOKEN_IMAGE}
          alt="Open-pit mine industrial landscape"
          fill
          className="object-cover brightness-[0.80]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative w-full py-12 sm:py-24">
        <SectionContainer>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
            Engineered for Institutional Use.
          </h2>
          <p className="mt-6 text-zinc-400 max-w-2xl">
            ERC-20 standard. Six decimal precision. Fixed supply. Designed for
            settlement, custody, and programmable gold applications.
          </p>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {specs.map(({ label, value }) => (
              <div
                key={label}
                className="bg-fdgc-bg-primary/95 border border-white/10 p-6 sm:p-8 -m-px"
              >
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  {label}
                </p>
                <p className="mt-2 text-xl text-white">{value}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
