import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetJothi from "@/components/MeetJothi";
import GalleryPreview from "@/components/GalleryPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F5F0]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MeetJothi />
        <GalleryPreview />
        <FinalCTA />
        <div className="h-[140px] bg-[#F8F5F0]" />
      </main>
      <Footer />
    </div>
  );
}