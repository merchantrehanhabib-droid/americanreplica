import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, BookOpen, Star } from "lucide-react";

const team = [
  { name: "Jonathan M. Blake", role: "Founder & CEO", img: "/author-1.png", bio: "20+ years in traditional and indie publishing. Former editor at Penguin Random House." },
  { name: "Sarah E. Collins", role: "Head of Ghostwriting", img: "/author-2.png", bio: "NYT bestselling ghostwriter with 80+ published titles across fiction and non-fiction." },
  { name: "Marcus D. Wright", role: "Editorial Director", img: "/author-3.png", bio: "Award-winning editor specializing in memoir, biography, and literary fiction." },
  { name: "Amanda R. Foster", role: "Publishing Strategist", img: "/author-4.png", bio: "Built distribution networks for 500+ indie authors across Amazon and IngramSpark." },
  { name: "Daniel H. Torres", role: "Creative Director", img: "/author-5.png", bio: "Book cover designer with work featured in Publishers Weekly and Shelf Awareness." },
  { name: "Lisa C. Nguyen", role: "Client Success Manager", img: "/author-6.png", bio: "Ensures every author has a smooth, transparent journey from manuscript to market." },
];

const values = [
  { icon: BookOpen, title: "Author-First Philosophy", desc: "You keep 100% of your royalties and creative control — always." },
  { icon: Star, title: "Uncompromising Quality", desc: "Every manuscript is reviewed by multiple professionals before delivery." },
  { icon: Users, title: "American-Made Team", desc: "All writers, editors, and designers are based in the United States." },
  { icon: Award, title: "Proven Track Record", desc: "3,400+ satisfied authors and hundreds of bestselling titles published." },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="About Us"
      description="Learn about American Book Founders — our story, our team, and our mission to help every author publish with confidence."
    >
      {/* Hero banner */}
      <section className="relative bg-navy text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('/bg-hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">About Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl mx-auto leading-tight">
            America's Most Trusted Book Publishing Partner
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Founded on the belief that every author deserves a professional publishing experience — without giving up their rights or royalties.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mt-2 mb-6">Built by Authors, for Authors</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>American Book Founders was born from frustration. Our founders — experienced authors themselves — were tired of watching talented writers surrender their rights, their royalties, and their creative vision to publishers who didn't share their passion.</p>
                <p>In 2014, we set out to build a different kind of publishing company. One where authors are partners, not products. Where every dollar of royalty belongs to the writer who earned it. Where the quality of your book reflects the quality of your dream.</p>
                <p>Today we've helped over 3,400 authors publish with confidence — from first-time writers to seasoned professionals — across every genre imaginable.</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/bg-process.png"
                alt="American Book Founders story — authors at work"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute -bottom-5 -left-5 bg-gold text-navy rounded-xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-serif font-bold">10+</p>
                <p className="text-sm font-bold">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mt-2">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-7 shadow-md text-center border-b-4 border-gold">
                <v.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mt-2">The Experts Behind Your Book</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-cream rounded-xl overflow-hidden shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.img}
                    alt={`${member.name} — ${member.role} at American Book Founders`}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-navy text-lg">{member.name}</h3>
                  <p className="text-gold font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-gold font-bold uppercase tracking-widest text-sm">Recognition</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-10">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { year: "2023", award: "Best Indie Publishing Service", org: "Publishers Weekly" },
              { year: "2022", award: "Top Ghostwriting Company", org: "Clutch.co" },
              { year: "2021", award: "Author Satisfaction Award", org: "Self-Publishing Review" },
              { year: "2020", award: "Excellence in Book Design", org: "Independent Book Awards" },
            ].map((a, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 border border-gold/30">
                <Award className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-gold font-bold text-sm">{a.year}</p>
                <p className="font-serif font-bold text-base mt-1">{a.award}</p>
                <p className="text-gray-400 text-xs mt-1">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-navy text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Start Your Publishing Journey?</h2>
        <p className="text-navy/70 text-lg mb-8">Join 3,400+ authors who chose American Book Founders.</p>
        <a href="/contact" className="inline-block bg-navy text-white font-bold px-10 py-4 rounded-md hover:bg-navy/90 transition-colors">
          Get A Free Consultation
        </a>
      </section>
    </PageLayout>
  );
}
