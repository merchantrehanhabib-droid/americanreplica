import { useState } from "react";
import { Star, Phone, Send, Tag } from "lucide-react";

function AnimatedFlag({ size = "sm" }: { size?: "sm" | "lg" }) {
  const w = size === "lg" ? 52 : 32;
  const h = size === "lg" ? 34 : 21;
  const canton = { w: size === "lg" ? 20 : 12, h: size === "lg" ? 17 : 10 };
  const r = size === "lg" ? 1 : 0.65;
  return (
    <span className="inline-flex items-center relative overflow-hidden flex-shrink-0" style={{ width: w, height: h }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        style={{ animation: "flagWave 1.8s ease-in-out infinite", transformOrigin: "left center", display: "block" }}
      >
        {[0,2,4,6,8,10,12].map((y) => (
          <rect key={`r${y}`} x="0" y={y*(h/13)} width={w} height={h/13} fill="#B22234" />
        ))}
        {[1,3,5,7,9,11].map((y) => (
          <rect key={`w${y}`} x="0" y={y*(h/13)} width={w} height={h/13} fill="#FFFFFF" />
        ))}
        <rect x="0" y="0" width={canton.w} height={canton.h} fill="#3C3B6E" />
        {[canton.w*0.18, canton.w*0.36, canton.w*0.54, canton.w*0.72, canton.w*0.9].map((cx) =>
          [canton.h*0.17, canton.h*0.5, canton.h*0.83].map((cy) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#FFFFFF" />
          ))
        )}
      </svg>
      <style>{`
        @keyframes flagWave {
          0%   { transform: skewY(0deg) scaleX(1); }
          25%  { transform: skewY(-2deg) scaleX(0.97); }
          50%  { transform: skewY(0deg) scaleX(1); }
          75%  { transform: skewY(2deg) scaleX(0.97); }
          100% { transform: skewY(0deg) scaleX(1); }
        }
      `}</style>
    </span>
  );
}

const bullets = [
  "Not able to write a great manuscript?",
  "Are you frustrated with waiting for approvals?",
  "As a publisher, do you know what to do next?",
];

export default function Hero() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-navy/88" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-6 pt-2">

            {/* Eyebrow */}
            <p className="text-gold font-semibold text-base md:text-lg tracking-wide">
              Become A Self-Published Author:
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] xl:text-[3.8rem] font-serif font-bold leading-[1.12] text-white">
              Control Your Work, Share Your Voice, And Keep{" "}
              <span className="text-gold">100% Of Your Royalties</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Americanbookfounders team of experts will work very hard on your book, help you
              get it published, and make you a "stunning author." Join hands with the authentic
              and powerful team of creative book writers!
            </p>

            {/* Bullet pain points */}
            <ul className="space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200 text-sm md:text-base">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:+18005550199"
                className="inline-flex items-center justify-center gap-2 bg-navy border-2 border-gold text-white font-bold text-sm px-7 py-4 rounded-md hover:bg-gold hover:text-navy transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (800) 555-0199
              </a>
              <button className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-navy font-bold text-sm px-7 py-4 rounded-md transition-colors">
                <Tag className="w-4 h-4" />
                Request Pricing Info
              </button>
            </div>

            {/* Rating bar */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-gray-400 text-sm">Rated 9.1 out of 10</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">based on 3428 satisfied customers.</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Form card ── */}
          <div className="relative z-10 w-full">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">

              {/* Form header — gold with flag */}
              <div className="bg-gold px-7 py-5 flex items-center justify-between">
                <div>
                  <h2 className="text-navy font-serif font-bold text-xl md:text-2xl leading-tight">
                    Connect With Our Expert
                  </h2>
                  <p className="text-navy/70 text-xs mt-1">Get a free consultation within 24 hours</p>
                </div>
                <AnimatedFlag size="lg" />
              </div>

              {/* Form body */}
              <div className="px-7 py-6">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-7 h-7 fill-gold text-gold" />
                    </div>
                    <h3 className="text-navy font-serif font-bold text-lg mb-2">Thank You!</h3>
                    <p className="text-gray-500 text-sm">Our expert team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-4 rounded-md text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2 mt-1"
                    >
                      <Send className="w-4 h-4" />
                      Request Consultation
                    </button>
                    <p className="text-center text-[11px] text-gray-400 pt-1">
                      By submitting, you agree to our terms &amp; privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
