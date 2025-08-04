"use client";

import { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../sitedata/Navbar";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className={`fixed w-screen z-[99] transition-all px-2 duration-300 ${
        scrolled || isMobileMenuOpen
          ? `border-b border-white/10 shadow-md py-3 backdrop-blur-lg`
          : `py-2 `
      }`}
    >
      <nav className="w-full py-4 px-6">
        <div className="container mx-auto flex justify-between">
          <Link href="/" className="flex justify-center mb-1">
            <Image
              src="/images/srlogo.png"
              alt="Subul Raza Zaidi"
              width={150}
              height={100}
            />
          </Link>

          <div className="hidden md:flex justify-center items-center space-x-8">
            <div className="flex space-x-6 justify-center ">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
