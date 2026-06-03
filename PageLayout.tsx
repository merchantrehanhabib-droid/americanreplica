import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ChatPopup from "@/components/ui/ChatPopup";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: Props) {
  useEffect(() => {
    if (title) document.title = `${title} | American Book Founders`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
      <ChatPopup />
    </div>
  );
}
