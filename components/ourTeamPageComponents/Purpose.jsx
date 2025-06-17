const Purpose = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Title section */}
        <div className="space-y-6">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 relative">
              Purpose of the Company
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-blue-600 font-medium italic">
            We love what we do for our clients
          </p>
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-[2px] bg-gray-300"></div>
            <span className="text-sm font-medium tracking-wider uppercase">
              Since 2024
            </span>
          </div>
        </div>

        {/* Right side - Content section */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Our purpose at{" "}
                <span className="font-semibold text-blue-600">Sequency</span> is
                to build a trusting and long-term partnership with our customers
                by helping them achieve their business goals while maintaining
                the highest standards of{" "}
                <span className="font-medium text-purple-600">integrity</span>,{" "}
                <span className="font-medium text-blue-600">quality</span> and{" "}
                <span className="font-medium text-green-600">service</span>.
              </p>

              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-500">
                  Trusted by 100+ clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
