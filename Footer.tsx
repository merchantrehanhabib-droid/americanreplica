import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center overflow-hidden">
                <div className="w-5 h-5 bg-gold rotate-45 transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight text-white">American Book</span>
                <span className="font-sans text-xs font-semibold tracking-widest text-gold uppercase leading-none">Founders</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Premium ghostwriting, editing, and publishing services helping authors share their voice with the world and retain 100% of their royalties.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-serif">Services</h4>
            <ul className="space-y-3">
              {['Ghostwriting', 'Book Editing', 'Cover Design', 'Publishing', 'Book Marketing', 'Audiobook Production'].map((link) => (
                <li key={link}>
                  <Link href="/" className="hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-serif">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Process', 'Portfolio', 'Testimonials', 'Pricing', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="/" className="hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-serif">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for writing tips, publishing insights, and exclusive offers.
            </p>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <Input 
                placeholder="Email Address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 h-12 focus-visible:ring-gold"
              />
              <Button className="w-full bg-gold hover:bg-gold-hover text-navy font-bold h-12 gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2024 American Book Founders. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
