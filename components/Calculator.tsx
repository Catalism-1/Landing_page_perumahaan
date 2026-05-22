"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function formatRupiah(value: number) {
  if (value >= 1_000_000_000) return `Rp ${(value / 1_000_000_000).toFixed(2)} M`;
  if (value >= 1_000_000) return `Rp ${(value / 1_000_000).toFixed(0)} Juta`;
  return `Rp ${value.toLocaleString("id-ID")}`;
}

function formatMonthly(value: number) {
  return `Rp ${(value / 1_000_000).toFixed(2)} Juta/bln`;
}

export default function Calculator() {
  const [harga, setHarga] = useState(500_000_000);
  const [dp, setDp] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [bunga, setBunga] = useState(8);

  const pokok = harga * (1 - dp / 100);
  const r = bunga / 100 / 12;
  const n = tenor * 12;
  const cicilan = (pokok * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  const totalBayar = cicilan * n;
  const totalBunga = totalBayar - pokok;

  return (
    <section id="kalkulator" className="py-20 px-4" style={{ background: "var(--rp-primary-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
          >
            Hitung Cicilan KPR Kamu Sekarang
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>
            Simulasi cicilan real-time untuk bantu kamu rencanakan pembelian rumah
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Input */}
            <div className="p-6 md:p-8" style={{ borderRight: "1px solid var(--rp-border)" }}>
              <h3
                className="font-semibold text-lg mb-6"
                style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
              >
                Parameter KPR
              </h3>

              <div className="space-y-6">
                {/* Harga Rumah */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium" style={{ color: "var(--rp-dark)" }}>
                      Harga Rumah
                    </label>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-primary)" }}>
                      {formatRupiah(harga)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={200_000_000}
                    max={2_000_000_000}
                    step={10_000_000}
                    value={harga}
                    onChange={(e) => setHarga(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: "var(--rp-primary)" }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--rp-gray-text)" }}>
                    <span>Rp 200 Juta</span>
                    <span>Rp 2 M</span>
                  </div>
                </div>

                {/* DP */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium" style={{ color: "var(--rp-dark)" }}>
                      Uang Muka (DP)
                    </label>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-primary)" }}>
                      {dp}% ({formatRupiah(harga * dp / 100)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={1}
                    value={dp}
                    onChange={(e) => setDp(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: "var(--rp-primary)" }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--rp-gray-text)" }}>
                    <span>10%</span><span>50%</span>
                  </div>
                </div>

                {/* Tenor */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium" style={{ color: "var(--rp-dark)" }}>
                      Tenor
                    </label>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-primary)" }}>
                      {tenor} tahun
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={tenor}
                    onChange={(e) => setTenor(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: "var(--rp-primary)" }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--rp-gray-text)" }}>
                    <span>5 thn</span><span>30 thn</span>
                  </div>
                </div>

                {/* Bunga */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium" style={{ color: "var(--rp-dark)" }}>
                      Suku Bunga / Tahun
                    </label>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-primary)" }}>
                      {bunga}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={12}
                    step={0.1}
                    value={bunga}
                    onChange={(e) => setBunga(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: "var(--rp-primary)" }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: "var(--rp-gray-text)" }}>
                    <span>5%</span><span>12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="p-6 md:p-8 flex flex-col justify-between" style={{ background: "#FAFAF8" }}>
              <div>
                <h3
                  className="font-semibold text-lg mb-6"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                >
                  Estimasi Cicilan
                </h3>

                <div className="text-center mb-8">
                  <p className="text-sm mb-1" style={{ color: "var(--rp-gray-text)" }}>
                    Cicilan per bulan
                  </p>
                  <div
                    className="text-4xl font-bold"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-primary)" }}
                  >
                    {formatMonthly(cicilan)}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div
                    className="flex justify-between py-3 px-4 rounded-xl"
                    style={{ background: "var(--rp-primary-bg)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--rp-gray-text)" }}>Pokok Pinjaman</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-dark)" }}>
                      {formatRupiah(pokok)}
                    </span>
                  </div>
                  <div
                    className="flex justify-between py-3 px-4 rounded-xl"
                    style={{ background: "var(--rp-primary-bg)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--rp-gray-text)" }}>Total Bayar</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-dark)" }}>
                      {formatRupiah(totalBayar)}
                    </span>
                  </div>
                  <div
                    className="flex justify-between py-3 px-4 rounded-xl"
                    style={{ background: "var(--rp-primary-bg)" }}
                  >
                    <span className="text-sm" style={{ color: "var(--rp-gray-text)" }}>Total Bunga</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--rp-dark)" }}>
                      {formatRupiah(totalBunga)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20konsultasi%20lebih%20lanjut%20soal%20KPR"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--rp-cta)" }}
              >
                Konsultasi Lebih Lanjut
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
