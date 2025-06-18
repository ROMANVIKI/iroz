"use client";
import { useEffect, useRef } from "react";
import { Settings, ShieldCheck, Handshake, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Entrepreneurial Experience",
      desc: "Benefit from our extensive experience in entrepreneurship. We know what it takes to be successful.",
      icon: Zap,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      darkBgGradient: "from-violet-900/20 to-purple-900/20",
    },
    {
      title: "Bespoke Solutions",
      desc: "We develop solutions designed to meet the specific needs of your business.",
      icon: Settings,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "from-blue-900/20 to-cyan-900/20",
    },
    {
      title: "Swiss Core Values",
      desc: "Our values are at the heart of everything we do, reflecting our commitment to quality and responsibility.",
      icon: ShieldCheck,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-900/20 to-teal-900/20",
    },
    {
      title: "Long-Term Partnership",
      desc: "We focus on building lasting relationships based on trust and collaboration.",
      icon: Handshake,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      darkBgGradient: "from-orange-900/20 to-red-900/20",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    // Enhanced scroll animation with stagger effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".benefit-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 py-20 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with enhanced typography */}
        <div className="text-center mb-20 transform transition-all duration-1000 opacity-100">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-6 shadow-lg">
            <span className="font-semibold text-gray-600 dark:text-gray-300 text-sm tracking-wide">
              OUR UNIQUE APPROACH
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
            Your Benefits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover what sets us apart and how our approach delivers
            exceptional value
          </p>
        </div>

        {/* Benefits grid with glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map(
            (
              { title, desc, icon: Icon, gradient, bgGradient, darkBgGradient },
              idx,
            ) => (
              <div
                key={idx}
                className="benefit-card group opacity-0 transform translate-y-8 scale-95 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div
                  className={`relative p-8 rounded-3xl bg-gradient-to-br ${bgGradient} dark:${darkBgGradient} backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden`}
                >
                  {/* Card glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Floating icon container */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon size={32} className="text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {desc}
                    </p>
                  </div>

                  {/* Subtle pattern overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-sm"></div>
                  </div>

                  {/* Interactive hover border */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                      transform: "translateX(-100%)",
                      animation: "shimmer 2s infinite",
                    }}
                  ></div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Ready to experience these benefits?
              <span className="ml-2 text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Let's connect →
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
