import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { useState } from "react";

type Plan = { name: string; price: string; period: string; badge?: string; features: string[]; cta: string };

const PACKAGES: Record<string, Plan[]> = {
  Writing: [
    {
      name: "Starter",
      price: "$999",
      period: "one-time",
      features: [
        "Up to 5,000 words",
        "1 professional writer",
        "2 revision rounds",
        "Proofreading included",
        "Manuscript in Word format",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "one-time",
      badge: "Most Popular",
      features: [
        "Up to 20,000 words",
        "Dedicated senior writer",
        "Unlimited revisions",
        "Proofreading + light editing",
        "Chapter-by-chapter delivery",
        "Author consultation calls",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "$5,999",
      period: "one-time",
      features: [
        "Full-length book (up to 80,000 words)",
        "Elite ghostwriter",
        "Unlimited revisions",
        "Full editorial package",
        "Dedicated project manager",
        "Publishing guidance included",
        "Marketing strategy session",
      ],
      cta: "Get Started",
    },
  ],
  Editing: [
    {
      name: "Proofreading",
      price: "$299",
      period: "one-time",
      features: [
        "Grammar & spelling fixes",
        "Punctuation corrections",
        "Consistency check",
        "3–5 day turnaround",
        "Track Changes delivery",
      ],
      cta: "Get Started",
    },
    {
      name: "Copy Editing",
      price: "$599",
      period: "one-time",
      badge: "Most Popular",
      features: [
        "Everything in Proofreading",
        "Sentence-level clarity edits",
        "Style guide compliance",
        "Author approval via Track Changes",
        "7-day turnaround",
      ],
      cta: "Get Started",
    },
    {
      name: "Developmental",
      price: "$1,299",
      period: "one-time",
      features: [
        "Full structural analysis",
        "Plot & pacing review",
        "Character arc assessment",
        "Detailed editorial letter",
        "60-min consultation call",
        "One round of revision review",
      ],
      cta: "Get Started",
    },
  ],
  Publishing: [
    {
      name: "Basic",
      price: "$499",
      period: "one-time",
      features: [
        "Amazon KDP setup",
        "eBook publishing",
        "ISBN registration",
        "Basic metadata optimization",
        "Author account setup",
      ],
      cta: "Get Started",
    },
    {
      name: "Standard",
      price: "$999",
      period: "one-time",
      badge: "Most Popular",
      features: [
        "Everything in Basic",
        "Print + eBook publishing",
        "IngramSpark distribution",
        "Barnes & Noble setup",
        "Keyword & category research",
        "A+ content page",
      ],
      cta: "Get Started",
    },
    {
      name: "Complete",
      price: "$1,999",
      period: "one-time",
      features: [
        "Everything in Standard",
        "40+ global retailer distribution",
        "Audio publishing (ACX)",
        "Author website setup",
        "Press release",
        "Dedicated publishing manager",
      ],
      cta: "Get Started",
    },
  ],
  Marketing: [
    {
      name: "Launch",
      price: "$799",
      period: "one-time",
      features: [
        "Social media announcement kit",
        "5 promotional graphics",
        "Amazon listing optimization",
        "Email announcement template",
        "Launch checklist",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "$1,799",
      period: "monthly",
      badge: "Most Popular",
      features: [
        "Everything in Launch",
        "30 days social media management",
        "AMS Amazon advertising setup",
        "Goodreads author profile",
        "2 blog posts per month",
        "Monthly performance report",
      ],
      cta: "Get Started",
    },
    {
      name: "Authority",
      price: "$3,499",
      period: "monthly",
      features: [
        "Everything in Growth",
        "Full PR campaign",
        "Podcast outreach (10 shows)",
        "Influencer review program",
        "Book trailer production",
        "Dedicated marketing manager",
      ],
      cta: "Get Started",
    },
  ],
};

const tabs = ["Writing", "Editing", "Publishing", "Marketing"] as const;

export default function PricingPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Writing");

  return (
    <PageLayout
      title="Pricing"
      description="Transparent pricing for professional ghostwriting, book editing, publishing, and marketing services — no hidden fees."
    >
      {/* Hero */}
      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/bg-cta.png')", backgroundSize: "cover" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gold font-bold uppercase tracking-widest text-sm">Pricing</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif font-bold mt-3 max-w-3xl mx-auto">
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-300 mt-5 max-w-xl mx-auto text-lg">
            No hidden fees. No surprises. Just professional services at fair prices.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-4 bg-white sticky top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-colors ${active === tab ? "bg-gold text-navy" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                {tab} Packages
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PACKAGES[active].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${plan.badge ? "ring-2 ring-gold" : ""}`}
              >
                {plan.badge && (
                  <div className="bg-gold text-navy text-xs font-bold uppercase tracking-widest text-center py-2">
                    ⭐ {plan.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-serif font-bold text-navy text-xl mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="text-4xl font-bold text-navy">{plan.price}</span>
                    <span className="text-gray-400 text-sm mb-1">/ {plan.period}</span>
                  </div>
                  <div className="w-12 h-1 bg-gold rounded-full mt-4 mb-6" />
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center font-bold py-3.5 rounded-md transition-colors ${plan.badge ? "bg-gold text-navy hover:bg-yellow-400" : "bg-navy text-white hover:bg-navy/90"}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { stat: "3,400+", label: "Satisfied Authors" },
              { stat: "100%", label: "Royalties Retained" },
              { stat: "4.9★", label: "Average Rating" },
              { stat: "10+", label: "Years Experience" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-serif font-bold text-gold">{s.stat}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-navy text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Need a Custom Package?</h2>
        <p className="text-navy/70 mb-8">Contact us and we'll build a custom publishing plan that fits your goals and budget.</p>
        <a href="/contact" className="inline-block bg-navy text-white font-bold px-10 py-4 rounded-md hover:bg-navy/90 transition-colors">
          Get A Custom Quote
        </a>
      </section>
    </PageLayout>
  );
}
