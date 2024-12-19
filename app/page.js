import BrandSlider from "./components/BrandSlider";
import CaseStudies from "./components/CaseStudies";
import Hero from "./components/Hero";
import ImageHero from "./components/ImageHero";
import Service from "./components/Service";
import SpecialService from "./components/SpecialService";
import Specialties from "./components/Specialties";
import Testimonials from "./components/Testimonials";

import TextSlider from "./components/TextSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <TextSlider />
      <Service />
      <BrandSlider />
      <SpecialService />
      <ImageHero />
      <CaseStudies />
      <Testimonials />
      <Specialties />
    </div>
  );
};

export default Home;
