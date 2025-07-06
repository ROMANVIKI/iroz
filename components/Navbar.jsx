'use client';
import Link from 'next/link';
import { Menu, X, ArrowDown, ArrowUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import LogoImg from '../public/assets/images/tokaz-logo.png';
import Image from 'next/image';

const Navbar = () => {
  const mobileMenuRef = useRef(null);
  const iconProps = { size: 30, color: 'black' };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavOpen(false);
    };

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isNavOpen]);

  const subMenuLink = [
    { name: 'Strategy', link: '/our-services/strategy' },
    { name: 'Fiduciary Services', link: '/our-services/fiduciary-services' },
    { name: 'Corporate Services', link: '/our-services/corporate-services' },
  ];

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className='border z-50 border-gray-200 border-d-none border-l-none border-r-none w-full  backdrop-blur-md bg-white/70 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
          <h1 className='text-3xl text-gray-700 font-bold'>
            <Image src={LogoImg} width={90} alt='tokaz logo' />
          </h1>

          <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='cursor-pointer md:hidden'
            aria-label='Toggle menu'
          >
            {isNavOpen ? (
              <X size={iconProps.size} color={iconProps.color} />
            ) : (
              <Menu size={iconProps.size} color={iconProps.color} />
            )}
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex space-x-8 text-gray-700 font-medium'>
            <li className='group relative'>
              <Link href='/our-team' className='relative flex items-center'>
                Our Team
                <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300 origin-right'></span>
              </Link>
            </li>

            <li className='group relative cursor-pointer'>
              <p className='relative flex items-center'>
                Our Services
                <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300 origin-right'></span>
              </p>

              {/* Desktop submenu */}
              <ul
                className='absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg
                opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                transition-opacity duration-300'
              >
                {subMenuLink.map((link) => (
                  <li key={link.name}>
                    <Link href={link.link} className='block px-4 py-2 hover:bg-gray-800'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        ref={mobileMenuRef}
        className={`fixed w-1/2 top-12 right-0  bg-white/90 backdrop-blur-lg shadow-xl rounded-md px-6 py-4 transition-all duration-300 ease-in-out z-40 ${
          isNavOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } md:hidden`}
      >
        <ul className='space-y-4'>
          <li>
            <Link
              href='/our-team'
              onClick={() => setIsNavOpen(false)}
              className='text-lg text-gray-800 hover:underline'
            >
              Our Team
            </Link>
          </li>

          <li>
            {/* Toggle submenu open on mobile */}
            <button
              onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
              className='text-lg text-gray-800 hover:underline flex  w-full'
              aria-expanded={isMobileSubmenuOpen}
              aria-controls='mobile-submenu'
            >
              Our Services
              <span className='mt-[3px]'>
                {isMobileSubmenuOpen ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
              </span>
            </button>

            {/* Mobile submenu */}
            <ul
              id='mobile-submenu'
              className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                isMobileSubmenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {subMenuLink.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    onClick={() => setIsNavOpen(false)}
                    className='text-gray-700 hover:text-gray-900 block'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
