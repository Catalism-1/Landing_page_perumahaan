"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-20 px-4 text-center text-white"
      style={{
        background: "linear-gradient(135deg, var(--rp-primary) 0%, var(--rp-primary-light) 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Siap Punya Rumah Pertama?
          </h2>
          <p className="text-white/85 text-lg mb-10">
            Konsultasi gratis tanpa komitmen. Tim kami siap bantu kamu wujudkan rumah impian.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20konsultasi%20rumah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--rp-cta)" }}
            >
              💬 Chat WhatsApp Sekarang
            </Link>
            <Link
              href="tel:+628123456789"
              className="px-8 py-4 rounded-xl font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-green-800 hover:scale-105"
            >
              📞 Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
