"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Image from "next/image";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-20 px-4" style={{ background: "var(--rp-primary-bg)" }}>
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
            Kata Mereka yang Sudah <span style={{ color: "var(--rp-primary)" }}>Pindahan</span>
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>
            Ratusan keluarga sudah mewujudkan rumah impian bersama kami
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visible.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 flex flex-col shadow-sm"
                  style={{ border: "1px solid var(--rp-border)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <div
                        className="font-semibold text-sm"
                        style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                      >
                        {t.name}
                      </div>
                      <div className="text-xs" style={{ color: "var(--rp-gray-text)" }}>
                        {t.age} · {t.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#EF9F27" color="#EF9F27" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--rp-gray-text)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-white disabled:opacity-30"
              style={{ borderColor: "var(--rp-primary)", color: "var(--rp-primary)" }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{ background: i === page ? "var(--rp-primary)" : "var(--rp-border)" }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-white disabled:opacity-30"
              style={{ borderColor: "var(--rp-primary)", color: "var(--rp-primary)" }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
