import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";
import beastsImg from "@/assets/beasts.png";
import { motion } from "framer-motion";

export default function ConcernedQuality() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-concerned.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
              Concerned About Your Manuscript's Quality?
            </h2>

            <h3 className="text-xl font-bold text-gray-800">
              Allow Our Ghost Writing Services To Make Your Novel, A Story Of Your Own
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our team of experienced ghostwriters works closely with you to craft compelling narratives that capture your unique voice and bring your ideas to life. From concept to final draft, we handle every aspect of the writing process.
            </p>

            <ul className="space-y-3 pt-4">
              {["Professional editing", "Custom cover design", "Publishing assistance"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-medium text-navy">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button size="lg" className="bg-gold hover:bg-yellow-400 text-navy font-bold px-8 h-14 rounded-md">
                Get Started
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl transform scale-110 -z-10" />

            <div className="relative w-80 shadow-2xl rounded-md overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
              <img src={beastsImg} alt="Attack of the Beasts Cover" className="w-full h-auto object-cover" />
              <div className="absolute bottom-4 -left-6 bg-white py-2 px-4 rounded-lg shadow-xl flex items-center gap-2 transform -rotate-6">
                <span className="font-bold text-navy text-xl">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
