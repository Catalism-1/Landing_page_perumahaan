"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { problemCards } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section id="tentang" className="py-20 px-4 bg-white">
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
            Beli rumah pertama sering bikin bingung?
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>
            Kamu tidak sendiri. Ini masalah yang paling sering dialami pembeli rumah pertama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problemCards.map((problem, i) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-xl border bg-white hover:shadow-md transition-shadow"
              style={{ borderColor: "var(--rp-border)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "#FEF3C7" }}
              >
                <HelpCircle size={16} style={{ color: "#D97706" }} />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--rp-dark)" }}
              >
                {problem}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
