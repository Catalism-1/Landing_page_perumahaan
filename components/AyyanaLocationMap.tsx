"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ShieldCheck, Fuel, Anchor, GraduationCap, HeartPulse, BriefcaseBusiness } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { event } from "@/lib/fpixel";

const MAPS_URL = "https://maps.app.goo.gl/RHiwpVJaFGR49BH78";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Depan+Kompi+TNI+Pringgabaya,+Lombok+Timur,+NTB&output=embed";
const WA_SURVEY =
  "https://wa.me/6285173221561?text=Halo%20RumahPertama%2C%20saya%20ingin%20cek%20lokasi%20Ayyana%20Residence%20Pringgabaya%20dan%20jadwalkan%20survey.";

const locationPoints = [
  { icon: ShieldCheck, text: "Depan Kompi TNI Pringgabaya" },
  { icon: Fuel, text: "Sebelum Pertamina Labuan Lombok" },
  { icon: Anchor, text: "Dekat Pelabuhan Kayangan Lombok" },
  { icon: GraduationCap, text: "Dekat fasilitas pendidikan" },
  { icon: HeartPulse, text: "Dekat fasilitas kesehatan" },
  { icon: BriefcaseBusiness, text: "Dekat kawasan industri dan aktivitas ekonomi" },
];

function handleMapsClick() {
  event("ViewContent", {
    content_name: "Ayyana Residence Location",
    content_category: "Location",
    lead_source: "google_maps_button",
  });
}

export default function AyyanaLocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12"
    >
      <div
        className="rounded-2xl overflow-hidden border dark:border-white/10"
        style={{
          borderColor: "var(--rp-border)",
          background: "var(--rp-primary-bg)",
        }}
      >
        {/* Header */}
        <div
          className="px-6 md:px-8 py-5 border-b dark:border-white/10"
          style={{ borderColor: "rgba(15,110,86,0.15)" }}
        >
          <div className="flex items-start gap-3">
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "var(--rp-primary)", color: "#fff" }}
            >
              <MapPin size={17} />
            </span>
            <div>
              <h3
                className="font-bold text-base md:text-lg leading-snug"
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: "var(--rp-dark)",
                }}
              >
                Lokasi Ayyana Residence Pringgabaya
              </h3>
              <p className="text-xs md:text-sm mt-0.5 max-w-xl" style={{ color: "var(--rp-gray-text)" }}>
                Berada di depan Kompi TNI Pringgabaya, sebelum Pertamina Labuan Lombok.
                Lokasi mudah dicek dan bisa langsung disurvey.
              </p>
            </div>
          </div>
        </div>

        {/* Body: 2 col */}
        <div className="grid md:grid-cols-2">
          {/* Left: info */}
          <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <span
                className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(15,110,86,0.12)", color: "var(--rp-primary)" }}
              >
                📍 Lokasi Strategis
              </span>
              <h4
                className="font-bold text-lg md:text-xl mb-2 leading-snug"
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: "var(--rp-dark)",
                }}
              >
                Akses Mudah, Lokasi Jelas, Siap Survey
              </h4>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--rp-gray-text)" }}>
                Ayyana Residence berada di kawasan Pringgabaya, Lombok Timur. Lokasinya mudah
                dikenali karena berada di depan Kompi TNI Pringgabaya dan sebelum Pertamina
                Labuan Lombok.
              </p>

              <ul className="space-y-2">
                {locationPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--rp-dark)" }}>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(15,110,86,0.12)" }}
                    >
                      <Icon size={13} style={{ color: "var(--rp-primary)" }} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMapsClick}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-[1.02] text-sm dark:border-[#1D9E75] dark:text-[#1D9E75]"
                style={{ borderColor: "var(--rp-primary)", color: "var(--rp-primary)" }}
              >
                <Navigation size={16} />
                Lihat Rute di Google Maps
              </a>
              <WhatsAppLink
                href={WA_SURVEY}
                source="location_section_survey"
                ariaLabel="Konsultasi dan jadwalkan survey via WhatsApp"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-amber-600/30 text-sm"
                style={{ background: "var(--rp-cta)" }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi &amp; Jadwalkan Survey
              </WhatsAppLink>
            </div>
          </div>

          {/* Right: map embed */}
          <div
            className="relative min-h-[300px] md:min-h-[360px] border-t md:border-t-0 md:border-l dark:border-white/10"
            style={{ borderColor: "rgba(15,110,86,0.15)" }}
          >
            {/* Clickable overlay chip */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMapsClick}
              className="absolute top-3 left-3 right-3 z-10 flex items-center gap-2 rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-shadow"
              style={{
                background: "rgba(255,255,255,0.93)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--rp-primary)" }}
              >
                <MapPin size={14} color="#fff" />
              </span>
              <div className="min-w-0">
                <p
                  className="font-semibold text-xs leading-tight truncate"
                  style={{ color: "#2C2C2A" }}
                >
                  Ayyana Residence Pringgabaya
                </p>
                <p className="text-[11px] leading-tight" style={{ color: "#5F5E5A" }}>
                  Klik untuk buka rute Google Maps
                </p>
              </div>
            </a>

            <iframe
              src={MAPS_EMBED}
              title="Lokasi Ayyana Residence Pringgabaya"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
