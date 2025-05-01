import { div } from "framer-motion/client";
import Navbar from "./_components/sections/Navbar";
import Hero from "./_components/sections/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
