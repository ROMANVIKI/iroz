import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-white dark:bg-gray-950 font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Moving Forward Together
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
            Advisory Services for Entrepreneurs by{" "}
            <span className="underline decoration-sky-500 underline-offset-4">
              Entrepreneurs
            </span>
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mt-8 max-w-2xl leading-relaxed">
          We are your trusted partner in business success, offering strategy,
          corporate and fiduciary services to drive your business forward.
        </p>

        {/* Image */}
        <div className="mt-12">
          <Image
            src="/assets/images/career.svg"
            alt="career"
            width={300}
            height={300}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
