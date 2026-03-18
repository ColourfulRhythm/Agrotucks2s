import "./globals.css";
import { Hero } from "@/components/Hero";
import { DangerSection } from "@/components/DangerSection";
import { TransitionSection } from "@/components/TransitionSection";
import { FoodSection } from "@/components/FoodSection";
import { ProductsSection } from "@/components/ProductsSection";
import { HowSection } from "@/components/HowSection";
import { PricingSection } from "@/components/PricingSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <DangerSection />
      <TransitionSection />
      <div className="border-b border-t border-[rgba(92,168,114,0.1)] bg-[rgba(61,122,84,0.06)] py-5 text-center">
        <p className="text-sm font-medium text-[#5ca872]">🌳 We plant a tree in your name for every plot sold</p>
      </div>
      <FoodSection />
      <ProductsSection />
      <HowSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
