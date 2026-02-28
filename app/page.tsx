import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ReserveStructure from "@/components/sections/ReserveStructure";
import TokenArchitecture from "@/components/sections/TokenArchitecture";
import SecurityAudit from "@/components/sections/SecurityAudit";
import HowItWorks from "@/components/sections/HowItWorks";
import Governance from "@/components/sections/Governance";
import MetricsPanel from "@/components/sections/MetricsPanel";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="[&>section:not(:last-child)]:mb-12 md:mb-16 lg:mb-[100px]">
      <Hero />
      <TrustStrip />
      <ReserveStructure />
      <TokenArchitecture />
      <SecurityAudit />
      <HowItWorks />
      <Governance />
      <MetricsPanel />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
