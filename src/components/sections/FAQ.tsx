"use client";

import { useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import Divider from "../ui/Divider";

const items = [
  {
    q: "How is the reserve verified?",
    a: "Reserve verification is conducted by independent third parties on a defined schedule. Allocated gold is held in accredited custodial facilities. Reserve coverage metrics are published and on-chain verifiable where applicable.",
  },
  {
    q: "What are the redemption mechanics?",
    a: "Redemption is conducted through authorized partners under defined terms. Minimum thresholds and settlement timelines apply. Contact institutional relations for redemption procedures.",
  },
  {
    q: "What is the fee structure?",
    a: "The smart contract enforces a maximum fee cap of 5%. All fees are disclosed and transparent. No hidden or variable charges beyond the cap.",
  },
  {
    q: "What governance controls exist?",
    a: "Multi-signature controls govern critical operations. A governance plan addresses centralization risk with a path toward progressive decentralization. Upgrade procedures are documented.",
  },
  {
    q: "Is the smart contract audited?",
    a: "Yes. An independent audit was completed July 29, 2025. One Medium, three Low, and two Info findings were identified. All have been remediated. The audit report is publicly available.",
  },
  {
    q: "Is FDGC available globally?",
    a: "FDGC operates in compliance with applicable law. Availability varies by jurisdiction. Institutional and qualified participants should confirm regulatory status in their region before use.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-fdgc-bg-primary py-16 sm:py-24">
      <SectionContainer>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Frequently Asked Questions.
        </h2>
        <p className="mt-4 text-zinc-500">
          Institutional-grade clarity on reserve, redemption, fees, and
          compliance.
        </p>
        <div className="mt-12 sm:mt-16">
          {items.map((item, i) => (
            <div key={i}>
              <Divider />
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-5 sm:py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors -mx-4 sm:-mx-6 px-4 sm:px-6 min-h-[44px] sm:min-h-0"
              >
                <span className="font-medium text-white text-sm sm:text-base">{item.q}</span>
                <span
                  className={`text-zinc-500 transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-6">
                  <p className="text-zinc-500 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
          <Divider />
        </div>
      </SectionContainer>
    </section>
  );
}
