"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    if (!name || !phone || !email) {
      alert("Please fill in your name, phone, and email.");
      return;
    }
    console.log("Lead:", { name, phone, email });
    setSubmitted(true);
  };

  return (
    <section id="claim" className="relative border-t border-[rgba(247,243,235,0.04)] py-[100px] pb-20">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,107,60,0.05),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-[620px] px-7 text-center">
        <ScrollReveal>
          <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[3px] text-[#c0392b]">Start Here</p>
      <h2 className="mb-3 text-[clamp(2rem,4.5vw,3rem)] font-normal leading-tight tracking-[-1.5px] text-[#f7f3eb]">
        Your acre is <i className="text-[#c96b3c]">waiting.</i>
      </h2>
      <p className="mb-10 text-[1.05rem] font-light leading-[1.7] text-[rgba(247,243,235,0.55)]">
        Tell us what you&apos;re looking for. We&apos;ll reach out within 24 hours with available plots, pricing, and next steps to visit the site.
      </p>
        </ScrollReveal>
        {!submitted ? (
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="mx-auto max-w-[520px]">
              <div className="mb-3 flex gap-3 max-md:flex-col">
                <input name="name" type="text" placeholder="Full name" required className="flex-1 rounded-[14px] border border-[rgba(247,243,235,0.08)] bg-[rgba(247,243,235,0.03)] px-5 py-4 text-[0.95rem] text-[#f7f3eb] placeholder:text-[rgba(247,243,235,0.25)] focus:border-[#c96b3c] focus:outline-none focus:ring-0" />
                <input name="phone" type="tel" placeholder="Phone number" required className="flex-1 rounded-[14px] border border-[rgba(247,243,235,0.08)] bg-[rgba(247,243,235,0.03)] px-5 py-4 text-[0.95rem] text-[#f7f3eb] placeholder:text-[rgba(247,243,235,0.25)] focus:border-[#c96b3c] focus:outline-none focus:ring-0" />
              </div>
              <div className="mb-3 flex gap-3 max-md:flex-col">
                <input name="email" type="email" placeholder="Email address" required className="flex-1 rounded-[14px] border border-[rgba(247,243,235,0.08)] bg-[rgba(247,243,235,0.03)] px-5 py-4 text-[0.95rem] text-[#f7f3eb] placeholder:text-[rgba(247,243,235,0.25)] focus:border-[#c96b3c] focus:outline-none focus:ring-0" />
                <select name="plots" className="flex-1 rounded-[14px] border border-[rgba(247,243,235,0.08)] bg-[rgba(247,243,235,0.03)] px-5 py-4 pr-11 text-[0.95rem] text-[#f7f3eb] focus:border-[#c96b3c] focus:outline-none focus:ring-0" required>
                  <option value="" disabled>Plots / Acres?</option>
                  <option value="1-plot">1 plot (₦1.5M)</option>
                  <option value="2-plots">2 plots</option>
                  <option value="3-5-plots">3–5 plots</option>
                  <option value="1-acre">1 acre (₦6.5M)</option>
                  <option value="2-acres">2+ acres</option>
                  <option value="not-sure">Not sure — advise me</option>
                </select>
              </div>
              <div className="mb-3">
                <select name="goal" className="w-full rounded-[14px] border border-[rgba(247,243,235,0.08)] bg-[rgba(247,243,235,0.03)] px-5 py-4 text-[0.95rem] text-[#f7f3eb] focus:border-[#c96b3c] focus:outline-none focus:ring-0">
                  <option value="" disabled>What&apos;s your goal?</option>
                  <option value="grow-food">Grow food for my family</option>
                  <option value="farm-business">Start a farm business</option>
                  <option value="build-home">Build a farmstead home</option>
                  <option value="weekend-retreat">Weekend retreat</option>
                  <option value="investment">Land investment</option>
                  <option value="all">All of the above</option>
                </select>
              </div>
              <button type="submit" className="mt-2 w-full rounded-full bg-[#c96b3c] py-5 text-[1.05rem] font-bold text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#d87a4e] hover:shadow-[0_12px_32px_rgba(201,107,60,0.3)]">
                Claim My Land →
              </button>
              <p className="mt-4 text-[0.78rem] text-[rgba(247,243,235,0.3)]">No commitment. We&apos;ll contact you within 24 hours.</p>
            </form>
          </ScrollReveal>
        ) : (
          <div className="rounded-2xl border border-[rgba(92,168,114,0.2)] bg-[rgba(92,168,114,0.1)] p-7 text-left text-base leading-[1.6] text-[#f7f3eb]">
            ✅ <strong>Welcome to AgroTucks!</strong> Someone from our team will reach out within 24 hours to discuss your land options and schedule a site visit. Your countryside life starts now.
          </div>
        )}
      </div>
    </section>
  );
}
