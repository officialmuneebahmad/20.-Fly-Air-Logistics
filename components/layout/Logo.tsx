import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light"; // dark = for light backgrounds (black/red logo); light = for dark backgrounds (white/red logo)
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  href = "/",
  className = "",
}) => {
  const isLight = variant === "light";
  // Light variant (for dark backgrounds) uses logo-dark-mode.png (white text + red FLY AIR)
  // Dark variant (for light backgrounds) uses logo-transparent.png (black text + red FLY AIR)
  const imageSrc = isLight ? "/logo-dark-mode.png" : "/logo-transparent.png";

  const sizeStyles = {
    sm: "h-9 w-auto",
    md: "h-11 sm:h-12 w-auto",
    lg: "h-14 sm:h-16 w-auto",
  }[size];

  const content = (
    <div
      className={`inline-flex items-center select-none flex-shrink-0 ${className}`}
      aria-label="FLY AIR LOGISTICS - International Freight Forwarders"
    >
      <img
        src={imageSrc}
        alt="FLY AIR LOGISTICS - International Freight Forwarders"
        className={`${sizeStyles} object-contain max-w-[220px] sm:max-w-[280px] md:max-w-[320px]`}
        width={978}
        height={237}
        loading="eager"
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none flex-shrink-0"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
