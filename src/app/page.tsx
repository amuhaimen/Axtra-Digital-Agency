import { div } from "framer-motion/client";
import Navbar from "./_components/sections/Navbar";
import Hero from "./_components/sections/Hero";
import BrandSection from "./_components/sections/BrandSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <BrandSection />
    </div>
  );
}
