"use client";

import { ScrollReveal } from "./ScrollReveal";

export function TransitionSection() {
  return (
    <section className="border-y border-[rgba(247,243,235,0.04)] py-20 text-center">
      <div className="mx-auto max-w-[900px] px-7">
        <ScrollReveal>
          <h2 className="mb-4 text-[clamp(2rem,4.5vw,3.2rem)] font-normal leading-tight tracking-[-1.5px] text-[#f7f3eb]">
            What if you could grow your own <i className="text-[#5ca872]">clean food</i> — and have it delivered to your door in Lagos?
          </h2>
          <p className="mx-auto max-w-[560px] text-[1.1rem] font-light leading-[1.7] text-[rgba(247,243,235,0.55)]">
            You don&apos;t have to leave Lagos. You don&apos;t have to become a farmer. You just need land that works for you — even when you&apos;re not there.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
