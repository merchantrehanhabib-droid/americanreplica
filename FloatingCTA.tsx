import { useEffect, useState } from "react";
import { MessageCircle, X, Phone, Send } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop for mobile when expanded */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setExpanded(false)}
        />
      )}

      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        {/* Expanded card */}
        {expanded && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[320px] overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
            {/* Header */}
            <div className="bg-gold px-5 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-navy text-base leading-tight">
                  Get A Free Quote
                </h3>
                <p className="text-navy/70 text-xs mt-0.5">We reply within 24 hours</p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-navy/60 hover:text-navy transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-serif font-bold text-navy text-base mb-1">Message Sent!</p>
                  <p className="text-gray-500 text-sm">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                  />
                  <textarea
                    rows={2}
                    placeholder="Tell us about your book..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Get Free Quote
                  </button>
                </form>
              )}

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <a href="tel:+18005550199" className="font-semibold hover:text-gold transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Floating pill button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Get a free quote"
          className={`flex items-center gap-2 font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            expanded
              ? "bg-navy text-white px-5 py-3 rounded-full"
              : "bg-gold text-navy px-5 py-3.5 rounded-full animate-bounce-subtle"
          }`}
          style={{ boxShadow: "0 8px 30px rgba(245,197,24,0.45)" }}
        >
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span className="whitespace-nowrap">
            {expanded ? "Close" : "Get A Free Quote"}
          </span>
        </button>
      </div>
    </>
  );
}
