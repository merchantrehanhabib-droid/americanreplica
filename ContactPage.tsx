import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const info = [
  { icon: Phone, label: "Phone", value: "+1 (800) 555-0199", href: "tel:+18005550199" },
  { icon: Mail, label: "Email", value: "info@americanbookfounders.com", href: "mailto:info@americanbookfounders.com" },
  { icon: MapPin, label: "Address", value: "350 5th Ave, New York, NY 10118", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 9AM – 8PM EST", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with American Book Founders for a free consultation on ghostwriting, editing, publishing, or book marketing services."
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/bg-hero.png')", backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">Contact Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-2xl mx-auto">
            Let's Talk About Your Book
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-300 mt-5 text-lg max-w-xl mx-auto">
            Our publishing consultants are ready to help you take the next step. Get a free consultation within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gold px-8 py-5">
                <h2 className="text-navy font-serif font-bold text-2xl">Get A Free Consultation</h2>
                <p className="text-navy/70 text-sm mt-1">Fill out the form and we'll be in touch within 24 hours</p>
              </div>
              <div className="px-8 py-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-navy font-serif font-bold text-2xl mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Our team will contact you within 24 business hours. We look forward to helping you publish your book!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy font-semibold text-sm mb-1.5">Full Name <span className="text-red-500">*</span></label>
                        <input required type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition" />
                      </div>
                      <div>
                        <label className="block text-navy font-semibold text-sm mb-1.5">Phone Number</label>
                        <input type="tel" placeholder="Your phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" placeholder="Your email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition" />
                    </div>
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Service Required</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition bg-white">
                        <option value="">Select a service</option>
                        <option value="ghostwriting">Ghost Writing</option>
                        <option value="book-writing">Book Writing</option>
                        <option value="memoir">Memoir Writing</option>
                        <option value="editing">Book Editing & Proofreading</option>
                        <option value="cover-design">Book Cover Design</option>
                        <option value="publishing">Publishing Services</option>
                        <option value="marketing">Book Marketing</option>
                        <option value="audiobook">Audiobook Production</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Tell Us About Your Project</label>
                      <textarea rows={4} placeholder="Describe your book idea, genre, word count, timeline, or any questions..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-4 rounded-lg text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                    <p className="text-center text-xs text-gray-400">By submitting, you agree to our terms &amp; privacy policy.</p>
                  </form>
                )}
              </div>
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white rounded-2xl p-8">
                <h3 className="font-serif font-bold text-xl mb-6 text-gold">Get In Touch</h3>
                <div className="space-y-5">
                  {info.map((item, i) => (
                    <a key={i} href={item.href} className="flex items-start gap-4 hover:text-gold transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/40 transition-colors">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">{item.label}</p>
                        <p className="font-semibold text-sm mt-0.5">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gold rounded-2xl p-8">
                <h3 className="font-serif font-bold text-navy text-xl mb-3">Why Authors Choose Us</h3>
                <ul className="space-y-2 text-navy/80 text-sm">
                  {["100% royalties retained by you", "U.S.-based writers and editors", "3,400+ satisfied authors", "Free consultation — no commitment", "NDA signed before we begin"].map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100">
                <p className="text-navy font-serif font-bold text-lg mb-1">"Best investment I made for my book."</p>
                <p className="text-gray-500 text-sm">"The team at American Book Founders took my rough idea and turned it into a published bestseller. I couldn't recommend them more."</p>
                <p className="text-gold font-bold text-sm mt-3">— Eleanor Vance, Author of The Silent Witness</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
