"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";
import { WA_LINK } from "@/lib/data";
import WhatsAppLink from "@/components/WhatsAppLink";

const trustBadges = [
  "Konsultasi awal gratis",
  "Dibantu cek syarat",
  "Bisa survey lokasi",
  "Cocok untuk pembeli rumah pertama",
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/ayyana/ayyana-lingkungan.webp"
        alt="Lingkungan perumahan Ayyana Residence dengan jalan paving dan suasana kawasan yang rapi"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold text-white/90"
            style={{ background: "rgba(239,159,39,0.25)", border: "1px solid rgba(239,159,39,0.4)" }}
          >
            Hot Project: Ayyana Residence Pringgabaya
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
            }}
          >
            Cari Rumah Pertama? Konsultasi Dulu Biar Tidak Salah Pilih.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/85 text-base md:text-lg mb-8 leading-relaxed max-w-xl"
          >
            RumahPertama bantu kamu cek kebutuhan, syarat awal, estimasi cicilan, dan diarahkan ke proyek rumah yang cocok. Saat ini, proyek pilihan kami adalah Ayyana Residence Pringgabaya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <WhatsAppLink
              href={WA_LINK}
              source="hero_main"
              className="px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
              style={{ background: "var(--rp-cta)" }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis via WhatsApp
            </WhatsAppLink>
            <Link
              href="#proyek-pilihan"
              className="px-6 py-3.5 rounded-xl font-semibold text-white border-2 border-white/80 transition-all hover:bg-white hover:text-green-800 hover:scale-105"
            >
              Lihat Detail Ayyana Residence
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-white/90 text-sm"
          >
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1">
                <Check size={14} />
                {badge}
              </span>
            ))}
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
