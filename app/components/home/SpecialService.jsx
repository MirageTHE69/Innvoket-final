"use client";

import { motion } from "framer-motion";
import config from "../../config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  SeoSvg,
  ContentSvg,
  WebsiteDesignSvg,
  SocialMediaSvg,
} from "../../components/services/ServiceSvg"; 

export default function SpecialService() {
  const ServiceCard = ({ Icon, title, description, link }) => (
    <motion.div
      className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between space-y-20 md:space-y-36 shadow-lg group"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col space-y-4">
        <div className="bg-[#2A2A2A] w-12 h-12 flex items-center justify-center rounded-xl">
          <Icon className="text-orange-500" /> {/* Render the icon */}
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <p className="text-gray-400">{description}</p>
        <Link
          href={link}
          className="text-white font-semibold pt-5 text-[0.75rem] leading-[1.5rem] flex items-center gap-2 no-underline unbounded-400"
        >
          LEARN MORE
          <span className="w-7 h-7 rounded-full border-[#333] border p-1 flex justify-center items-center transition duration-900 bg-transparent group-hover:bg-[#F58327]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="transition-transform duration-300 group-hover:rotate-[45deg]"
              style={{
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                color:
                  "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                flexShrink: 0,
              }}
            >
              <g
                color="var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))"
                weight="regular"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );

  const iconMap = {
    Globe: SeoSvg,
    SquareMenu: ContentSvg,
    PanelTop: WebsiteDesignSvg,
    SocialMedia: SocialMediaSvg,
  };

  return (
    <section className="text-white py-20  mx-auto">
      <motion.div
        className="container mx-auto px-4"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:space-x-4 my-10 md:my-20 text-center md:text-left"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="text-orange-500 font-bold rounded-full bg-[#232323] px-4 py-2 mb-4 md:mb-0"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {config.specialService.subheading}
          </motion.span>
          <motion.h2
            className="text-md md:text-3xl font-bold font-unbounded"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {config.specialService.heading}
          </motion.h2>
        </motion.div>

        <motion.div
          className="text-center md:text-right mb-20"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/pages/contact"
            className="bg-[#FF7A30] py-3 px-2 md:px-7 rounded-full transition-colors text-black"
          >
            VIEW ALL SERVICES ↗
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {config.specialService.cards.map((card) => {
            const IconComponent = iconMap[card.icon]; // Get the appropriate SVG component
            return (
              <ServiceCard
                key={card.id}
                Icon={IconComponent} // Pass the IconComponent to ServiceCard
                title={card.title}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
