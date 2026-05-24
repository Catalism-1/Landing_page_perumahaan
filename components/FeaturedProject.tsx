"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Flame, Sparkles, Clock, ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import {
  projects,
  WA_LINK_AYYANA,
  WA_LINK_PROMO,
  WA_LINK_PROMO_INFO,
} from "@/lib/data";
import { event } from "@/lib/fpixel";
import { useEffect, useRef } from "react";
import AyyanaLocationMap from "@/components/AyyanaLocationMap";

export default function FeaturedProject() {
  const project = projects[0];
  const promo = project.promo;
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    event("ViewContent", {
      content_name: "Ayyana Residence Pringgabaya",
      content_category: "Rumah Subsidi",
      project_location: "Pringgabaya Lombok Timur",
    });
  }, []);

  return (
    <section id="proyek-pilihan" className="py-20 px-4 bg-white dark:bg-[#061F1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        {/* Promo Card */}
        {promo && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <div
              className="relative rounded-2xl overflow-hidden border shadow-[0_18px_50px_-20px_rgba(239,159,39,0.55)] dark:shadow-[0_18px_55px_-18px_rgba(239,159,39,0.35)]"
              style={{
                borderColor: "var(--rp-cta)",
                background:
                  "linear-gradient(135deg, rgba(239,159,39,0.18) 0%, rgba(239,159,39,0.06) 55%, rgba(255,255,255,0.0) 100%)",
              }}
            >
              {/* Soft amber glow behind hero number */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-16 w-72 h-72 rounded-full blur-3xl opacity-50 dark:opacity-60"
                style={{ background: "radial-gradient(closest-side, rgba(239,159,39,0.45), transparent)" }}
              />

              {/* Badge top */}
              <div
                className="relative flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide"
                style={{ background: "rgba(239,159,39,0.22)" }}
              >
                <Flame size={14} style={{ color: "var(--rp-cta)" }} />
                <span style={{ color: "var(--rp-cta-hover)" }}>{promo.badge}</span>
              </div>

              <div className="relative grid md:grid-cols-5 gap-6 md:gap-8 p-6 md:p-8">
                {/* Left: headline + price + benefits */}
                <div className="md:col-span-3 text-left">
                  <p
                    className="text-sm font-medium mb-2"
                    style={{
                      color: "var(--rp-cta-hover)",
                      fontFamily: "var(--font-jakarta), sans-serif",
                    }}
                  >
                    {promo.title}
                  </p>

                  <motion.p
                    initial={{ scale: 0.96, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
                    className="font-extrabold leading-[1.02] mb-3"
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      color: "var(--rp-dark)",
                      fontSize: "clamp(2.5rem, 6.5vw, 4rem)",
                      letterSpacing: "-0.02em",
                      textShadow: "0 4px 24px rgba(239,159,39,0.25)",
                    }}
                  >
                    {promo.highlight}
                  </motion.p>

                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <span
                      className="text-sm line-through"
                      style={{ color: "var(--rp-gray-text)" }}
                    >
                      {promo.normalPrice}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "rgba(15,110,86,0.12)", color: "var(--rp-primary)" }}
                    >
                      HEMAT s/d Rp12 Juta
                    </span>
                  </div>

                  <p
                    className="text-sm mb-5 max-w-md"
                    style={{ color: "var(--rp-gray-text)" }}
                  >
                    Dari normal Rp17 juta — {promo.subline.toLowerCase()}
                  </p>

                  <ul className="space-y-2">
                    {promo.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm font-medium"
                        style={{ color: "var(--rp-dark)" }}
                      >
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: "rgba(239,159,39,0.18)" }}
                        >
                          <Sparkles size={13} style={{ color: "var(--rp-cta-hover)" }} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: urgency + CTA */}
                <div
                  className="md:col-span-2 rounded-xl p-5 flex flex-col gap-4 border bg-white/90 dark:bg-[#082B24]/90 backdrop-blur-sm"
                  style={{ borderColor: "rgba(239,159,39,0.35)" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(239,159,39,0.18)" }}
                    >
                      <Clock size={16} style={{ color: "var(--rp-cta-hover)" }} />
                    </span>
                    <div className="leading-tight">
                      <p
                        className="text-[11px] uppercase tracking-wider font-semibold"
                        style={{ color: "var(--rp-cta-hover)" }}
                      >
                        Kuota Promo
                      </p>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "var(--rp-dark)" }}
                      >
                        5 Orang Tercepat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="flex-1 h-2 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--rp-cta) 0%, rgba(239,159,39,0.4) 100%)",
                          boxShadow: "inset 0 0 0 1px rgba(239,159,39,0.45)",
                        }}
                        aria-label={`Slot ${n}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] -mt-2" style={{ color: "var(--rp-gray-text)" }}>
                    <span>Slot 1</span>
                    <span>Slot 5</span>
                  </div>

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--rp-gray-text)" }}
                  >
                    {promo.microcopy}
                  </p>

                  <div className="flex flex-col gap-2 mt-1">
                    <WhatsAppLink
                      href={WA_LINK_PROMO}
                      source="promo_section"
                      ariaLabel="Klaim promo Ayyana Residence via WhatsApp"
                      className="w-full px-5 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 text-base"
                      style={{ background: "var(--rp-cta)" }}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Klaim Promo Sekarang
                    </WhatsAppLink>

                    <WhatsAppLink
                      href={WA_LINK_PROMO_INFO}
                      source="promo_section_info"
                      ariaLabel="Tanya syarat promo via WhatsApp"
                      className="w-full px-3 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      style={{ color: "var(--rp-cta-hover)" }}
                    >
                      Tanya Syarat Promo
                      <ArrowRight size={14} />
                    </WhatsAppLink>
                  </div>
                </div>
              </div>

              {/* Bottom disclaimer */}
              <div
                className="relative px-6 md:px-8 py-3 text-center text-xs"
                style={{
                  borderTop: "1px solid rgba(239,159,39,0.2)",
                  background: "rgba(239,159,39,0.06)",
                  color: "var(--rp-gray-text)",
                }}
              >
                {promo.disclaimer}
              </div>
            </div>
          </motion.div>
        )}

        <AyyanaLocationMap />

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
            Hot Project Saat Ini
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
            <span className="hidden sm:inline" style={{ color: "var(--rp-border)" }}>|</span>
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
                  className="rounded-xl overflow-hidden border bg-white dark:bg-[#0D352D] transition-colors duration-300 hover:border-amber-600/20 dark:hover:border-amber-500/25"
                  style={{ borderColor: "var(--rp-border)" }}
                >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
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
                      className="snap-center w-[85vw] max-w-[340px] shrink-0 rounded-xl overflow-hidden border bg-white dark:bg-[#0D352D] transition-colors duration-300"
                      style={{ borderColor: "var(--rp-border)" }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
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
            <span className="hidden sm:inline" style={{ color: "var(--rp-border)" }}>|</span>
            <span style={{ color: "var(--rp-gray-text)" }}>Tahap pertama: <strong style={{ color: "var(--rp-dark)" }}>{project.totalUnits} unit</strong></span>
            <span className="hidden sm:inline" style={{ color: "var(--rp-border)" }}>|</span>
            <span style={{ color: "var(--rp-gray-text)" }}>Booking fee: <strong style={{ color: "var(--rp-dark)" }}>{project.bookingFee}</strong></span>
          </div>

          <p className="text-sm leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "var(--rp-gray-text)" }}>
            Ayyana Residence adalah proyek rumah subsidi Type 30/80 di Pringgabaya, Lombok Timur. Cocok untuk kamu yang sedang mencari rumah pertama dengan lokasi jelas, unit terbatas, dan proses KPR yang bisa dikonsultasikan.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppLink
              href={WA_LINK_AYYANA}
              source="ayyana_cta"
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
              style={{ background: "var(--rp-cta)" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Ayyana via WhatsApp
            </WhatsAppLink>
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
