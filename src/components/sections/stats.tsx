"use client"

import { motion } from "framer-motion"

export default function StatsSection() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "Countries" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
