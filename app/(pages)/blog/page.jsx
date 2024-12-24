"use client";

import { motion } from "framer-motion";
import config from "../../config";
import { Star, Calendar, Tag } from "lucide-react";

const Blog = () => {
  const { articles } = config;

  return (
    <section className="py-20">
      <motion.h2
        className="text-xl md:text-6xl text-white text-center mb-8"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Exclusive Blogs
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-4">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="text-white rounded-3xl overflow-hidden shadow-lg"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-80 object-cover transition duration-300 hover:grayscale"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-wrap items-center gap-2">
                {article.featured && (
                  <span className="bg-[#1d1d1d] text-xs text-white font-bold px-2 py-1 rounded-full flex items-center">
                    <Star className="w-4 h-4 mr-1 text-orange-500" /> FEATURED
                  </span>
                )}
                <span className="bg-[#1d1d1d] text-xs text-white font-bold px-2 py-1 rounded-full flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-orange-500" />
                  {article.date}
                </span>
                <span className="bg-[#1d1d1d] text-xs text-white font-bold px-2 py-1 rounded-full flex items-center">
                  <Tag className="w-4 h-4 mr-1 text-orange-500" />
                  {article.category}
                </span>
              </div>
            </div>

            <div className="my-4 p-2 rounded-lg bg-[#1d1d1d]">
              <h2 className="">{article.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
