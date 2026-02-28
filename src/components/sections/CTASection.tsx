import Image from "next/image";
import LinkButton from "../ui/LinkButton";

const CTA_IMAGE = "/images/cta-section.png";

export default function CTASection() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CTA_IMAGE}
          alt="Gold bars institutional"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-fdgc-bg-primary/94" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-12 sm:py-24">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight">
          Settlement-Grade Programmable Gold.
        </h2>
        <p className="mt-6 text-zinc-500 max-w-2xl mx-auto">
          Fixed supply. Audited contract. Reserve-backed. Built for
          institutions.
        </p>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 [&>*]:w-full sm:[&>*]:w-auto">
          <LinkButton href="/get-started" variant="primary">
            Get Started
          </LinkButton>
          <LinkButton href="/documentation" variant="secondary">
            Read Documentation
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
