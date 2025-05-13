"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed z-50 w-full bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#services"
                className="text-sm uppercase tracking-wider text-black hover:text-neutral-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm uppercase tracking-wider text-black hover:text-neutral-500"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logo (centered) */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-serif text-xl font-normal tracking-wider"
        >
          ULTIMATE CONSULTING
        </Link>

        {/* Right navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/portfolio"
                className="text-sm uppercase tracking-wider text-black hover:text-neutral-500"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm uppercase tracking-wider text-black hover:text-neutral-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Empty div for layout balance on mobile */}
        <div className="w-6 lg:hidden"></div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-20 z-[100] overflow-hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col py-4">
              <ul className="flex w-full flex-col items-center space-y-4 text-center">
                <motion.li
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="w-full border-b border-neutral-100 pb-4"
                >
                  <Link
                    href="/#services"
                    className="text-lg font-serif uppercase tracking-wider text-black"
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full border-b border-neutral-100 pb-4"
                >
                  <Link
                    href="/about"
                    className="text-lg font-serif uppercase tracking-wider text-black"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="w-full border-b border-neutral-100 pb-4"
                >
                  <Link
                    href="/portfolio"
                    className="text-lg font-serif uppercase tracking-wider text-black"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="w-full pb-4"
                >
                  <Link
                    href="/contact"
                    className="text-lg font-serif uppercase tracking-wider text-black"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
