"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";

const dotPattern = (color: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'><circle fill='${color}' cx='8' cy='8' r='1.5'/></svg>`
  )}")`;

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Static dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: dotPattern("#334155") }}
      />
      {/* Glowing dots revealed around the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          backgroundImage: dotPattern("#3b82f6"),
          WebkitMaskImage: useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />
      {/* Soft vignette so dots fade toward the edges */}
      <div className="absolute inset-0 pointer-events-none bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_95%)]" />
      <div className={cn("relative z-20 w-full", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 1.5, ease: "linear", delay: 0.4 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
