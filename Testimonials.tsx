import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with American Book Founders was a transformative experience. They brought my story to life with an elegance I couldn't have imagined on my own.",
    name: "Sarah Johnson",
    title: "First-time Author",
    avatar: "/author-2.png",
  },
  {
    quote: "The ghostwriting team was incredibly professional and captured my voice perfectly. My business book hit the bestseller list within weeks of launch.",
    name: "Michael Rodriguez",
    title: "Business Author",
    avatar: "/author-3.png",
  },
  {
    quote: "From concept to publication, every step was seamless. Highly recommend their comprehensive publishing services to any aspiring author.",
    name: "Jennifer Lee",
    title: "Memoir Writer",
    avatar: "/author-4.png",
  },
];

const authors = [
  { name: "James Carter", genre: "Thriller Author", img: "/author-1.png" },
  { name: "Amara Williams", genre: "Romance Novelist", img: "/author-2.png" },
  { name: "David Chen", genre: "Sci-Fi Writer", img: "/author-3.png" },
  { name: "Linda Foster", genre: "Memoir Author", img: "/author-4.png" },
  { name: "Carlos Rivera", genre: "Business Writer", img: "/author-5.png" },
  { name: "Yuki Tanaka", genre: "Literary Fiction", img: "/author-6.png" },
];

export default function Testimonials() {
  return (
    <>
      {/* Authors Grid */}
      <section className="py-20 bg-white text-navy">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet Our Published Authors
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Talented writers from across America who trusted us to bring their stories to the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {authors.map((author, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-3">
                  <img
                    src={author.img}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-gold transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-gold/0 group-hover:ring-gold/60 transition-all duration-300" />
                </div>
                <h4 className="font-bold font-serif text-sm">{author.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{author.genre}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Connect With Our Reputable Book Marketing Experts For A Goal-Oriented Strategy That Complements Your Writing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white text-navy rounded-xl p-8 shadow-2xl relative"
              >
                <Quote className="w-12 h-12 text-gold/20 absolute top-6 right-6" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-gray-600 font-medium mb-8 leading-relaxed italic relative z-10">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <h4 className="font-bold font-serif text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
