"use client";

import { motion } from "framer-motion";
import { MessageCircle, Building2, Users, Home } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    desc: "Dari hitung kemampuan KPR sampai pilih lokasi, gratis 100%",
  },
  {
    icon: Building2,
    title: "Bank Partner Terpercaya",
    desc: "Kerjasama dengan 8+ bank besar untuk approval cepat",
  },
  {
    icon: Users,
    title: "Pendampingan Sampai Akad",
    desc: "Tim kami dampingi dari survey lokasi sampai serah terima kunci",
  },
  {
    icon: Home,
    title: "Khusus First-Time Buyer",
    desc: "Program & subsidi spesial untuk pembeli rumah pertama",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
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
            Kenapa <span style={{ color: "var(--rp-primary)" }}>RumahPertama?</span>
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }} className="text-lg max-w-xl mx-auto">
            Kami dirancang khusus untuk anak muda yang baru pertama kali beli rumah
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(15,110,86,0.12)" }}
                className="p-6 rounded-2xl border cursor-default transition-shadow"
                style={{ borderColor: "var(--rp-border)", background: "#FAFAF8" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ background: "var(--rp-primary-bg)" }}
                >
                  <Icon size={24} style={{ color: "var(--rp-primary)" }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "var(--rp-gray-text)" }} className="text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
