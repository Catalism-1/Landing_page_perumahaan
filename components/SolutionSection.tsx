"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { solutionCards } from "@/lib/data";

export default function SolutionSection() {
  return (
    <section className="py-20 px-4 transition-colors duration-300" style={{ background: "var(--rp-primary-bg)" }}>
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
            RumahPertama bantu dari konsultasi sampai survey
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>
            Semua langkah didampingi. Dari awal cari tahu sampai kamu siap booking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutionCards.map((solution, i) => (
            <motion.div
              key={solution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-5 rounded-xl border bg-white dark:bg-[#0D352D] hover:shadow-md dark:hover:shadow-[#061F1A]/40 transition-all duration-300"
              style={{ borderColor: "var(--rp-border)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--rp-primary)" }}
              >
                <CheckCircle size={16} color="white" />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--rp-dark)" }}
              >
                {solution}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
