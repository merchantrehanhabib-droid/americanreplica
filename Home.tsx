import React from "react";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ConcernedQuality from "@/components/sections/ConcernedQuality";
import YellowBanner from "@/components/sections/YellowBanner";
import PremiumProduction from "@/components/sections/PremiumProduction";
import ThreeSteps from "@/components/sections/ThreeSteps";
import ManuscriptsGallery from "@/components/sections/ManuscriptsGallery";
import GenreSection from "@/components/sections/GenreSection";
import NeedAWayOut from "@/components/sections/NeedAWayOut";
import Process from "@/components/sections/Process";
import WorkWithYou from "@/components/sections/WorkWithYou";
import Testimonials from "@/components/sections/Testimonials";
import StatsBar from "@/components/sections/StatsBar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ChatPopup from "@/components/ui/ChatPopup";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ConcernedQuality />
      <YellowBanner />
      <PremiumProduction />
      <ThreeSteps />
      <ManuscriptsGallery />
      <GenreSection />
      <NeedAWayOut />
      <Process />
      <WorkWithYou />
      <Testimonials />
      <StatsBar />
      <ContactSection />
      <Footer />
      <FloatingCTA />
      <ChatPopup />
    </main>
  );
}
