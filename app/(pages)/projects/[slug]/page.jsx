"use client";

import { useParams } from "next/navigation";
import config from "../../../config";
import Image from "next/image";
import { motion } from "framer-motion";
import CaseStudies from "../../../components/projects/CaseStudies";
import Link from "next/link";
import Newsletter from "../../../components/Newsletter/Newsletter";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = config.projects.case_studies.find(
    (study) => study.slug === slug
  );

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <h1>Case study not found</h1>
      </div>
    );
  }

  const { socialMedia } = config.contact;

  return (
    <div className="px-4 md:px-8 py-8 md:py-28">
      <motion.div
        className="grid md:grid-cols-2 gap-4"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="rounded-3xl bg-[#161616] md:h-[80vh] flex flex-col justify-center space-y-4 text-white p-4">
          <span className="text-[#F58327] bg-[#222222] text-xs lg:text-sm rounded-full px-4 py-2 satoshi self-start">
            OUR THREE STEP PROCESS
          </span>
          <h1 className="text-3xl md:text-5xl">{caseStudy.title}</h1>
        </div>

        <div className="md:h-[80vh]">
          <img
            src={caseStudy.image}
            alt=""
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="md:col-span-2 rounded-3xl bg-[#161616] md:h-[40vh] flex items-center justify-center p-4 text-center satoshi"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl text-white md:w-3/4">
            {caseStudy.slugDesc}
          </h2>
        </motion.div>

        <motion.div
          className="md:mx-52"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {caseStudy.info}
        </motion.div>
      </motion.div>

      <Newsletter />

      <div>
        <motion.img
          src={caseStudy.BigImage}
          alt=""
          className="rounded-3xl w-full h-full my-16"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center text-white my-10 space-y-4">
        <p className="text-orange-500 font-bold rounded-full bg-[#232323] self-center p-2">
          Other Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-medium">Other Case Studies</h2>
        <p>Check our other project case studies with detailed explanations</p>
        <Link
          href="/projects"
          className="bg-[#FF7A30] text-black rounded-full px-4 py-2"
        >
          All Projects ↗
        </Link>
      </div>

      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className=" w-full p-4 lg:p-8 flex flex-col items-center justify-center"
      >
        {config.projects.case_studies
          .filter((study) => study.slug !== slug)
          .map((study, index) => (
            <CaseStudies
              key={index}
              image={study.image}
              title={study.title}
              description={study.description}
              slug={study.slug}
            />
          ))}
      </motion.div>
    </div>
  );
};

export default CaseStudyDetail;
