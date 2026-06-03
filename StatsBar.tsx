import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [
    { number: "500+", label: "Books Published" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Writers" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section className="bg-navy border-y border-white/10 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                {stat.number}
              </h3>
              <p className="text-white font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
