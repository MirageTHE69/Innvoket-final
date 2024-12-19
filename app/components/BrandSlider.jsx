"use client";
import { motion } from 'framer-motion';
import config from '../config';

const BrandSlider = () => {
  return (
    <div className="py-20 text-center">
      <div className="text-orange-500 font-bold rounded-full bg-[#232323] inline-block p-2">
        <h2>{config.brandSlider.heading}</h2>
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <h2 className="text-white text-4xl">{config.brandSlider.subheading}</h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["100%", "-100%"] }} // Animate the images from right to left
          transition={{
            duration: 15, // Adjust speed as needed
            ease: "linear",
            repeat: Infinity, // Infinite loop
          }}
        >
          {config.brandSlider.images.map((image, index) => (
            <div key={index} className="bg-neutral-800 rounded-full p-4 w-[200px] flex items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="h-20 object-contain rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlider;
