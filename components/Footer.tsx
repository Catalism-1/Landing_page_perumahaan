import { Home } from "lucide-react";
import Link from "next/link";
import { WA_LINK } from "@/lib/data";

const socialIcons = [
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "YouTube",
    path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
  {
    label: "TikTok",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.78a4.85 4.85 0 01-1.07-.09z",
  },
];

export default function Footer() {
  return (
    <footer className="text-white bg-[#0F1E1A] dark:bg-[#0A1814] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--rp-primary)" }}
              >
                <Home size={16} color="white" />
              </div>
              <span
                className="font-bold text-lg text-white"
                style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
              >
                RumahPertama
              </span>
            </div>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Bantu kamu cari rumah pertama — dari konsultasi, cek syarat, simulasi cicilan, sampai diarahkan ke proyek yang cocok.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  aria-label={social.label}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4
              className="font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {["Konsultasi", "Cek Syarat", "Simulasi Cicilan", "Survey Lokasi"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4
              className="font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Perusahaan
            </h4>
            <ul className="space-y-2.5">
              {["Tentang", "Proyek Pilihan", "Cara Kerja", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4
              className="font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
            >
              Kontak
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li>Pringgabaya, Lombok Timur, NTB</li>
              <li>
                <a href="https://wa.me/6285173221561" className="hover:text-white transition-colors">
                  0851 7322 1561
                </a>
              </li>
              <li>
                <Link
                  href={WA_LINK}
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Chat WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
        >
          <span>© 2025 RumahPertama. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
