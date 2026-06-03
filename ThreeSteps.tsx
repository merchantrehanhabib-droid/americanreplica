import { motion } from "framer-motion";

export default function ThreeSteps() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We discuss your vision, goals, and target audience to create a customized writing plan."
    },
    {
      num: "02",
      title: "Writing Process",
      desc: "Our expert ghostwriters craft your manuscript with precision, creativity, and authenticity."
    },
    {
      num: "03",
      title: "Publication",
      desc: "We guide you through editing, design, and publishing to ensure a polished final product."
    }
  ];

  return (
    <section
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/bg-steps.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-navy/88" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight"
          >
            Our Three Steps of Streamlining Services Entice Revered Dream Writing
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/20" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-gold text-navy flex items-center justify-center text-3xl font-bold font-serif shadow-[0_0_30px_rgba(245,197,24,0.4)] z-10 mb-8 border-4 border-navy/50">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
