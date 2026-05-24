"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 px-4 bg-white dark:bg-[#061F1A] transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
          >
            Cara Kerja RumahPertama
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>
            Dari konsultasi sampai booking. Semua didampingi.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0">
          {howItWorksSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-5 relative"
            >
              {/* Vertical connector */}
              {i < howItWorksSteps.length - 1 && (
                <div
                  className="absolute left-5 top-12 w-0.5 h-[calc(100%-12px)]"
                  style={{ background: "var(--rp-primary-bg)" }}
                />
              )}

              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 relative z-10"
                style={{ background: "var(--rp-primary)" }}
              >
                {item.step}
              </div>
              <div className="pb-10 pt-1.5">
                <h3
                  className="font-semibold text-base mb-1"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--rp-gray-text)" }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
