"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-white dark:bg-[#071F1A] transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
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
            Pertanyaan yang Sering Ditanya
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }}>
            Masih ada pertanyaan? Tim kami siap bantu via WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border rounded-xl px-5 overflow-hidden bg-white dark:bg-[#103A31] transition-colors duration-300"
                style={{ borderColor: "var(--rp-border)" }}
              >
                <AccordionTrigger
                  className="text-left font-medium py-4 hover:no-underline"
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    color: "var(--rp-dark)",
                  }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm leading-relaxed pb-4"
                  style={{ color: "var(--rp-gray-text)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
