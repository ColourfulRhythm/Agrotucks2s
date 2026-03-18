"use client";

import { ScrollReveal } from "./ScrollReveal";

const benefits = [
  "✓ Instant Allocation",
  "✓ Internal Roads",
  "✓ Drainage System",
  "✓ Solar Partnership",
  "✓ Professional Farmers",
  "✓ Local Workers",
  "✓ Full Documentation",
  "✓ Tree Planted In Your Name",
  "✓ Lagos Delivery Available",
];

export function PricingSection() {
  return (
    <section className="border-t border-[rgba(247,243,235,0.04)] py-20">
      <div className="mx-auto max-w-[900px] px-7">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[3px] text-[#c0392b]">Pricing</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.05] tracking-[-1.5px] text-[#f7f3eb]">
              Your land. <i className="text-[#c96b3c]">Your price.</i>
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto mb-10 grid max-w-[700px] grid-cols-1 gap-5 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-[20px] border border-[rgba(247,243,235,0.06)] bg-[#111110] p-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,107,60,0.3)]">
              <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[2.5px] text-[#5ca872]">Per Plot</div>
              <div className="mb-1 font-[family-name:var(--font-instrument)] text-[3rem] tracking-[-2px] text-[#f7f3eb]">₦1.5M</div>
              <div className="mb-5 text-[0.9rem] text-[rgba(247,243,235,0.3)]">Instant allocation</div>
              <span className="inline-block rounded-full bg-[#c96b3c] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[1.5px] text-white">Entry Level</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-[20px] border border-[#c96b3c] bg-[rgba(201,107,60,0.04)] p-9 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[2.5px] text-[#5ca872]">Per Acre</div>
              <div className="mb-1 font-[family-name:var(--font-instrument)] text-[3rem] tracking-[-2px] text-[#f7f3eb]">₦6.5M</div>
              <div className="mb-5 text-[0.9rem] text-[rgba(247,243,235,0.3)]">Full farmstead potential</div>
              <span className="inline-block rounded-full bg-[#c96b3c] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[1.5px] text-white">Best Value</span>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[700px] flex-wrap justify-center gap-2.5">
            {benefits.map((b) => (
              <div key={b} className="rounded-full border border-[rgba(247,243,235,0.06)] bg-[rgba(247,243,235,0.04)] px-5 py-2.5 text-[0.85rem] font-medium text-[rgba(247,243,235,0.55)]">
                {b}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
