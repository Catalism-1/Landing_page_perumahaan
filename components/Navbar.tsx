"use client";

import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Listing", href: "#properti" },
  { label: "Kalkulator KPR", href: "#kalkulator" },
  { label: "Tentang Kami", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#beranda" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--rp-primary)" }}
            >
              <Home size={16} color="white" />
            </div>
            <span
              className="font-bold text-xl"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: scrolled || mobileOpen ? "var(--rp-primary)" : "white",
              }}
            >
              RumahPertama
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  color: scrolled ? "var(--rp-dark)" : "white",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20konsultasi%20rumah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md"
              style={{ background: "var(--rp-cta)" }}
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} color={scrolled || mobileOpen ? "var(--rp-dark)" : "white"} />
            ) : (
              <Menu size={24} color={scrolled ? "var(--rp-dark)" : "white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-1"
              style={{ color: "var(--rp-dark)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20konsultasi%20rumah"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "var(--rp-cta)" }}
            onClick={() => setMobileOpen(false)}
          >
            Konsultasi Gratis
          </Link>
        </div>
      )}
    </nav>
  );
}
