"use client";

import { ScrollReveal } from "./ScrollReveal";

const crops = [
  { emoji: "🫚", name: "Ginger", price: "₦2,500+/kg", detail: "High global demand. Export potential. Grows well in Nigerian soil.", highlight: true },
  { emoji: "🫑", name: "Bell Pepper", price: "₦4,000+/kg", detail: "Premium crop. Greenhouse or open field. Year-round with irrigation.", highlight: true },
  { emoji: "🍇", name: "Grapes", price: "₦5,000+/kg", detail: "Luxury fruit. Growing demand in Lagos. High margins.", highlight: true },
  { emoji: "🍅", name: "Tomatoes", price: "₦1,200+/kg", detail: "Staple crop. Massive demand. Greenhouse extends seasons.", highlight: false },
  { emoji: "🌶️", name: "Scotch Bonnet", price: "₦2,000+/kg", detail: "Every Nigerian kitchen needs it. Always in demand.", highlight: false },
  { emoji: "🥬", name: "Leafy Greens", price: "₦800+/kg", detail: "Spinach, ugwu, lettuce. Fast growing. Quick returns.", highlight: false },
  { emoji: "🥭", name: "Mango", price: "₦1,500+/kg", detail: "Premium fruit tree. Decades of harvest. High local demand.", highlight: false },
  { emoji: "🍌", name: "Plantain", price: "₦600+/bunch", detail: "Staple. Constant demand. Grows with minimal effort.", highlight: false },
  { emoji: "🥥", name: "Cashew", price: "₦3,500+/kg", detail: "Nuts + medicinal leaves. Long-term income tree.", highlight: false },
];

export function FoodSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[900px] px-7">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[3px] text-[#c0392b]">The Opportunity</p>
            <h2 className="mb-3 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.05] tracking-[-1.5px] text-[#f7f3eb]">
              Grow high-value crops on
              <br />
              your <i className="text-[#c96b3c]">own land.</i>
            </h2>
            <p className="mx-auto max-w-[600px] text-center text-[1.05rem] font-light leading-[1.7] text-[rgba(247,243,235,0.55)]">
              These crops sell for premium prices in Lagos. Grow them on your Agrotucks acre — farm it yourself or let our professional farmers manage it. Either way, the harvest is yours.
            </p>
          </div>
        </ScrollReveal>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {crops.map((c, i) => (
            <ScrollReveal key={c.name} delay={50 * (i % 3)}>
              <div
                className={`relative rounded-2xl border p-6 text-center transition-all duration-400 hover:-translate-y-1 ${
                  c.highlight
                    ? "border-[rgba(201,107,60,0.3)] bg-[rgba(201,107,60,0.06)]"
                    : "border-[rgba(247,243,235,0.05)] bg-[#111110] hover:border-[rgba(92,168,114,0.2)] hover:bg-[rgba(61,122,84,0.06)]"
                }`}
              >
                {c.highlight && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#c96b3c] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[1.5px] text-white">HIGH VALUE</span>
                )}
                <span className="mb-3 block text-[2.4rem]">{c.emoji}</span>
                <h4 className="mb-1 text-base font-bold text-[#f7f3eb]">{c.name}</h4>
                <div className={`mb-1.5 font-[family-name:var(--font-instrument)] text-[1.5rem] tracking-[-0.5px] ${c.highlight ? "text-[#c96b3c]" : "text-[#5ca872]"}`}>{c.price}</div>
                <div className="text-[0.8rem] font-light leading-[1.4] text-[rgba(247,243,235,0.3)]">{c.detail}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mb-12 flex items-start gap-5 rounded-2xl border border-[rgba(61,122,84,0.15)] bg-[rgba(61,122,84,0.08)] p-7">
            <span className="text-2xl">📦</span>
            <p className="text-[0.95rem] font-light leading-[1.65] text-[rgba(247,243,235,0.55)]">
              <strong className="text-[#5ca872]">Don&apos;t want to live on the land?</strong> No problem. Your farm produces, our team harvests, and we deliver fresh AgroTucks produce straight to your home in Lagos. You eat clean food from your own land without ever leaving the city.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex items-start gap-5 rounded-2xl border border-[rgba(61,122,84,0.15)] bg-[rgba(61,122,84,0.08)] p-7">
            <span className="text-2xl">👨‍🌾</span>
            <p className="text-[0.95rem] font-light leading-[1.65] text-[rgba(247,243,235,0.55)]">
              <strong className="text-[#5ca872]">Not a farmer?</strong> Neither are most of our landowners. Professional farmers are already on ground. They plant, maintain, and harvest. You own. You eat. You sell. Tell us what you want to grow — we&apos;ll make it happen.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
