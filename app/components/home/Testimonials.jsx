"use client";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    rating: "★★★★★",
    text: "Innovket’s expertise in creating tailored management systems has taken our business to the next level. From inventory management to workforce solutions, every tool they’ve delivered has been perfectly aligned with our needs. Their professionalism and innovative approach truly set them apart. It’s been a pleasure working with them!",
    name: "Atul Sharda",
    company: "BLUESKY VENTURES",
  },
  {
    rating: "★★★★★",
    text: "Partnering with Innvoket has completely transformed our operations. Their custom ERP and CRM solutions have streamlined our workflows and improved efficiency across the board. Their team's attention to detail and constant support have made them an invaluable partner in our growth journey. Highly recommended!",
    name: "Divyank Vyas",
    company: "M.D. BrightStar Technologies",
  },
  {
    rating: "★★★★★",
    text: "The team at Innvoket exceeded all our expectations! Their customized solutions have not only optimized our processes but also given us better insights into our business performance. Their proactive communication and commitment to delivering excellence have been exceptional. Innvoket has been a game-changer for us!",
    name: "Nishit Malvani",
    company: "CEO, Brightsun",
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 my-4 md:my-16 overflow-hidden relative">
      
      <div className="text-gray-500 text-3xl md:text-9xl font-bold mb-12">
        TESTIMONIAL
      </div>

      <motion.div
        animate={{ y: ["100%", "-100%"] }} 
        transition={{
          duration: 20, 
          ease: "linear",
          repeat: Infinity,
           
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
            className="bg-transparent backdrop-blur-sm text-white text-sm md:text-base p-6 rounded-xl border max-w-md shadow-lg mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="text-orange-400 text-2xl">
                <span>{testimonial.rating}</span>
              </div>
            </div>
            <blockquote className="mt-4 text-gray-300">
              <p className="font-medium leading-relaxed">{testimonial.text}</p>
            </blockquote>
            <div className="mt-4 border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


export default Testimonials;
