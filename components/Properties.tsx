"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { properties } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Properties() {
  return (
    <section id="properti" className="py-20 px-4" style={{ background: "#FAFAF8" }}>
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
            Properti Pilihan untuk <span style={{ color: "var(--rp-primary)" }}>Kamu</span>
          </h2>
          <p style={{ color: "var(--rp-gray-text)" }} className="text-lg">
            Rumah berkualitas dengan harga ramah anak muda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              style={{ border: "1px solid var(--rp-border)" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-bold text-white px-2 py-1 rounded-md ${property.tagColor}`}
                >
                  {property.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-semibold text-base mb-1"
                  style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                >
                  {property.name}
                </h3>
                <div className="flex items-center gap-1 mb-3" style={{ color: "var(--rp-gray-text)" }}>
                  <MapPin size={13} />
                  <span className="text-xs">{property.location}</span>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: "var(--rp-gray-text)" }}>
                  <span className="flex items-center gap-1">
                    <Bed size={13} /> {property.bed} KT
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={13} /> {property.bath} KM
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={13} /> {property.size} m²
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "var(--rp-dark)" }}
                  >
                    {property.price}
                  </div>
                  <div className="text-xs" style={{ color: "var(--rp-primary)" }}>
                    {property.cicilan}
                  </div>
                </div>

                {/* Button */}
                <Link
                  href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20properti%20ini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: "var(--rp-primary)" }}
                >
                  Lihat Detail
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20melihat%20semua%20properti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-105"
            style={{ borderColor: "var(--rp-primary)", color: "var(--rp-primary)" }}
          >
            Lihat Semua Properti
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
