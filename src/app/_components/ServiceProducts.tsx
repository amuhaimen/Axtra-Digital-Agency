import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

interface ServicesProps {
  title: string;
  bgImage: { src: string };
}

export default function ServiceProduct({ title, bgImage }: ServicesProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Create motion values for smooth animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create springs with reduced stiffness for smoother movement
  const springX = useSpring(x, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - 150;
    const mouseY = e.clientY - rect.top - 150;

    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="w-full mt-5 lg:flex justify-evenly border-t-2 border-b-2 pt-20 pb-20 border-b-gray-100 border-t-gray-100 ml-4 lg:ml-0">
        <motion.div
          className="lg:w-[20%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-2xl font-medium uppercase leading-snug">
            {title}
          </h2>
        </motion.div>

        <motion.div
          className="lg:w-[40%] text-lg text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="w-96 mt-2">
            We help brands stand out through aweful, elegant visual design. Our
            design mainly philosophy.
          </p>
          <ul className="mt-8">
            <li>+ Logo Design</li>
            <li>+ Advertisement</li>
            <li>+ Promotion</li>
          </ul>
        </motion.div>

        <motion.div
          className="lg:w-[20%] mt-10"
          initial={{ opacity: 0, y: -30 }} // Start hidden and slightly above
          whileInView={{ opacity: 1, y: [0, 30, -15, 15, 0] }} // Bounce animation sequence
          viewport={{ once: true }}
          transition={{
            duration: 1.6, // Total animation duration for double bounce
            times: [0, 0.25, 0.5, 0.75, 1], // Timing for each bounce keyframe
            ease: "easeInOut", // Smooth easing
          }}
        >
          <Button
            title={"Contact Us"}
            hoverBackgroundColor="black"
            hoverTextColor="white"
          />
        </motion.div>
      </div>

      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: springX,
            top: springY,
            zIndex: -1,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
        >
          <Image
            src={bgImage.src}
            width={300}
            height={300}
            alt="Hover Visual"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
