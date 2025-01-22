"use client";

import { useParams } from "next/navigation";
import config from "../../../config";
import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <div className="px-4 md:px-8 py-8 md:py-28">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-3xl bg-[#161616] md:h-[80vh] flex flex-col justify-center space-y-4 text-white p-4">
          <span className="text-[#F58327] bg-[#222222] text-xs lg:text-sm rounded-full px-4 py-2 satoshi self-start">
            OUR THREE STEP PROCESS
          </span>
          <h1 className="text-3xl md:text-5xl">
            {caseStudy.title}
          </h1>
        </div>
        <div className="md:h-[80vh]">
            <img src={caseStudy.image} alt="" className="rounded-3xl w-full h-full object-cover"/>
        </div>
        <div className="md:col-span-2 rounded-3xl bg-[#161616] md:h-[40vh] flex items-center justify-center p-4 text-center satoshi">
          <h2 className="text-xl md:text-2xl text-white md:w-3/4">{caseStudy.slugDesc}</h2>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail; 
