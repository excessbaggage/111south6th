"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { agents } from "@/lib/data";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-[#2C2C2C]">
      <div ref={ref} className="max-w-6xl mx-auto px-8 fade-up">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white">
          Schedule a Private Showing
        </h2>
        <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-6 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Agent Info */}
          <div>
            <p className="font-body uppercase text-xs tracking-[3px] text-[#C9A96E] mb-4">
              Listed By
            </p>
            <h3 className="font-display text-2xl text-white mb-2">
              {agents.names}
            </h3>
            <p className="font-body text-[#C9A96E] mb-8">{agents.brokerage}</p>

            <a
              href={`tel:${agents.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 text-white/80 hover:text-[#C9A96E] transition mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="font-body text-sm">{agents.phone}</span>
            </a>

            <a
              href={`mailto:${agents.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-[#C9A96E] transition mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="font-body text-sm">{agents.email}</span>
            </a>

            <p className="font-body text-sm text-white/40">MLS #115315</p>
          </div>

          {/* Contact Form */}
          <div>
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-white/20 text-white py-3 font-body text-sm placeholder:text-white/30 focus:border-[#C9A96E] focus:outline-none transition mb-6"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-white/20 text-white py-3 font-body text-sm placeholder:text-white/30 focus:border-[#C9A96E] focus:outline-none transition mb-6"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full bg-transparent border-b border-white/20 text-white py-3 font-body text-sm placeholder:text-white/30 focus:border-[#C9A96E] focus:outline-none transition mb-6"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 text-white py-3 font-body text-sm placeholder:text-white/30 focus:border-[#C9A96E] focus:outline-none transition mb-6"
              />
              <button
                type="submit"
                className="w-full bg-[#C9A96E] text-[#2C2C2C] py-4 font-body uppercase tracking-[2px] text-sm font-medium hover:bg-[#d4b87d] transition"
              >
                Request a Showing
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
