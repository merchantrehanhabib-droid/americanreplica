import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const POSTS = [
  {
    img: "/genre-memoir-1.png",
    category: "Ghostwriting",
    title: "How to Find the Right Ghostwriter for Your Book",
    excerpt: "Choosing a ghostwriter is one of the most important decisions you'll make as an author. Here's exactly what to look for — and what red flags to avoid.",
    author: "Sarah E. Collins",
    date: "May 15, 2024",
    readTime: "7 min read",
  },
  {
    img: "/genre-thriller-1.png",
    category: "Publishing",
    title: "Self-Publishing vs Traditional Publishing: The 2024 Guide",
    excerpt: "Both paths have their advantages. We break down royalties, timelines, creative control, and marketing requirements so you can make the right choice.",
    author: "Amanda R. Foster",
    date: "April 28, 2024",
    readTime: "9 min read",
  },
  {
    img: "/genre-fantasy-1.png",
    category: "Book Marketing",
    title: "10 Proven Strategies to Market Your Book on Amazon",
    excerpt: "Amazon is the world's biggest bookstore. Here are 10 strategies our marketing team uses to get books in front of the right readers — fast.",
    author: "Daniel H. Torres",
    date: "April 10, 2024",
    readTime: "11 min read",
  },
  {
    img: "/genre-horror-1.png",
    category: "Writing Tips",
    title: "How to Write a Compelling First Chapter That Hooks Readers",
    excerpt: "You have less than 30 seconds to convince a reader to keep going. Learn the techniques professional authors use to make the first page impossible to put down.",
    author: "Marcus D. Wright",
    date: "March 22, 2024",
    readTime: "8 min read",
  },
  {
    img: "/genre-scifi-1.png",
    category: "Editing",
    title: "The Difference Between Proofreading, Copy Editing, and Developmental Editing",
    excerpt: "Many authors don't know which type of editing their manuscript needs. We explain each stage clearly so you invest in exactly the right service.",
    author: "Marcus D. Wright",
    date: "March 5, 2024",
    readTime: "6 min read",
  },
  {
    img: "/genre-western-1.png",
    category: "Success Stories",
    title: "From Idea to Bestseller: Tom Rider's Publishing Journey",
    excerpt: "Tom came to us with a rough outline for a western. 8 months later, his debut novel hit the Amazon Western Top 10. Here's exactly how we did it.",
    author: "Lisa C. Nguyen",
    date: "February 18, 2024",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <PageLayout
      title="Blog"
      description="Expert writing, publishing, and book marketing advice from the American Book Founders team. Tips for authors at every stage."
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/bg-hero.png')", backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">Blog</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl mx-auto">
            Advice for Every Author
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-300 mt-5 max-w-xl mx-auto text-lg">
            Writing tips, publishing insights, and marketing strategies from our team of industry experts.
          </motion.p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={POSTS[0].img}
                alt={POSTS[0].title}
                loading="eager"
                decoding="async"
                width={700}
                height={400}
                className="w-full h-72 object-cover"
              />
              <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold uppercase px-3 py-1 rounded">Featured</span>
            </div>
            <div>
              <span className="text-gold font-bold text-sm uppercase tracking-widest">{POSTS[0].category}</span>
              <h2 className="text-3xl font-serif font-bold text-navy mt-2 mb-4 leading-tight">{POSTS[0].title}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{POSTS[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{POSTS[0].author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{POSTS[0].date}</span>
                <span>{POSTS[0].readTime}</span>
              </div>
              <button className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-serif font-bold text-navy mb-10">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.slice(1).map((post, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-navy text-[10px] font-bold uppercase px-2 py-0.5 rounded">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-navy text-lg leading-snug group-hover:text-gold transition-colors mb-3">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy text-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-3">Get Publishing Tips in Your Inbox</h2>
        <p className="text-gray-300 mb-8">Join 12,000+ authors who read our weekly newsletter.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
          <input type="email" placeholder="Enter your email address" className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold" />
          <button type="submit" className="bg-gold text-navy font-bold px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors whitespace-nowrap">Subscribe</button>
        </form>
      </section>
    </PageLayout>
  );
}
