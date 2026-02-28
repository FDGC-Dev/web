import Link from "next/link";
import SectionContainer from "../ui/SectionContainer";

const CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Token Architecture", href: "/#token-architecture" },
      { label: "Reserve Structure", href: "/#reserve-structure" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Live Metrics", href: "/#live-metrics" },
    ],
  },
  {
    title: "Security",
    links: [
      {
        label: "Audit Report",
        href: "/documents/FDGC-Smart-Contract-Audit-July-29-2025.pdf",
        external: true,
      },
      {
        label: "Smart Contract",
        href: `https://bscscan.com/token/${CONTRACT_ADDRESS}`,
        external: true,
      },
      { label: "Governance", href: "/#governance" },
      { label: "Risk Framework", href: "/documentation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      {
        label: "BSCScan",
        href: `https://bscscan.com/token/${CONTRACT_ADDRESS}`,
        external: true,
      },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/get-started" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-fdgc-bg-primary border-t border-white/10 py-12 sm:py-20">
      <SectionContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 hover:text-white hover:border-fdgc-gold/50 transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
          <p className="text-xs text-zinc-600">
            FDGC — Fintech Digital Gold Coin. Reserve-backed. Settlement-grade.
          </p>
          <p className="text-xs text-zinc-600 mt-1">
            Blockchain: BSC | Standard: ERC-20 | Decimals: 6
          </p>
          <p className="text-xs text-zinc-600 mt-1">
            Audited July 2025. All findings remediated.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
