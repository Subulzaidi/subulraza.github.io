"use client";

import React from "react";
import { cn } from "../../utils/function/cn";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled = false,
  type = "button",
  title,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      title={title}
      className={cn(
        // Base layout and positioning
        "inline-flex items-center justify-center rounded-lg",
        // Responsive padding for gradient border
        "px-[2px] py-[1px] sm:px-[2px] sm:py-[2px]",
        // Gradient background
        "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
        // Responsive width handling
        "min-w-[80px] w-auto max-w-full",
        // Enhanced hover and focus states
        "transition-all duration-300 ease-in-out",
        "hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2",
        // Touch-friendly sizing on mobile
        "touch-manipulation",
        // Disabled states
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
        className
      )}
    >
      <span
        className={cn(
          // Responsive padding for inner content
          "px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3",
          // Rounded corners matching parent
          "rounded-lg",
          // Background and text styling
          "bg-[#0F172A] text-white font-bold",
          // Responsive text sizing
          "text-xs sm:text-sm md:text-base lg:text-lg",
          // Text wrapping and overflow handling
          "whitespace-nowrap overflow-hidden text-ellipsis",
          // Smooth transitions for inner element
          "transition-all duration-300 ease-in-out",
          // Flex properties for content alignment
          "flex items-center justify-center gap-1 sm:gap-2",
          // Line height for better text alignment
          "leading-tight"
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
