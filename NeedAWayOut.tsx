import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NeedAWayOut() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-cta.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gold overlay */}
      <div className="absolute inset-0 bg-gold/90" />
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy">
            Need A Way Out?
          </h2>
          <p className="text-xl md:text-2xl text-navy/80 font-medium">
            Let our expert team of writers and editors help you navigate the complex world of publishing. Your masterpiece awaits.
          </p>
          <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold px-10 h-16 text-lg rounded-md mt-4 shadow-xl">
            Get A Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
