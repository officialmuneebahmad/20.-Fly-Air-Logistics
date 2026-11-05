import React from "react";

interface WingDividerProps {
  className?: string;
  theme?: "light" | "dark";
  centered?: boolean;
}

export const WingDivider: React.FC<WingDividerProps> = ({
  className = "",
  theme = "light",
  centered = true,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`flex items-center gap-3 ${
        centered ? "justify-center" : "justify-start"
      } my-6 ${className}`}
      aria-hidden="true"
    >
      {/* Left geometric accent line */}
      <div
        className={`h-0.5 w-12 sm:w-20 ${
          isDark
            ? "bg-gradient-to-r from-transparent to-[#FF3B53]"
            : "bg-gradient-to-r from-transparent via-brand-gray-300 to-brand-red"
        }`}
      />

      {/* Stylized Wings Icon with High-Contrast Theme Support */}
      <svg
        width="32"
        height="12"
        viewBox="0 0 48 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M24 16L4 8L16 4L24 10L32 4L44 8L24 16Z"
          fill={isDark ? "#FF3B53" : "#C8102E"}
        />
        <path
          d="M24 8L12 3L18 0.5L24 4L30 0.5L36 3L24 8Z"
          fill={isDark ? "#FFFFFF" : "#0F1115"}
        />
      </svg>

      {/* Right geometric accent line */}
      <div
        className={`h-0.5 w-12 sm:w-20 ${
          isDark
            ? "bg-gradient-to-l from-transparent to-[#FF3B53]"
            : "bg-gradient-to-l from-transparent via-brand-gray-300 to-brand-red"
        }`}
      />
    </div>
  );
};

export default WingDivider;
