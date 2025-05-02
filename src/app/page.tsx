import Navbar from "./_components/sections/Navbar";
import Hero from "./_components/sections/Hero";
import BrandSection from "./_components/sections/BrandSection";
import WhoWeAre from "./_components/sections/WhoWeAre";
import Services from "./_components/sections/Services";
import Featured from "./_components/sections/Featured";
import ReviewSection from "./_components/sections/ReviewSection";
import PricingSection from "./_components/sections/PricingSection";
import BlogSection from "./_components/sections/BlogSection";
import WhyChooseUsIndex from "./_components/sections/chooseUs/WhyChooseUsIndex";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <BrandSection />
      <WhoWeAre />
      <Services />
      <Featured />
      <ReviewSection />
      <WhyChooseUsIndex />
      <PricingSection />
      {/* <BlogSection /> */}
    </div>
  );
}
