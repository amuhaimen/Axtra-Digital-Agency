import Navbar from "./_components/sections/Navbar";
import Hero from "./_components/sections/Hero";
import BrandSection from "./_components/sections/BrandSection";
import WhoWeAre from "./_components/sections/WhoWeAre";
import Services from "./_components/sections/Services";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <BrandSection />
      <WhoWeAre />
      <Services />
    </div>
  );
}
