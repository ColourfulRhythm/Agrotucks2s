"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Lazy-load Sparkles to avoid blocking initial render (performance)
const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((mod) => mod.SparklesCore),
  { ssr: false }
);

type HeroWithSparklesProps = {
  children: React.ReactNode;
  className?: string;
  /** Lower = better performance. Default 80 for hero. */
  particleDensity?: number;
};

export function HeroWithSparkles({
  children,
  className,
  particleDensity = 80,
}: HeroWithSparklesProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Sparkles background - subtle, performance-optimized */}
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={particleDensity}
          className="absolute inset-0 h-full w-full"
          particleColor="#5ca872"
          speed={1}
        />
      </div>
      {children}
    </div>
  );
}
