import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className = "", ...props }, ref) => {
    const base = "px-8 py-3.5 font-medium transition duration-200 inline-flex items-center justify-center";

    const variants = {
      primary: "bg-fdgc-gold text-fdgc-bg-primary hover:bg-fdgc-gold/90",
      secondary: "border border-white/30 text-white bg-transparent hover:bg-white/5",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
