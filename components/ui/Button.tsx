import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "outline-red"
    | "outline-white"
    | "white"
    | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  // CRITICAL UI RULE: All buttons are strictly RECTANGLE ONLY (rounded-none / 0px border-radius)
  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-wide uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2 font-semibold",
    lg: "px-8 py-4 text-base gap-2.5 font-bold tracking-wider",
  };

  const variantClasses = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-hover active:bg-brand-red-dark border border-brand-red focus:ring-brand-red shadow-sm",
    secondary:
      "bg-brand-black text-white hover:bg-brand-black-charcoal active:bg-black border border-brand-black focus:ring-brand-black shadow-sm",
    outline:
      "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white focus:ring-brand-black",
    "outline-red":
      "bg-transparent text-brand-red border-2 border-brand-red hover:bg-brand-red hover:text-white focus:ring-brand-red",
    "outline-white":
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-black focus:ring-white",
    white:
      "bg-white text-brand-black hover:bg-brand-gray-100 active:bg-brand-gray-200 border border-white focus:ring-white shadow-md",
    ghost:
      "bg-transparent text-brand-black hover:bg-brand-gray-100 border border-transparent focus:ring-brand-gray-400",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

