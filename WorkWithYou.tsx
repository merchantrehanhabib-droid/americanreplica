import { Button } from "@/components/ui/button";
import writingDesk from "@/assets/writing-desk.png";
import { motion } from "framer-motion";
import { Flag, BookOpen, Award, Star } from "lucide-react";

const highlights = [
  { icon: <Flag className="w-5 h-5" />, label: "100% American Writers" },
  { icon: <BookOpen className="w-5 h-5" />, label: "500+ Books Published" },
  { icon: <Award className="w-5 h-5" />, label: "Award-Winning Team" },
  { icon: <Star className="w-5 h-5" />, label: "4.9 Star Rated Service" },
];

export default function WorkWithYou() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-concerned.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#f7f4ef]/93" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block text-gold text-sm font-bold uppercase tracking-widest">
              Made in America
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
              We Will Work With You To Find Your Voice And Add a Custom Touch To Your Writing
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Every author has a unique story to tell. Our all-American team of ghostwriters and editors doesn't do one-size-fits-all — we tailor every word to match your tone, your style, and your vision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                  <span className="text-gold">{h.icon}</span>
                  <span className="text-navy font-semibold text-sm">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-gold hover:bg-yellow-400 text-navy font-bold px-8 h-14 rounded-md shadow-md">
                Get A Free Consultation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* American flag stripe accent */}
            <div className="absolute -top-4 -left-4 w-full h-3 flex gap-0.5 rounded overflow-hidden z-10">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="flex-1" style={{ background: i % 2 === 0 ? "#B22234" : "#ffffff" }} />
              ))}
            </div>
            <div className="absolute -top-4 -left-4 left-0 w-8 h-6 bg-[#3C3B6E] z-10 rounded-sm flex flex-wrap gap-0.5 items-center justify-center p-0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="text-[4px] text-white">★</span>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white mt-4">
              <img
                src={writingDesk}
                alt="Writing Desk"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold rounded-xl -z-10" />
            <div className="absolute -top-4 -right-8 w-32 h-32 border-4 border-navy rounded-xl -z-10" />

            {/* Floating stat badge */}
            <div className="absolute bottom-6 -right-4 bg-navy text-white px-5 py-3 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold font-serif text-gold">500+</div>
              <div className="text-xs text-gray-300 font-medium">Books Published</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
