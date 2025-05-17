import CareerSVG from "../public/career.svg"; // Correct import
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen w-full font-sans ">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-3xl pt-20">
          <h1 className="text-center bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Moving Forward Together
          </h1>
          <h1 className="text-center text-gray-700">
            Advisory Services for Entrepreneurs by{" "}
            <span className="underline decoration-sky-500">Entrepreneurs</span>
          </h1>
        </div>
        <div className="pt-20">
          <p className="text-center antialiased">
            We are trusted partner in business success, offering strategy,
            corporate and fiduciary services to drive your business forward.
          </p>
        </div>
        <div className="pt-20">
          <Image src="/career.svg" alt="career" width={100} height={100} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
