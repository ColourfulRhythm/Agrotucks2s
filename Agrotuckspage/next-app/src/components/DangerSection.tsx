"use client";

import { ScrollReveal } from "./ScrollReveal";

const cards = [
  { stat: "100+", title: "Decibels daily", desc: "Lagos streets exceed WHO damage thresholds every single day. Your nervous system never rests." },
  { stat: "45 days", title: "Lost in traffic yearly", desc: "3 hours a day in exhaust fumes. 1,095 hours a year. Gone. While your body deteriorates." },
  { stat: "3%", title: "Nigerians over 65", desc: "Japan: 29%. UK: 19%. We don't have elders because people aren't making it there." },
  { stat: "24%", title: "Strokes under 50", desc: "Not elderly. Professionals. Parents. People your age. Stress, diet, and no rest." },
];

export function DangerSection() {
  return (
    <section className="border-t border-[rgba(247,243,235,0.04)] py-20">
      <div className="mx-auto max-w-[900px] px-7">
        <ScrollReveal>
          <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[3px] text-[#c0392b]">The Problem Nobody Talks About</p>
          <h2 className="mb-3 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.05] tracking-[-1.5px] text-[#f7f3eb]">
            You&apos;re eating poison
            <br />
            and calling it <i className="text-[#c96b3c]">food.</i>
          </h2>
          <p className="mb-12 max-w-[600px] text-[1.05rem] font-light leading-[1.7] text-[rgba(247,243,235,0.55)]">
            The produce in Lagos markets is chemically ripened, sprayed with preservatives, and trucked for days before reaching your plate. You can&apos;t trace it. You can&apos;t trust it.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={100 * (i + 1)}>
              <div className="group relative overflow-hidden rounded-2xl border border-[rgba(247,243,235,0.04)] bg-[#111110] p-8">
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#c0392b] opacity-60" />
                <div className="font-[family-name:var(--font-instrument)] text-[2.4rem] tracking-[-1px] text-[#c0392b]">{card.stat}</div>
                <h3 className="mb-2 text-[1.4rem] font-normal tracking-[-0.5px] text-[#f7f3eb]">{card.title}</h3>
                <p className="text-[0.92rem] font-light leading-[1.65] text-[rgba(247,243,235,0.55)]">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
