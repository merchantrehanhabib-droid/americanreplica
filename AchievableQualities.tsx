import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

export default function AchievableQualities() {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Do You Want Your Writing Qualities Achievable?
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Track your book's progress, communicate directly with your dedicated writing team, and review drafts seamlessly through our intuitive mobile application. Your masterpiece is always just a tap away.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-white hover:bg-gray-100 text-navy font-bold px-6 h-14 rounded-xl flex items-center gap-3">
                <Apple className="w-6 h-6" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] leading-none">Download on the</span>
                  <span className="text-sm leading-none">App Store</span>
                </div>
              </Button>
              
              <Button className="bg-white hover:bg-gray-100 text-navy font-bold px-6 h-14 rounded-xl flex items-center gap-3">
                <Play className="w-6 h-6" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] leading-none">GET IT ON</span>
                  <span className="text-sm leading-none">Google Play</span>
                </div>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl transform scale-75 -z-10 translate-x-20" />
            <img 
              src={phoneMockup} 
              alt="App Preview" 
              className="w-full max-w-sm h-auto relative z-10 transform -rotate-12 hover:-rotate-6 transition-transform duration-500" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
