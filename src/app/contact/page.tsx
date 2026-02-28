"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

/* ---------------- Sparkles Background ---------------- */
function Sparkles() {
  const sparkles = Array.from({ length: 90 });

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {sparkles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
              boxShadow: "0 0 10px rgba(212,175,55,0.8)",
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully 🙏");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen py-28 px-6 bg-[#0B0F1A] overflow-hidden text-white">
      <Sparkles />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-['Playfair_Display'] text-center
                     bg-gradient-to-r from-[#D4AF37] via-[#F5E6A5] to-[#D4AF37]
                     bg-clip-text text-transparent mb-6 tracking-wider
                     drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          Contact & Invitations
        </motion.h1>

        <p className="text-center text-gray-400 mb-16 text-lg">
          Connect for spiritual events, pravachan invitations & divine gatherings
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContactItem
              icon={MapPin}
              title={
                <>
                  Central Office & Media Partner <br />
                  <span className="text-[#D4AF37]">Jinsharnam Media</span>
                </>
              }
              content={
                <>
                  Vatsalya Bhawan <br />
                  P-75, Street No 5, Bihari Colony Extension, Bihari Colony <br />
                  Shahdara, Delhi – 110032 <br />
                  India
                </>
              }
            />

            <ContactItem
              icon={Mail}
              title="Email"
              content="jinsharnam@gmail.com"
            />

            <ContactItem
              icon={Phone}
              title="Phone"
              content="+91 9810900699, 9810900042"
            />

            <p className="text-[#D4AF37] italic">
              For Pravachan invitations & event scheduling,
              please contact the central office in advance.
            </p>
          </motion.div>

          {/* RIGHT SIDE – FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-gradient-to-b from-[#F5E2A0] via-[#E0C97A] to-[#C6A75E]
              text-black
              rounded-3xl p-10
              border border-[#B8860B]/40
              shadow-[0_30px_80px_rgba(0,0,0,0.25)]
              hover:shadow-[0_40px_100px_rgba(0,0,0,0.35)]
              transition-all duration-300
            "
          >
            <h2 className="text-2xl font-bold text-black mb-8">
              Send a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-[#B8860B]/40
                  bg-white/50
                  text-black
                  placeholder:text-black/60
                  focus:outline-none
                  focus:ring-2 focus:ring-[#B8860B]/40
                "
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-[#B8860B]/40
                  bg-white/50
                  text-black
                  placeholder:text-black/60
                  focus:outline-none
                  focus:ring-2 focus:ring-[#B8860B]/40
                "
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message / Invitation Details"
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-[#B8860B]/40
                  bg-white/50
                  text-black
                  placeholder:text-black/60
                  focus:outline-none
                  focus:ring-2 focus:ring-[#B8860B]/40
                "
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-3 rounded-xl
                  bg-black text-[#F5E2A0]
                  font-semibold
                  hover:bg-[#2A2006]
                  transition
                  flex items-center justify-center gap-2
                "
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-black mt-4 font-medium">{status}</p>
              )}
            </form>
          </motion.div>
        </div>

        {/* ================= MAP SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-5xl font-['Playfair_Display'] text-center
                       bg-gradient-to-r from-[#D4AF37] via-[#F5E6A5] to-[#D4AF37]
                       bg-clip-text text-transparent mb-6 tracking-wider
                       drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Our Location
          </motion.h3>

          <h3 className="text-2xl font-serif text-center 
            bg-gradient-to-r from-[#FFD97A] via-[#FFF1B8] to-[#FFD97A]
            bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(255,215,120,0.6)]
            mb-2">
            Vatsalya Bhawan
          </h3>

          <p className="text-center text-amber-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            P-75, Street Number 5, Bihari Colony Extension, Bihari Colony, Shahdara, Delhi - 110032
          </p>

          <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_40px_120px_rgba(212,175,55,0.35)]">

            <iframe
              src="https://maps.google.com/maps?hl=en&q=28.66875167458338,77.28318141405892&z=15&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />

            <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-xl border border-[#D4AF37]/40 rounded-2xl p-6 shadow-[0_20px_60px_rgba(212,175,55,0.4)] max-w-sm text-amber-100">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#FFD97A] mt-1" size={22} />
                <div>
                  <h4 className="text-lg font-semibold text-[#FFD97A] mb-1">
                    Vatsalya Bhawan
                  </h4>
                  <p className="text-sm leading-relaxed text-amber-200">
                    P-75, Street No 5,
                    Bihari Colony Extension, <br />
                    Bihari Colony,
                    Shahdara, Delhi – 110032 <br />
                    India
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, content }: any) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5E6A5] flex items-center justify-center shadow-lg">
        <Icon size={26} className="text-black" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#D4AF37] mb-2">
          {title}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}