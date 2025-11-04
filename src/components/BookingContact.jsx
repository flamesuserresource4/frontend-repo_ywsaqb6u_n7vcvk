import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, MessageCircle, Instagram } from "lucide-react";

export default function BookingContact() {
  const [form, setForm] = useState({ name: "", date: "", service: "Rental" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const waText = encodeURIComponent(
    `Halo Timas Tailor, saya ${form.name || "(nama)"} ingin booking ${form.service} untuk tanggal ${form.date || "(tanggal)"}.`
  );

  return (
    <section id="booking" className="relative bg-[#f5f1e1] text-[#144d32]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-[#144d32]/70">Booking</p>
            <h3 className="mt-3 text-3xl font-serif">Book Appointment</h3>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm mb-1">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap"
                  className="w-full rounded-md border border-[#144d32]/20 bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Tanggal Fitting</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#144d32]/60" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#144d32]/20 bg-white/70 pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Layanan</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#144d32]/20 bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option>Rental</option>
                  <option>Tailor-Made</option>
                </select>
              </div>
              <div className="pt-2 flex gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#144d32]/30 bg-[#144d32] text-[#f5f1e1] hover:opacity-95 transition"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Kirim via WhatsApp
                </a>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full border border-[#144d32]/30 text-[#144d32] hover:bg-[#144d32] hover:text-[#f5f1e1] transition"
                  onClick={() => alert("Terima kasih, tim kami akan menghubungi Anda.")}
                >
                  Simpan
                </button>
              </div>
              <p className="text-xs text-[#144d32]/70">
                Catatan: ini formulir demo. Gunakan WhatsApp untuk konfirmasi cepat.
              </p>
            </form>
          </motion.div>

          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="uppercase tracking-[0.25em] text-xs text-[#144d32]/70">Contact</p>
            <h3 className="text-3xl font-serif">Contact & Location</h3>
            <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-[#144d32]/10">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.626256091078!2d106.816666!3d-6.175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzEuNCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 border border-[#144d32]/10"><MapPin className="h-4 w-4"/> Jakarta, Indonesia</div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#144d32] text-[#f5f1e1] border border-[#144d32]/10 hover:opacity-95"><MessageCircle className="h-4 w-4"/> WhatsApp</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 border border-[#144d32]/10 hover:bg-white"><Instagram className="h-4 w-4"/> Instagram</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
