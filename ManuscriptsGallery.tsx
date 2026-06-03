import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import beasts from "@/assets/beasts.png";
import scifi from "@/assets/scifi.png";
import literary from "@/assets/literary.png";

const ROW_1 = [
  { img: hero1, title: "The Silent Witness", author: "Eleanor Vance", genre: "Thriller", rating: "4.9" },
  { img: hero2, title: "Golden Hour", author: "Amelia Rose", genre: "Romance", rating: "4.8" },
  { img: hero3, title: "The Dragon's Blade", author: "Lara Vance", genre: "Fantasy", rating: "4.9" },
  { img: beasts, title: "The Sundered Dawn", author: "Ava Reid", genre: "Horror", rating: "4.7" },
  { img: scifi, title: "Rising Sun", author: "Kaizen Moore", genre: "Sci-Fi", rating: "4.8" },
  { img: literary, title: "The Final Act", author: "Elara Stone", genre: "Literary", rating: "4.9" },
  { img: "/genre-thriller-1.png", title: "Shadow Protocol", author: "J.R. Black", genre: "Thriller", rating: "4.8" },
  { img: "/genre-horror-1.png", title: "Nightfall Manor", author: "D. Thorne", genre: "Horror", rating: "4.7" },
  { img: "/genre-fantasy-1.png", title: "Crown of Embers", author: "M.K. Davis", genre: "Fantasy", rating: "4.9" },
];

const ROW_2 = [
  { img: "/genre-romance-1.png", title: "Midnight in Manhattan", author: "Clara Bell", genre: "Romance", rating: "4.8" },
  { img: "/genre-western-1.png", title: "Dust & Thunder", author: "Tom Rider", genre: "Western", rating: "4.7" },
  { img: "/genre-truecrime-1.png", title: "The Evidence Board", author: "Sara Hill", genre: "True Crime", rating: "4.8" },
  { img: "/genre-memoir-1.png", title: "Sunrise Over America", author: "L. Foster", genre: "Memoir", rating: "4.9" },
  { img: "/genre-scifi-1.png", title: "Beyond the Rings", author: "A. Turing", genre: "Sci-Fi", rating: "4.8" },
  { img: "/genre-fantasy-2.png", title: "Storm Caller", author: "Y. Tanaka", genre: "Fantasy", rating: "4.7" },
  { img: "/genre-horror-2.png", title: "The Last Grave", author: "C. Rivera", genre: "Horror", rating: "4.8" },
  { img: hero1, title: "Dead Reckoning", author: "P. Stone", genre: "Thriller", rating: "4.9" },
  { img: hero3, title: "Ember & Ash", author: "W. James", genre: "Fantasy", rating: "4.8" },
];

function BookRow({ books, reverse = false }: { books: typeof ROW_1; reverse?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(
      () => (reverse ? emblaApi.scrollPrev() : emblaApi.scrollNext()),
      2800
    );
    return () => clearInterval(interval);
  }, [emblaApi, reverse]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-navy/80 text-white flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-navy/80 text-white flex items-center justify-center shadow-lg hover:bg-gold hover:text-navy transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute left-8 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-8 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden mx-10" ref={emblaRef}>
        <div className="flex py-4">
          {books.map((book, i) => (
            <div
              key={i}
              /* 1 slide on mobile, 3 on md+ */
              className="flex-[0_0_100%] md:flex-[0_0_calc(100%/3)] min-w-0 px-3"
            >
              <div className="group transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
                <div className="relative shadow-xl rounded-lg overflow-hidden border-2 border-gray-100">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-navy text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm tracking-wide">
                      {book.genre}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="font-bold">{book.rating}</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-serif font-bold text-base text-navy leading-tight">{book.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">By {book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ManuscriptsGallery() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-gallery.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/93" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 mb-14 text-center">
          <span className="inline-block text-gold text-sm font-bold uppercase tracking-widest mb-3">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy max-w-4xl mx-auto leading-tight">
            Discover The Many Manuscripts From Thriving Publishing Authors
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Hundreds of books published across every genre — each one a real story, a real author, a real American dream fulfilled.
          </p>
        </div>

        <div className="space-y-8 px-4 md:px-6">
          <BookRow books={ROW_1} />
          <BookRow books={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
