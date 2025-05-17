"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const NavLinks = [
    { name: "Our Team", link: "/our-team" },
    { name: "Our Services", link: "/our-services" },
  ];

  const iconProps = { size: 30, color: "black" };
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 shadow-md p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-3xl text-gray-700 font-bold">
            <Link href={"/"}>IROZ</Link>
          </h1>

          <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="cursor-pointer md:hidden"
          >
            {isNavOpen ? (
              <X size={iconProps.size} color={iconProps.color} />
            ) : (
              <Menu size={iconProps.size} color={iconProps.color} />
            )}
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {NavLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link href={link.link} className="relative">
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300 origin-right"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-16 right-4 h-screen bg-white/90 backdrop-blur-lg shadow-xl rounded-md px-6 py-4 transition-all duration-300 ease-in-out z-40 ${
          isNavOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        } md:hidden`}
      >
        <ul className="space-y-4">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                onClick={() => setIsNavOpen(false)} // close menu on link click
                className="text-lg text-gray-800 hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
