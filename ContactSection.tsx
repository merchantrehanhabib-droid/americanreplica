import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-24 bg-cream text-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Let's Get Started
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to turn your ideas into a published masterpiece? Reach out to our team of experts for a free consultation.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us 24/7</p>
                  <p className="font-bold text-lg">+1 (800) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="font-bold text-lg">info@americanbookfounders.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="font-bold text-lg">New York, NY, USA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-xl"
          >
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Full Name</label>
                  <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 h-12 focus-visible:ring-gold" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Phone Number</label>
                  <Input placeholder="+1 (555) 000-0000" className="bg-gray-50 border-gray-200 h-12 focus-visible:ring-gold" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 h-12 focus-visible:ring-gold" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your book idea..." 
                  className="bg-gray-50 border-gray-200 min-h-[120px] resize-none focus-visible:ring-gold"
                />
              </div>

              <Button type="submit" className="w-full bg-gold hover:bg-gold-hover text-navy font-bold h-14 text-lg">
                Submit Request
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
