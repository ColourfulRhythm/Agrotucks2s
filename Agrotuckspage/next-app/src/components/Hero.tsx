"use client";

import { HeroWithSparkles } from "./HeroWithSparkles";

export function Hero() {
  return (
    <HeroWithSparkles className="relative overflow-hidden bg-[#0a0a0a] pb-20 pt-[100px] text-center">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(61,122,84,.12), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(192,57,43,.04), transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-[900px] px-7">
        <div className="font-[family-name:var(--font-instrument)] text-[38px] text-[#f7f3eb] mb-12">
          Agro<i className="text-[#c96b3c]">Tucks</i>
        </div>
        <div className="mb-8 inline-block rounded-full border border-[rgba(92,168,114,0.25)] bg-[rgba(61,122,84,0.15)] px-6 py-2">
          <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#5ca872]">
            Countryside Farmstead Community
          </span>
        </div>
        <h1 className="mb-5 text-[clamp(2.6rem,6vw,4.2rem)] font-normal leading-none tracking-[-2px] text-[#f7f3eb]">
          The food you eat is <em className="text-[#c0392b]">killing you.</em>
          <br />
          Your land can <em className="text-[#5ca872]">save you.</em>
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] text-[clamp(1rem,2vw,1.2rem)] font-light leading-[1.7] text-[rgba(247,243,235,0.55)]">
          Nigeria has the lowest life expectancy on earth. 54.9 years. The biggest killers aren&apos;t diseases — they&apos;re stress, toxic air, and the food on your plate. There&apos;s a way out.
        </p>
        <div className="inline-flex items-center gap-4 rounded-full border border-[rgba(192,57,43,0.2)] bg-[rgba(192,57,43,0.1)] px-8 py-3.5">
          <div className="font-[family-name:var(--font-instrument)] text-[32px] tracking-[-1px] text-[#c0392b]">54.9</div>
          <div className="text-left text-sm leading-snug text-[rgba(247,243,235,0.5)]">
            years — Nigeria&apos;s
            <br />
            life expectancy
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(92,168,114,.3) 30%, rgba(92,168,114,.3) 70%, transparent)",
        }}
      />
    </HeroWithSparkles>
  );
}
