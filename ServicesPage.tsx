import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";

const categories = ["Book Writing", "Book Editing", "Publishing", "Book Marketing"];

export default function ServicesPage() {
  return (
    <PageLayout
      title="Our Services"
      description="Professional ghostwriting, book editing, publishing, and book marketing services — all under one roof at American Book Founders."
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/bg-hero.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">Our Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl mx-auto leading-tight">
            Everything You Need to Publish Your Book
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            From writing your first word to marketing your published title — we handle every step with expert professionals.
          </motion.p>
        </div>
      </section>

      {/* Services by category */}
      {categories.map((cat) => {
        const catServices = SERVICES.filter((s) => s.category === cat);
        return (
          <section key={cat} className="py-16 odd:bg-cream even:bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-10 bg-gold rounded-full" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">{cat}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catServices.map((s, i) => (
                  <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                    <Link href={`/services/${s.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow border border-gray-100 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={s.img}
                          alt={`${s.title} service — American Book Founders`}
                          loading="lazy"
                          decoding="async"
                          width={400}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                        <span className="absolute bottom-3 left-3 bg-gold text-navy text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                          {s.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif font-bold text-navy text-lg group-hover:text-gold transition-colors">{s.title}</h3>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{s.description}</p>
                        <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm mt-4">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-gold text-navy text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Not Sure Where to Start?</h2>
        <p className="text-navy/70 mb-8">Our publishing consultants will guide you to the right service for your book.</p>
        <a href="/contact" className="inline-block bg-navy text-white font-bold px-10 py-4 rounded-md hover:bg-navy/90 transition-colors">
          Get a Free Consultation
        </a>
      </section>
    </PageLayout>
  );
}
