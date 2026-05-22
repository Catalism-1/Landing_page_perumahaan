"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,110,86,0.92) 0%, rgba(15,110,86,0.75) 50%, rgba(15,110,86,0.4) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4"
          >
            Langkah pertama menuju rumah impianmu
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Rumah Pertama Kamu,{" "}
            <span style={{ color: "#FBBF24" }}>Bukan Mimpi Lagi.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-lg mb-8 leading-relaxed"
          >
            Kami bantu anak muda Indonesia punya hunian impian — dari cari,
            hitung KPR, sampai akad. Tanpa ribet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link
              href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20konsultasi%20rumah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--rp-cta)" }}
            >
              💬 Konsultasi GRATIS Sekarang
            </Link>
            <Link
              href="#properti"
              className="px-6 py-3.5 rounded-xl font-semibold text-white border-2 border-white/80 transition-all hover:bg-white hover:text-green-800 hover:scale-105"
            >
              Lihat Listing
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-white/90 text-sm"
          >
            {["✓ 500+ Klien Puas", "✓ Bank Partner Resmi", "✓ Konsultan Bersertifikat"].map(
              (badge) => (
                <span key={badge} className="flex items-center gap-1">
                  {badge}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-xs text-white/70">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
