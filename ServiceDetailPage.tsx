import { useRoute } from "wouter";
import PageLayout from "@/components/layout/PageLayout";
import { getService } from "@/data/services";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import NotFound from "./not-found";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const service = params ? getService(params.slug) : undefined;

  if (!service) return <NotFound />;

  return (
    <PageLayout
      title={service.title}
      description={`${service.title} — ${service.tagline} Professional ${service.category.toLowerCase()} services at American Book Founders.`}
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.img}
            alt={service.title}
            loading="eager"
            decoding="async"
            width={1280}
            height={400}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">{service.category}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl leading-tight">
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gold italic mt-3">
            {service.tagline}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            {service.description}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-md hover:bg-yellow-400 transition-colors">
              Get Started Today <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+18005550199" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-md hover:bg-white/10 transition-colors">
              Call +1 (800) 555-0199
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits + image */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-sm">What You Get</span>
              <h2 className="text-3xl font-serif font-bold text-navy mt-2 mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={service.img}
                alt={`${service.title} — professional book service`}
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute -bottom-4 -right-4 bg-navy text-white rounded-xl px-6 py-4 shadow-xl">
                <p className="text-2xl font-serif font-bold text-gold">3,400+</p>
                <p className="text-xs font-semibold">Satisfied Authors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">How It Works</span>
            <h2 className="text-3xl font-serif font-bold text-navy mt-2">Our Step-by-Step Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-navy text-base mb-2">{p.step}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-navy text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-navy/70 mb-8">Contact us today for a free consultation with our {service.title} experts.</p>
        <a href="/contact" className="inline-block bg-navy text-white font-bold px-10 py-4 rounded-md hover:bg-navy/90 transition-colors">
          Get A Free Consultation
        </a>
      </section>
    </PageLayout>
  );
}
