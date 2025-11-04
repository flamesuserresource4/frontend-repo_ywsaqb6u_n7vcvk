import { motion } from "framer-motion";
import { Scissors, Shirt, Gem } from "lucide-react";

const services = [
  {
    title: "Rental",
    icon: Shirt,
    desc: "Koleksi suit klasik siap pakai untuk momen istimewa Anda.",
    price: "Mulai Rp 750.000",
  },
  {
    title: "Tailor-Made",
    icon: Scissors,
    desc: "Jahit khusus dengan konstruksi presisi dan fitting sempurna.",
    price: "Mulai Rp 3.900.000",
  },
];

export default function AboutServices() {
  return (
    <section id="about" className="relative bg-[#f5f1e1] text-[#144d32]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="uppercase tracking-[0.25em] text-xs text-[#144d32]/70">About</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif">Craftsmanship with Heritage</h2>
            <p className="mt-4 leading-relaxed text-[#144d32]/90">
              Timas Tailor adalah butik eksklusif untuk pria berkarakter klasik. Sejak awal, kami percaya bahwa elegansi lahir dari detail: pola yang presisi, bahan terbaik, dan sentuhan akhir yang rapi. Setiap jahitan adalah komitmen pada mutu.
            </p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <li className="flex items-center gap-2"><Gem className="h-4 w-4 text-yellow-700"/> Bahan premium</li>
              <li className="flex items-center gap-2"><Gem className="h-4 w-4 text-yellow-700"/> Fitting presisi</li>
              <li className="flex items-center gap-2"><Gem className="h-4 w-4 text-yellow-700"/> Detail berkelas</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#144d32]/10 shadow">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2069&auto=format&fit=crop"
                alt="Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div id="services" className="mt-16">
          <p className="uppercase tracking-[0.25em] text-xs text-[#144d32]/70">Services</p>
          <h3 className="mt-3 text-2xl sm:text-3xl font-serif">Layanan Utama</h3>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-xl border border-[#144d32]/15 bg-white/60 backdrop-blur hover:bg-white transition overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/0 via-yellow-200/0 to-yellow-200/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-[#144d32]" />
                    <h4 className="text-xl font-serif">{s.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-[#144d32]/80">{s.desc}</p>
                  <div className="mt-4 text-[#144d32] font-medium">{s.price}</div>
                  <div className="mt-6">
                    <a href="#booking" className="inline-block px-4 py-2 rounded-full border border-[#144d32]/30 text-[#144d32] hover:bg-[#144d32] hover:text-[#f5f1e1] transition">Book Now</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
