"use client";

import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { WA_LINK } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek Pilihan", href: "#proyek-pilihan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
  { label: "Konsultasi", href: "#konsultasi" },
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
          ? "bg-white shadow-md dark:bg-[#071F1A] dark:shadow-black/30"
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
              className="font-bold text-xl transition-colors duration-300"
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: scrolled || mobileOpen ? "var(--rp-primary)" : "white",
              }}
            >
              RumahPertama
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
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
            <ThemeToggle scrolled={scrolled} />
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md"
              style={{ background: "var(--rp-cta)" }}
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle scrolled={scrolled} />
            <button
              className="p-2"
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
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#071F1A] border-t dark:border-white/10 px-4 py-4 flex flex-col gap-4 transition-colors duration-300">
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
            href={WA_LINK}
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
