"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectDetails() {
  const project = projects[0];

  return (
    <section className="py-20 px-4" style={{ background: "var(--rp-primary-bg)" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
          >
            Detail {project.name}
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>{project.product}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        >
          {project.specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg bg-white border"
              style={{ borderColor: "var(--rp-border)" }}
            >
              <Check size={16} style={{ color: "var(--rp-primary)" }} className="shrink-0" />
              <span className="text-sm" style={{ color: "var(--rp-dark)" }}>{spec}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
