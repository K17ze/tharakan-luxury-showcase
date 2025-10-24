import { ReactNode } from "react";

interface GoldFoilTextProps {
  children: ReactNode;
  className?: string;
}

export const GoldFoilText = ({ children, className = "" }: GoldFoilTextProps) => {
  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--luxury-gold)) 0%, hsl(var(--luxury-gold-light)) 25%, hsl(var(--luxury-gold)) 50%, hsl(var(--luxury-gold-light)) 75%, hsl(var(--luxury-gold)) 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 3s linear infinite",
      }}
    >
      {children}
    </span>
  );
};
