import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const bgUrl =
  "https://images.unsplash.com/photo-1520975968318-7b12de0f9a3d?q=80&w=2070&auto=format&fit=crop";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[#144d32] text-[#f5f1e1] overflow-hidden">
      <img
        src={bgUrl}
        alt="Classic suit"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#144d32]/70 via-[#144d32]/60 to-[#144d32]/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="uppercase tracking-[0.35em] text-xs sm:text-sm text-yellow-200/80"
        >
          Elegance is measured in detail
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight"
        >
          Timas Tailor
          <span className="block mt-2 text-2xl sm:text-3xl font-light text-[#f5f1e1]/90">
            Tailored for the Modern Gentleman.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-yellow-300/40 bg-[#f5f1e1] text-[#144d32] hover:shadow-[0_0_0_2px_rgba(212,175,55,0.25)] transition"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-yellow-300/40 hover:bg-yellow-200/10 transition"
          >
            <Calendar className="mr-2 h-4 w-4" /> Book Appointment
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#144d32] to-transparent pointer-events-none"
      />
    </section>
  );
}
