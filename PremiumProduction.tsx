import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Professional Ghostwriting",
    desc: "Your ideas, our words. Expert writers who capture your unique voice.",
    img: "/genre-memoir-1.png",
  },
  {
    title: "Book Editing & Proofreading",
    desc: "Polishing every page to perfection with professional editorial eyes.",
    img: "/genre-thriller-1.png",
  },
  {
    title: "Cover Design",
    desc: "Captivating covers that make your book stand out on every shelf.",
    img: "/genre-fantasy-1.png",
  },
  {
    title: "Publishing Services",
    desc: "Seamless publishing across Amazon, Barnes & Noble, and all major platforms.",
    img: "/genre-western-1.png",
  },
  {
    title: "Marketing & Distribution",
    desc: "Strategic campaigns that get your book in front of the right readers.",
    img: "/genre-romance-1.png",
  },
  {
    title: "Audiobook Production",
    desc: "Professional narration and studio-quality audio for every genre.",
    img: "/genre-scifi-1.png",
  },
];

export default function PremiumProduction() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-process.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#f7f4ef]/94" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-gold text-sm font-bold uppercase tracking-widest mb-3"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-navy"
          >
            Upgrade to Premium Book Production
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto"
          >
            Everything you need to take your manuscript from idea to bestseller — under one roof.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                {/* Gold top bar on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold font-serif text-navy group-hover:text-gold transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
