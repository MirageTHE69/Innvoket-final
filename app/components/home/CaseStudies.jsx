"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import config from "../../config";

const CaseStudies = () => {
  const { caseStudies } = config;

  return (
    <motion.div
      className="py-20 md:px-8 flex flex-col items-center justify-center"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-orange-500 text-sm font-bold rounded-full bg-[#232323] p-2">
        WORKS
      </span>

      <h2 className="text-white text-2xl md:text-3xl my-4">Case Studies</h2>

      <motion.div
        className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:min-h-[75vh]">
              <img
                src={study.img}
                alt={study.title}
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition duration-200"
              />
            </div>
            <div className="rounded-3xl px-4 py-8 bg-[#1d1d1d]">
              <span className="text-orange-500 font-bold rounded-full bg-[#424141] p-2 text-sm">
                Case Study
              </span>
              <h2 className="text-lg text-white mt-2">{study.title}</h2>
              <p className="text-sm text-gray-400 mt-2">{study.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          href="/pages/projects"
          className="bg-[#FF7A30] py-3 px-7 rounded-full transition-colors text-black"
        >
          VIEW ALL PROJECTS ↗
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudies;
