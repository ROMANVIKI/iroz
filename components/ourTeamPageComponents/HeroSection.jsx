import CEOImage from "../../public/assets/images/ceo.jpeg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 font-sans">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Our Team
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h1>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Meet the visionary leader driving innovation and excellence at Iroz
          </p>
        </div>

        {/* CEO Profile */}
        <div className="flex justify-center items-center">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-x-10 -translate-y-10 opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full translate-x-8 translate-y-8 opacity-60"></div>

              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1">
                      <div className="w-full h-full bg-white rounded-full p-2">
                        <Image
                          src={CEOImage}
                          alt="CEO picture"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-6 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-2 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
                    RAGUNATHAN
                  </h2>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    CEO & Founder
                  </div>
                </div>

                {/* Quote or Description */}
                <div className="mb-6">
                  <p className="text-gray-600 italic text-base leading-relaxed">
                    "Leading with vision, building with purpose, and growing
                    with our clients every step of the way."
                  </p>
                </div>

                {/* Stats or Achievements */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-purple-600">
                      35+
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Projects Led
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Clients Served
                    </div>
                  </div>
                </div>

                {/* Social Links or Contact */}
                <div className="flex justify-center space-x-4">
                  <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
