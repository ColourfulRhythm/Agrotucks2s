"use client";

import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { num: 1, title: "Tell us what you want", desc: "How many acres? What do you want to grow? Farmhouse, greenhouse, or just crops? We'll plan it together." },
  { num: 2, title: "Visit the site", desc: "Come walk the land. Breathe the air. See the difference with your own eyes. The land is ready." },
  { num: 3, title: "Claim your acre", desc: "Legal. Documented. Instant allocation. Your name on the land. Full ownership." },
  { num: 4, title: "Grow & harvest", desc: "Farm it yourself or let our professional farmers manage everything. Harvest gets delivered to your Lagos home in branded AgroTucks boxes." },
];

export function HowSection() {
  return (
    <section className="border-t border-[rgba(247,243,235,0.04)] py-20">
      <div className="mx-auto max-w-[900px] px-7">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[3px] text-[#c0392b]">How It Works</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.05] tracking-[-1.5px] text-[#f7f3eb]">
              Four steps to your <i className="text-[#c96b3c]">own food supply.</i>
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto flex max-w-[700px] flex-col gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={100 * i}>
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#c96b3c] bg-[rgba(201,107,60,0.1)] font-[family-name:var(--font-instrument)] text-[1.3rem] text-[#c96b3c]">{s.num}</div>
                <div>
                  <h4 className="mb-1 text-[1.15rem] font-semibold text-[#f7f3eb]">{s.title}</h4>
                  <p className="text-[0.92rem] font-light leading-[1.6] text-[rgba(247,243,235,0.55)]">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
