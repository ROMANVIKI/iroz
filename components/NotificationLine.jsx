"use client";

const NotificationLine = () => {
  return (
    <div className="w-full relative overflow-hidden shadow-lg z-50">
      {/* Background with gradient and subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm opacity-75 animate-pulse"></div>

      {/* Main content container */}
      <div className="relative px-6  border-y border-white/20">
        {/* Animated text content */}
        <div className="animate-marquee whitespace-nowrap text-white font-semibold text-sm md:text-base flex items-center space-x-6">
          {/* One notification block */}
          <span className="inline-flex items-center space-x-2">
            <span className="animate-bounce">🚀</span>
            <span className="font-bold">NEW LAUNCH!</span>
            <span>Get certified in Python & Web Development today!</span>
            <span className="animate-pulse">💻✨</span>
          </span>

          <span className="mx-4 text-yellow-300 font-bold animate-pulse">
            •
          </span>

          {/* Second block */}
          <span className="inline-flex items-center space-x-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
              ENROLL NOW
            </span>
            <span className="text-yellow-300 font-bold">
              Limited Time Offer!
            </span>
            <span className="animate-bounce delay-100">🔥</span>
          </span>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shine"></div>
      </div>

      {/* Optional interaction */}
      <button
        className="absolute inset-0 w-full h-full focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/5 transition-colors duration-200"
        onClick={() => console.log("Notification clicked!")}
      >
        <span className="sr-only">View course details</span>
      </button>
    </div>
  );
};

export default NotificationLine;
