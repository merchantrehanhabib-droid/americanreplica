import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const genres = [
  {
    name: "Horror",
    tagline: "Books that keep you up at night",
    covers: ["/genre-horror-1.png", "/genre-horror-2.png"],
    color: "from-red-900/80 to-black/90",
    accent: "#ef4444",
  },
  {
    name: "Fantasy",
    tagline: "Epic worlds beyond imagination",
    covers: ["/genre-fantasy-1.png", "/genre-fantasy-2.png"],
    color: "from-purple-900/80 to-indigo-900/90",
    accent: "#a855f7",
  },
  {
    name: "Romance",
    tagline: "Stories that touch the heart",
    covers: ["/genre-romance-1.png", "/genre-memoir-1.png"],
    color: "from-pink-800/80 to-rose-900/90",
    accent: "#f43f5e",
  },
  {
    name: "Thriller",
    tagline: "Edge-of-your-seat suspense",
    covers: ["/genre-thriller-1.png", "/genre-truecrime-1.png"],
    color: "from-gray-900/80 to-slate-800/90",
    accent: "#f5c518",
  },
  {
    name: "Sci-Fi",
    tagline: "The future written today",
    covers: ["/genre-scifi-1.png", "/genre-thriller-1.png"],
    color: "from-cyan-900/80 to-blue-900/90",
    accent: "#06b6d4",
  },
  {
    name: "Western",
    tagline: "American frontier stories",
    covers: ["/genre-western-1.png", "/genre-memoir-1.png"],
    color: "from-amber-900/80 to-orange-900/90",
    accent: "#f59e0b",
  },
  {
    name: "True Crime",
    tagline: "Real stories. Real drama.",
    covers: ["/genre-truecrime-1.png", "/genre-horror-1.png"],
    color: "from-zinc-900/80 to-stone-900/90",
    accent: "#84cc16",
  },
  {
    name: "Memoir",
    tagline: "Your life. Your legacy.",
    covers: ["/genre-memoir-1.png", "/genre-romance-1.png"],
    color: "from-yellow-800/80 to-amber-900/90",
    accent: "#eab308",
  },
];

export default function GenreSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-steps.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#07082a]/94" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-bold uppercase tracking-widest mb-3">
            Every Voice Has a Genre
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            We Write Across Every American Genre
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            From spine-chilling horror to sweeping frontier epics — our expert ghostwriters master every niche so your book fits perfectly on any shelf.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {genres.map((genre, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ minHeight: 280 }}
            >
              {/* Background cover image */}
              <img
                src={genre.covers[0]}
                alt={genre.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Genre gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${genre.color} opacity-85 group-hover:opacity-70 transition-opacity duration-300`} />

              {/* Second cover peek on hover */}
              <div className="absolute bottom-0 right-0 w-20 h-28 opacity-0 group-hover:opacity-60 transition-all duration-500 transform translate-x-4 group-hover:translate-x-1 rounded-tl-md overflow-hidden shadow-2xl">
                <img src={genre.covers[1]} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div
                  className="w-8 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-12"
                  style={{ background: genre.accent }}
                />
                <h3 className="text-white font-serif font-bold text-2xl leading-tight">{genre.name}</h3>
                <p className="text-gray-300 text-xs mt-1 font-medium">{genre.tagline}</p>
                <span
                  className="mt-3 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: genre.accent }}
                >
                  Start Writing →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Button size="lg" className="bg-gold hover:bg-yellow-400 text-navy font-bold px-10 h-14 text-base rounded-md shadow-lg">
            Explore All Genres
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
