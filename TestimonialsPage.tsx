import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  { name: "Eleanor Vance", role: "Author, The Silent Witness", img: "/author-1.png", rating: 5, text: "American Book Founders transformed my rough idea into a polished thriller that hit the Amazon Top 10. The ghostwriter captured my voice perfectly. I couldn't have done this without them." },
  { name: "Amelia Rose", role: "Author, Golden Hour", img: "/author-2.png", rating: 5, text: "I was skeptical about ghostwriting at first, but the team made me feel involved every step of the way. My romance novel has over 400 five-star reviews on Goodreads. Incredible experience." },
  { name: "Marcus D. Wright", role: "Author, The Final Act", img: "/author-3.png", rating: 5, text: "The editing and publishing services are world-class. They formatted my literary novel beautifully and got it distributed globally. I'm already working on my second book with them." },
  { name: "Sara Hill", role: "Author, The Evidence Board", img: "/author-4.png", rating: 5, text: "As a true crime writer, I needed a team that understood research and narrative. American Book Founders delivered beyond my expectations. My book is now being considered for a TV adaptation." },
  { name: "Tom Rider", role: "Author, Dust & Thunder", img: "/author-5.png", rating: 5, text: "From ghostwriting to cover design to marketing — they handled everything. My western novel sold 2,000 copies in the first month. The ROI has been incredible." },
  { name: "Lisa Foster", role: "Author, Sunrise Over America", img: "/author-6.png", rating: 5, text: "Writing my memoir was an emotional journey, and the team was sensitive and professional throughout. They helped me tell my story in a way that has moved thousands of readers." },
  { name: "J.R. Black", role: "Author, Shadow Protocol", img: "/author-1.png", rating: 5, text: "The turnaround time was faster than I expected, and the quality was outstanding. The cover design alone generated buzz before I even launched. Highly recommend for any serious author." },
  { name: "Clara Bell", role: "Author, Midnight in Manhattan", img: "/author-2.png", rating: 5, text: "I had a story in my head for years but no idea how to get it on paper. American Book Founders walked me through the entire process and now I'm a published author. Life-changing." },
  { name: "Kaizen Moore", role: "Author, Rising Sun", img: "/author-3.png", rating: 5, text: "The sci-fi genre is competitive, but my book launched to #1 in its Amazon subcategory. The marketing team knew exactly how to position it. Exceptional work from start to finish." },
];

export default function TestimonialsPage() {
  return (
    <PageLayout
      title="Testimonials"
      description="Read real reviews from 3,400+ satisfied authors who published with American Book Founders."
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/bg-cta.png')", backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">Testimonials</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl mx-auto">
            What Our Authors Say
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-300 mt-5 max-w-xl mx-auto text-lg">
            Don't take our word for it — hear from the 3,400+ authors who trusted us with their stories.
          </motion.p>
          {/* Star rating summary */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}
            </div>
            <span className="text-white font-bold text-xl">4.9 / 5</span>
            <span className="text-gray-400">based on 3,428 reviews</span>
          </motion.div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="break-inside-avoid bg-white rounded-2xl p-7 shadow-md border border-gray-100"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <p className="text-gray-600 leading-relaxed text-sm mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                  <img
                    src={t.img}
                    alt={`${t.name} — verified American Book Founders author`}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-serif font-bold text-navy text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(t.rating)].map((_, ri) => <Star key={ri} className="w-3 h-3 fill-gold text-gold" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform badges */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-8">Verified on Top Review Platforms</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { platform: "Google", rating: "4.8", count: "1,200+" },
              { platform: "Goodreads", rating: "4.9", count: "700+" },
              { platform: "Trustpilot", rating: "4.7", count: "900+" },
              { platform: "Clutch.co", rating: "4.9", count: "400+" },
            ].map((p, i) => (
              <div key={i} className="bg-cream rounded-xl px-8 py-5 text-center">
                <p className="font-bold text-navy text-lg">{p.platform}</p>
                <div className="flex items-center justify-center gap-1 my-1">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-gold font-bold">{p.rating}</p>
                <p className="text-gray-400 text-xs">{p.count} reviews</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-navy text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Join 3,400+ Satisfied Authors</h2>
        <p className="text-navy/70 mb-8">Your success story could be next. Get started with a free consultation today.</p>
        <a href="/contact" className="inline-block bg-navy text-white font-bold px-10 py-4 rounded-md hover:bg-navy/90 transition-colors">
          Get A Free Consultation
        </a>
      </section>
    </PageLayout>
  );
}
