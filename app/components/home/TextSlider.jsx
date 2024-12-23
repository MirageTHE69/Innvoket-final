"use client";
import { motion } from 'framer-motion';
import config from "../../config";

const TextSlider = () => {
  const message = config.textSlider.message;

  return (
    <div className="bg-gradient-to-b from-transparent via-orange-500 to-transparent h-[50vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      <motion.div
        className="whitespace-nowrap flex"
        animate={{ x: ["100%", "-100%"] }} // Animate the text from right to left
        transition={{
          duration: 15, // Adjust the speed of the scroll
          ease: "linear",
          repeat: Infinity, // Infinite loop
        }}
      >
        {/* Single block of text duplicated using the same element */}
        <h1 className="text-3xl md:text-8xl font-unbounded">
          {message}
        </h1>
      </motion.div>
    </div>
  );
};

export default TextSlider;
