"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function UnitAvailability() {
  const project = projects[0];
  const available = project.totalUnits - project.bookedUnits;
  const bookedPercent = (project.bookedUnits / project.totalUnits) * 100;

  return (
    <section className="py-16 px-4 bg-white border-t" style={{ borderColor: "var(--rp-border)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p
          className="text-lg font-semibold mb-4"
          style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
        >
          Tahap pertama {project.totalUnits} unit — {project.bookedUnits} sudah booking — tersisa <span style={{ color: "var(--rp-primary)" }}>{available} unit</span>
        </p>

        {/* Progress Bar */}
        <div className="w-full h-4 rounded-full mb-2" style={{ background: "var(--rp-primary-bg)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${bookedPercent}%`,
              background: "var(--rp-primary)",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${bookedPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between text-xs mb-6" style={{ color: "var(--rp-gray-text)" }}>
          <span>{project.bookedUnits} booked</span>
          <span>{available} tersedia</span>
        </div>

        <p className="text-xs italic" style={{ color: "var(--rp-gray-text)" }}>
          Ketersediaan unit dapat berubah sewaktu-waktu. Konsultasikan unit terbaru via WhatsApp.
        </p>
      </motion.div>
    </section>
  );
}
