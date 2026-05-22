"use client";

import { motion } from "framer-motion";
import { MessageCircle, Map, CreditCard, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    desc: "Diskusi kebutuhan & budget kamu",
  },
  {
    number: "02",
    icon: Map,
    title: "Survey Lokasi",
    desc: "Kami tunjukkan opsi terbaik sesuai kriteria",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Proses KPR",
    desc: "Kami bantu pengajuan ke bank partner",
  },
  {
    number: "04",
    icon: Key,
    title: "Akad & Kunci",
    desc: "Selamat, rumah pertama kamu sudah ready!",
  },
];

export default function Process() {
  return (
    <section id="cara-kerja" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
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
            4 Langkah Mudah Punya Rumah
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>Proses transparan dari awal sampai kamu pegang kunci</p>
        </motion.div>

        {/* Desktop: Horizontal */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex-1 relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-8 left-1/2 w-full h-0.5"
                    style={{ background: "var(--rp-primary-bg)" }}
                  />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10"
                    style={{ background: "var(--rp-primary)", color: "white" }}
                  >
                    <Icon size={24} />
                  </div>
                  <div
                    className="text-5xl font-bold mb-2 opacity-10"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-primary)" }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--rp-gray-text)" }}>
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--rp-primary)" }}
                  >
                    <Icon size={20} color="white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-10 mt-2" style={{ background: "var(--rp-primary-bg)" }} />
                  )}
                </div>
                <div className="pt-2">
                  <div
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "var(--rp-primary-light)" }}
                  >
                    Langkah {step.number}
                  </div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--rp-gray-text)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
