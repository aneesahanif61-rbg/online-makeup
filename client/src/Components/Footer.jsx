import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b090a] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold tracking-wider text-white">
              LUMÉRA BEAUTY
            </h2>
            <p className="text-sm leading-relaxed text-white/60">
              Curating modern premium elegance and luxury cosmetics designed to enhance your natural glow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="transition hover:text-[#b85c76]">Home</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">About Us</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">Services</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">Collections</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">Contact</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Customer Care</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="transition hover:text-[#b85c76]">Shipping Policy</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">Returns & Exchanges</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">FAQs</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">Privacy Policy</a></li>
              <li><a href="#" className="transition hover:text-[#b85c76]">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Join Our Club</h3>
            <p className="text-sm text-white/60">
              Subscribe to get special offers and updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#b85c76]"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[#b85c76] py-2.5 text-sm font-semibold text-white transition hover:bg-[#d06f89]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} LUMÉRA BEAUTY. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="hover:text-[#b85c76]">Instagram</a>
            <a href="#" className="hover:text-[#b85c76]">Facebook</a>
            <a href="#" className="hover:text-[#b85c76]">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;