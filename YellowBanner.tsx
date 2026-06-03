import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import scifi from "@/assets/scifi.png";
import { motion } from "framer-motion";

export default function YellowBanner() {
  const images = [hero1, hero2, hero3, scifi];

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-cta.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gold overlay */}
      <div className="absolute inset-0 bg-gold/88" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 z-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
              Ready to Become a Book Icon in 1st
            </h2>
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold px-8 h-14 rounded-md shadow-lg">
              Get Started
            </Button>
          </motion.div>

          <div className="relative h-48 lg:h-64 flex items-center justify-end -mr-20 lg:-mr-0">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="absolute w-32 md:w-40 shadow-2xl rounded-sm border-2 border-white/70"
                style={{
                  right: `${i * 80 + 20}px`,
                  zIndex: 10 - i,
                  transform: `rotate(${i % 2 === 0 ? 5 : -5}deg) translateY(${i % 2 === 0 ? 10 : -10}px)`
                }}
              >
                <img src={img} alt={`Book cover ${i + 1}`} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
