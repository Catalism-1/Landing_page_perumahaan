"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Anchor,
  ShieldCheck,
  Fuel,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Anchor,
  ShieldCheck,
  Fuel,
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
};

export default function LocationAdvantages() {
  const project = projects[0];
  const advantages = project.locationAdvantages;

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#061F1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
          >
            Lokasi Strategis di Pringgabaya, Lombok Timur
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "var(--rp-gray-text)" }}>
            Ayyana Residence berada di area yang mudah diakses, dekat fasilitas penting, dan cocok untuk hunian keluarga maupun investasi masa depan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {advantages.map((item, i) => {
            const Icon = iconMap[item.icon] || MapPin;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border bg-white dark:bg-[#0D352D] hover:shadow-lg dark:hover:shadow-[#061F1A]/40 dark:hover:border-amber-600/20 transition-all duration-300"
                style={{ borderColor: "var(--rp-border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--rp-primary-bg)" }}
                >
                  <Icon size={20} style={{ color: "var(--rp-primary)" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--rp-gray-text)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={project.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-105"
            style={{ borderColor: "var(--rp-primary)", color: "var(--rp-primary)" }}
          >
            <MapPin size={18} />
            Lihat Lokasi di Google Maps
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
