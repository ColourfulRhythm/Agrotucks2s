"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const products = [
  { src: "/images/AgroTucks%20farm-fresh%20tomato%20packaging.png", alt: "AgroTucks Tomatoes", title: "Farm-Fresh Tomatoes", desc: "Sun-ripened. No calcium carbide. From your soil to your kitchen." },
  { src: "/images/AgroTucks%20farm-fresh%20bell%20peppers%20packaging.png", alt: "AgroTucks Bell Peppers", title: "Premium Bell Peppers", desc: "Red, yellow, green. Greenhouse-grown on your own land." },
  { src: "/images/AgroTucks%20farm-fresh%20ginger%20packaging.png", alt: "AgroTucks Ginger", title: "Fresh Ginger", desc: "High-value export crop. Medicinal. Grown chemical-free." },
  { src: "/images/agrotucks%20lettuces.png", alt: "AgroTucks Lettuces", title: "Fresh Lettuces", desc: "Spinach, lettuce, ugwu. Fast growing. Fresh from your land." },
  { src: "/images/agrotucks%20grapes.png", alt: "AgroTucks Grapes", title: "Premium Grapes", desc: "Luxury fruit. Growing demand in Lagos. From your own vineyard." },
];

export function ProductsSection() {
  return (
    <section className="pb-20 pt-10">
      <div className="mx-auto max-w-[900px] px-7">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[3px] text-[#c0392b]">From Your Land To Your Table</p>
            <h2 className="mb-3 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.05] tracking-[-1.5px] text-[#f7f3eb]">
              Fresh. Branded. <i className="text-[#c96b3c]">Yours.</i>
            </h2>
            <p className="mx-auto max-w-[600px] text-center text-[1.05rem] font-light leading-[1.7] text-[rgba(247,243,235,0.55)]">
              Every harvest from your Agrotucks farm is packed and delivered in branded boxes. Clean food from land you own.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((p, i) => (
            <ScrollReveal key={p.title} delay={80 * i}>
              <div className="overflow-hidden rounded-[20px] border border-[rgba(247,243,235,0.04)] bg-[#111110] transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(247,243,235,0.08)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                </div>
                <div className="p-5">
                  <h4 className="mb-1 text-base font-semibold text-[#f7f3eb]">{p.title}</h4>
                  <p className="text-[0.82rem] font-light leading-[1.5] text-[rgba(247,243,235,0.3)]">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
