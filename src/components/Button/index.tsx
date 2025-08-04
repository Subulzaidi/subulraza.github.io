// components/Button.tsx
"use client";

import React from "react";
import { cn } from "../../utils/function/cn"; // ensure this exists or remove if unnecessary

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
        "inline-flex items-center justify-center px-[2px] py-[1px]  rounded-lg",
        "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
        "transition-all duration-300 hover:opacity-90",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "px-6 py-2 rounded-lg bg-[#0F172A] text-white font-bold text-sm md:text-base"
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
