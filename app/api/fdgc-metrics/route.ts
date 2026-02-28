import { NextResponse } from "next/server";

const CMC_SLUG = "bobocoin-io";
const CONTRACT_ADDRESS = "0x36e41aa32b0c83739183c839deafa7b7d2e93c43";
const ETHERSCAN_URL = `https://etherscan.io/token/${CONTRACT_ADDRESS}`;
const CMC_PAGE_URL = "https://coinmarketcap.com/currencies/bobocoin-io/";

export interface FDGCMetrics {
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

async function fetchFromCMC(): Promise<FDGCMetrics | null> {
  const apiKey = process.env.COINMARKETCAP_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=${CMC_SLUG}&convert=USD`,
      {
        headers: { "X-CMC_PRO_API_KEY": apiKey },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return null;

    const json = await res.json();
    const data = json?.data;
    const coin = data ? Object.values(data)[0] : null;
    if (!coin || typeof coin !== "object") return null;

    const c = coin as {
      total_supply?: number;
      circulating_supply?: number;
      quote?: { USD?: Record<string, unknown> };
    };
    const quote = c?.quote?.USD;
    const supply = c.total_supply ?? c.circulating_supply;

    const formatNum = (n: number) => {
      if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
      if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
      if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`;
      return `$${n?.toFixed(2) ?? "—"}`;
    };

    return {
      totalSupply: supply != null ? `${(supply / 1000).toFixed(0)}K` : "315K",
      circulating:
        c.circulating_supply != null
          ? `${(c.circulating_supply / 1000).toFixed(0)}K`
          : "315K",
      reserveCoverage:
        supply != null && supply > 0 && c.circulating_supply != null
          ? `${Math.round((c.circulating_supply / supply) * 100)}%`
          : "100%",
      blockchain: "Ethereum",
      auditStatus: "Verified July 29, 2025",
      contractAddress: CONTRACT_ADDRESS,
      marketCap:
        quote?.market_cap != null
          ? formatNum(Number(quote.market_cap))
          : undefined,
      price:
        quote?.price != null
          ? `$${Number(quote.price).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : undefined,
      volume24h:
        quote?.volume_24h != null
          ? formatNum(Number(quote.volume_24h))
          : undefined,
      explorerUrl: ETHERSCAN_URL,
      cmcUrl: CMC_PAGE_URL,
    };
  } catch {
    return null;
  }
}

function getFallbackMetrics(): FDGCMetrics {
  return {
    totalSupply: "315K",
    circulating: "315K",
    reserveCoverage: "100%",
    blockchain: "Ethereum",
    auditStatus: "Verified July 29, 2025",
    contractAddress: CONTRACT_ADDRESS,
    marketCap: "$1.72B",
    price: "$5,481.23",
    volume24h: "$344.12K",
    explorerUrl: ETHERSCAN_URL,
    cmcUrl: CMC_PAGE_URL,
  };
}

export async function GET() {
  const metrics = (await fetchFromCMC()) ?? getFallbackMetrics();
  return NextResponse.json(metrics);
}
