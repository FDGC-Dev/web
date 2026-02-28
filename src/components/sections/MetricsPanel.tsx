"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionContainer from "../ui/SectionContainer";
import CopyButton from "../ui/CopyButton";

const METRICS_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80";

interface FDGCMetrics {
  totalSupply: string;
  circulating: string;
  reserveCoverage: string;
  blockchain: string;
  auditStatus: string;
  contractAddress: string;
  marketCap?: string;
  price?: string;
  volume24h?: string;
  explorerUrl: string;
  cmcUrl: string;
}

export default function MetricsPanel() {
  const [metrics, setMetrics] = useState<FDGCMetrics | null>(null);

  useEffect(() => {
    fetch("/api/fdgc-metrics")
      .then((res) => res.json())
      .then((data: FDGCMetrics) => setMetrics(data))
      .catch(() => setMetrics(null));
  }, []);

  const displayMetrics = metrics
    ? [
        { label: "Total Supply", value: metrics.totalSupply, unit: "FDGC" },
        { label: "Circulating", value: metrics.circulating, unit: "FDGC" },
        {
          label: "Reserve Coverage",
          value: metrics.reserveCoverage,
          unit: "",
        },
        { label: "Blockchain", value: metrics.blockchain },
        { label: "Audit Status", value: metrics.auditStatus },
        {
          label: "Contract Address",
          value: `${metrics.contractAddress.slice(0, 6)}...${metrics.contractAddress.slice(-6)}`,
          copyable: true,
          explorer: true,
          fullValue: metrics.contractAddress,
          explorerUrl: metrics.explorerUrl,
        },
      ]
    : [
        { label: "Total Supply", value: "—", unit: "FDGC" },
        { label: "Circulating", value: "—", unit: "FDGC" },
        { label: "Reserve Coverage", value: "—", unit: "%" },
        { label: "Blockchain", value: "—" },
        { label: "Audit Status", value: "—" },
        {
          label: "Contract Address",
          value: "—",
          copyable: false,
          explorer: false,
          fullValue: "",
          explorerUrl: "",
        },
      ];

  return (
    <section
      id="live-metrics"
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={METRICS_IMAGE}
          alt="Dark industrial metal texture"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-fdgc-bg-primary/95" />
      </div>
      <div className="relative w-full py-12 sm:py-24">
        <SectionContainer>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Live Metrics.
          </h2>
          <p className="mt-4 text-zinc-500">
            Real-time token and reserve data. Transparent. On-chain verifiable.
          </p>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {displayMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-fdgc-bg-primary/98 border border-white/10 p-6 sm:p-8 -m-px"
              >
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  {m.label}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  {"explorer" in m && m.explorer && "explorerUrl" in m ? (
                    <a
                      href={(m as { explorerUrl: string }).explorerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-2xl font-semibold text-white tabular-nums hover:text-fdgc-gold transition-all duration-200 hover:border-b hover:border-fdgc-gold/50 break-all"
                    >
                      {m.value}
                    </a>
                  ) : (
                    <span className="text-lg sm:text-2xl font-semibold text-white tabular-nums">
                      {m.value}
                      {"unit" in m && m.unit && (
                        <span className="text-zinc-500 font-normal ml-1 text-base sm:text-lg">
                          {m.unit}
                        </span>
                      )}
                    </span>
                  )}
                  {"copyable" in m && m.copyable && "fullValue" in m && (
                    <CopyButton
                      value={(m as { fullValue: string }).fullValue}
                      ariaLabel="Copy contract address"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
