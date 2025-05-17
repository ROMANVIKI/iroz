import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h1 className="text-xl font-bold text-white mb-2">
            Succeeding Together:
          </h1>
          <h2 className="text-lg text-gray-400">Your Goals, Our Mission</h2>
        </div>

        <div>
          <p className="mb-1">We look forward to hearing from you</p>
          <p className="mb-1 underline underline-offset-2 hover:text-white transition">
            reach.iroz.in
          </p>
          <p className="mb-1">+91 9XXXXXXXXX</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm text-gray-400">
            &copy; {year} Iroz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
