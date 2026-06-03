import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import beasts from "@/assets/beasts.png";
import scifi from "@/assets/scifi.png";
import literary from "@/assets/literary.png";

const BOOKS = [
  { img: hero1, title: "The Silent Witness", author: "Eleanor Vance", genre: "Thriller", rating: "4.9", year: "2023" },
  { img: hero2, title: "Golden Hour", author: "Amelia Rose", genre: "Romance", rating: "4.8", year: "2023" },
  { img: hero3, title: "The Dragon's Blade", author: "Lara Vance", genre: "Fantasy", rating: "4.9", year: "2022" },
  { img: beasts, title: "The Sundered Dawn", author: "Ava Reid", genre: "Horror", rating: "4.7", year: "2022" },
  { img: scifi, title: "Rising Sun", author: "Kaizen Moore", genre: "Sci-Fi", rating: "4.8", year: "2023" },
  { img: literary, title: "The Final Act", author: "Elara Stone", genre: "Literary", rating: "4.9", year: "2021" },
  { img: "/genre-thriller-1.png", title: "Shadow Protocol", author: "J.R. Black", genre: "Thriller", rating: "4.8", year: "2023" },
  { img: "/genre-horror-1.png", title: "Nightfall Manor", author: "D. Thorne", genre: "Horror", rating: "4.7", year: "2022" },
  { img: "/genre-fantasy-1.png", title: "Crown of Embers", author: "M.K. Davis", genre: "Fantasy", rating: "4.9", year: "2023" },
  { img: "/genre-romance-1.png", title: "Midnight in Manhattan", author: "Clara Bell", genre: "Romance", rating: "4.8", year: "2023" },
  { img: "/genre-western-1.png", title: "Dust & Thunder", author: "Tom Rider", genre: "Western", rating: "4.7", year: "2022" },
  { img: "/genre-truecrime-1.png", title: "The Evidence Board", author: "Sara Hill", genre: "True Crime", rating: "4.8", year: "2023" },
  { img: "/genre-memoir-1.png", title: "Sunrise Over America", author: "L. Foster", genre: "Memoir", rating: "4.9", year: "2023" },
  { img: "/genre-scifi-1.png", title: "Beyond the Rings", author: "A. Turing", genre: "Sci-Fi", rating: "4.8", year: "2022" },
  { img: "/genre-fantasy-2.png", title: "Storm Caller", author: "Y. Tanaka", genre: "Fantasy", rating: "4.7", year: "2021" },
  { img: "/genre-horror-2.png", title: "The Last Grave", author: "C. Rivera", genre: "Horror", rating: "4.8", year: "2023" },
  { img: hero1, title: "Dead Reckoning", author: "P. Stone", genre: "Thriller", rating: "4.9", year: "2023" },
  { img: hero3, title: "Ember & Ash", author: "W. James", genre: "Fantasy", rating: "4.8", year: "2022" },
];

const genres = ["All", "Thriller", "Romance", "Fantasy", "Horror", "Sci-Fi", "Western", "True Crime", "Memoir", "Literary"];

export default function PortfolioPage() {
  return (
    <PageLayout
      title="Portfolio"
      description="Browse hundreds of published books by American Book Founders authors — from thrillers to memoirs, across every genre."
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/bg-gallery.png')", backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">Portfolio</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl mx-auto">
            Published by American Book Founders
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-300 mt-5 max-w-xl mx-auto text-lg">
            Every book here represents a real author who trusted us to bring their story to life.
          </motion.p>
        </div>
      </section>

      {/* Genre filters */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {genres.map((g) => (
              <button key={g} className="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-gold hover:text-gold hover:bg-gold/5 transition-colors first:bg-navy first:text-white first:border-navy">
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {BOOKS.map((book, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.06 }} className="group">
                <div className="relative rounded-lg overflow-hidden shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={book.img}
                    alt={`${book.title} by ${book.author} — ${book.genre} book published by American Book Founders`}
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={280}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-gold text-navy text-[9px] font-bold uppercase px-1.5 py-0.5 rounded">{book.genre}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-0.5 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    <Star className="w-2.5 h-2.5 fill-gold text-gold" />{book.rating}
                  </div>
                </div>
                <div className="mt-2 px-1">
                  <h3 className="font-serif font-bold text-navy text-sm leading-tight">{book.title}</h3>
                  <p className="text-gray-500 text-xs">By {book.author}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">{book.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Your Book Could Be Next</h2>
        <p className="text-gray-300 mb-8">Join 3,400+ authors and let us publish your story.</p>
        <a href="/contact" className="inline-block bg-gold text-navy font-bold px-10 py-4 rounded-md hover:bg-yellow-400 transition-colors">
          Start Your Publishing Journey
        </a>
      </section>
    </PageLayout>
  );
}
