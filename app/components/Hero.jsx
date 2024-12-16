import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-white py-20 px-10 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl mb-4 font-unbounded">
        Empowering <span className="text-[#FF7A30]">Digital</span> <br />
        Transformation
        <br />
        with <br />
        <div className="w-16 inline-block rounded-full bg-[#FF7A30] -rotate-[20deg]"> <img src="/hero.avif" alt="" /> </div> Innvoket
      </h1>

      <p className="text-lg mb-8 max-w-3xl mx-auto">
        We believe in combining innovative design, sustainable practices, and
        exceptional craftsmanship to bring your vision to life.
      </p>

      <Link
        href="/pages/contact"
        className="bg-[#FF7A30] py-2 px-6 rounded-full
        hover:bg-[#e56b1f] transition-colors"
      >
        
        CONTACT US ↗
      </Link>
    </section>
  );
};

export default Hero;
