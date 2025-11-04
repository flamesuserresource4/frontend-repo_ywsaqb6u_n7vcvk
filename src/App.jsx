import Hero from "./components/Hero";
import AboutServices from "./components/AboutServices";
import Gallery from "./components/Gallery";
import BookingContact from "./components/BookingContact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Ensure smooth scrolling for anchor links
    const html = document.querySelector("html");
    if (html) html.style.scrollBehavior = "smooth";
    return () => {
      if (html) html.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1e1] text-[#144d32]">
      {/* Top Bar / Navigation */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <nav className="flex items-center justify-between rounded-full border border-[#f5f1e1]/30 bg-[#144d32]/90 backdrop-blur text-[#f5f1e1] px-4 py-2">
            <a href="#home" className="font-serif tracking-wide">Timas Tailor</a>
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#about" className="hover:text-yellow-200/90 transition">About</a>
              <a href="#services" className="hover:text-yellow-200/90 transition">Services</a>
              <a href="#gallery" className="hover:text-yellow-200/90 transition">Gallery</a>
              <a href="#booking" className="hover:text-yellow-200/90 transition">Booking</a>
            </div>
            <a href="#booking" className="hidden sm:inline-block px-4 py-1.5 rounded-full border border-yellow-300/40 bg-[#f5f1e1] text-[#144d32] hover:opacity-95">Book</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <AboutServices />
        <Gallery />
        <BookingContact />
      </main>

      <footer className="bg-[#144d32] text-[#f5f1e1] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Timas Tailor. All rights reserved.</p>
          <p className="text-xs text-yellow-200/80">Elegance is measured in detail.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
