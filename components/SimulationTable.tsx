"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { projects, WA_LINK_AYYANA } from "@/lib/data";

export default function SimulationTable() {
  const project = projects[0];

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#061F1A] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Calculator size={24} style={{ color: "var(--rp-primary)" }} />
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
            >
              Simulasi Angsuran
            </h2>
          </div>
          <p style={{ color: "var(--rp-gray-text)" }}>{project.name} — {project.product}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {project.simulation.map((tenorData) => (
            <div key={tenorData.tenor}>
              <h3
                className="text-lg font-semibold mb-3 text-center"
                style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-primary)" }}
              >
                Tenor {tenorData.tenor}
              </h3>
              <div className="overflow-x-auto rounded-xl border dark:border-white/10" style={{ borderColor: "var(--rp-border)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="dark:bg-[#082B24]/80" style={{ background: "var(--rp-primary-bg)" }}>
                      <th className="text-left py-3 px-4 font-semibold" style={{ color: "var(--rp-dark)" }}>DP</th>
                      <th className="text-right py-3 px-4 font-semibold" style={{ color: "var(--rp-dark)" }}>Angsuran / Bulan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenorData.rows.map((row, j) => (
                      <tr key={row.dp} className={`border-t transition-colors duration-300 ${j % 2 === 0 ? 'dark:bg-[#0D352D]/40' : 'dark:bg-[#0D352D]'}`} style={{ borderColor: "var(--rp-border)" }}>
                        <td className="py-3 px-4 font-medium" style={{ color: "var(--rp-dark)" }}>DP {row.dp}</td>
                        <td className="py-3 px-4 text-right font-semibold" style={{ color: "var(--rp-primary)" }}>{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <p className="text-xs mb-4" style={{ color: "var(--rp-gray-text)" }}>
              Simulasi dapat berubah mengikuti ketentuan bank dan hasil verifikasi pengajuan KPR.
            </p>
            <WhatsAppLink
              href={WA_LINK_AYYANA}
              source="simulation_cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--rp-cta)" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Simulasi via WhatsApp
            </WhatsAppLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
