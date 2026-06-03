import { Search, PenTool, ClipboardCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const processes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research & Discovery",
      desc: "We dive deep into your concept, target audience, and market trends."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Writing & Drafting",
      desc: "Our writers craft your manuscript chapter by chapter with regular feedback."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Review & Revision",
      desc: "Comprehensive editing to ensure your voice is captured perfectly."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Publication & Launch",
      desc: "Formatting, cover design, and publishing across major platforms."
    }
  ];

  return (
    <section
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bg-process.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Our Process
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((proc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-16 h-16 rounded-full bg-gold text-navy flex items-center justify-center mb-6 shadow-lg">
                {proc.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-white">{proc.title}</h3>
              <p className="text-gray-300 font-medium leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
