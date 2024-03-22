"use client";
import FloatingComponent from "@/components/FloatingComponent";
import HeroSection from "@/components/HeroSection";
import ProductsPage from "@/components/ProductsPage";
import StoreMap from "@/components/StoreMap";


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <FloatingComponent/>
      <HeroSection />
      <ProductsPage/>
      <StoreMap/>
    </div>
  );
}
