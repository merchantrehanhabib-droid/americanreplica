import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

type DropdownItem = { label: string; href: string };
type NavItem = {
  label: string;
  href?: string;
  dropdown?: { heading?: string; items: DropdownItem[] }[];
};

const NAV: NavItem[] = [
  {
    label: "About Us",
    dropdown: [
      {
        items: [
          { label: "Our Story", href: "/about/our-story" },
          { label: "Our Team", href: "/about/our-team" },
          { label: "Why Choose Us", href: "/about/why-choose-us" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Awards & Recognition", href: "/about/awards" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Services",
    dropdown: [
      {
        heading: "Book Writing",
        items: [
          { label: "Ghost Writing", href: "/services/ghost-writing" },
          { label: "Book Writing", href: "/services/book-writing" },
          { label: "Memoir Writing", href: "/services/memoir-writing" },
          { label: "Biography Writing", href: "/services/biography-writing" },
          { label: "Children's Book Writing", href: "/services/childrens-book-writing" },
        ],
      },
      {
        heading: "Book Editing",
        items: [
          { label: "Proofreading", href: "/services/proofreading" },
          { label: "Copy Editing", href: "/services/copy-editing" },
          { label: "Developmental Editing", href: "/services/developmental-editing" },
          { label: "Book Formatting", href: "/services/book-formatting" },
        ],
      },
      {
        heading: "Publishing",
        items: [
          { label: "Self Publishing", href: "/services/self-publishing" },
          { label: "eBook Publishing", href: "/services/ebook-publishing" },
          { label: "ISBN & Copyright", href: "/services/isbn-copyright" },
          { label: "Print-on-Demand", href: "/services/print-on-demand" },
        ],
      },
      {
        heading: "Book Marketing",
        items: [
          { label: "Author Website", href: "/services/author-website" },
          { label: "Book Cover Design", href: "/services/book-cover-design" },
          { label: "Social Media Marketing", href: "/services/social-media-marketing" },
          { label: "Book Trailer", href: "/services/book-trailer" },
          { label: "Audiobook Production", href: "/services/audiobook-production" },
        ],
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Pricing",
    dropdown: [
      {
        items: [
          { label: "Writing Packages", href: "/pricing/writing" },
          { label: "Editing Packages", href: "/pricing/editing" },
          { label: "Publishing Packages", href: "/pricing/publishing" },
          { label: "Marketing Packages", href: "/pricing/marketing" },
          { label: "Combo Packages", href: "/pricing/combo" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({ groups }: { groups: NonNullable<NavItem["dropdown"]> }) {
  const isWide = groups.length > 1;
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white shadow-2xl border-t-4 border-gold rounded-b-xl z-50 py-6 px-6 ${
        isWide ? "w-[780px] grid grid-cols-4 gap-x-6" : "w-56"
      }`}
    >
      {groups.map((group, gi) => (
        <div key={gi}>
          {group.heading && (
            <p className="text-gold text-[11px] font-bold uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">
              {group.heading}
            </p>
          )}
          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm text-gray-700 hover:text-gold hover:pl-1.5 transition-all py-1 leading-snug"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* ── Desktop bar ── */}
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 h-10 bg-navy rounded flex items-center justify-center overflow-hidden">
            <div className="w-5 h-5 bg-gold rotate-45 transform group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-tight text-navy">American Book</span>
            <span className="font-sans text-xs font-semibold tracking-widest text-gray-500 uppercase leading-none">Founders</span>
          </div>
        </Link>

        {/* Desktop nav items */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              {item.dropdown ? (
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    open === item.label ? "text-gold" : "text-gray-700 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${open === item.label ? "rotate-180 text-gold" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href!}
                  className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gold rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )}
              {item.dropdown && open === item.label && (
                <DropdownMenu groups={item.dropdown} />
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+18005550199" className="flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            +1 (800) 555-0199
          </a>
          <a
            href="#contact"
            className="bg-gold hover:bg-yellow-400 text-navy font-bold text-sm px-5 py-3 rounded-md shadow-[0_4px_14px_0_rgba(245,197,24,0.35)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Contact With Our Expert
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-bold text-navy hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180 text-gold" : ""}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-2 space-y-3">
                        {item.dropdown.map((group, gi) => (
                          <div key={gi}>
                            {group.heading && (
                              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mt-3 mb-1">
                                {group.heading}
                              </p>
                            )}
                            {group.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1.5 px-2 text-sm text-gray-600 hover:text-gold transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-sm font-bold text-navy hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href="tel:+18005550199"
                className="flex items-center justify-center gap-2 w-full border-2 border-navy text-navy font-bold text-sm py-3 rounded-md"
              >
                <Phone className="w-4 h-4" />
                +1 (800) 555-0199
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center w-full bg-gold text-navy font-bold text-sm py-3 rounded-md"
              >
                Contact With Our Expert
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
