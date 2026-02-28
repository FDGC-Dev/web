import Link from "next/link";

interface LinkButtonProps {
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const base =
  "px-6 sm:px-8 py-3.5 min-h-[44px] font-medium transition-all duration-200 inline-flex items-center justify-center border border-transparent hover:border-fdgc-gold/50";

const variants = {
  primary:
    "bg-fdgc-gold text-fdgc-bg-primary hover:bg-fdgc-gold/90",
  secondary:
    "border-white/30 text-white bg-transparent hover:bg-white/5 hover:border-fdgc-gold/50",
};

export default function LinkButton({
  href,
  external = false,
  variant = "primary",
  children,
  className = "",
}: LinkButtonProps) {
  const combined = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("#")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
