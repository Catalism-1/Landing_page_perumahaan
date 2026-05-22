"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Keluarga sudah punya rumah" },
  { value: 250, prefix: "Rp ", suffix: "M+", label: "Total transaksi" },
  { value: 50, suffix: "+", label: "Properti tersedia" },
  { value: 4.9, suffix: "★", label: "Rating dari klien" },
];

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section style={{ background: "var(--rp-primary-bg)" }} className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: "var(--rp-primary)",
                }}
              >
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm" style={{ color: "var(--rp-gray-text)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
