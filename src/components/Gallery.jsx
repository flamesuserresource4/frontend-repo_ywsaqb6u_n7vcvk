import { motion } from "framer-motion";

const items = [
  "https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520974658310-9d7f7d974c2b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592878979735-963a9556b89b?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559138816-1d0f27e27404?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594937113195-27b2b9db3cff?q=80&w=2069&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#144d32] text-[#f5f1e1]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.25em] text-xs text-yellow-200/80">Gallery</p>
        <h3 className="mt-3 text-3xl font-serif">Signature Looks</h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl ring-1 ring-white/10"
            >
              <img src={src} alt="Look" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#144d32] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
