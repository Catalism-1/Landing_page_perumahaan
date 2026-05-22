"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { projects, WA_LINK_AYYANA } from "@/lib/data";

export default function FeaturedProject() {
  const project = projects[0];

  return (
    <section id="proyek-pilihan" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <span
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: "var(--rp-primary-bg)", color: "var(--rp-primary)" }}
          >
            Proyek Pilihan Saat Ini
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
          >
            {project.name}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-5 text-sm" style={{ color: "var(--rp-gray-text)" }}>
            <span>Developer: <strong style={{ color: "var(--rp-dark)" }}>{project.developer}</strong></span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {project.location}
            </span>
          </div>

          <p className="text-sm mb-8" style={{ color: "var(--rp-gray-text)" }}>
            {project.address}
          </p>

          {/* Image Carousel */}
          <div className="mb-2">
            {/* Desktop: 3-column grid */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4 mb-4">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: "var(--rp-border)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="text-xs px-3 py-2 text-center" style={{ color: "var(--rp-gray-text)" }}>
                    {img.caption}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mobile: horizontal scroll carousel */}
            <div className="sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 mb-4">
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {project.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="snap-center w-[85vw] max-w-[340px] shrink-0 rounded-xl overflow-hidden border"
                    style={{ borderColor: "var(--rp-border)" }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        sizes="85vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs px-3 py-2 text-center" style={{ color: "var(--rp-gray-text)" }}>
                      {img.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-xs italic mb-8" style={{ color: "var(--rp-gray-text)" }}>
              {project.carouselNote}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm mb-8">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--rp-primary)" }} />
              <span style={{ color: "var(--rp-dark)" }}><strong>{project.product}</strong></span>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span style={{ color: "var(--rp-gray-text)" }}>Tahap pertama: <strong style={{ color: "var(--rp-dark)" }}>{project.totalUnits} unit</strong></span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span style={{ color: "var(--rp-gray-text)" }}>Booking fee: <strong style={{ color: "var(--rp-dark)" }}>{project.bookingFee}</strong></span>
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "var(--rp-gray-text)" }}>
            Ayyana Residence adalah proyek rumah subsidi Type 30/80 di Pringgabaya, Lombok Timur. Cocok untuk kamu yang sedang mencari rumah pertama dengan lokasi jelas, unit terbatas, dan proses KPR yang bisa dikonsultasikan.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={WA_LINK_AYYANA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
              style={{ background: "var(--rp-cta)" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Ayyana via WhatsApp
            </Link>
            <Link
              href={project.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-105 flex items-center gap-2"
              style={{ borderColor: "var(--rp-primary)", color: "var(--rp-primary)" }}
            >
              <MapPin size={18} />
              Lihat Lokasi di Maps
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
